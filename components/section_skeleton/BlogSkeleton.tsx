import { motion } from "framer-motion";
import BlogCardSkeleton from '../ui/skeleton/BlogCardSkeleton'
import { item } from "../component-animations/animations";

const BlogSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:px-6 px-4 lg:px-8">
            {Array(2)
                .fill(0)
                .map((_, i) => (
                    <motion.div key={i} variants={item}>
                        <BlogCardSkeleton />
                    </motion.div>
                ))}
        </div>
    )
}

export default BlogSkeleton