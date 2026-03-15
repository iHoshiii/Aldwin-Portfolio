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
        fullDescription: "Kasal-Link is a digital transformation initiative for the Local Government Unit of Solano. It streamlines the marriage license application process, reducing wait times and improving record accuracy. Built with a focus on ease of use for citizens and efficient management for LGU staff.",
        image: "/images/SolanoMarriageLicense/Presentation.png",
        link: "https://solanomarriagesystem.vercel.app/",
        githubLink: "https://github.com/iHoshiii/Marriage-License-System",
        tech: ["React", "Next.js", "Supabase", "Vercel"],
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
        id: 4,
        title: "Eternal Quest",
        category: "Game Development",
        description: "A 2D action RPG built with Godot Engine featuring procedural level generation.",
        fullDescription: "A deep dive into procedural generation and action RPG mechanics. Players explore ever-changing dungeons with unique loot and challenging enemy AI. Features hand-crafted pixel art and a dynamic combat system.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
        link: "#",
        githubLink: "https://github.com/iHoshiii",
        tech: ["Godot", "GDScript"]
    },
    {
        id: 5,
        title: "Cyber Rush",
        category: "Game Development",
        description: "High-octane cyberpunk racer with Unity Engine using HDRP for realistic lighting.",
        fullDescription: "An exploration of High Definition Render Pipeline in Unity. Experience blistering speeds through a neon-soaked city. Includes complex physics-based vehicle handling and advanced shader effects.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        link: "#",
        githubLink: "https://github.com/iHoshiii",
        tech: ["Unity", "C#"]
    },
    {
        id: 6,
        title: "Shadow Realm",
        category: "Game Development",
        description: "Atmospheric horror game exploration system with advanced shader effects.",
        fullDescription: "Focused on atmospheric storytelling and advanced rendering techniques. Players navigate a hauntingly beautiful world using an innovative light-based mechanic. Features custom shaders and high-fidelity 3D assets.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
        link: "#",
        githubLink: "https://github.com/iHoshiii",
        tech: ["Unity", "C#", "Blender"]
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
