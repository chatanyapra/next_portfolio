"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollViewAnimation, SectionHeadAnimation } from "@/utils/animations";
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
            <SectionHeadAnimation>
                <i className="mb-2">Skills</i>
            </SectionHeadAnimation>
            <div className="w-full mx-auto px-8">

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
