import useSWR from 'swr';
import BlogCard from '../ui/BlogCard';
import BlogSkeleton from '../section_skeleton/BlogSkeleton';
import { container } from '../component-animations/animations';
import { Blog } from "@/context/DataContext";
import { fetcher } from '../pages/workpage';

const CardShowBlog = () => {
    const { data: blogs, error, isLoading } = useSWR('/api/blogs?limit=2', fetcher);
    return (
        <section className="w-full mx-auto">
            {isLoading ? (
                <div>
                    <BlogSkeleton />
                </div>
            ) : (
                <div
                    className='flex w-full justify-around max-lg:flex-col md:flex-wrap max-md:px-1 sm:px-6 px-4 lg:px-8'>
                    {blogs.map((blog: Blog, index: number) => (
                        <div className='blogCard' key={index}>
                            <BlogCard blog={blog} src={"blogs"} count={index + 1} featured={true} />
                        </div>
                    ))}

                </div>
            )}
        </section>
    )
}

export default CardShowBlog