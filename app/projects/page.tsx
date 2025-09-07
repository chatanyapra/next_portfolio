import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Web Development Projects by Chatanya Pratap | Chatanyapra Portfolio",
    description: "Explore innovative web development projects by Chatanya Pratap (Chatanyapra). Full-stack applications built with React, Next.js, Node.js, and modern technologies. View live demos and source code.",
    keywords: [
        "Chatanya Pratap Projects",
        "Chatanyapra Portfolio",
        "Web Development Projects",
        "React Projects",
        "Next.js Projects",
        "Full Stack Projects",
        "JavaScript Projects",
        "Frontend Projects",
        "Backend Projects",
        "Open Source Projects"
    ],
    openGraph: {
        title: "Web Development Projects | Chatanya Pratap Portfolio",
        description: "Discover innovative web development projects by Chatanya Pratap (Chatanyapra). Modern applications showcasing expertise in React, Next.js, and full-stack development.",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects by Chatanya Pratap | @chatanyapra",
        description: "Explore web development projects and applications built by Chatanya Pratap using modern technologies."
    }
};

const ProjectsPage = dynamic(() => import("@/components/pages/projectspage"));

const page = () => {
    return (
        <div className="w-full relative overflow-hidden flex flex-col m-auto pt-8 sm:pt-24" style={{ maxWidth: "1600px" }}>
            <ProjectsPage />
        </div>
    );
};

export default page;
