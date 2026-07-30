"""
Regenerate the home hero assets. Run from mockups/assets:  python3 _assets.py

- cyber6-tight.png : clean rectangular crop of `image copy 6` (bright original).
                     Used on the LIGHT theme, where it melts into the light bg.
- cyber6-duo.png   : same crop mapped to a dark cyber duotone (highlights crushed
                     so the white paper stops glaring). Used on the DARK theme,
                     where it dissolves into the bg like v3's phase.png. (v10)
- cyber-eye.png    : `image copy 3` (dark cyber eye, △○✕□ reflected) with the
                     PS2 wording cropped off. Naturally dark. (v11 variant)
"""
import numpy as np
from PIL import Image

SRC = "cyber6.png"            # == assets/image copy 6.png (hi-res working copy)
EYE = "../../assets/image copy 3.png"

g = Image.open(SRC).convert("RGB").crop((0, 0, 700, 1536))   # drop the 周 mark
g.save("cyber6-tight.png")

arr = np.asarray(g).astype(np.float32) / 255
L = 0.2126 * arr[..., 0] + 0.7152 * arr[..., 1] + 0.0722 * arr[..., 2]
Lp = np.clip(L, 0, 1) ** 1.6                      # crush highlights -> kill white glare
shadow = np.array([8, 12, 22]) / 255
hi = np.array([88, 178, 205]) / 255               # moderate cyan (not white)
duo = shadow[None, None, :] + (hi - shadow)[None, None, :] * Lp[..., None]
Image.fromarray((np.clip(duo, 0, 1) * 255).astype(np.uint8)).save("cyber6-duo.png")

e = Image.open(EYE).convert("RGB")
e.crop((0, 0, e.size[0], int(e.size[1] * 0.72))).save("cyber-eye.png")  # top 72% = no PS2 text

print("wrote cyber6-tight.png, cyber6-duo.png, cyber-eye.png")
