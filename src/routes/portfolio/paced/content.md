# Paced: A Todo and Habit Tracker That Actually Works

I don't like any task management app on the App Store. I also think habits are just recurring tasks — same thing, different cadence. And no task app I've used syncs reliably across phone, laptop, and iPad. So I built my own.

**[Try Paced →](https://paced.app)**

## What it does

You open it, you see what you need to do today. Habits and tasks live side by side because they *are* the same thing — one just repeats.

- **Habits** with streaks, completion goals, and a progress view that doesn't lie to you
- **Tasks** organized by project, priority, and due date. Kanban if you want it
- **Works on everything.** Phone, laptop, iPad — same data, same UI, no surprises
- **Actually works offline.** Service workers handle local persistence. Syncs when you're back online
- **No feature swamp.** Just what you need. The app doesn't try to be Notion

## Why I built this

Existing task apps fail at exactly one thing: making sure your phone and laptop agree on what's due. You add something on your phone during a commute, open your laptop at work, and it's not there. Or it's there but the due date is wrong. Or sync broke because you went through a tunnel.

I wanted something where:
- I never have to think about whether it synced
- Habits and tasks aren't in separate universes
- The UI doesn't make me want to close it
- It works when I'm on the Tube

## Tech choices

**Svelte 5** with runes. Reactivity without the boilerplate. I picked this over React because the mental model is simpler and the bundle is smaller — important for a PWA that needs to load fast on bad connections.

**PostgreSQL + Drizzle ORM.** Type-safe queries from day one. No ORM magic, just SQL you can read.

**PWA, not a native app.** I didn't want to maintain three codebases. One SvelteKit app, installed to home screen on iOS and Android, works the same everywhere. The tradeoff is real — push notifications are harder, some native APIs aren't available — but for a task app, the cross-platform consistency is worth it.

**Offline-first from the start.** This was the right call. Retrofitting offline support into an app that wasn't designed for it is a nightmare. Service workers, local IndexedDB, conflict resolution — all planned from day one.

## What was hard

- **Service workers across browsers.** Safari does things differently from Chrome. Always has. Caching strategies that work everywhere took weeks to get right.
- **Timezone handling.** Habits reset at midnight. But whose midnight? What if you travel? JavaScript's `Date` is not your friend here.
- **Conflict resolution.** Two devices edit the same task while offline. Last-write-wins is the lazy answer. I went with field-level merging, which is harder but loses less data.
- **PWA install UX.** Apple makes "Add to Home Screen" deliberately obscure. Making that flow feel native took way more design iteration than I expected.

## What I'd do differently

- Build the mobile layout first, then scale up. I did desktop-first and had to rework several components for mobile.
- Start with E2E tests earlier. Playwright caught bugs that unit tests never would.
- Simplify the auth flow. Custom JWT auth works but adds maintenance burden I didn't need for a solo project.

## Deployment

SvelteKit static build deployed to Coolify on a Hetzner VPS. PostgreSQL on the same machine. Assets served through Cloudflare. Total cost: about €5/month. No serverless cold starts, no vendor lock-in.

---

**[Try it yourself →](https://paced.app)**  ·  **[Source →](https://github.com/samumartinf/paced)**
