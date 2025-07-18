"use client"
import ProjectCard from '../ui/projectCard'
import { motion } from "framer-motion";
import Loader from '../ui/Loader';
import axios from 'axios';
import useSWR from 'swr';
import { Project } from '@/context/DataContext';
import { BigHeaderAnimation, container, item } from '../component-animations/animations';

export const fetcher = (url: string) => axios.get(url).then(res => res.data.data);

const Workpage = ({ projectId }: { projectId?: string }) => {
    const { data: projects, isLoading } = useSWR('/api/projects', fetcher);
    const filteredProjects = projectId
        ? projects?.filter((b: Project) => b._id.toString() !== projectId)
        : projects;

    return (
        <div className={`w-full mx-auto flex flex-col relative blogsection-bg-design sm:p-4 p-2`}>
            <BigHeaderAnimation>
                Projects
            </BigHeaderAnimation>

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