# AI Creator portfolio — Higgsfield application

A one-page, bilingual (EN/RU) portfolio site to showcase Higgsfield-made work for an **AI Creator** application.

## Structure

```
index.html      — page markup (all text lives here, wrapped in .en / .ru spans)
css/style.css   — dark, cinematic styling, fully responsive
js/script.js    — gallery data (WORKS array), lightbox, filters, language + mobile nav
images/         — your photos + video thumbnails (see images/README.md)
video/          — your video clips (see video/README.md)
```

## 1. Personalize the text

Open `index.html` and replace the placeholders:

- `YOUR NAME` in the header logo
- `[Your Name]` / `[Ваше имя]` in the About and Footer sections
- `[Ваш город / Your city]` in the About facts list
- `your.email@example.com` and the social links (`Instagram`, `TikTok`, `X / Twitter`, `Behance`) in the Contact section — replace the `href="#"` with your real profile URLs

## 2. Add your work

1. Drop your images into `/images` and videos into `/video` using the filenames listed in each folder's `README.md` (or your own names).
2. Open `js/script.js` and edit the `WORKS` array — each entry needs `type` (`"image"` or `"video"`), `src`, a `poster` (videos only), bilingual `title_en`/`title_ru`, `desc_en`/`desc_ru`, and `tags`.
3. Add or remove entries freely — the gallery, filters and lightbox all render from this array automatically.

Until a real file exists at the given path, that card shows a dashed "file missing" placeholder telling you exactly what to add — nothing breaks.

## 3. Preview locally

Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 4. Deploy

Easiest option — GitHub Pages:

1. Push this branch (or merge it into `main`).
2. In the repo: **Settings → Pages → Source** → select the branch and `/ (root)`.
3. GitHub will publish the site at `https://<username>.github.io/<repo>/`.

No build step, no dependencies — it's plain HTML/CSS/JS.
