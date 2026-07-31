# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Setup

```bash
bundle install
npm install
npm install -g gulp
```

## Dev Server

The dev workflow runs two processes in parallel: Jekyll watches for file changes and rebuilds to `_site/`, while Gulp's BrowserSync serves `_site/` with live reload.

```bash
gulp          # runs jekyll build --watch and BrowserSync in parallel
```

Or run them separately in two terminals:
```bash
bundle exec jekyll build --watch   # terminal 1
gulp serve                         # terminal 2
```

Site is served on port 4002 (configured in `_config.yml`). BrowserSync does not auto-open a browser.

## Architecture

This is a **Jekyll static site** for Hakomi House of Ashland, Oregon — a mindfulness-based therapy training center.

**Content pages** (`.md` files in root): `index.md`, `about.md`, `schedule.md`, `program.md` — these use Jekyll front matter with `layout: page`.

**Build pipeline**: Jekyll processes Markdown + Liquid templates → outputs to `_site/`. Gulp watches `_site/**/*.*` and triggers BrowserSync reload on any change.

**Theme**: `minima` (GitHub Pages compatible). Jekyll compiles only `assets/main.scss` (the file with front matter that does `@import "minima"`). The bulk of the custom styles live in `_sass/minima/_layout.scss`, with variables/imports in `_sass/minima.scss`. `assets/main.scss` itself holds only a few small page-level rules (`.post-title`, `img`, `figure`). Note: a file named `_assets/main.scss` is NOT in the sass load path and would be ignored — do not create one.

**Navigation**: Controlled by `header_pages` in `_config.yml` — currently `index.md`, `about.md`, `schedule.md`.

**Deployment**: Targets `https://hakomihouse.org` (CNAME file present). The `github-pages` gem (`~> 232`) is used rather than standalone Jekyll, so gem versions are constrained by GitHub Pages compatibility.
