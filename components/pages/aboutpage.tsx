"use client"
import { ScrollViewAnimation } from '@/components/component-animations/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {

    return (
        <div className=" w-full flex justify-evenly max-md:items-center z-10 md:mt-32 max-md:flex-col">
            <div className="w-[52%] max-md:w-[98%] min-h-[450px] overflow-hidden z-10 max-md:h-auto md:rounded-[50px] rounded-t-[50px] p-6 border-b-0 relative" >
                <h1 className="text-4xl sm:text-5xl mt-4 font-bold">Hello,</h1>
                <div className="text-4xl sm:text-5xl pt-4 font-bold pr-2">I&apos;m
                    <ScrollViewAnimation>
                        <span className="text-gradient ml-3">Chatanya</span>
                    </ScrollViewAnimation>
                </div>
                <ScrollViewAnimation delay={0.2}>
                    <p className="pt-4">
                        I am a full stack developer with a passion for creating beautiful and functional web applications. I chose this as a career because I love to create nice stuff. Creativity is the key. Now I target building some awesome stuff that can help people in their daily life.
                    </p>
                </ScrollViewAnimation>
                <ScrollViewAnimation delay={0.4}>
                    <p className="pt-4">
                        I am currently working as a Freelance Developer and a Full Stack Developer Intern and I am open to new opportunities. I have a healthy obsession of learning new everyday which makes a better developer and a better Athlete. I love playing Football.
                    </p>
                </ScrollViewAnimation>
                <ScrollViewAnimation delay={0.8}>
                    <p className="pt-4">
                        I am currently working as a Freelance Developer and a Full Stack Developer Intern and I am open to new opportunities. I have a healthy obsession of learning new everyday which makes a better developer and a better Athlete. I love playing Football.
                    </p>
                </ScrollViewAnimation>
            </div>
            {/* CORRECTED IMAGE */}
            <div className="w-[34%] max-md:w-[98%] max-md:hidden h-auto transparent-color rounded-[50px] overflow-hidden flex justify-center items-center sm:big-screen-light-dark-shadow">
                <Image
                    src={"/assets/images/imageface2.png"}
                    alt="A portrait of Chatanya"
                    width={400}
                    height={450}
                    className="m-auto w-full h-auto max-h-[450px]"
                    sizes="(max-width: 640px) 100vw, 440px"
                />
            </div>
            <motion.div
                initial={{ top: -20 }}
                animate={{ top: 125 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    bounce: 0.5,
                }}
                className="w-14 absolute right-12 sm:hidden"
            >
                <motion.img
                    src={"/assets/images/comma.png"}
                    alt="Hanging Image"
                    className="swing w-14 h-10 object-cover float-right -scale-y-100 "
                    style={{ filter: "drop-shadow(0 0 4px black)" }}
                />
            </motion.div>

        </div>
    )
}

export default AboutPage