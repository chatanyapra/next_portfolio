"use client"
import React from 'react'
import ProjectCard from '../ui/projectCard'
import { useDataContext } from '@/context/DataContext';
import Image from 'next/image';
import { motion } from "framer-motion";
import Loader from '../ui/Loader';

const Workpage = () => {
    const { projects, loading } = useDataContext();
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
        <div className={`w-full mx-auto flex flex-col relative blogsection-bg-design px-4`}>
            <div className="px-4 pb-4 text-8xl font-bold rounded-2xl w-fit mb-8
         text-gradient h-fit flex justify-center items-center mx-auto">
                Projects
            </div>

            {loading ? (
                <div className="w-full mx-auto mt-10">
                    <Loader />
                </div>
            ) : (
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={item}>
                            <ProjectCard
                                index={index}
                                _id={project._id}
                                title={project.title}
                                description={project.shortDescription}
                                images={project.images}
                                techStack={project.techStack}
                                link={project.link}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    )
}

export default Workpage