export interface PortfolioItem {
	title: string;
	description: string;
	image: string;
	tags: string[];
	slug: string;
	href: string;
	externalUrl?: string;
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