export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Analytics SaaS Dashboard",
        category: "Web Application",
        description: "A high-performance analytics platform with real-time data visualization and deep insights.",
        image: "/images/project1.png",
        link: "#"
    },
    {
        id: 2,
        title: "Minimalist E-Commerce",
        category: "Frontend Design",
        description: "A sleek, fashion-focused shopping experience with seamless transitions and minimalist aesthetics.",
        image: "/images/project2.png",
        link: "#"
    },
    {
        id: 3,
        title: "Real Estate Portal",
        category: "Full Stack",
        description: "Modern property discovery platform with interactive maps and high-resolution imagery.",
        image: "/images/project3.png",
        link: "#"
    },
    {
        id: 4,
        title: "Finance Tracker App",
        category: "Mobile Design",
        description: "Intuitive personal finance management app featuring beautiful dark-mode charts.",
        image: "/images/project4.png",
        link: "#"
    },
    {
        id: 5,
        title: "Web3 Exchange",
        category: "Blockchain",
        description: "Next-gen crypto trading interface with advanced trading tools and neon accents.",
        image: "/images/project5.png",
        link: "#"
    },
    {
        id: 6,
        title: "AI Healthcare Hub",
        category: "Artificial Intelligence",
        description: "Trustworthy medical assistant platform utilizing AI for patient diagnostics and health tracking.",
        image: "/images/project6.png",
        link: "#"
    }
];
