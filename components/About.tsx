'use client';
import { motion } from 'framer-motion';
import './About.css';
import Image from 'next/image';

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
                    <div
                        className="w-80 sm:w-96 m-auto about-image"
                        style={{ borderRadius: '100px' }}
                    />
                </motion.div>

                {/* Text Motion */}
                <motion.div
                    className="md:w-2/4 min-h-96 mt-14 pr-10 max-md:px-4 group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            ease: 'easeOut',
                        },
                    }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                            whileInView={{
                                scale: [1, 1.05, 1],
                                transition: { duration: 1 },
                            }}
                        >
                            <div className="transparent-color light-dark-shadow px-4 py-1 text-4xl rounded-2xl w-fit mb-4 text-gradient h-fit flex justify-center items-center ml-6">
                                <div className="rounded-full w-7 h-7 flex justify-center items-center mr-2 mt-1">
                                    <div className="bg-gradient-radial w-5 h-5 m-auto rounded-full transition-transform transform hover:scale-125 duration-300 ease-in-out"></div>
                                </div>
                                <i className="mb-2">About</i>
                            </div>
                        </motion.h2>
                    </motion.div>

                    <p className="text-[18px] max-md:text-[16px] text-justify">
                        I’m Chatanya, a Full Stack Developer passionate about crafting modern,
                        scalable, and high-performing web applications. I chose this career
                        because I love turning ideas into functional and visually appealing
                        digital experiences. Creativity and problem-solving drive my approach
                        to development.
                        <br />
                        <br />
                        Currently, I work as a Freelance Developer and a Full Stack Developer
                        Intern, where I build dynamic web solutions tailored to users' needs.
                        I am always open to new opportunities and challenges that push me to
                        grow.
                        <br />
                        <br />
                        With a mindset of continuous learning, I stay updated with the latest
                        technologies, ensuring that my work aligns with industry best
                        practices. My goal is to create impactful solutions that enhance user
                        experiences and solve real-world problems.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
