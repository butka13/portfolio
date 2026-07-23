# /images — original source files

These are your **full-resolution originals** straight from Higgsfield (PNG/GIF, 19–22MB each).

The website does **not** load these directly — it loads optimized copies from `assets/thumb/`
and `assets/full/`. Keeping the originals here means you always have the source to
re-export or upscale from.

To add a new image to the site:
1. Put the original here.
2. Generate optimized `assets/thumb/<name>.jpg` + `assets/full/<name>.jpg`
   (see the root `README.md` → *Regenerating assets*).
3. Add an entry to the `WORKS` array in `js/script.js`.
