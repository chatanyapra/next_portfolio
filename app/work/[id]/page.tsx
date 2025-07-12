'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Blog, Project } from '@/context/DataContext';
import { ScrollViewAnimation } from '@/components/component-animations/animations';
import dynamic from 'next/dynamic';
interface Projects extends Project {
    longDescription: string;
}
const Workpage = dynamic(() => import('@/components/pages/workpage'));
export default function page() {
    const params = useParams();
    const projectId = Array.isArray(params.id) ? params.id[0] : params.id;
    const [projects, setprojects] = useState<Projects>();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const fetchByProjectId = async () => {
            try {
                const response = await fetch(`/api/projects/${projectId}`);
                const result = await response.json();
                if (result.success) {
                    setprojects(result.data);
                }
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        };
        console.log("blogId::::", projectId);


        if (projectId) fetchByProjectId();
    }, [projectId]);

    return (
        <div className='w-full mx-auto flex flex-col relative blogsection-bg-design pt-32 max-md:pt-12'>
            {!projects || !projects.longDescription ? (
                <div className="md:w-[90%] w-full mx-auto min-h-96 animate-pulse rounded-[50px] flex max-md:flex-col justify-between mb-8  max-sm:px-2">
                    <div className="w-full">
                        <div className="h-10 w-[250px] md:w-[40%] bg-gray-400 dark:bg-gray-600 rounded mb-8"></div>
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-5/6 bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-2/3 bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-3/4 bg-gray-400 dark:bg-gray-600 rounded"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="md:w-[90%] w-full mx-auto min-h-96 flex flex-col mb-16 light-dark-shadow max-sm:px-2">
                    <ScrollViewAnimation>
                        <h1 className="text-4xl pb-8 ">{projects.title}</h1>
                    </ScrollViewAnimation>
                    <ScrollViewAnimation delay={0.5}>
                        <p dangerouslySetInnerHTML={{ __html: projects.longDescription }}></p>
                    </ScrollViewAnimation>
                </div>
            )}

            <Workpage projectId={projectId} />
        </div>
    );
}
