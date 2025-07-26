import { Metadata } from "next";
import dynamic from "next/dynamic"
import "./globals.css";

export const metadata: Metadata = {
  title: "Blogs"
}

const Blogpage = dynamic(() => import('@/components/pages/blogpage'));
const page = () => {
  return (
    <div className="min-h-[1000px] w-full relative  overflow-hidden flex flex-col items-center m-auto pt-8 sm:pt-24" style={{ maxWidth: "1600px" }}>
      <Blogpage />
    </div>
  )
}

export default page
