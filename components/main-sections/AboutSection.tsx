'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollViewAnimation, SectionHeadAnimation } from '@/components/component-animations/animations';

const About = () => {
    return (
        <div className="w-full h-auto relative top-0 z-10 about-main pb-10 sm:pb-16 overflow-hidden">
            {/* Background Curve */}
            <Image
                src="/assets/images/linecurve1.png"
                alt="curve"
                fill
                priority={false}
                className="absolute top-0 left-0 scale-x-[-1] z-0"
            />

            {/* Decorative Floating Ball (Bottom Left) */}
            <motion.div
                className="absolute z-0"
                initial={{ y: 0 }}
                animate={{ y: [-20, -50, -20] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                style={{
                    width: "180px",
                    height: "180px",
                    bottom: "-20px",
                    left: "-70px",
                }}
            >
                <Image
                    src="/assets/images/violet-ball-blur.png"
                    alt="violet ball"
                    fill
                    className="object-contain"
                />
            </motion.div>

            {/* Decorative Floating Person Icon (Bottom Right) */}
            {/* <motion.div
                className="absolute z-10"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 0.8, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{
                    width: "140px",
                    height: "160px",
                    left: "400px",
                    bottom: "50px",
                }}
            >
                <Image
                    src="/assets/images/item-05.a9739045efd748aca967.png"
                    alt="person icon"
                    fill
                    className="object-contain"
                />
            </motion.div> */}

            {/* Decorative Project Box (On top of image) */}
            {/* <motion.div
                className="absolute z-20"
                initial={{ top: 0 }}
                animate={{ top: [0, 60, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                style={{
                    width: "80px",
                    height: "80px",
                    right: "-10px",
                    top: "0px",
                }}
            >
                <Image
                    src="/assets/images/project-03.1ce7109df0be2a58a2f3.png"
                    alt="project box"
                    fill
                    className="object-contain rounded-xl"
                />
            </motion.div> */}

            {/* Main Flex Section */}
            <div className="w-full flex max-md:flex-col-reverse relative z-10 items-center">
                {/* Left Side Image */}
                <motion.div
                    className="md:w-[45%] min-h-96 relative flex justify-center items-center"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            ease: 'easeOut'
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <div
                        className="relative w-[370px] max-sm:h-[400px] h-[450px] sm:w-[450px] rounded-r-[100px] overflow-hidden"
                        style={{ transform: 'scaleX(-1)' }}
                    >
                        <Image
                            src="/assets/images/boywithhat.png"
                            alt="boy with hat"
                            fill
                            quality={85}
                            loading="lazy"
                        />
                    </div>
                </motion.div>

                {/* Right Side Text */}
                <div className="md:w-[50%] min-h-96 mt-14 pr-10 max-md:px-4">
                    <div className="-ml-12">
                        <SectionHeadAnimation>
                            <i className="mb-2">About</i>
                        </SectionHeadAnimation>
                    </div>

                    <div className="text-[16px] max-md:text-[16px] text-justify">
                        <ScrollViewAnimation whileInView>
                            <p className="pb-4">
                                I’m Chatanya, a Full Stack Developer passionate about crafting modern,
                                scalable, and high-performing web applications. I chose this career
                                because I love turning ideas into functional and visually appealing
                                digital experiences. Creativity and problem-solving drive my approach
                                to development.
                            </p>
                        </ScrollViewAnimation>

                        <ScrollViewAnimation whileInView>
                            <p className="pb-4">
                                Currently, I work as a Freelance Developer and a Full Stack Developer
                                Intern, where I build dynamic web solutions tailored to users' needs.
                                I am always open to new opportunities and challenges that push me to
                                grow.
                            </p>
                        </ScrollViewAnimation>

                        <ScrollViewAnimation whileInView>
                            <p className="pb-4">
                                With a mindset of continuous learning, I stay updated with the latest
                                technologies, ensuring that my work aligns with industry best
                                practices. My goal is to create impactful solutions that enhance user
                                experiences and solve real-world problems.
                            </p>
                        </ScrollViewAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
