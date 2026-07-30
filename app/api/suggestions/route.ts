import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Redis } from "@upstash/redis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "suggestions.json");
const KEY = "suggestions";

const REDIS_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

// In prod you MUST set ADMIN_TOKEN. Locally it defaults to "dev-admin".
const ADMIN_TOKEN =
  process.env.ADMIN_TOKEN ?? (process.env.NODE_ENV !== "production" ? "dev-admin" : null);

function getRedis() {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  return new Redis({ url: REDIS_URL, token: REDIS_TOKEN });
}

type Entry = { song: string; from: string | null; at: string };

function coerce(v: unknown): Entry | null {
  const obj = typeof v === "string" ? safeParse(v) : v;
  if (obj && typeof obj === "object" && "song" in obj) return obj as Entry;
  return null;
}

function safeParse(s: string): unknown {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const key = req.headers.get("x-admin-key") ?? new URL(req.url).searchParams.get("key");
  if (!ADMIN_TOKEN || key !== ADMIN_TOKEN) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let list: Entry[] = [];
  const redis = getRedis();
  if (redis) {
    // stored newest-first via lpush
    const raw = await redis.lrange<unknown>(KEY, 0, -1);
    list = raw.map(coerce).filter((e): e is Entry => e !== null);
  } else {
    try {
      const parsed = JSON.parse(await fs.readFile(FILE, "utf8"));
      if (Array.isArray(parsed)) {
        list = parsed.map(coerce).filter((e): e is Entry => e !== null).reverse();
      }
    } catch {
      // no file yet
    }
  }

  return NextResponse.json({ suggestions: list, count: list.length });
}
