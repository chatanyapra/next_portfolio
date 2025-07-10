import dynamic from "next/dynamic"

const Blogpage = dynamic(() => import('@/components/pages/blogpage'));
const blog = () => {
  return (
    <div className="min-h-[1000px] w-full relative  overflow-hidden flex flex-col items-center m-auto pt-8 sm:pt-24" style={{ maxWidth: "1600px" }}>
      <Blogpage />
    </div>
  )
}

export default blog
