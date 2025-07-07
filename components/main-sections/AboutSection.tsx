'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollViewAnimation, SectionHeadAnimation } from '@/utils/animations';

const About = () => {
    return (
        <div className="w-full h-auto relative top-0 z-10 about-main pb-10 sm:pb-16">
            <Image
                src={"/assets/images/linecurve1.png"}
                alt="curve"
                fill
                style={{ objectFit: 'cover', transform: 'scaleX(-1)' }}
                className="absolute top-0 left-0"
            />

            <div className="w-full flex max-md:flex-col-reverse relative">
                {/* Image Motion */}
                <motion.div
                    className="md:w-2/4 min-h-96 about2-img float-start"
                    initial={{ opacity: 0, y: 100, scale: 0.7 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 40,
                            damping: 6,
                            duration: 1.5,
                            delay: 0.7,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        },
                    }}
                    viewport={{ once: true }}
                >
                    <div className="w-80 sm:w-96 m-auto about-image" style={{ borderRadius: '100px' }}></div>
                </motion.div>

                {/* Text Motion */}
                <div className="md:w-2/4 min-h-96 mt-14 pr-10 max-md:px-4">
                    <div className='-ml-12'>
                        <SectionHeadAnimation>
                            <i className="mb-2">About</i>
                        </SectionHeadAnimation>
                    </div>
                    <div className="text-[16px] max-md:text-[16px] text-justify">
                        <ScrollViewAnimation whileInView>
                            <p className='pb-4'>
                                I’m Chatanya, a Full Stack Developer passionate about crafting modern,
                                scalable, and high-performing web applications. I chose this career
                                because I love turning ideas into functional and visually appealing
                                digital experiences. Creativity and problem-solving drive my approach
                                to development.
                            </p>
                        </ScrollViewAnimation>
                        <ScrollViewAnimation whileInView>
                            <p className='pb-4'>
                                Currently, I work as a Freelance Developer and a Full Stack Developer
                                Intern, where I build dynamic web solutions tailored to users' needs.
                                I am always open to new opportunities and challenges that push me to
                                grow.
                            </p>
                        </ScrollViewAnimation>
                        <ScrollViewAnimation whileInView>
                            <p className='pb-4'>
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
