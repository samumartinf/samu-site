# Paced: A Todo and Habit Tracker That Actually Works

I don't like any task management app on the App Store. I also believe habits are just tasks that need to be completed every day. Most importantly, no task management app works well across all devices (laptop, phone, iPad). So I built my own.

**[Try Paced →](https://paced.app)**

## What It Does

Paced is a task and habit management platform that works seamlessly across all your devices:

- **Task Management**: Kanban boards, priorities, due dates, and project organization
- **Habit Tracking**: Daily habits with streaks, progress visualization, and completion goals
- **Cross-Device Sync**: Works offline, syncs when you're back online
- **Clean Interface**: No clutter, just what you need to get things done

## Tech Stack

### Frontend
- **Svelte 5 with Runes**: Modern reactive programming with excellent performance
- **TypeScript**: Type safety throughout the entire application
- **Tailwind CSS**: Utility-first styling for rapid development
- **PWA**: Progressive Web App that works offline and installs like a native app

### Backend
- **SvelteKit**: Full-stack framework with server-side rendering
- **PostgreSQL**: Reliable database with complex queries for analytics
- **Drizzle ORM**: Type-safe database operations
- **Custom Authentication**: JWT-based auth system

### Features
- **Offline-First**: Service workers ensure data persistence without internet
- **Real-time Sync**: Changes sync across all devices when online
- **Internationalization**: Multi-language support (English, Spanish)
- **Dark Mode**: System preference detection with manual override
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

## The Problem I Solved

Most task apps fail at one thing: **cross-device consistency**. You add a task on your phone, but it's not on your laptop. Your iPad has different data than your desktop. Sync breaks when you're offline.

I wanted something that:
- Works the same way on every device
- Handles both tasks and habits in one place
- Syncs reliably without losing data
- Works offline (because WiFi isn't guaranteed)

## Technical Implementation

### Architecture
- **Offline-First Design**: All data is stored locally first, then synced to the server
- **Conflict Resolution**: Handles simultaneous edits across devices gracefully  
- **Progressive Enhancement**: Core functionality works without JavaScript

### Key Features
- **State Management**: Svelte 5 runes provide reactive, predictable state updates
- **Database Design**: Normalized PostgreSQL schema with proper relationships
- **API Design**: RESTful endpoints with comprehensive error handling
- **Performance**: Code splitting, lazy loading, and optimized bundle sizes
- **Testing**: Unit tests with Vitest, E2E tests with Playwright

## Development Challenges

### The Tricky Parts
- **Service Workers**: Getting offline sync to work reliably across all browsers
- **Timezone Handling**: JavaScript date handling is... challenging
- **Conflict Resolution**: What happens when you edit the same task on two devices?
- **PWA Installation**: Making the "Add to Home Screen" experience smooth

### What I Learned
- Offline-first architecture should be planned from day one, not added later
- TypeScript saves more time than it costs in setup
- Simple features often have complex implementations
- User testing reveals edge cases you never considered

## Deployment

- **Hosting**: Static site generation with SvelteKit
- **Database**: PostgreSQL with connection pooling
- **CDN**: Assets served from edge locations for speed
- **Monitoring**: Error tracking and performance metrics

---

**Try it yourself: [paced.app →](https://paced.app)**

**Source code: [GitHub →](https://github.com/samumartinf/paced)**