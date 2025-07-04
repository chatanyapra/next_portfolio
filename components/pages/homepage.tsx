"use client"
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import BlogSection from "@/components/BlogSection";
import MovingBand from "@/components/ui/MovingBand";
import ProjectsSection from "../ProjectsSection";
import About from "../About";
// import ProjectsSection from "@/components/ProjectsSection";

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
