import { Metadata } from 'next';
import dynamic from 'next/dynamic'
import React from 'react'

export const metadata: Metadata = {
  title: "Projects"
}

const Workpage = dynamic(() => import('@/components/pages/workpage'));
const page = () => {
  return (
    <div className="min-h-[1200px] w-full relative  overflow-hidden flex flex-col items-center m-auto pt-8 sm:pt-24" style={{ maxWidth: "1600px" }}>
      <Workpage />
    </div>
  )
}

export default page