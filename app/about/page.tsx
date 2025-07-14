import { Metadata } from "next";
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: "About"
}

const AboutPage = dynamic(() => import("@/components/pages/aboutpage"));
const Skills = dynamic(() => import("@/components/skills-stack/Skills"));
const TechStack = dynamic(() => import("@/components/TechStack"));

const page = () => {
    return (
        <div className="min-h-[1200px] w-full relative  overflow-hidden flex flex-col items-center m-auto" style={{ maxWidth: "1600px" }}>
            <AboutPage />
            <div className="w-full z-10 sm:mt-28 mt-10 px-0">
                <Skills />
                <div className="w-full mx-auto relative">
                    <img src={"/assets/images/background-line.png"} className="w-full h-[500px] absolute -top-16" alt="" />
                    <TechStack />
                </div>
            </div>
        </div>
    )
}

export default page