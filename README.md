# Shuyi Liang Personal Homepage

This repository contains the static GitHub Pages homepage for `Fightforql.github.io`.

## Preview

Open `index.html` directly, or run:

```powershell
python -m http.server 8000
```

Then visit `http://127.0.0.1:8000/`.

## Notes

- SLAIR resources link to the [ECCV paper PDF](https://media.eventhosts.cc/Conferences/ECCV2026/pdfs/5798.pdf) and [code repository](https://github.com/Fightforql/SLAIR).
- Profile image: `assets/images/profile.jpg`
- Main content: `index.html`
- Visual style: `styles.css`

## Transparency

In `styles.css`, adjust `--surface-opacity` (currently `0.20`) for the photo frame and publication background, and `--portrait-opacity` (currently `0.85`) for the photo. Values range from `0` (transparent) to `1` (opaque); text stays fully opaque.
