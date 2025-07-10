'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogCard from '../ui/BlogCard';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Blog, useDataContext } from '@/context/DataContext';
import Loader from '../ui/Loader';
import { ScrollViewAnimation, SectionHeadAnimation } from '@/utils/animations';
import { fetcher } from '../pages/workpage';
import useSWR from 'swr';

const BlogSection = () => {
    const { data: blogs, error, isLoading } = useSWR('/api/blogs?limit=2', fetcher);

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

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="w-full mx-auto">
            <SectionHeadAnimation>
                <i className="mb-2">Blogs</i>
            </SectionHeadAnimation>

            {isLoading ? (
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
                    {blogs.map((blog: Blog, index: number) => (
                        <motion.div
                            key={blog._id}
                            variants={cardVariants}
                            className='blogCard'
                        >
                            <BlogCard blog={blog} src={"blogs"} count={index + 1} featured={true} />
                        </motion.div>
                    ))}

                </motion.div>
            )}

            <div className="mt-16 sm:float-end text-center  md:mr-8">
                <ScrollViewAnimation whileInView>
                    <Link href={"/blogs"} >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-[#a34bae] to-[#3db7dc] cursor-pointer text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                        >
                            <span className="flex items-center justify-center gap-2 group">
                                <span>
                                    View All Blogs
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
                    </Link>
                </ScrollViewAnimation>
            </div>
        </section>
    );
}

export default BlogSection;