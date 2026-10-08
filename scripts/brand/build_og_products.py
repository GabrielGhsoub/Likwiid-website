"""Open Graph cards for the product pages: public/og-direct.png and public/og-frame.png.

Text is drawn as outlines from the site's own font files (Mona Sans, Inter), so the
render does not depend on installed fonts. The Likwiid wordmark is reused from
public/og-image.svg. Needs: fonttools, brotli, uharfbuzz, pillow, imagequant, rsvg-convert, magick.

  python3 build_og_products.py /path/to/Likwiid-website [out_dir]
"""
import base64
import io
import os
import re
import subprocess
import sys
import tempfile

import imagequant
import uharfbuzz as hb
from PIL import Image
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

SITE = sys.argv[1] if len(sys.argv) > 1 else os.getcwd()
OUT = sys.argv[2] if len(sys.argv) > 2 else os.path.join(SITE, "public")
PUB = os.path.join(SITE, "public")
TMP = os.environ.get("OG_TMP") or tempfile.mkdtemp(prefix="og-")

BG, FG, SUB, MUTED, ACC, TEAL = "#0F1115", "#E8EAF0", "#A3ABB8", "#6B7280", "#06B6D4", "#0E7490"
W, H = 1200, 630


def num(v):
    s = f"{v:.1f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s


class Face:
    def __init__(self, path, **axes):
        self.tt = TTFont(path)
        buf = io.BytesIO()
        self.tt.flavor = None
        self.tt.save(buf)
        self.upem = self.tt["head"].unitsPerEm
        self.hbfont = hb.Font(hb.Face(buf.getvalue()))
        self.hbfont.set_variations(axes)
        self.gs = self.tt.getGlyphSet(location=axes)
        self.order = self.tt.getGlyphOrder()

    def path(self, text, size, tracking=0.0):
        """Shape with HarfBuzz (kerning on); return (svg path at origin baseline, advance width)."""
        buf = hb.Buffer()
        buf.add_str(text)
        buf.guess_segment_properties()
        hb.shape(self.hbfont, buf, {"kern": True, "liga": True})
        k = size / self.upem
        pen = SVGPathPen(self.gs, ntos=num)
        x = 0.0
        for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
            name = self.order[info.codepoint]
            self.gs[name].draw(TransformPen(pen, (k, 0, 0, -k, x + pos.x_offset * k, -pos.y_offset * k)))
            x += pos.x_advance * k + tracking
        return pen.getCommands(), x - tracking


MONA = Face(os.path.join(PUB, "fonts/MonaSans-Variable-latin.woff2"), wght=650)
INTER = Face(os.path.join(PUB, "fonts/Inter-Variable.woff2"), wght=400, opsz=32)
INTER_MED = Face(os.path.join(PUB, "fonts/Inter-Variable.woff2"), wght=500, opsz=14)

# Wordmark geometry from the existing OG card: 1 unit = 1/200 em of Mona Sans 650,
# droplet tip at y=0, baseline at y=159.8.
og = open(os.path.join(PUB, "og-image.svg")).read()
wm_paths = re.findall(r'<path d="([^"]+)" fill="(#E8EAF0|#06B6D4)"/>', og)
WM_LETTERS = next(d for d, c in wm_paths if c == FG)
WM_DROPS = next(d for d, c in wm_paths if c == ACC)
WM_W, WM_BASE, WM_EM = 576.0, 159.8, 200.0
WM_TRACK = -14 / 1000  # wordmark tracking, em


def screenshot(path, crop, width):
    """Trim the capture margins, resize to 2x the drawn width, embed as a JPEG data URI."""
    tmp = os.path.join(TMP, os.path.basename(path) + ".embed.jpg")
    subprocess.run(["magick", path, "-crop", crop, "+repage", "-resize", f"{width * 2}x", "-quality", "90", tmp], check=True)
    w, h = map(int, subprocess.run(["magick", "identify", "-format", "%w %h", tmp], capture_output=True, text=True, check=True).stdout.split())
    return "data:image/jpeg;base64," + base64.b64encode(open(tmp, "rb").read()).decode(), width * h / w


