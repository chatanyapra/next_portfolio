"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollViewAnimation } from "@/utils/animations";
type LanguageStats = Record<string, string>;

const Skills = () => {
    const [languages, setLanguages] = useState<LanguageStats>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const res = await fetch("/api/github-languages");
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Failed to fetch GitHub data");
                setLanguages(data.languages);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        // fetchLanguages();
    }, []);

    return (
        <section className=" w-full mx-auto">
            <div className="w-full mx-auto px-5">
                <motion.h2
                    className="text-4xl font-bold mb-8 ml-6"
                    whileInView={{
                        scale: [1, 1.04, 1],
                        transition: { duration: 1 },
                    }}
                >
                    <div className="transparent-color light-dark-shadow px-4 py-1 text-4xl font-bold rounded-2xl w-fit mb-4 text-gradient flex justify-center items-center">
                        <div className="rounded-full w-7 h-7 flex justify-center items-center mr-2 mt-1">
                            <div className="bg-gradient-radial w-5 h-5 m-auto rounded-full transition-transform transform group-hover:scale-125 duration-300 ease-in-out"></div>
                        </div>
                        <i className="mb-2">Skills</i>
                    </div>
                </motion.h2>

                <h3 className="text-2xl sm:text-3xl font-bold my-4 ml-3">I Develop Skills Regularly</h3>
                <ScrollViewAnimation whileInView once={false}>
                    <p className=" mb-8 ml-3">
                        I continuously refine my skills to build modern, efficient, and high-performing web applications.
                    </p>
                </ScrollViewAnimation>

                {loading && <p className="ml-3">Loading skills...</p>}
                {error && <p className="ml-3 text-red-500">Error fetching skills: {error}</p>}

                {!loading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[95%] m-auto">
                        {Object.entries(languages).map(([name, percentage]) => (
                            <div key={name}>
                                <div className="flex justify-between mb-1">
                                    <span>{name}</span>
                                    <span>{percentage}</span>
                                </div>

                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <motion.div
                                        className="bg-blue-600 h-2 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: percentage }}
                                        transition={{ duration: 1.8, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
