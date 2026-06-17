# Paced: One Codebase, Every Platform



<div class="store-buttons">
  <a href="https://apps.apple.com/gb/app/paced/id6751472381" target="_blank" rel="noopener noreferrer">
    <img src="/images/apple-store/DownloadAppStore.svg" alt="Download on the App Store" class="h-10 w-auto" />
  </a>
  <a href="https://play.google.com/store/apps/details?id=app.paced.samuelmf&hl=en_GB" target="_blank" rel="noopener noreferrer">
    <img src="/images/play-store/DownloadPlay.svg" alt="Get it on Google Play" class="h-10 w-auto" />
  </a>
  <a href="https://github.com/samumartinf/habitai/releases/latest" target="_blank" rel="noopener noreferrer" class="desktop-download">
    Download for Linux · macOS · Windows
  </a>
</div>

I don't like any task management app on the App Store. I also think habits are just recurring tasks — same thing, different cadence. And no task app I've used syncs reliably across phone, laptop, and iPad.

So I built my own. And then I made it run *natively* everywhere.

## One codebase, six platforms

This is the thing I'm most proud of. Paced is a single SvelteKit codebase that compiles to:

- **iOS** — native app via Tauri v2, on the App Store
- **Android** — native app via Tauri v2, on Google Play
- **Linux** — native desktop app (.deb, .AppImage)
- **macOS** — native desktop app (.dmg)
- **Windows** — native desktop app (.msi)
- **Web** — PWA that installs to home screen

One `pnpm build`. Six targets. No React Native shim, no Electron, no maintaining separate codebases. Tauri v2 handles the native shell on every platform — same Rust backend, same Svelte frontend.

**Try it:** [paced.app](https://paced.app) · [App Store](https://apps.apple.com/gb/app/paced/id6751472381) · [Google Play](https://play.google.com/store/apps/details?id=app.paced.samuelmf&hl=en_GB) · [Desktop downloads](https://github.com/samumartinf/habitai/releases/latest)

## What it does

- **Habits** with streaks, completion goals, and progress tracking
- **Tasks** organized by project, priority, and due date. Kanban boards included
- **Real-time sync** across all your devices. Update on your phone, see it on your laptop instantly
- **Works offline.** Service workers handle local persistence. Changes sync when you're back online
- **No feature swamp.** Just what you need

## Tech choices

**Svelte 5 with runes.** Reactivity without the boilerplate. Smaller bundles than React, faster loading on bad connections — important when your app needs to work everywhere.

**Tauri v2.** This is the secret sauce. A lightweight Rust shell wraps the web frontend into a native app on every platform. No Electron (no Chromium blob, no 200MB downloads). The Linux binary is under 10MB. iOS and Android use the platform's native WebView. One codebase, truly native everywhere.

**PocketBase.** Backend-as-a-file. SQLite under the hood, real-time subscriptions out of the box. When you mark a task done on your phone, your laptop sees it instantly — no polling, no WebSocket boilerplate. PocketBase handles auth, file storage, and database migrations in a single Go binary. Deploy it anywhere.

**Offline-first from the start.** This was the right call. Retrofitting offline support is a nightmare. Service workers, local IndexedDB, conflict resolution — all planned from day one.

## What was hard

- **Tauri mobile builds.** Getting iOS and Android to compile from the same Rust codebase took weeks of CI iteration. Code signing on Apple's side is its own circle of hell.
- **Service workers across browsers.** Safari does things differently from Chrome. Caching strategies that work everywhere took trial and error.
- **Timezone handling.** Habits reset at midnight. But whose midnight? What if you travel? JavaScript's `Date` is not your friend.
- **Real-time conflict resolution.** Two devices edit the same task while offline. Last-write-wins is lazy. I went with field-level merging — harder to implement, but you lose less data.

## What I'd do differently

- **Build mobile layout first.** I did desktop-first and had to rework several components. The mobile experience is what matters most — start there.
- **E2E tests earlier.** Playwright caught bugs unit tests never would. Should have set it up in week one.
- **Simplify auth.** Custom JWT worked but PocketBase's built-in auth would have saved time. I migrated later.

## Deployment

PocketBase runs on a Hetzner VPS behind Coolify. The PWA is served as a SvelteKit static build. Desktop and mobile builds are compiled via GitHub Actions and uploaded to releases. App Store and Play Store submissions are manual (for now).

Total cost: about €5/month. No serverless cold starts, no vendor lock-in.

---

**[paced.app →](https://paced.app)**  ·  **[Source →](https://github.com/samumartinf/habitai)**
