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
        title: "Modern Portfolio",
        category: "Web Development",
        description: "A high-performance portfolio platform with Framer Motion animations and dark mode.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tech: ["React", "Tailwind", "Framer Motion"]
    },
    {
        id: 2,
        title: "E-Commerce App",
        category: "Web Development",
        description: "A full-stack shopping experience with Supabase integration and real-time updates.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tech: ["Next.js", "Supabase", "Tailwind"]
    },
    {
        id: 3,
        title: "SaaS Dashboard",
        category: "Web Development",
        description: "Advanced analytics dashboard with complex data visualization and user management.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tech: ["React", "Node.js", "Chart.js"]
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
    }
];
