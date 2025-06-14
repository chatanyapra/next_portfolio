// components/ProjectCard.tsx
'use client';

import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useEffect } from 'react';

interface TechTag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: TechTag[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  liveUrl,
  featured = false,
  index,
}: ProjectCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(180px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 80%)`;

  useEffect(() => {
    animate(rotateX, 0, { duration: 0.5 });
    animate(rotateY, 0, { duration: 0.5 });
  }, [rotateX, rotateY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover="hover"
      onPointerMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - bounds.left);
        mouseY.set(e.clientY - bounds.top);
        
        const xCenter = e.clientX - bounds.left - bounds.width / 2;
        const yCenter = e.clientY - bounds.top - bounds.height / 2;
        rotateX.set(yCenter / 10);
        rotateY.set(-xCenter / 10);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className="relative rounded-xl overflow-hidden h-full flex flex-col group"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        style={{ background }}
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <motion.div
        variants={{
          hover: {
            y: -10,
            scale: 1.02,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }
        }}
        style={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 dark:border-gray-700"
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            variants={{
              hover: { scale: 1.1 }
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          {featured && (
            <div className="absolute bottom-4 left-4">
              <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <div className="flex space-x-2">
              {githubUrl && (
                <Link href={githubUrl} target="_blank" aria-label="GitHub">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub size={18} />
                  </motion.div>
                </Link>
              )}
              {liveUrl && (
                <Link href={liveUrl} target="_blank" aria-label="Live Demo">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                  </motion.div>
                </Link>
              )}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ scale: 1 }}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 500 }}
                className={`text-xs px-3 py-1 rounded-full bg-${tag.color}-100 dark:bg-${tag.color}-900 text-${tag.color}-800 dark:text-${tag.color}-200`}
              >
                {tag.name}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;