"""Likwiid wordmark built from Mona Sans glyph outlines (OFL-1.1).

Letters come from Mona Sans (google/fonts ofl/monasans, MonaSans[wdth,wght].ttf) instantiated
at a fixed weight; both i dots are replaced by the brand droplet.

  python3 monasans.py            render variant sheet + chosen PNGs into this folder
  python3 monasans.py --json     print the chosen wordmark/mark geometry as JSON
"""
import json
import os
import subprocess
import sys

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

OUT = os.path.dirname(os.path.abspath(__file__))
VF = os.path.join(OUT, "fonts", "MonaSans-VF.ttf")
S = 0.2  # font units -> svg units (1000 upm -> 200)

_cache = {}


def font(wght, wdth=100):
    key = (wght, wdth)
    if key not in _cache:
        f = TTFont(VF)
        _cache[key] = instancer.instantiateVariableFont(f, {"wght": wght, "wdth": wdth})
    return _cache[key]


def num(v):
    s = f"{v:.1f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s


class RoundPen(SVGPathPen):
    def __init__(self, gs):
        super().__init__(gs, ntos=num)


def droplet(cx, cy, r, tipk=1.95):
    """Same droplet geometry as the original Logo.tsx: round belly, pointed tip upwards (svg y down)."""
    tip = cy - tipk * r
    k = tipk / 1.95
    return (
        f"M{num(cx)} {num(tip)}"
        f"C{num(cx + 0.18 * r)} {num(tip + 0.62 * r * k)} {num(cx + r)} {num(cy - 0.62 * r * k)} {num(cx + r)} {num(cy)}"
        f"A{num(r)} {num(r)} 0 0 1 {num(cx - r)} {num(cy)}"
        f"C{num(cx - r)} {num(cy - 0.62 * r * k)} {num(cx - 0.18 * r)} {num(tip + 0.62 * r * k)} {num(cx)} {num(tip)}Z"
    ), tip


def glyph_path(gs, name, dx, top):
    pen = RoundPen(gs)
    # font y-up -> svg y-down; x offset in font units
    tp = TransformPen(pen, (S, 0, 0, -S, dx * S, top * S))
    gs[name].draw(tp)
    return pen.getCommands()


def wordmark(p):
    f = font(p["wght"])
    gs = f.getGlyphSet()
    cmap = f.getBestCmap()
    hmtx = f["hmtx"]
    names = [cmap[ord(c)] for c in "lıkwııd"]
    asc = 729.0
    # dotless i stem
    bp = BoundsPen(gs)
    gs[cmap[0x131]].draw(bp)
    sx0, _, sx1, xh = bp.bounds
    stem = sx1 - sx0
    r = p["dr"] * stem / 2
    gap = p["dgap"]
    cy_font = xh + gap + r  # droplet centre (font units, y up)
    tip_font = cy_font + p.get("tipk", 1.95) * r
    top = max(asc, tip_font)

    # x positions (font units)
    lsb_l = hmtx[names[0]][1]
    x = -lsb_l
    pairs = p.get("pairs", {})
    track = p.get("track", 0)
    paths, drops = [], []
    for idx, n in enumerate(names):
        if idx:
            x += track + pairs.get(idx, 0)
        paths.append(glyph_path(gs, n, x, top))
        if n == cmap[0x131]:
            cx = x + (sx0 + sx1) / 2
            d, _ = droplet(cx * S, (top - cy_font) * S, r * S, p.get("tipk", 1.95))
            drops.append(d)
        adv = hmtx[n][0]
        if idx == len(names) - 1:
            bpd = BoundsPen(gs)
            gs[n].draw(bpd)
            right = x + bpd.bounds[2]
            bottom = -bpd.bounds[1]
        x += adv
    w = right * S
    h = (top + max(bottom, 0)) * S
    return dict(letters="".join(paths), drops="".join(drops), w=w, h=h, stem=stem * S, r=r * S)


