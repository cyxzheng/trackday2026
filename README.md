# YVRGRC Website

Static GitHub Pages site for `https://yvrgrc.ca/`.

## This Repo's Role

This repo is the canonical source for the YVRGRC website. It currently hosts a simple root landing page plus standalone static sections:

- `/` - simple YVRGRC landing page
- `/trackday2026/` - Track Day 2026 event page
- `/announcements/` - club announcements

The custom domain is configured by `CNAME` and should remain:

```text
yvrgrc.ca
```

## Structure

The site is intentionally plain HTML, CSS, and vanilla JavaScript with no build step:

```text
index.html
CNAME
trackday2026/
  index.html
  styles.css
  script.js
  assets/
announcements/
  index.html
  say-phin-lim.html
  styles.css
  assets/
```

## Public URLs

- `https://yvrgrc.ca/`
- `https://yvrgrc.ca/trackday2026/`
- `https://yvrgrc.ca/announcements/`
- `https://yvrgrc.ca/announcements/say-phin-lim.html`

## Track Day Content

Event content stays centralized in [`trackday2026/script.js`](/Users/calvinzheng/Documents/Projects/Code/trackday2026/trackday2026/script.js), inside the `eventContent` object.

For thumbnail audio, edit `eventContent.overviewAudio`:

- Set `src` to your audio file path inside `trackday2026/assets/` (for example `assets/audio/theme.mp3`).
- Keep `src: ""` to hide the unmute button.
- `buttonLabels`, `loop`, and `initialVolume` are optional.

## Announcements Content

The announcements section is a static bundle under `announcements/`. Add new announcement pages beside `say-phin-lim.html`, then link them from `announcements/index.html`.
