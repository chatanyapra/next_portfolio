import { Metadata } from "next";
import dynamic from "next/dynamic"

export const metadata: Metadata = {
  title: "Tech Blogs by Chatanya Pratap - Web Development Insights | Chatanyapra",
  description: "Read insightful tech blogs by Chatanya Pratap (Chatanyapra) covering web development, React, Next.js, JavaScript, and modern programming practices. Stay updated with the latest in tech.",
  keywords: ["Chatanya Pratap Blog", "Chatanyapra Blog", "Web Development Blog", "React Blog", "Next.js Blog", "JavaScript Blog", "Tech Articles", "Programming Blog"],
}

const Blogpage = dynamic(() => import('@/components/pages/blogpage'));
const page = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col m-auto pt-8 sm:pt-24" style={{ maxWidth: "1600px" }}>
      <Blogpage />
    </div>
  )
}

export default page
