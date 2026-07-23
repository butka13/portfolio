# AI Creator portfolio — Higgsfield application

A one-page, bilingual (EN/RU) portfolio showcasing two bodies of Higgsfield work:

1. **Animated object characters** — Pixar-style 3D household objects with faces and emotion (images + video).
2. **AI fashion & ads** — photoreal model shots and a full clothing-store video ad.

## Structure

```
index.html          — page markup; all text lives here in .en / .ru spans
css/style.css       — dark cinematic theme, masonry gallery, responsive
js/script.js        — WORKS data + gallery, filters, lightbox, language, mobile nav
assets/
  thumb/<name>.jpg  — gallery card image     (long edge 900px, ~25–80KB)
  full/<name>.jpg   — lightbox image         (long edge 1600px)
  poster/<name>.jpg — video poster frame
  video/<name>.mp4  — web video clip
images/             — original full-res PNG/GIF source files (not loaded by the page)
video/              — original video source files
```

The page **only loads the optimized `assets/` versions** — the originals in `images/` and
`video/` are kept as source files. That's why the site stays fast even though the raw
PNGs are 19–22MB each.

## Personalize the text

Name (Ahmad Sabitbekov), country (Kazakhstan), email and GitHub are already filled in
from public profile data. Still to add in `index.html`, Contact section:

- The `Instagram` and `TikTok` links — replace each `href="#"` with your real profile URL,
  or delete the line if you don't want it shown.
- Optional: add your exact city to the "Based in" line in the About section.

## Add or change a work

1. Drop the new image into `images/` (or video into `video/`).
2. Regenerate the optimized assets — see **Regenerating assets** below — or just add a
   ready-made `thumb`, `full` (and `poster` + `mp4` for video) into `assets/` yourself.
3. Add an entry to the `WORKS` array in `js/script.js`:

   ```js
   { name: "char-fridge", cat: "character", type: "image",
     title_en: "...", title_ru: "...", desc_en: "...", desc_ru: "..." }
   ```
   - `cat`: `"character"` or `"fashion"` (drives the filter + badge)
   - `type`: `"image"` or `"video"`
   - `name`: the asset basename (without extension) used across `assets/*`

The gallery, filters and lightbox all render from this array automatically.

## Regenerating assets

Assets were generated with Python (Pillow) + ffmpeg (via `imageio-ffmpeg`):

```bash
pip install Pillow imageio-ffmpeg
# images  -> assets/thumb (900px) + assets/full (1600px), JPEG q80–84
# videos  -> copied to assets/video + a poster frame to assets/poster
```

See the commit history for the exact one-off scripts, or ask and they can be added as a
`scripts/build-assets.py` helper.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push this branch (or merge into `main`).
2. Repo **Settings → Pages → Source** → pick the branch and `/ (root)`.
3. Site publishes at `https://<username>.github.io/<repo>/`.

No build step, no dependencies — plain HTML/CSS/JS.
