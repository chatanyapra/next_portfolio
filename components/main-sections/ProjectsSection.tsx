// components/ProjectsSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from "../ui/projectCard";
import { Project } from "@/context/DataContext";
import Loader from "../ui/Loader";
import { ScrollViewAnimation, SectionHeadAnimation } from "@/utils/animations";
import Link from "next/link";
import { fetcher } from "../pages/workpage";
import useSWR from "swr";

const ProjectsSection = () => {
  const { data: projects, error, isLoading } = useSWR('/api/projects?limit=3', fetcher);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 w-full mx-auto">
      <SectionHeadAnimation>
        <i className="mb-2">Projects</i>
      </SectionHeadAnimation>

      {isLoading ? (
        <div className="w-full m-auto">
          <Loader />
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-6 px-4 lg:px-8"
        >
          {projects.map((project: Project, index: number) => (
            <motion.div key={index} variants={item}>
              <ProjectCard
                index={index}
                _id={project._id}
                title={project.title}
                description={project.shortDescription}
                images={project.images}
                techStack={project.techStack}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="mt-16 sm:float-end text-center md:mr-8">
        <ScrollViewAnimation whileInView>
          <Link href={'/work'}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#a34bae] to-[#3db7dc] cursor-pointer text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <span className="flex items-center justify-center gap-2 group">
                <span>
                  View All Projects
                </span>
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  animate={{ x: 0 }}
                  whileInView={{ x: 0 }}
                  whileTap={{ x: 2 }}
                >
                  <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </ScrollViewAnimation>
      </div>
    </section>
  );
};

export default ProjectsSection;
