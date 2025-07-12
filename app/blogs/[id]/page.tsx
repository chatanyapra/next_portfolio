'use client';

import useSWR from 'swr';
import Blogpage from '@/components/pages/blogpage';
import { fetcher } from '@/components/pages/workpage';
import { useParams } from 'next/navigation';

export default function page() {
    const params = useParams();
    const blogId = params?.id;
    // const blogId = Array.isArray(rawBlogId) ? rawBlogId[0] : rawBlogId;
    const { data: blogs, error, isLoading } = useSWR(`/api/blogs/${blogId}`, fetcher);
    console.log("blogs::::::::::::::::::::::::", blogs);

    if (isLoading) {
        return <div className="pt-32 text-center">Loading blog...</div>;
    }

    if (error) {
        return <div className="pt-32 text-center text-red-500">Failed to load blog.</div>;
    }

    if (!blogs || !blogs.data) {
        return <div className="pt-32 text-center text-yellow-500">No blog data found.</div>;
    }

    return (
        <div
            className="z-10 h-full min-h-screen w-full relative dark:text-black overflow-hidden flex flex-col items-center m-auto pt-32 max-md:pt-12"
            style={{ maxWidth: '1100px' }}
        >
            {blogs.longDescription && (
                <div className="w-[95%] min-h-96 transparent-color rounded-[50px] flex max-md:flex-col justify-between p-10 my-10 light-dark-shadow">
                    <div className="text-white dark:text-black">
                        <h1 className="text-4xl pb-10">{blogs.projectName}</h1>
                        <p dangerouslySetInnerHTML={{ __html: blogs.longDescription }}></p>
                    </div>
                </div>
            )}

            {/* <Blogpage blogId={blogId} /> */}
        </div>
    );
}