def card(product, lines, shot, crop, url_text):
    x0 = 80
    size = 112
    k = size / WM_EM
    wm_top = 118
    base1 = wm_top + WM_BASE * k
    base2 = base1 + size * 0.98
    prod_path, _ = MONA.path(product, size, tracking=WM_TRACK * size)

    hero_size, hero_lead = 40, 52
    hero_y = base2 + 82
    hero = []
    for i, line in enumerate(lines):
        p, _ = INTER.path(line, hero_size)
        hero.append(f'<path transform="translate({x0} {num(hero_y + i * hero_lead)})" d="{p}" fill="{SUB}"/>')

    url_path, _ = INTER_MED.path(url_text, 24, tracking=0.2)
    url_y = H - 74

    # Screenshot in a minimal browser frame on the right.
    cw = 552
    uri, ih = screenshot(shot, crop, cw)
    bar = 34
    ch = ih + bar
    cx = W - 56 - cw
    cy = (H - ch) / 2
    dots = "".join(
        f'<circle cx="{num(cx + 22 + i * 18)}" cy="{num(cy + bar / 2)}" r="5.5" fill="{c}"/>'
        for i, c in enumerate(("#3A3F4B", "#3A3F4B", "#3A3F4B"))
    )

    return f"""<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs>
    <radialGradient id="glow" cx="{num(cx + cw / 2)}" cy="{num(H / 2)}" r="520" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="{TEAL}" stop-opacity="0.42"/>
      <stop offset="1" stop-color="{TEAL}" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="frame"><rect x="{num(cx)}" y="{num(cy)}" width="{cw}" height="{num(ch)}" rx="14"/></clipPath>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="18"/>
      <feOffset dy="14"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.55"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="{W}" height="{H}" fill="{BG}"/>
  <rect width="{W}" height="{H}" fill="url(#glow)"/>
  <rect x="0" y="0" width="{W}" height="6" fill="{ACC}"/>
  <g transform="translate({x0} {wm_top}) scale({k:.4f})">
    <path d="{WM_LETTERS}" fill="{FG}"/>
    <path d="{WM_DROPS}" fill="{ACC}"/>
  </g>
  <path transform="translate({x0 - 2} {num(base2)})" d="{prod_path}" fill="{ACC}"/>
  {"".join(hero)}
  <path transform="translate({x0} {url_y})" d="{url_path}" fill="{MUTED}"/>
  <g filter="url(#shadow)">
    <rect x="{num(cx)}" y="{num(cy)}" width="{cw}" height="{num(ch)}" rx="14" fill="#1B1E25"/>
  </g>
  <g clip-path="url(#frame)">
    <rect x="{num(cx)}" y="{num(cy)}" width="{cw}" height="{bar}" fill="#1B1E25"/>
    {dots}
    <image x="{num(cx)}" y="{num(cy + bar)}" width="{cw}" height="{num(ih)}" preserveAspectRatio="xMidYMid slice" xlink:href="{uri}"/>
  </g>
  <rect x="{num(cx + 0.5)}" y="{num(cy + 0.5)}" width="{cw - 1}" height="{num(ch - 1)}" rx="13.5" fill="none" stroke="#2A2E38"/>
</svg>
"""


CARDS = {
    "og-direct": dict(
        product="Direct",
        lines=["Bookings that flow", "straight to you."],
        shot=os.path.join(PUB, "direct-demo-atelier-preview.jpg"),
        crop="1200x820+0+8",
        url_text="likwiid.com/direct",
    ),
    "og-frame": dict(
        product="Frame",
        lines=["A portfolio you own,", "down to the files."],
        shot=os.path.join(PUB, "frame-demo-ana-preview.jpg"),
        crop="1264x756+8+8",
        url_text="likwiid.com/frame",
    ),
}

for name, spec in CARDS.items():
    svg_path = os.path.join(TMP, f"{name}.svg")
    raw_png = os.path.join(TMP, f"{name}.raw.png")
    open(svg_path, "w").write(card(**spec))
    subprocess.run(["rsvg-convert", "-w", str(W), svg_path, "-o", raw_png], check=True)
    out = os.path.join(OUT, f"{name}.png")
    # Palette PNG via libimagequant keeps the photo and the glow clean at a small size.
    img = imagequant.quantize_pil_image(Image.open(raw_png).convert("RGBA"), dithering_level=1.0, max_quality=100, min_quality=85)
    img.save(out, optimize=True)
    print(name, os.path.getsize(out), "bytes")
