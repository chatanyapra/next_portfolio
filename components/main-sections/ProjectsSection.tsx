// components/ProjectsSection.tsx
"use client";
import dynamic from "next/dynamic";
import ViewAllButton from "../ui/buttons/viewbutton";
import { SectionHeadAnimation } from "../component-animations/animations";

const CardShowProject = dynamic(() => import("../card-components/CardShowProject"));
const ProjectsSection = () => {
  return (
    <section className="py-16 w-full mx-auto">
      <SectionHeadAnimation>
        <i className="mb-2">Projects</i>
      </SectionHeadAnimation>

      <CardShowProject />

      <ViewAllButton text={"View All Projects"} link={"/work"} />
    </section>
  );
};

export default ProjectsSection;
