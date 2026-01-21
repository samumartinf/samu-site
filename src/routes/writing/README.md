# Writing Section

Blog-style articles using MDsveX (`.svx` files).

## Adding a New Article

1. Create folder: `src/routes/writing/your-slug/`
2. Copy `+layout.svelte` from an existing article folder
3. Create `+page.svx` with your content
4. Add entry to `src/lib/content.ts` in `writingPosts` array (most recent first)

## Article Template

```svx
---
title: Your Article Title
description: Brief description for the timeline card.
date: 2025-01-21
tags: ["Tag1", "Tag2"]
---

# Your Article Title

Content goes here. Supports markdown and Svelte components.
```

## Structure

```
src/routes/writing/
├── +page.svelte              # Timeline listing
├── README.md
└── your-slug/
    ├── +layout.svelte        # Article layout (copy from existing)
    └── +page.svx             # Article content
```
