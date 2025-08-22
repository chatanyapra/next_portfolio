// components/projects/ViewAllProjectsButton.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { ScrollViewAnimation } from "@/components/component-animations/animations";

const ViewAllButton = ({ text, link }: { text: string, link: string }) => (
    <div className="mt-8 sm:float-end text-center md:mr-8">
        <ScrollViewAnimation whileInView>
            <Link href={link}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-[#a34bae] to-[#3db7dc] cursor-pointer text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                    <span className="flex items-center justify-center gap-2 group">
                        <span>{text}</span>
                        <motion.span
                            className="inline-block"
                            initial={{ x: 0 }}
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            animate={{ x: 0 }}
                            whileInView={{ x: 0 }}
                            whileTap={{ x: 2 }}
                        >
                            <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.span>
                    </span>
                </motion.button>
            </Link>
        </ScrollViewAnimation>
    </div>
);

export default ViewAllButton;
