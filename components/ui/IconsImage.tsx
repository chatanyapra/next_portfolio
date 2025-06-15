'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Importing icons
import BootstrapIcon from "../../assets/IconsImage/bootstrap.png";
import AjaxIcon from "../../assets/IconsImage/ajax.png";
import Jquery from "../../assets/IconsImage/jquery.png";
import Mongo from "../../assets/IconsImage/mongodb.png";
import JavaIcon from "../../assets/IconsImage/java.png";
import Mysql from "../../assets/IconsImage/mysql.png";
import Nodejs from "../../assets/IconsImage/nodejs.png";
import Postgre from "../../assets/IconsImage/postgresql.png";
import Wordpress from "../../assets/IconsImage/wordpress.png";
import Docker from "../../assets/IconsImage/docker.png";
import Golang from "../../assets/IconsImage/golang.png";
import ApiIcon from "../../assets/IconsImage/api.png";
import CssIcon from "../../assets/IconsImage/css.png";
import Html from "../../assets/IconsImage/html.png";
import ExpressIcon from "../../assets/IconsImage/expressjs.png";
import JsIcon from "../../assets/IconsImage/js.png";
import ReactIcon from "../../assets/IconsImage/react.png";
import TailwindIcon from "../../assets/IconsImage/tailwindcss.png";
import TypescriptIcon from "../../assets/IconsImage/typescript.png";
import PhpIcon from "../../assets/IconsImage/php.png";
import LaravelIcon from "../../assets/IconsImage/laravel.png";

interface TechStack {
  name: string;
}

interface Icon {
  name: string;
  src: string;
}

interface IconsImageProps {
  techStacks: TechStack[];
}

const IconsImage = ({ techStacks }: IconsImageProps) => {
  // Array of icon objects with corresponding names
  const icons: Icon[] = [
    { name: 'Bootstrap', src: BootstrapIcon.src },
    { name: 'Ajax', src: AjaxIcon.src },
    { name: 'API', src: ApiIcon.src },
    { name: 'CSS', src: CssIcon.src },
    { name: 'NodeJs', src: Nodejs.src },
    { name: 'GoLang', src: Golang.src },
    { name: 'Docker', src: Docker.src },
    { name: 'MongoDB', src: Mongo.src },
    { name: 'PostgreSql', src: Postgre.src },
    { name: 'Wordpress', src: Wordpress.src },
    { name: 'MySql', src: Mysql.src },
    { name: 'Java', src: JavaIcon.src },
    { name: 'HTML', src: Html.src },
    { name: 'Jquery', src: Jquery.src },
    { name: 'Express', src: ExpressIcon.src },
    { name: 'JavaScript', src: JsIcon.src },
    { name: 'React', src: ReactIcon.src },
    { name: 'Tailwind', src: TailwindIcon.src },
    { name: 'TypeScript', src: TypescriptIcon.src },
    { name: 'PHP', src: PhpIcon.src },
    { name: 'Laravel', src: LaravelIcon.src },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const findMatchingIcon = (techName: string) => {
    // First check for exact match
    let matchingIcon = icons.find(icon =>
      icon.name.toLowerCase() === techName.toLowerCase()
    );

    // If no exact match, check the first 4 characters
    if (!matchingIcon) {
      matchingIcon = icons.find(icon =>
        icon.name.slice(0, 4).toLowerCase() === techName.slice(0, 4).toLowerCase()
      );
    }

    return matchingIcon;
  };

  return (
    <motion.div
      className="icon-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 text-white dark:text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
    >
      {techStacks.map((techStack, index) => {
        const matchingIcon = findMatchingIcon(techStack.name);

        return (
          <motion.div
            key={index}
            className="tech-stack-item flex flex-col items-center space-y-2"
            variants={{itemVariants}}
          >
            {matchingIcon ? (
              <>
                <div className="icon-container bg-white dark:bg-gray-300 rounded-2xl w-20 h-20 flex justify-center items-center p-2">
                  <Image 
                    src={matchingIcon.src} 
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain" 
                    alt={matchingIcon.name}
                  />
                </div>
                <div className="tech-stack-name text-center font-medium">
                  {techStack.name}
                </div>
              </>
            ) : (
              <div className="tech-stack-name text-center font-medium">
                {techStack.name}
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default IconsImage;