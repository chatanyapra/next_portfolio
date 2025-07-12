"use client"

import useSWR from "swr";
import ProjectCard from "../ui/projectCard";
import { Project } from "@/context/DataContext";
import { fetcher } from "../pages/workpage";
import ProjectSkeleton from "../section_skeleton/ProjectSkeleton";

const ProjectCardShow = () => {
    const { data: projects = [], error, isLoading } = useSWR('/api/projects?limit=3', fetcher);
    return (
        <section className="w-full mx-auto">
            {isLoading ? (
                <div>
                    <ProjectSkeleton />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-6 px-4 lg:px-8">
                    {projects && projects.map((project: Project, index: number) => (
                        <ProjectCard
                            key={index}
                            id={project._id}
                            title={project.title}
                            description={project.shortDescription}
                            images={project.images}
                            featured={true}
                            techStack={project.techStack}
                            link={project.link}
                        />
                    ))}
                </div>
            )
            }
        </section>
    )
}

export default ProjectCardShow