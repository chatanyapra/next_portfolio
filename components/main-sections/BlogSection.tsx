'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogCard from '../ui/BlogCard';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useDataContext } from '@/context/DataContext';
import Loader from '../ui/Loader';
import { ScrollViewAnimation, SectionHeadAnimation } from '@/utils/animations';

const BlogSection = () => {
    const { blogs, loading } = useDataContext();
    // Raw data instead of context API
    // const blogs = [
    //     {
    //         _id: '1',
    //         title: 'Getting Started with Next.js',
    //         shortDescription: 'Learn how to build modern web applications with Next.js',
    //         images: [
    //             { url: '/images/blog1.jpg' },
    //             { url: '/images/blog2.jpg' },
    //             { url: '/images/blog3.jpg' }
    //         ]
    //     },
    //     {
    //         _id: '2',
    //         title: 'TypeScript Best Practices',
    //         shortDescription: 'Essential TypeScript patterns for better code',
    //         images: [
    //             { url: '/images/blog2.jpg' },
    //             { url: '/images/blog1.jpg' }
    //         ]
    //     },
    //     {
    //         _id: '3',
    //         title: 'Framer Motion Animations',
    //         shortDescription: 'Create beautiful animations in React with Framer Motion',
    //         images: [
    //             { url: '/images/blog3.jpg' },
    //             { url: '/images/blog1.jpg' }
    //         ]
    //     },
    //     {
    //         _id: '4',
    //         title: 'Responsive Design Techniques',
    //         shortDescription: 'Modern approaches to responsive web design',
    //         images: [
    //             { url: '/images/blog4.jpg' },
    //             { url: '/images/blog2.jpg' }
    //         ]
    //     }
    // ];
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

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className='w-full mx-auto flex flex-col relative blogsection-bg-design'>
            <SectionHeadAnimation>
                <i className="mb-2">Blogs</i>
            </SectionHeadAnimation>

            {loading ? (
                <div>
                    <Loader />
                </div>
            ) : (
                <motion.div
                    variants={container}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: true, margin: "-50px" }}
                    className='flex w-full justify-around max-lg:flex-col md:flex-wrap max-md:px-1 sm:px-6 px-4 lg:px-8'>
                    {blogs.slice(0, 2).map((blog, index) => (
                        <motion.div
                            key={blog._id}
                            variants={cardVariants}
                            className='blogCard'
                        >
                            <BlogCard blog={blog} src={"blogs"} count={index + 1} />
                        </motion.div>
                    ))}

                </motion.div>
            )}

            <div className="mt-6 sm:text-end text-center">
                <ScrollViewAnimation whileInView>
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
                </ScrollViewAnimation>
            </div>
        </div>
    );
}

export default BlogSection;