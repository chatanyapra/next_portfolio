"use client"
import ProjectCard from '../ui/projectCard'
import { motion } from "framer-motion";
import Loader from '../ui/Loader';
import axios from 'axios';
import useSWR from 'swr';
import { Project } from '@/context/DataContext';

export const fetcher = (url: string) => axios.get(url).then(res => res.data.data);

const Workpage = ({ projectId }: { projectId?: string }) => {
    const { data: projects, error, isLoading } = useSWR('/api/projects', fetcher);
    const filteredProjects = projectId
        ? projects?.filter((b: Project) => b._id.toString() !== projectId)
        : projects;

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
    const heading = {
        hidden: { opacity: 0, y: -30 },
        show: { opacity: 1, y: 0 }
    }
    return (
        <div className={`w-full mx-auto flex flex-col relative blogsection-bg-design px-4 mb-5`}>
            <motion.div
                variants={heading}
                initial={"hidden"}
                whileInView={"show"}
                transition={{ duration: 0.5 }}
                className="px-4 pb-4 text-7xl sm:text-8xl font-bold rounded-2xl w-fit mb-8 text-gradient h-fit flex justify-center items-center mx-auto">
                Projects
            </motion.div>

            {isLoading ? (
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
                    {filteredProjects?.map((project: Project, index: number) => (
                        <motion.div key={index} variants={item}>
                            <ProjectCard
                                key={index}
                                id={project._id}
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