export interface Project {
    id: number;
    title: string;
    category: 'Web Development' | 'Game Development';
    description: string;
    image: string;
    link: string;
    tech?: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Kasal-Link",
        category: "Web Development",
        description: "Application for Marriage License System Innovation Challenge from LGU Solano Nueva Vizaya",
        image: "/images/SolanoMarriageLicense/Presentation.png",
        link: "#",
        tech: ["React", "Tailwindcss", "Next.js", "Supabase", "Vercel"]
    },
    {
        id: 4,
        title: "Eternal Quest",
        category: "Game Development",
        description: "A 2D action RPG built with Godot Engine featuring procedural level generation.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tech: ["Godot", "GDScript"]
    },
    {
        id: 5,
        title: "Cyber Rush",
        category: "Game Development",
        description: "High-octane cyberpunk racer with Unity Engine using HDRP for realistic lighting.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tech: ["Unity", "C#"]
    },
    {
        id: 6,
        title: "Shadow Realm",
        category: "Game Development",
        description: "Atmospheric horror game exploration system with advanced shader effects.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tech: ["Unity", "C#", "Blender"]
    },
    {
        id: 8,
        title: "Pixel Odyssey",
        category: "Game Development",
        description: "Charming 2D platformer with vintage pixel art and challenging mechanics.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tech: ["Godot", "Aseprite"]
    },
    {
        id: 9,
        title: "Stellar Horizon",
        category: "Game Development",
        description: "Grand space strategy game featuring complex economy and fleet management.",
        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tech: ["Unity", "C#", "HLSL"]
    }
];
