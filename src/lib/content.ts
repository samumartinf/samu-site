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
		title: "LosingAlpha: Trading Dashboard",
		description: "A fully customizable trading dashboard built with SvelteKit and AG Grid for real-time financial data visualization",
		image: "/images/losingalpha/hero-dashboard.png",
		tags: ["SvelteKit", "AG Grid", "Financial", "Dashboard"],
		slug: "losingalpha",
		href: "/portfolio/losingalpha",
		externalUrl: "https://play-svelte.vercel.app/mainDashboard"
	},
	{
		title: "Paced: Habit Tracker",
		description: "Full-stack habit tracker and task manager combining behavioral science with modern web tech to help build better habits.",
		image: "/images/paced/paced-hero.png",
		tags: ["Svelte 5", "TypeScript", "PostgreSQL", "PWA"],
		slug: "paced",
		href: "/portfolio/paced",
		externalUrl: "https://paced.app"
	},
	{
		title: "Taures Chess Engine",
		description: "High-performance chess engine built in Rust, featuring advanced algorithms for position evaluation and move generation.",
		image: "/images/Taures/chessBanner.jpeg",
		tags: ["Rust", "Algorithms", "Game Theory"],
		slug: "taures-chess",
		href: "/portfolio/taures-chess"
	},
	{
		title: "ODE Composer",
		description: "Best M.Eng. Thesis winner: Framework for ODE system identification using Sparse Bayesian Learning and Gaussian Processes for derivative estimation.",
		image: "/images/sbl/WideScreen_GP.jpg",
		tags: ["Python", "Bayesian Learning", "Research"],
		slug: "sparse-bayesian-learning",
		href: "/portfolio/sparse-bayesian-learning"
	},
	{
		title: "Smart Baby Buggy",
		description: "Engineering solution for visually impaired parents using LIDAR, ultrasound sensors, and haptic feedback to navigate urban environments safely.",
		image: "/images/babyBuggy/i_explain_stuff.png",
		tags: ["LIDAR", "Machine Learning", "Accessibility"],
		slug: "smart-baby-buggy",
		href: "/portfolio/smart-baby-buggy"
	},
	{
		title: "Animal Inspired Robotics",
		description: "Interactive simulation for BIOE97156. Target interception algorithms and real-world robot implementation with computer vision and obstacle avoidance.",
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