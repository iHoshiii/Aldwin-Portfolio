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
        id: 10,
        title: "PacMad: Pacman 3d",
        category: "Game Development",
        description: "A modernized 3D reimagining of the classic arcade game featuring dynamic camera angles.",
        fullDescription: "PacMad brings the iconic Pacman gameplay into a fully 3D environment. Rebuilt with Unity, it features precise grid movement, classic AI behaviors perfectly mapped to 3D space, and an atmospheric visual style.",
        image: "/images/PacMad/BGImage.jpg",
        link: "/PacMadFiles/PacMadVid.mp4",
        githubLink: "/PacMadFiles/PacMadPaper.docx",
        tech: ["Unity", "Unity Version Control", "C#", "Photoshop", "Blender"],
        primaryLinkLabel: "Game Video",
        secondaryLinkLabel: "Game Paper",
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
