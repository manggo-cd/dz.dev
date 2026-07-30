import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Redis } from "@upstash/redis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "suggestions.json");
const KEY = "suggestions";

// Vercel's Upstash Redis integration injects either KV_* or UPSTASH_* env vars.
const REDIS_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

function getRedis() {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  return new Redis({ url: REDIS_URL, token: REDIS_TOKEN });
}

async function saveToFile(entry: unknown) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  let list: unknown[] = [];
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) list = parsed;
  } catch {
    // no file yet — start fresh
  }
  list.push(entry);
  await fs.writeFile(FILE, JSON.stringify(list, null, 2));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const song = String(body?.song ?? "").trim();
    const from = String(body?.from ?? "").trim();

    if (!song) {
      return NextResponse.json({ error: "empty" }, { status: 400 });
    }
    if (song.length > 500 || from.length > 120) {
      return NextResponse.json({ error: "too_long" }, { status: 400 });
    }

    const entry = {
      song,
      from: from || null,
      at: new Date().toISOString(),
    };

    const redis = getRedis();
    if (redis) {
      await redis.lpush(KEY, JSON.stringify(entry));
    } else {
      await saveToFile(entry);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
