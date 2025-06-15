'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Importing icons
import BootstrapIcon from "../../assets/IconsImage/bootstrap.png";
import AjaxIcon from "../../assets/IconsImage/ajax.png";
import ApiIcon from "../../assets/IconsImage/api.png";
import CssIcon from "../../assets/IconsImage/css.png";
import WordpressIcon from "../../assets/IconsImage/wordpress.png";
import ExpressIcon from "../../assets/IconsImage/expressjs.png";
import HtmlIcon from "../../assets/IconsImage/html.png";
import JavaIcon from "../../assets/IconsImage/java.png";
import JsIcon from "../../assets/IconsImage/js.png";
import ReactIcon from "../../assets/IconsImage/react.png";
import TailwindIcon from "../../assets/IconsImage/tailwindcss.png";
import TypescriptIcon from "../../assets/IconsImage/typescript.png";
import PhpIcon from "../../assets/IconsImage/php.png";
import laravelIcon from "../../assets/IconsImage/laravel.png";

interface TechItem {
  icon: string;
  name: string;
}

const MovingBand = () => {
  // Tech items for the bands
  const techItems: TechItem[] = [
    { icon: WordpressIcon.src, name: "Wordpress" },
    { icon: BootstrapIcon.src, name: "Bootstrap" },
    { icon: laravelIcon.src, name: "Laravel" },
    { icon: JsIcon.src, name: "JavaScript" },
    { icon: ReactIcon.src, name: "React JS" },
    { icon: PhpIcon.src, name: "Php" },
    { icon: ExpressIcon.src, name: "Express JS" },
    { icon: CssIcon.src, name: "CSS" },
    { icon: HtmlIcon.src, name: "HTML" },
    { icon: JavaIcon.src, name: "Java" },
    { icon: TypescriptIcon.src, name: "TypeScript" },
    { icon: ApiIcon.src, name: "FastApi" },
    { icon: TailwindIcon.src, name: "Tailwind" },
    { icon: AjaxIcon.src, name: "AJAX" }
  ];

  // Calculate the total width of one set of items
  const itemWidth = 200; // Approximate width of each item (icon + text + margin)
  const totalWidth = techItems.length * itemWidth;

  return (
    <div className="z-10 w-full overflow-hidden mt-6 sm:mb-10">
      {/* Top Band (left-leaning) */}
      <div className="w-[110%] overflow-hidden whitespace-nowrap bg-black/30 backdrop-blur-xl -rotate-6 -ml-3 -mb-20 mt-20">
        <motion.div
          className="inline-flex whitespace-nowrap py-4"
          animate={{
            x: [0, -totalWidth],
          }}
          transition={{
            ease: 'linear',
            duration: 20, // Adjust timing based on your preference
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {[...techItems, ...techItems].map((item, index) => (
            <div 
              key={`top-${index}`} 
              className="inline-flex items-center px-8" // Adjusted padding for better spacing
            >
              <Image 
                src={item.icon} 
                width={48} 
                height={48} 
                className="w-12 mr-3 max-md:w-8" 
                alt={item.name}
              />
              <span className="text-white text-5xl max-md:text-2xl font-bold">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Band (right-leaning) */}
      <div className="w-[110%] overflow-hidden whitespace-nowrap bg-black/30 backdrop-blur-xl rotate-6 -ml-3 mt-5 mb-24">
        <motion.div
          className="inline-flex whitespace-nowrap py-4"
          animate={{
            x: [-totalWidth, 0],
          }}
          transition={{
            ease: 'linear',
            duration: 20, // Match duration with top band
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {[...techItems, ...techItems].map((item, index) => (
            <div 
              key={`bottom-${index}`} 
              className="inline-flex items-center px-8" // Adjusted padding for better spacing
            >
              <Image 
                src={item.icon} 
                width={48} 
                height={48} 
                className="w-12 mr-3 max-md:w-8" 
                alt={item.name}
              />
              <span className="text-white text-5xl max-md:text-2xl font-bold">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MovingBand;