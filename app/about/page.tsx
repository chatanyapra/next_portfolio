'use client';
import Navbar from "@/components/Navbar";
import image2 from "../../assets/images/imageface2.png";
import curveline from "../../assets/images/comma.png";
import { motion } from 'framer-motion';


const page = () => {
    return (
        <div className="app-main min-h-[1200px] w-full relative  overflow-hidden flex flex-col items-center m-auto" style={{ maxWidth: "1600px" }}>
            <div className="fixed max-sm:absolute top-0 left-0 bottom-0 right-0 glass-effect p-5 mt-20 text-center"></div>
            <Navbar />
            <div className=" w-full flex justify-evenly max-md:items-center z-10 md:mt-32 max-md:flex-col text-white dark:text-black">
                <div className="w-[52%] max-md:w-[98%] min-h-[450px] overflow-hidden z-10 max-md:h-auto md:rounded-[50px] rounded-t-[50px] p-6 border-b-0 relative" >
                    <h1 className="text-4xl sm:text-5xl mt-4 font-bold">Hello,</h1>
                    <h1 className="text-4xl sm:text-5xl pt-4 font-bold">I&apos;m Chatanya</h1>
                    <p className="pt-4 text-gray-300 dark:text-gray-800">
                        I am a full stack developer with a passion for creating beautiful and functional web applications. I chose this as a career because I love to create nice stuff. Creativity is the key. Now I target building some awesome stuff that can help people in their daily life.
                    </p>
                    <p className="pt-4 text-gray-300 dark:text-gray-800">
                        I am currently working as a Freelance Developer and a Full Stack Developer Intern and I am open to new opportunities. I have a healthy obsession of learning new everyday which makes a better developer and a better Athlete. I love playing Football.
                    </p>
                </div>
                <div className="w-[34%] max-md:w-[98%] max-md:hidden h-auto transparent-color rounded-[50px] overflow-hidden flex justify-center items-center sm:big-screen-light-dark-shadow">
                    <img src={image2.src} className="m-auto h-full max-h-[450px]" alt="" />
                </div>
                <motion.div
                    initial={{ top: 0 }}
                    animate={{ top: 180 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        bounce: 0.5,
                    }}
                    className="w-14 absolute right-16 sm:hidden"
                >
                    <motion.img
                        src={curveline.src}
                        alt="Hanging Image"
                        className="swing w-14 h-10 object-cover float-right -scale-y-100 "
                        style={{ filter: "drop-shadow(0 0 4px black)" }}
                    />
                </motion.div>

            </div>
        </div>
    )
}

export default page