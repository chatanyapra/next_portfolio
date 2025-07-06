'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TechItem {
  icon: string;
  name: string;
}

const MovingBand = () => {
  const techItems: TechItem[] = [
    { icon: "/assets/IconsImage/wordpress.png", name: "Wordpress" },
    { icon: "/assets/IconsImage/bootstrap.png", name: "Bootstrap" },
    { icon: "/assets/IconsImage/laravel.png", name: "Laravel" },
    { icon: "/assets/IconsImage/js.png", name: "JavaScript" },
    { icon: "/assets/IconsImage/react.png", name: "React JS" },
    { icon: "/assets/IconsImage/php.png", name: "Php" },
    { icon: "/assets/IconsImage/expressjs.png", name: "Express JS" },
    { icon: "/assets/IconsImage/css.png", name: "CSS" },
    { icon: "/assets/IconsImage/html.png", name: "HTML" },
    { icon: "/assets/IconsImage/java.png", name: "Java" },
    { icon: "/assets/IconsImage/typescript.png", name: "TypeScript" },
    { icon: "/assets/IconsImage/api.png", name: "FastApi" },
    { icon: "/assets/IconsImage/tailwindcss.png", name: "Tailwind" },
    { icon: "/assets/IconsImage/ajax.png", name: "AJAX" }
  ];

  const itemWidth = 200; // Width estimation
  const totalWidth = techItems.length * itemWidth;

  return (
    <div className="z-10 w-full overflow-hidden mt-6 sm:mb-10">
      {/* Top Band */}
      <div className="w-[110%] overflow-hidden whitespace-nowrap bg-black/30 backdrop-blur-xl -rotate-6 -ml-3 -mb-20 mt-20">
        <motion.div
          className="inline-flex whitespace-nowrap py-4"
          animate={{ x: [0, -totalWidth] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {[...techItems, ...techItems].map((item, index) => (
            <div key={`top-${index}`} className="inline-flex items-center px-8">
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

      {/* Bottom Band */}
      <div className="w-[110%] overflow-hidden whitespace-nowrap bg-black/30 backdrop-blur-xl rotate-6 -ml-3 mt-5 mb-24">
        <motion.div
          className="inline-flex whitespace-nowrap py-4"
          animate={{ x: [-totalWidth, 0] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {[...techItems, ...techItems].map((item, index) => (
            <div key={`bottom-${index}`} className="inline-flex items-center px-8">
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
