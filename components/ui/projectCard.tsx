// components/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Image = {
  url: string,
  alt: string,
  _id: string
}
type TailwindColor =
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'indigo'
  | 'rose'
  | 'gray'
  | 'orange'
  | 'teal'
  | 'cyan'
  | 'emerald'
  | 'fuchsia'
  | 'sky';
const colorClassMap: Record<string, string> = {
  html: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  css: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  bootstrap: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  javascript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  php: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  mysql: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  jquery: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  laravel: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

type ProjectCardProps = {
  _id: string;
  title: string;
  description: string,
  images: Image[],
  techStack: { name: string; _id: string, color?: TailwindColor; }[],
  link: string,
  index: number
};
const ProjectCard = ({
  title,
  description,
  images,
  techStack,
  index,
  link,
  _id
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative rounded-[40px] overflow-hidden h-full flex flex-col group shadow-md shadow-gray-200 dark:shadow-none"
    >
      {/* Blurry overlay that appears on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-white/30 backdrop-blur-sm z-10 pointer-events-none transition-opacity duration-300"
      />

      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 dark:border-gray-700"
        whileHover={{
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={images[0]?.url}
            alt={images[0]?.alt || title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          {/* {featured && (
            <div className="absolute bottom-4 left-4">
              <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
          )} */}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <div className="flex space-x-2">
              {link && (
                <Link href={link} target="_blank" aria-label="GitHub">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub size={18} />
                  </motion.div>
                </Link>
              )}
              {/* {liveUrl && (
                <Link href={liveUrl} target="_blank" aria-label="Live Demo">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                  </motion.div>
                </Link>
              )} */}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow max-sm:text-sm">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.slice(0,6).map((tag, i) => {
              const key = tag.name.toLowerCase().replace(/\s+/g, '');
              const className = colorClassMap[key] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';

              return (
                <motion.span
                  key={i}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                  className={`text-xs px-3 py-1 rounded-full ${className}`}
                >
                  {tag.name}
                </motion.span>
              );
            })}

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;