def mark(p):
    """Square mark: two Mona Sans dotless i stems (shortened) with droplets, centred in 64x64.

    Stem width, droplet size, droplet gap and stem spacing keep the wordmark's ratios; only the
    stem height is shortened so the pair sits in a square.
    """
    f = font(p["wght"])
    gs = f.getGlyphSet()
    cmap = f.getBestCmap()
    n = cmap[0x131]
    bp = BoundsPen(gs)
    gs[n].draw(bp)
    sx0, _, sx1, xh = bp.bounds
    stem_u = sx1 - sx0
    sw = p["mark_stem"]
    k = sw / stem_u
    lsb, adv = f["hmtx"][n][1], f["hmtx"][n][0]
    gapx = (adv - stem_u + p.get("track", 0)) * k  # same stem-to-stem gap as "ii" in the wordmark
    gapx = 4 * round(gapx / 4)  # keeps both stems on the 32px pixel grid (1 px = 2 units)
    r = p["dr"] * sw / 2
    sgap = p["dgap"] * k
    stem_h = p["mark_stem_h"]
    tipk = p.get("tipk", 1.95)
    total_h = stem_h + sgap + r + tipk * r
    top = (64 - total_h) / 2
    base = round(top + total_h)
    total_w = 2 * sw + gapx
    x0 = round((64 - total_w) / 2)
    stems, drops = [], []
    for i in range(2):
        left = x0 + i * (sw + gapx)
        stems.append(f"M{num(left)} {num(base)}V{num(base - stem_h)}H{num(left + sw)}V{num(base)}Z")
        cx = left + sw / 2
        cy = base - stem_h - sgap - r
        drops.append(droplet(cx, cy, r, tipk)[0])
    return dict(stems="".join(stems), drops="".join(drops))


def svg_wordmark(wm, fg="currentColor", accent="#06B6D4", bg=None, pad=0):
    W, H = wm["w"] + 2 * pad, wm["h"] + 2 * pad
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{num(-pad)} {num(-pad)} {num(W)} {num(H)}">']
    if bg:
        out.append(f'<rect x="{num(-pad)}" y="{num(-pad)}" width="{num(W)}" height="{num(H)}" fill="{bg}"/>')
    out.append(f'<path d="{wm["letters"]}" fill="{fg}"/>')
    out.append(f'<path d="{wm["drops"]}" fill="{accent}"/>')
    out.append("</svg>")
    return "".join(out)


def svg_mark(mk, fg, accent, bg=None, radius=0):
    out = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">']
    if bg:
        out.append(f'<rect width="64" height="64" rx="{radius}" fill="{bg}"/>')
    out.append(f'<path d="{mk["stems"]}" fill="{fg}"/><path d="{mk["drops"]}" fill="{accent}"/></svg>')
    return "".join(out)


MODES = (("light", "#1A1A2E", "#0E7490", "#FAFBFC"), ("dark", "#E8EAF0", "#06B6D4", "#0F1115"))

VARIANTS = {
    "a": dict(wght=600, dr=1.0, dgap=70, track=-12),
    "b": dict(wght=650, dr=1.0, dgap=64, track=-14),
    "c": dict(wght=700, dr=1.0, dgap=62, track=-16),
    "d": dict(wght=650, dr=0.94, dgap=58, track=-14, tipk=1.7),
}

CHOSEN = dict(wght=650, dr=1.0, dgap=64, track=-14, pairs={3: 10}, mark_stem=12, mark_stem_h=32)


def rsvg(svg_path, png, w=None, h=None):
    args = ["rsvg-convert"]
    if w:
        args += ["-w", str(w)]
    if h:
        args += ["-h", str(h)]
    subprocess.run(args + [svg_path, "-o", png], check=True)


def render(name, p):
    wm = wordmark(p)
    for mode, fg, acc, bg in MODES:
        sp = os.path.join(OUT, f"monasans-{name}-{mode}.svg")
        open(sp, "w").write(svg_wordmark(wm, fg, acc, bg, pad=30))
        rsvg(sp, os.path.join(OUT, f"monasans-{name}-{mode}.png"), w=1200)
        rsvg(sp, os.path.join(OUT, f"monasans-{name}-{mode}-32.png"), h=32)
    return wm


if __name__ == "__main__":
    if "--json" in sys.argv:
        wm = wordmark(CHOSEN)
        print(json.dumps(dict(wordmark=wm, mark=mark(CHOSEN)), indent=1))
        sys.exit()
    which = sys.argv[1:] or list(VARIANTS)
    for k in which:
        p = VARIANTS[k] if k in VARIANTS else CHOSEN
        wm = render(k, p)
        print(k, "w", num(wm["w"]), "h", num(wm["h"]), "stem", num(wm["stem"]), "r", num(wm["r"]))
