import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import "./globals.css";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "@/components/Skills";
import BlogSection from "@/components/BlogSection";
import IconsImage from "@/components/ui/IconsImage";
import MovingBand from "@/components/ui/MovingBand";
import Footer from "@/components/Footer";
// import ProjectsSection from "@/components/ProjectsSection";

export default function HomePage() {
  return (
    <div className="app-main min-h-[1200px] w-full relative  overflow-hidden flex flex-col items-center m-auto" style={{ maxWidth: "1600px" }}>
      <div className="fixed max-sm:absolute top-0 left-0 bottom-0 right-0 glass-effect p-5 mt-20 text-center"></div>
      <Navbar />
      <Home />
      <div className="w-full z-10 mt-32 max-md:mt-0 mb-10 flex flex-col items-center">
        <About />
        <ProjectsSection />
        <Skills />
        <MovingBand />
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
}
