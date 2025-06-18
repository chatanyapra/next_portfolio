"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import BootstrapIcon from "../assets/IconsImage/bootstrap.png";
import Mongo from "../assets/IconsImage/mongodb.png";
import JavaIcon from "../assets/IconsImage/java.png";
import Mysql from "../assets/IconsImage/mysql.png";
import Nodejs from "../assets/IconsImage/nodejs.png";
import Postgre from "../assets/IconsImage/postgresql.png";
import Docker from "../assets/IconsImage/docker.png";
import CssIcon from "../assets/IconsImage/css.png";
import Html from "../assets/IconsImage/html.png";
import ExpressIcon from "../assets/IconsImage/expressjs.png";
import JsIcon from "../assets/IconsImage/js.png";
import ReactIcon from "../assets/IconsImage/react.png";
import TailwindIcon from "../assets/IconsImage/tailwindcss.png";
import TypescriptIcon from "../assets/IconsImage/typescript.png";
import PhpIcon from "../assets/IconsImage/php.png";
import LaravelIcon from "../assets/IconsImage/laravel.png";

// Grouped tech by category
const techCategories = [
    {
        title: "Frontend",
        items: [
            {
                name: "HTML",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-100",
                textColor: "text-orange-800",
                icon: Html,
            },
            {
                name: "CSS",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-100",
                textColor: "text-blue-800",
                icon: CssIcon,
            },
            {
                name: "JavaScript",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-100",
                textColor: "text-yellow-800",
                icon: JsIcon,
            },
            {
                name: "TypeScript",
                bgColor: "bg-sky-50",
                borderColor: "border-sky-100",
                textColor: "text-sky-800",
                icon: TypescriptIcon,
            },
            {
                name: "React",
                bgColor: "bg-cyan-50",
                borderColor: "border-cyan-100",
                textColor: "text-cyan-800",
                icon: ReactIcon,
            },
            {
                name: "Next.js",
                bgColor: "bg-neutral-100",
                borderColor: "border-neutral-200",
                textColor: "text-neutral-800",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            {
                name: "Tailwind",
                bgColor: "bg-teal-50",
                borderColor: "border-teal-100",
                textColor: "text-teal-800",
                icon: TailwindIcon,
            },
            {
                name: "Bootstrap",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-100",
                textColor: "text-purple-800",
                icon: BootstrapIcon,
            },
        ],
    },
    {
        title: "Backend",
        items: [
            {
                name: "Node.js",
                bgColor: "bg-green-50",
                borderColor: "border-green-100",
                textColor: "text-green-800",
                icon: Nodejs,
            },
            {
                name: "Express.js",
                bgColor: "bg-zinc-100",
                borderColor: "border-zinc-200",
                textColor: "text-zinc-800",
                icon: ExpressIcon,
            },
            {
                name: "PHP",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-100",
                textColor: "text-indigo-800",
                icon: PhpIcon,
            },
            {
                name: "Laravel",
                bgColor: "bg-red-50",
                borderColor: "border-red-100",
                textColor: "text-red-800",
                icon: LaravelIcon,
            },
            {
                name: "Java",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-100",
                textColor: "text-orange-800",
                icon: JavaIcon,
            },
            {
                name: "Prisma",
                bgColor: "bg-stone-50",
                borderColor: "border-stone-100",
                textColor: "text-stone-800",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
            },
        ],
    },
    {
        title: "Database",
        items: [
            {
                name: "MongoDB",
                bgColor: "bg-emerald-50",
                borderColor: "border-emerald-100",
                textColor: "text-emerald-800",
                icon: Mongo,
            },
            {
                name: "PostgreSQL",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-100",
                textColor: "text-indigo-800",
                icon: Postgre,
            },
            {
                name: "MySQL",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-100",
                textColor: "text-blue-800",
                icon: Mysql,
            }
        ],
    },
    {
        title: "DevOps / Tools",
        items: [
            {
                name: "Docker",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-100",
                textColor: "text-blue-800",
                icon: Docker,
            },
            {
                name: "Vercel",
                bgColor: "bg-neutral-100",
                borderColor: "border-neutral-200",
                textColor: "text-neutral-800",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
            },
        ],
    },
];

const TechStack = () => {
    return (
        <div className="w-full mx-auto px-8 rounded-xl mt-14 mb-6 relative">
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold text-gray-100 mb-4"
            >
                Technologies I Work With
            </motion.h3>

            {techCategories.map((category, index) => (
                <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <h4 className="text-lg font-medium text-gray-300 mb-2">{category.title}</h4>

                    <div className="flex flex-wrap gap-3">
                        {category.items.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                className={`flex items-center ${tech.bgColor} ${tech.borderColor} ${tech.textColor} cursor-pointer border rounded-full px-3 py-1 text-sm transition-all hover:-translate-y-[2px] hover:shadow-md`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                viewport={{ once: true }}
                            >
                                {typeof tech.icon === "string" ? (
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        width={16}
                                        height={16}
                                        className="mr-2"
                                    />
                                ) : (
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        width={16}
                                        height={16}
                                        className="mr-2"
                                    />
                                )}
                                {tech.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default TechStack;
