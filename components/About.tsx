"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./About.css";
import lineCurve from "../assets/images/linecurve1.png";

const About = () => {
    const aboutRef = useRef(null);
    const inView = useInView(aboutRef, { once: true, margin: "-15% 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                    duration: 2,
                    ease: "easeOut",
                },
            });
        }
    }, [inView, controls]);

    return (
        <div className="w-full h-auto relative top-0 z-10 about-main pb-10 sm:pb-16">
            <img
                src={lineCurve.src}
                className="w-full h-full absolute top-0 left-0"
                alt=""
                style={{ transform: "scaleX(-1)" }}
            />
            <div className="w-full flex max-md:flex-col-reverse relative px-4">
                <motion.div
                    ref={aboutRef}
                    className="md:w-2/4 min-h-96 about2-img float-start"
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={controls}
                >
                    <div
                        className="w-96 m-auto about-image"
                        style={{ borderRadius: "100px" }}
                    ></div>
                </motion.div>
                <div className="md:w-2/4 min-h-96 mt-14 pr-10 max-md:px-4 group">
                    <motion.h2
                        className="text-4xl font-bold text-white dark:text-gray-900 mb-4"
                        whileInView={{
                            scale: [1, 1.05, 1],
                            transition: { duration: 1 },
                        }}
                    >
                        <div className="transparent-color light-dark-shadow px-4 py-1 text-4xl font-bold rounded-2xl w-fit mb-4 text-gradient flex justify-center items-center">
                            <div className="rounded-full w-7 h-7 flex justify-center items-center mr-2 mt-1">
                                <div className="bg-gradient-radial w-5 h-5 m-auto rounded-full transition-transform transform group-hover:scale-125 duration-300 ease-in-out"></div>
                            </div>
                            <i className="mb-2">About</i>
                        </div>
                    </motion.h2>
                    <p className="text-[18px] max-md:text-[16px] ">
                        I’m Chatanya, a Full Stack Developer passionate about crafting modern,
                        scalable, and high-performing web applications. I chose this career
                        because I love turning ideas into functional and visually appealing
                        digital experiences. Creativity and problem-solving drive my approach
                        to development.
                        <br /><br />
                        Currently, I work as a Freelance Developer and a Full Stack Developer
                        Intern, where I build dynamic web solutions tailored to users' needs.
                        I am always open to new opportunities and challenges that push me to
                        grow.
                        <br /><br />
                        With a mindset of continuous learning, I stay updated with the latest
                        technologies, ensuring that my work aligns with industry best
                        practices. My goal is to create impactful solutions that enhance user
                        experiences and solve real-world problems.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
