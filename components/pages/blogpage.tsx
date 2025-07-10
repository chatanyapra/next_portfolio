"use client"
import React from 'react'
import { Blog, useDataContext } from '@/context/DataContext';
import { motion } from "framer-motion";
import Loader from '../ui/Loader';
import BlogCard from '../ui/BlogCard';
import { fetcher } from './workpage';
import useSWR from 'swr';

const Blogpage = () => {
    const { data: blogs, error, isLoading } = useSWR('/api/blogs', fetcher);

    // const { blogs, loading } = useDataContext();
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
        <div className={`w-full mx-auto flex flex-col relative blogsection-bg-design px-4`}>
            <motion.div
                variants={heading}
                initial={"hidden"}
                whileInView={"show"}
                transition={{ duration: 0.5 }}
                className="px-4 pb-4 text-7xl sm:text-8xl font-bold rounded-2xl w-fit mb-8 text-gradient h-fit flex justify-center items-center mx-auto">
                Blogs
            </motion.div>
            {isLoading ? (
                <div className="w-full mx-auto mt-10">
                    <Loader />
                </div>
            ) : (
                <motion.div
                    variants={container}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: true, margin: "-50px" }}
                    className='flex w-full justify-around max-lg:flex-col md:flex-wrap max-md:px-1 sm:px-6 px-4 lg:px-8'>
                    {blogs.map((blog: Blog, index: number) => (
                        <motion.div
                            key={blog._id}
                            variants={item}
                            className='blogCard'
                        >
                            <BlogCard blog={blog} src={"blogs"} count={index + 1} />
                        </motion.div>
                    ))}

                </motion.div>
            )}
        </div>
    )
}

export default Blogpage