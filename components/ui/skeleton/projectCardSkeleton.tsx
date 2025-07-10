"use client"
const ProjectCardSkeleton = () => {
    return (
        <div className="relative rounded-[40px] overflow-hidden min-h-[440px] h-full flex flex-col group shadow-md shadow-gray-200 animate-pulse bg-black/10 dark:bg-white/5">

            {/* Image Skeleton */}
            <div className="relative h-48 w-full bg-gray-300 dark:bg-gray-800 rounded-t-[40px]" />

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow space-y-4">

                {/* Title and GitHub Icon */}
                <div className="flex justify-between items-center">
                    <div className="h-4 w-40 bg-gray-300 dark:bg-gray-700 rounded" />
                    <div className="h-4 w-4 bg-gray-400 dark:bg-gray-600 rounded-full" />
                </div>

                {/* Description Lines */}
                <div className="space-y-2">
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-[95%]" />
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-[88%]" />
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-[92%]" />
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-[70%]" />
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {Array(6).fill(0).map((_, idx) => (
                        <div
                            key={idx}
                            className="h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCardSkeleton;
