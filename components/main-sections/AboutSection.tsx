'use client';

import { motion } from 'framer-motion';
import { ScrollViewAnimation, SectionHeadAnimation } from '@/components/component-animations/animations';
import Image from 'next/image';
import { PortfolioTimeline } from './PortfolioTimeline';

const About = () => {
    return (
        <div className="w-full min-h-[560px] relative top-0 z-10 about-main pb-10 sm:pb-16 overflow-hidden">
            {/* Background Curve */}
            <Image
                src="/assets/images/linecurve1.png"
                alt="curve"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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
                    bottom: "-10px",
                    left: "-70px",
                }}
            >
                <Image
                    src="/assets/images/violet-ball-blur.png"
                    alt="violet ball"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                />
            </motion.div>

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
                    <div className="w-96 bg-gray-400 m-auto absolute -top-7 overflow-hidden max-sm:scale-75" style={{ borderRadius: "100px", height: "500px", transform: 'scaleX(-1)' }}>
                        <Image src="/assets/personsImages/my-image2.png"
                            sizes="(max-width: 640px) 75vw, 384px"
                            fill className="h-full object-cover object-top z-10"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                </motion.div>

                {/* Right Side Text */}
                <div className="md:w-[50%] min-h-96 mt-14 pr-10 max-md:px-3">
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
            <div className='m-auto w-full '>
                <PortfolioTimeline />
            </div>
        </div>
    );
};

export default About;
