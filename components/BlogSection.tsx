'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogCard from './ui/BlogCard';
import "./About.css";
import { FaArrowRightLong } from 'react-icons/fa6';

const BlogSection = () => {
    // Raw data instead of context API
    const blogs = [
        {
            _id: '1',
            title: 'Getting Started with Next.js',
            shortDescription: 'Learn how to build modern web applications with Next.js',
            images: [
                { url: '/images/blog1.jpg' },
                { url: '/images/blog2.jpg' },
                { url: '/images/blog3.jpg' }
            ]
        },
        {
            _id: '2',
            title: 'TypeScript Best Practices',
            shortDescription: 'Essential TypeScript patterns for better code',
            images: [
                { url: '/images/blog2.jpg' },
                { url: '/images/blog1.jpg' }
            ]
        },
        {
            _id: '3',
            title: 'Framer Motion Animations',
            shortDescription: 'Create beautiful animations in React with Framer Motion',
            images: [
                { url: '/images/blog3.jpg' },
                { url: '/images/blog1.jpg' }
            ]
        },
        {
            _id: '4',
            title: 'Responsive Design Techniques',
            shortDescription: 'Modern approaches to responsive web design',
            images: [
                { url: '/images/blog4.jpg' },
                { url: '/images/blog2.jpg' }
            ]
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='w-full mx-auto sm:px-6 px-4 lg:px-8 flex flex-col relative blogsection-bg-design mb-16'>
            <motion.h2
                className="text-4xl font-bold text-gray-900 dark:text-white mb-4 ml-8"
                whileInView={{
                    scale: [1, 1.05, 1],
                    transition: { duration: 1 },
                }}
            >
                <div className="transparent-color light-dark-shadow px-4 py-1 text-4xl rounded-2xl w-fit mb-4 text-gradient h-fit flex justify-center items-center ml-6">
                    <div className="rounded-full w-7 h-7 flex justify-center items-center mr-2 mt-1">
                        <div className="bg-gradient-radial w-5 h-5 m-auto rounded-full transition-transform transform hover:scale-125 duration-300 ease-in-out"></div>
                    </div>
                    <i className="mb-2">Blogs</i>
                </div>
            </motion.h2>

            <div className='flex w-full justify-around max-lg:flex-col md:flex-wrap max-md:px-1'>
                {blogs.slice(0, 4).map((blog, index) => (
                    <motion.div
                        key={blog._id}
                        variants={{ cardVariants }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className='blogCard'
                    >
                        <BlogCard blog={blog} src={"blogs"} count={index + 1} />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16 sm:text-end text-center"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-[#a34bae] to-[#3db7dc] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                    <span className="flex items-center justify-center gap-2 group cursor-pointer">
                        <span>
                            View All Projects
                        </span>
                        <motion.span
                            className="inline-block"
                            initial={{ x: 0 }}
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            animate={{ x: 0 }}
                            whileInView={{ x: 0 }}
                            whileTap={{ x: 2 }}
                        >
                            <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.span>
                    </span>
                </motion.button>
            </motion.div>
        </div>
    );
}

export default BlogSection;