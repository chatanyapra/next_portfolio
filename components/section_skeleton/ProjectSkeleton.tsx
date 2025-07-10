
"use client"
import { motion } from "framer-motion";
import { container, item } from '../component-animations/animations';
import ProjectCardSkeleton from '../ui/skeleton/projectCardSkeleton';

const ProjectSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-6 px-4 lg:px-8">
            {Array(3)
                .fill(0)
                .map((_, i) => (
                    <motion.div key={i} variants={item}>
                        <ProjectCardSkeleton />
                    </motion.div>
                ))}
        </div>
    )
}

export default ProjectSkeleton