// BlogCardSkeleton.tsx

const BlogCardSkeleton = () => {
    return (
        <div className="flex justify-center items-center my-6 mx-auto">
            <div className="relative w-[550px] max-lg:w-[98%] h-[400px] max-sm:h-[300px] group">

                {/* Main Image Skeleton */}
                <div className="absolute top-0 left-0 w-4/5 h-5/6 rounded-[40px] overflow-hidden bg-gray-700 animate-pulse" />

                {/* Blog Details Skeleton */}
                <div className="absolute right-0 bottom-0 w-3/4 h-[45%] rounded-b-[40px] rounded-r-[40px] rounded-tl-[5px] py-3 px-4 bg-gray-800 animate-pulse">
                    <div className="w-3/4 h-5 bg-gray-600 rounded mb-2" />
                    <div className="w-[90%] h-3 bg-gray-500 rounded" />
                </div>

                {/* Thumbnails Skeleton */}
                <div className="absolute bottom-0.5 left-1 w-[22%] h-[15%] flex justify-between items-center">
                    {[1, 2].map((_, index) => (
                        <div
                            key={index}
                            className="w-10 h-10 bg-gray-500 rounded-full animate-pulse"
                        />
                    ))}
                </div>

                {/* Blog Meta Skeleton (right panel) */}
                <div className="w-[18%] h-[52%] absolute right-0 top-0 rounded-3xl bg-gray-700 flex flex-col justify-around text-center py-2 animate-pulse">
                    <div className="w-10 h-10 bg-gray-600 mx-auto rounded-md" />
                    <div className="w-16 h-16 bg-gray-500 mx-auto rounded-full mt-2" />
                </div>

            </div>
        </div>
    );
};

export default BlogCardSkeleton;
