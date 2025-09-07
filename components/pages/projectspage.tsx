"use client";
import dynamic from "next/dynamic";
import { SectionHeadAnimation } from "../component-animations/animations";

const CardShowProject = dynamic(() => import("../card-components/CardShowProject"));

export default function ProjectsPage() {
    return (
        <div className="min-h-[1200px] w-full relative overflow-hidden flex flex-col items-center m-auto">
            <div className="w-full z-10 mt-32 max-md:mt-0 flex flex-col items-center">
                <SectionHeadAnimation>
                    <h1 className="text-4xl max-sm:text-3xl font-bold mb-8 text-center">
                        Web Development Projects
                    </h1>
                    <p className="text-lg max-sm:text-base text-center mb-12 max-w-3xl">
                        Explore my portfolio of innovative web applications built with modern technologies like React, Next.js, Node.js, and more. Each project showcases different aspects of full-stack development.
                    </p>
                </SectionHeadAnimation>
                
                <CardShowProject />
            </div>
        </div>
    );
}
