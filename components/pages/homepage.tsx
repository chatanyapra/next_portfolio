"use client"
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("../skills-stack/Skills"));
const About = dynamic(() => import("../main-sections/AboutSection"));
const ProjectsSection = dynamic(() => import("../main-sections/ProjectsSection"));
const MovingBand = dynamic(() => import("@/components/ui/MovingBand"));
const BlogSection = dynamic(() => import("@/components/main-sections/BlogSection"));
const Home = dynamic(() => import("@/components/main-sections/HomeSection"));

export default function HomePage() {
    return (
        <div className="min-h-[1200px] w-full relative  overflow-hidden flex flex-col items-center m-auto" style={{ maxWidth: "1600px" }}>
            <Home />
            <div className="w-full z-10 mt-32 max-md:mt-0 mb-10 flex flex-col items-center">
                <About />
                <ProjectsSection />
                <Skills />
                <MovingBand />
                <BlogSection />
            </div>
        </div>
    );
}
