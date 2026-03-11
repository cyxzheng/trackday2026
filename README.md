# YVRGRC Track Day Page

Simple static event page for a track day.

## This Repo's Role

This repo is the event subpage bundle.

The current file structure is already safe to host under a subpath because all local CSS, JS, font, image, and document references are relative:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

That means these files can be copied directly into a `trackday2026/` folder inside your main GitHub Pages site repo.

## Target GitHub Pages Structure

Your custom domain should be attached to the root Pages site for `yvrgrc.ca`.

That site repo should look like this:

```text
index.html
trackday2026/
  index.html
  styles.css
  script.js
  assets/
```

## Root Landing Page

Use this as the root `index.html` for `https://yvrgrc.ca/`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>YVRGRC</title>
  </head>
  <body>
    <main>
      <h1>YVRGRC</h1>
      <p><a href="/trackday2026/">Track Day 2026</a></p>
    </main>
  </body>
</html>
```

## Move Steps

1. Create or use the GitHub Pages repo that serves `yvrgrc.ca`.
2. Add the simple landing page above as the root `index.html`.
3. Create a `trackday2026/` folder in that repo.
4. Copy these items from this repo into `trackday2026/`:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/`
5. Publish that root repo with the custom domain `yvrgrc.ca`.

## Editable Content

Event content stays centralized in [`trackday2026/script.js`](/Users/calvinzheng/Documents/Projects/Code/trackday2026/trackday2026/script.js), inside the `eventContent` object.

For thumbnail audio, edit `eventContent.overviewAudio`:

- Set `src` to your audio file path inside `trackday2026/assets/` (for example `assets/audio/theme.mp3`).
- Keep `src: ""` to hide the unmute button.
- `buttonLabels`, `loop`, and `initialVolume` are optional.
