export interface Project {
    id: number;
    title: string;
    category: 'Web Development' | 'Game Development';
    description: string;
    fullDescription?: string;
    image: string;
    link: string;
    githubLink?: string;
    tech?: string[];
    gallery?: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Kasal-Link",
        category: "Web Development",
        description: "Kasal-Link: Application for Marriage License System Innovation Challenge from LGU Solano Nueva Vizaya",
        fullDescription: "The Solano Marriage License System is a web-based platform designed specifically for the Local Government Unit (LGU) of Solano’s Municipal Civil Registrar Office (MCRO). By moving the process online, the system simplifies how residents apply for marriage licenses while helping staff manage records more efficiently.",
        image: "/images/SolanoMarriageLicense/Presentation.png",
        link: "https://solanomarriagesystem.vercel.app/",
        githubLink: "https://github.com/iHoshiii/Marriage-License-System",
        tech: ["React", "Tailwindcss", "Next.js", "Supabase", "Vercel"],
        gallery: [
            "/images/SolanoMarriageLicense/DataPrivacy.jpg",
            "/images/SolanoMarriageLicense/ApplicationForm.jpg",
            "/images/SolanoMarriageLicense/AdminApp.jpg",
            "/images/SolanoMarriageLicense/Notification.jpg",
            "/images/SolanoMarriageLicense/Reports.jpg",
            "/images/SolanoMarriageLicense/AdminDash.jpg"
        ]
    },
    {
        id: 8,
        title: "Pixel Odyssey",
        category: "Game Development",
        description: "Charming 2D platformer with vintage pixel art and challenging mechanics.",
        fullDescription: "A love letter to retro gaming. Pixel Odyssey combines precise platforming with hidden secrets and a nostalgic art style. Built with Godot to showcase 2D physics and animation.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        link: "#",
        githubLink: "https://github.com/iHoshiii",
        tech: ["Godot", "Aseprite"]
    },
    {
        id: 9,
        title: "Stellar Horizon",
        category: "Game Development",
        description: "Grand space strategy game featuring complex economy and fleet management.",
        fullDescription: "A large-scale strategy game exploring procedural universe generation and deep economic simulation. Manage entire star systems and command massive fleets in real-time.",
        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=800",
        link: "#",
        githubLink: "https://github.com/iHoshiii",
        tech: ["Unity", "C#", "HLSL"]
    }
];
