import dynamic from 'next/dynamic'
import React from 'react'
const Workpage = dynamic(() => import('@/components/pages/workpage'));
const page = () => {
  return (
    <div className="min-h-[1200px] w-full relative  overflow-hidden flex flex-col items-center m-auto mt-24" style={{ maxWidth: "1600px" }}>
      <Workpage />
    </div>
  )
}

export default page