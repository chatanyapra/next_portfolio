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
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const fetchByProjectId = async () => {
            try {
                const response = await fetch(`/api/blogs/${blogId}`);
                const result = await response.json();
                if (result.success) {
                    setBlogs(result.data);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        };
        console.log("blogId::::", blogId);


        if (blogId) fetchByProjectId();
    }, [blogId]);

    return (
        <div className='w-full mx-auto flex flex-col relative blogsection-bg-design px-4 pt-32 max-md:pt-12'>
            {!blogs || !blogs.longDescription ? (
                <div className="w-[95%] mx-auto min-h-96 animate-pulse rounded-[50px] flex max-md:flex-col justify-between p-10 my-10 shadow-md shadow-gray-400">
                    <div className="w-full">
                        <div className="h-10 w-[40%] bg-gray-400 dark:bg-gray-600 rounded mb-8"></div>
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-5/6 bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-2/3 bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-3/4 bg-gray-400 dark:bg-gray-600 rounded"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-[95%] min-h-96 transparent-color rounded-[50px] flex max-md:flex-col justify-between p-10 my-10 light-dark-shadow">
                    <div className="text-white dark:text-black">
                        <ScrollViewAnimation>
                            <h1 className="text-4xl pb-8 ">{blogs.title}</h1>
                        </ScrollViewAnimation>
                        <p dangerouslySetInnerHTML={{ __html: blogs.longDescription }}></p>
                    </div>
                </div>
            )}


            <Blogpage blogId={blogId} />
        </div>
    );
}
