export interface PortfolioItem {
	title: string;
	description: string;
	image: string;
	tags: string[];
	slug: string;
	href: string;
	externalUrl?: string;
}

export interface WritingPost {
	title: string;
	description: string;
	date: string;
	tags: string[];
	slug: string;
	href: string;
}

export interface Recipe {
	title: string;
	description: string;
	date: string;
	slug: string;
	href: string;
	category: string;
	tags: string[];
}

// Recipes — most recent first
export const recipes: Recipe[] = [
	{
		title: "Chez Samuel — French Dinner Party",
		description: "A four-course French bistro menu featuring roasted figs with burrata, beef tartare with roasted bone marrow, duck confit, and chocolate fondant.",
		date: "2025-09-21",
		slug: "20250921",
		href: "/food/20250921",
		category: "Dinner Party",
		tags: ["French", "Duck", "Bistro", "Four Courses"]
	},
	{
		title: "Birria Tacos",
		description: "Slow-cooked beef tacos with roasted vegetables, chipotle consommé, and crispy corn tortillas. A Mexican classic made in the slow cooker.",
		date: "2026-06-22",
		slug: "birria-tacos",
		href: "/food/birria-tacos",
		category: "Mexican",
		tags: ["Beef", "Slow Cooker", "Tacos", "Mexican"]
	},
	{
		title: "Judías a la Vinagreta",
		description: "A fresh Spanish bean salad with hard-boiled eggs, tuna, green olives, and a Dijon vinaigrette. Perfect summer dish, served cold or at room temperature.",
		date: "2026-06-22",
		slug: "judias-vinagreta",
		href: "/food/judias-vinagreta",
		category: "Salad",
		tags: ["Spanish", "Beans", "Tuna", "Cold Dish", "Summer"]
	},
	{
		title: "Fajitas de Pollo",
		description: "Chicken thigh fajitas with caramelised onions and peppers, macerated in smoked paprika and cumin, finished with crispy chicken skin.",
		date: "2026-06-22",
		slug: "fajitas-pollo",
		href: "/food/fajitas-pollo",
		category: "Mexican",
		tags: ["Chicken", "Fajitas", "Quick", "Crispy Skin"]
	},
	{
		title: "Sopa de Pollo Tailandesa",
		description: "A rich Thai chicken soup with lemongrass, ginger, coconut milk, and mushrooms. Brightened with lime and fish sauce, finished with fresh cilantro.",
		date: "2026-06-22",
		slug: "sopa-tailandesa",
		href: "/food/sopa-tailandesa",
		category: "Soup",
		tags: ["Thai", "Chicken", "Coconut", "Soup", "Asian"]
	}
];

// Writing/blog posts - most recent first
export const writingPosts: WritingPost[] = [
	{
		title: "Fixing the iOS Black Bar Issue in Tauri v2 Apps",
		description: "If you're building a mobile app with Tauri v2 and notice a mysterious black bar at the bottom of your iOS app on first launch, you're not alone. This article explains the root cause and provides a simple fix.",
		date: "2025-01-21",
		tags: ["Tauri", "iOS", "Rust", "Mobile"],
		slug: "tauri-ios-black-bar",
		href: "/writing/tauri-ios-black-bar"
	}
];

// Helper function to get writing post by slug
export function getWritingPost(slug: string): WritingPost | undefined {
	return writingPosts.find(post => post.slug === slug);
}

// Helper function to get all writing posts (already sorted by date, most recent first)
export function getAllWritingPosts(): WritingPost[] {
	return writingPosts;
}

// Static portfolio data that matches our markdown files
export const portfolioItems: PortfolioItem[] = [
	{
		title: "Paced: Habit Tracker & Task Manager",
		description: "One codebase, six platforms. iOS, Android, Linux, macOS, Windows, and web — all native, all synced in real time. Habits and tasks in one app. Works offline. No bloat.",
		image: "/images/paced/paced-hero.png",
		tags: ["Svelte 5", "Tauri v2", "PocketBase", "PWA"],
		slug: "paced",
		href: "/portfolio/paced",
		externalUrl: "https://paced.app"
	},
	{
		title: "LosingAlpha: Trading Dashboard",
		description: "A drag-and-drop trading dashboard I built because existing tools were either too expensive or too rigid. Custom widgets, real-time P&L, and a layouts system that lets you build exactly the view you need.",
		image: "/images/losingalpha/hero-dashboard.png",
		tags: ["SvelteKit", "AG Grid", "Financial", "Dashboard"],
		slug: "losingalpha",
		href: "/portfolio/losingalpha",
		externalUrl: "https://play-svelte.vercel.app/mainDashboard"
	},
	{
		title: "Taures Chess Engine",
		description: "A 300x speedup story. I built a chess engine in Rust as a way to learn the language, and accidentally discovered how bitboards turn a 2-second search into 8 milliseconds. Now it plays a decent game too.",
		image: "/images/Taures/chessBanner.jpeg",
		tags: ["Rust", "Algorithms", "Game Theory"],
		slug: "taures-chess",
		href: "/portfolio/taures-chess"
	},
	{
		title: "ODE Composer",
		description: "My award-winning M.Eng. thesis: a framework that discovers ODE systems from raw data using Sparse Bayesian Learning. Think of it as reverse-engineering nature's equations — given observations, find the math behind them.",
		image: "/images/sbl/WideScreen_GP.jpg",
		tags: ["Python", "Bayesian Learning", "Research"],
		slug: "sparse-bayesian-learning",
		href: "/portfolio/sparse-bayesian-learning"
	},
	{
		title: "Smart Baby Buggy",
		description: "How do visually impaired parents navigate London with a baby? I led a team that built a buggy with LIDAR, ultrasound, computer vision, and haptic feedback — turning a stroller into a mobility aid.",
		image: "/images/babyBuggy/i_explain_stuff.png",
		tags: ["LIDAR", "Machine Learning", "Accessibility"],
		slug: "smart-baby-buggy",
		href: "/portfolio/smart-baby-buggy"
	},
	{
		title: "Animal Inspired Robotics",
		description: "A predator-prey simulation exploring how animals intercept moving targets. I built the simulation, then implemented the algorithms on a real robot with computer vision and obstacle avoidance.",
		image: "/images/robotSimulation/banner_animal_robotics.jpeg",
		tags: ["Python", "Computer Vision", "Robotics"],
		slug: "animal-robotics",
		href: "/portfolio/animal-robotics"
	}
];

// Helper function to get portfolio item by slug
export function getPortfolioItem(slug: string): PortfolioItem | undefined {
	return portfolioItems.find(item => item.slug === slug);
}

// Helper function to get all portfolio items
export function getAllPortfolioItems(): PortfolioItem[] {
	return portfolioItems;
}