'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Blog } from '@/context/DataContext';
import { ScrollViewAnimation } from '@/components/component-animations/animations';
import dynamic from 'next/dynamic';
interface Blogs extends Blog {
    longDescription: string;
}
const Blogpage = dynamic(() => import('@/components/pages/blogpage'));
export default function page() {
    const params = useParams();
    const blogId = Array.isArray(params.id) ? params.id[0] : params.id;
    const [blogs, setBlogs] = useState<Blogs>();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const fetchByProjectId = async () => {
            try {
                const response = await fetch(`/api/blogs/${blogId}`);
                const result = await response.json();
                if (result.success) {
                    setBlogs(result.data);
                }
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        };

        if (blogId) fetchByProjectId();
    }, [blogId]);

    return (
        <div className='w-full mx-auto flex flex-col relative blogsection-bg-design pt-32 max-md:pt-12'>
            {!blogs || !blogs.longDescription ? (
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
                    {/* <div> */}
                    <ScrollViewAnimation>
                        <h1 className="text-4xl pb-8 ">{blogs.title}</h1>
                    </ScrollViewAnimation>
                    <ScrollViewAnimation delay={0.5}>
                        <p dangerouslySetInnerHTML={{ __html: blogs.longDescription }}></p>
                    </ScrollViewAnimation>
                    {/* </div> */}
                </div>
            )}

            <Blogpage blogId={blogId} />
        </div>
    );
}
