// components/ProjectsSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from "./ui/projectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: [
        { name: "React", color: "blue" },
        { name: "Node.js", color: "purple" },
        { name: "MongoDB", color: "green" },
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: [
        { name: "React", color: "blue" },
        { name: "Node.js", color: "purple" },
        { name: "MongoDB", color: "green" },
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: [
        { name: "React", color: "blue" },
        { name: "Node.js", color: "purple" },
        { name: "MongoDB", color: "green" },
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: [
        { name: "React", color: "blue" },
        { name: "Node.js", color: "purple" },
        { name: "MongoDB", color: "green" },
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
  ];

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
    <section className="py-16 sm:px-6 px-4 lg:px-8 w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          whileInView={{
            scale: [1, 1.05, 1],
            transition: { duration: 1 },
          }}
        >
          <div className="transparent-color light-dark-shadow px-4 py-1 text-4xl rounded-2xl w-fit mb-4 text-gradient h-fit flex justify-center items-center ml-6">
            <div className="rounded-full w-7 h-7 flex justify-center items-center mr-2 mt-1">
              <div className="bg-gradient-radial w-5 h-5 m-auto rounded-full transition-transform transform hover:scale-125 duration-300 ease-in-out"></div>
            </div>
            <i className="mb-2">Projects</i>
          </div>
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <ProjectCard {...project} index={index} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 sm:float-end text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-[#a34bae] to-[#3db7dc] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <span className="flex items-center justify-center gap-2 group cursor-pointer">
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
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
