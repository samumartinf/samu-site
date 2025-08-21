# Portfolio Entry Guide

Quick reference for adding new portfolio entries to the site.

## 🚀 Quick Start (TL;DR)

1. Create folder: `src/routes/portfolio/project-name/`
2. Create file: `+page.svx` in that folder
3. Add frontmatter with required fields
4. Write content in markdown
5. Add images to `static/images/project-name/`
6. Update `src/lib/content.ts` with portfolio entry

## 📁 File Structure

```
src/routes/portfolio/
├── project-name/           # Kebab-case project name
│   └── +page.svx          # Main content file
└── ...

static/images/
├── project-name/           # Match folder name
│   ├── hero-image.png     # Main project image
│   └── other-images.jpg   # Additional screenshots
└── ...
```

## 📝 Creating a New Entry

### Step 1: Create Project Folder
```bash
mkdir src/routes/portfolio/your-project-name
```

### Step 2: Create Content File
Create `src/routes/portfolio/your-project-name/+page.svx`:

```svx
---
title: "Your Project Title"
description: "Brief description for meta tags and cards"
image: "/images/your-project-name/hero-image.png"
tags: ["Tech1", "Tech2", "Category"]
---

# {title}

Your markdown content goes here...

![Hero Image](/images/your-project-name/hero-image.png)

## Section Headers

Write your content using standard markdown.
```

### Step 3: Add Images
Place images in `static/images/your-project-name/`:
- `hero-image.png` - Main project screenshot/banner
- Any additional images referenced in content

### Step 4: Update Portfolio List
Add entry to `src/lib/content.ts` in the `portfolioItems` array:

```typescript
{
    title: "Your Project Title",
    description: "Brief description for cards/meta tags",
    image: "/images/your-project-name/hero-image.png",
    tags: ["Tech1", "Tech2", "Category"],
    slug: "your-project-name",
    href: "/portfolio/your-project-name"
}
```

## 🎨 Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Project display name | `"Paced: Habit Tracker"` |
| `description` | ✅ | SEO description | `"Full-stack habit tracker built with Svelte"` |
| `image` | ✅ | Hero image path | `"/images/paced/hero.png"` |
| `tags` | ✅ | Tech stack/categories | `["Svelte", "TypeScript", "PostgreSQL"]` |

## 📸 Image Guidelines

- **Hero Image**: 1200x630px (optimal for social sharing)
- **Format**: PNG or JPG
- **Size**: Keep under 500KB for performance
- **Path**: Always start with `/images/project-name/`

## ✍️ Content Writing Tips

### Structure
```markdown
# {title}

Brief engaging intro paragraph.

![Hero Image](/images/project-name/hero.png)

## 🎯 What It Does
Clear explanation of the project.

## 🛠️ Tech Stack
List of technologies used.

## 🚧 Implementation
Technical details and challenges.

## 🎉 Results/Impact
What you achieved/learned.
```

### Tone
- Keep it conversational and personal
- Add humor where appropriate (see existing entries)
- Include both technical depth and accessibility
- Mention lessons learned and challenges faced

## 🔗 Navigation

Portfolio entries are automatically:
- Listed on the main portfolio page (`/portfolio`)
- Accessible via direct URL (`/portfolio/project-name`)
- Included in site navigation

## ✅ Checklist for New Entries

- [ ] Created project folder with kebab-case name
- [ ] Added `+page.svx` with proper frontmatter
- [ ] All required frontmatter fields filled
- [ ] Hero image added to static/images
- [ ] Image paths in content are correct
- [ ] Updated `src/lib/content.ts` with portfolio entry
- [ ] Content follows established tone/style
- [ ] Tags are relevant and consistent
- [ ] Links are working (if any)
- [ ] Tested locally before committing

## 🎯 Examples

Check existing entries for reference:
- `/src/routes/portfolio/paced/+page.svx` - Full-stack web app
- `/src/routes/portfolio/taures-chess/+page.svx` - Rust project
- `/src/routes/portfolio/smart-baby-buggy/+page.svx` - Hardware project

## 🚨 Common Mistakes

- ❌ Using spaces in folder names (use kebab-case)
- ❌ Forgetting leading slash in image paths
- ❌ Missing or incomplete frontmatter
- ❌ Images too large (>500KB)
- ❌ Not testing locally first

## 💡 Pro Tips

- Use `{title}` in markdown to reference frontmatter title
- Keep folder names short but descriptive
- Group related images in project subfolders
- Consider image optimization for better performance
- Write for both technical and non-technical audiences