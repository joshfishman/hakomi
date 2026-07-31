# Editing the Hakomi House website

This site is a [Jekyll](https://jekyllrb.com/) site hosted on **GitHub Pages**. You can edit
every page directly on GitHub in your browser — no software to install. When you commit a change
to the `main` branch, GitHub automatically rebuilds and publishes the site to
**https://hakomihouse.org**, usually within **1–2 minutes**.

> You do **not** need to run any build command for changes to go live. Committing on GitHub is
> the "rebuild." (Building locally, described at the end, is only for previewing before you commit.)

---

## The pages you'll usually edit

Each page is a file in the top level of the repository. The `.md` extension means Markdown, but
these files also contain some HTML for layout.

| Page on the site | File to edit | URL |
|---|---|---|
| Home | `index.md` | `/` |
| About | `about.md` | `/about/` |
| Program schedule, dates & tuition | `schedule.md` | `/hakomi-house-schedule/` |
| Movements of Love | `movements-of-love.md` | `/movements-of-love/` |
| Training Team | `team.md` | `/team/` |
| Program Expectations | `program.md` | `/program-expectations/` |
| Top navigation menu | `_includes/header.html` | (appears on every page) |
| Footer (email, phone, logo) | `_includes/footer.html` | (appears on every page) |

**Every page starts with "front matter"** — a block fenced by `---` lines at the very top, e.g.:

```yaml
---
layout: page
title: About
permalink: /about/
---
```

Leave that block in place. Edit the content **below** it.

---

## How to edit a page on GitHub

1. Go to the repository: **https://github.com/joshfishman/hakomi**
2. Click the file you want to change (e.g. `schedule.md`).
3. Click the **pencil icon** (✏️ "Edit this file") near the top right.
4. Make your changes in the editor.
5. Scroll down to **Commit changes**. Add a short description of what you changed.
6. Make sure **"Commit directly to the `main` branch"** is selected, then click **Commit changes**.
7. Wait 1–2 minutes, then reload https://hakomihouse.org to see it live. (See "Checking the
   build" below if it doesn't appear.)

---

## Common edits, with examples

### Change training dates (`schedule.md`)
Dates are list items inside `<ul class="dates">`. Edit the text between `<li>` and `</li>`:

```html
<ul class="dates">
  <li>August 28, 29, 30</li>
  <li>September 25, 26, 27</li>
</ul>
```

Add a date by copying a `<li>…</li>` line; remove one by deleting its line.

### Change tuition prices (`schedule.md`)
Prices live in the two lines under the **Tuition** heading and in the `<table>` rows. For a table
row, edit the text inside the `<td>…</td>` cells:

```html
<tr>
  <td>5 months, paid in advance</td>
  <td>$600</td>
  <td>$3,000</td>
</tr>
```

### Edit a bio or add a team member (`team.md`)
Each person is one `<div class="team-member">` block. To add someone, copy an entire block from
`<div class="team-member">` to its matching `</div>`, paste it, then change the photo, the name in
the `<h2>`, and the paragraphs:

```html
<div class="team-member">
  <div class="team-member-photo">
    <img src="/team/their-photo.jpeg" alt="Their Name">
  </div>
  <div class="team-member-bio">
    <h2>Their Name</h2>
    <p>Their bio…</p>
  </div>
</div>
```

### Change the menu (`_includes/header.html`)
Menu links are `<a class="page-link" href="…">Label</a>`. The **Programs** dropdown items are the
`<a>` links inside `<div class="nav-dropdown-menu …">`.

---

## Adding images

1. On GitHub, click **Add file → Upload files**.
2. Drag your image in. Put team headshots in the `team/` folder; other images can go in the top
   level. Commit.
3. Reference it in a page with a leading slash (the site root):
   ```html
   <img src="/my-photo.jpg" alt="Description">
   ```
   A photo uploaded to the `team/` folder is referenced as `/team/my-photo.jpg`.

Use web-friendly files (`.jpg` or `.png`) and reasonably sized images (roughly 1000–1600px wide is
plenty) so pages load quickly.

---

## Checking the build

Committing to `main` triggers an automatic build. To watch it or see errors:

1. In the repo, open the **Actions** tab.
2. The top run corresponds to your latest commit. A green check ✓ means it published; a red ✗ means
   the build failed (often a broken `---` front-matter block or unbalanced HTML tag).
3. If it failed, open the run to read the error, then fix the file and commit again.

**Undo a change:** open the **Commits** history, find the commit, and use GitHub's "Revert" option,
or just edit the file back and commit.

---

## Colors and layout (advanced)

The visual theme lives in the stylesheet partials under `_sass/`:

- `_sass/minima.scss` — color variables (background, text, brand/teal color).
- `_sass/minima/_layout.scss` — header, footer, nav, buttons, and page layout.

Editing these changes the look site-wide. The theme currently uses a cream background
(`#f5f0e8`), teal accents/headers (`#4F958B`), and red buttons (`#D63441`).

---

## Previewing locally before committing (optional)

You only need this if you want to see changes on your own computer before publishing. It requires
Ruby and the project tooling; see [`CLAUDE.md`](CLAUDE.md) for the full setup. In short:

```bash
bundle install      # one-time
gulp                # builds and serves at http://localhost:4002 with live reload
```

Otherwise, editing on GitHub and committing is all you need.
