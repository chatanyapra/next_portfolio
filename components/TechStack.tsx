"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const techCategories = [
    {
        title: "Frontend",
        items: [
            {
                name: "HTML",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-100",
                textColor: "text-orange-800",
                icon: "html",
            },
            {
                name: "CSS",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-100",
                textColor: "text-blue-800",
                icon: "css",
            },
            {
                name: "JavaScript",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-100",
                textColor: "text-yellow-800",
                icon: "js",
            },
            {
                name: "TypeScript",
                bgColor: "bg-sky-50",
                borderColor: "border-sky-100",
                textColor: "text-sky-800",
                icon: "typescript",
            },
            {
                name: "React",
                bgColor: "bg-cyan-50",
                borderColor: "border-cyan-100",
                textColor: "text-cyan-800",
                icon: "react",
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
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
                name: "Bootstrap",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-100",
                textColor: "text-purple-800",
                icon: "bootstrap",
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
                icon: "nodejs",
            },
            {
                name: "Express.js",
                bgColor: "bg-zinc-100",
                borderColor: "border-zinc-200",
                textColor: "text-zinc-800",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
                name: "PHP",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-100",
                textColor: "text-indigo-800",
                icon: "php",
            },
            {
                name: "Laravel",
                bgColor: "bg-red-50",
                borderColor: "border-red-100",
                textColor: "text-red-800",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
            },
            {
                name: "Java",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-100",
                textColor: "text-orange-800",
                icon: "java",
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
                icon: "mongodb",
            },
            {
                name: "PostgreSQL",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-100",
                textColor: "text-indigo-800",
                icon: "postgresql",
            },
            {
                name: "MySQL",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-100",
                textColor: "text-blue-800",
                icon: "mysql",
            },
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
                icon: "docker",
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
        <div className="w-full mx-auto px-8 rounded-xl mt-14 relative">
            <h3 className="text-2xl sm:text-3xl font-bold my-4 ml-3">
                Technologies I Work With
            </h3>

            {techCategories.map((category, index) => (
                <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <h4 className="text-lg font-medium text-[#a34bae] mb-2">
                        {category.title}
                    </h4>

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
                                <Image
                                    // Conditionally set the src for local or remote images
                                    src={
                                        tech.icon.startsWith("http")
                                            ? tech.icon
                                            : `/assets/IconsImage/${tech.icon}.png`
                                    }
                                    alt={`${tech.name} icon`}
                                    width={16}
                                    height={16}
                                    className="mr-2"
                                />
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
