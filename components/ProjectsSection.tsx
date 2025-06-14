// components/ProjectsSection.tsx
'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ui/projectCard';

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
    // ... other projects (same as previous example)
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h2 
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          whileInView={{
            scale: [1, 1.05, 1],
            transition: { duration: 0.6 }
          }}
        >
          My Projects
        </motion.h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Here are some of my recent works. Each project represents a unique
          challenge and solution.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <ProjectCard
              {...project}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          View All Projects
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;