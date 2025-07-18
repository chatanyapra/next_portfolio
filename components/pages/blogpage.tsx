"use client"
import { Blog } from '@/context/DataContext';
import { motion } from "framer-motion";
import Loader from '../ui/Loader';
import BlogCard from '../ui/BlogCard';
import { fetcher } from './workpage';
import useSWR from 'swr';
import { BigHeaderAnimation, container, item } from '../component-animations/animations';

const Blogpage = ({ blogId }: { blogId?: string }) => {
    const { data: blogs, isLoading } = useSWR('/api/blogs', fetcher);
    const filteredBlogs = blogId
        ? blogs?.filter((b: Blog) => b._id.toString() !== blogId)
        : blogs;

    return (
        <div className={`w-full mx-auto flex flex-col relative blogsection-bg-design  sm:p-4 p-2`}>
            <BigHeaderAnimation>
                Blogs
            </BigHeaderAnimation>
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
                    {filteredBlogs?.map((blog: Blog, index: number) => (
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