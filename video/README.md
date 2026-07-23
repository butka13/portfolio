# /video — original source files

These are your **original video clips** from Higgsfield (9:16, ~2–4MB each).

The website loads web copies from `assets/video/` (with poster frames in `assets/poster/`),
not these files directly — so the originals stay here as your source.

To add a new video to the site:
1. Put the original here.
2. Copy it to `assets/video/<name>.mp4` and export a poster frame to `assets/poster/<name>.jpg`
   (see the root `README.md` → *Regenerating assets*).
3. Add an entry to the `WORKS` array in `js/script.js` with `type: "video"`.
