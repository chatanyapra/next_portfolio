"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TechStack {
  name: string;
}

interface IconsImageProps {
  techStacks: TechStack[];
}

const IconsImage = ({ techStacks }: IconsImageProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const formatFileName = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "")         // Remove spaces
      .replace(/\.js$/, "js")      // Clean endings like .js
      .replace(/\+/, "plus")       // e.g., C++ to cplus
      .replace(/[^a-z0-9]/gi, ""); // Strip special chars
  };

  return (
    <motion.div
      className="icon-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 text-white dark:text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
    >
      {techStacks.map((tech, index) => {
        const fileName = formatFileName(tech.name);
        const imagePath = `/assets/IconsImage/${fileName}.png`;

        return (
          <motion.div
            key={index}
            className="tech-stack-item flex flex-col items-center space-y-2"
            variants={{ itemVariants }}
          >
            <div className="icon-container bg-white dark:bg-gray-300 rounded-2xl w-20 h-20 flex justify-center items-center p-2">
              <Image
                src={imagePath}
                width={48}
                height={48}
                alt={tech.name}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/fallback.png"; // optional fallback
                }}
              />
            </div>
            <div className="tech-stack-name text-center font-medium">
              {tech.name}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default IconsImage;
