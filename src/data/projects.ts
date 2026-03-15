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
    primaryLinkLabel?: string;
    secondaryLinkLabel?: string;
    tertiaryLink?: string;
    tertiaryLinkLabel?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Kasal-Link",
        category: "Web Development",
        description: "Application for Marriage License System Innovation Challenge from LGU Solano Nueva Vizaya",
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
        id: 10,
        title: "PacMad: Pacman 3d",
        category: "Game Development",
        description: "A recreation of the classic arcade game Pacman in 3D version.",
        fullDescription: "Pacmad is a collaborative game created by us, computer science students. It is a recreation of Pac-Man, but with a twist. Pac-Man has become the enemy. He accuses the players of stealing his food, while our true intention is actually to fix the bugs inside the game.",
        image: "/images/PacMad/BGImage.jpg",
        link: "https://drive.google.com/drive/u/1/folders/1nde8Q0uaTyEFcBT6aDzEEzrTCXzjE8vn",
        githubLink: "https://www.facebook.com/share/v/1F1STNPZoL/",
        tech: ["Unity", "Unity Version Control", "C#", "Photoshop", "Blender"],
        primaryLinkLabel: "Game Video",
        secondaryLinkLabel: "DocumentationS",
        tertiaryLink: "/PacMadFiles/PacMadPaper.docx",
        tertiaryLinkLabel: "Game Paper",
        gallery: [
            "/images/PacMad/Doc1.jpg",
            "/images/PacMad/Doc5.jpg",
            "/images/PacMad/Doc2.jpg",
            "/images/PacMad/Doc6.jpg",
            "/images/PacMad/Doc3.jpg",
            "/images/PacMad/Doc4.jpg"
        ]
    }
];
