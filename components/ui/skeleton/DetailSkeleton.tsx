import React from 'react'

const DetailSkeleton = () => {
    return (
        <div className="md:w-[90%] w-full mx-auto min-h-96 animate-pulse rounded-[50px] flex max-md:flex-col justify-between mb-8 max-sm:px-2">
            <div className="w-full">
                <div className="h-10 w-[250px] md:w-[40%] bg-gray-400 dark:bg-gray-600 rounded mb-8"></div>
                <div className="space-y-4">
                    <div className="h-4 w-full bg-gray-400 dark:bg-gray-600 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-400 dark:bg-gray-600 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-400 dark:bg-gray-600 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-400 dark:bg-gray-600 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default DetailSkeleton