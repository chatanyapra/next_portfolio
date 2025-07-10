import { motion, scale } from "framer-motion";
const viewItem = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};
export const itempop = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
}
export const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

type ScrollViewAnimationProps = {
    children: React.ReactNode;
    delay?: number;
    animate?: boolean; // If true → uses animate
    whileInView?: boolean; // If true → uses whileInView
    once?: boolean; // For whileInView behavior
};
export const ScrollViewAnimation = ({
    children,
    delay = 0,
    animate = true,
    whileInView = false,
    once = true,
}: ScrollViewAnimationProps) => {
    return (
        <motion.span
            variants={viewItem}
            initial="hidden"
            {...(animate && !whileInView && { animate: 'show' })}
            {...(whileInView && {
                whileInView: 'show',
                viewport: { once },
            })}
            transition={{ duration: 0.5, delay }}
            className="inline-block"
        >
            {children}
        </motion.span>
    );
};
export const SectionHeadAnimation = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white ml-5"
            whileInView={{
                scale: [1, 1.04, 1],
                transition: { duration: 1 },
            }}
        >
            <div className="transparent-color light-dark-shadow px-4 py-1 text-4xl rounded-2xl w-fit mb-4 text-gradient h-fit flex justify-center items-center ml-6">
                <div className="rounded-full w-7 h-7 flex justify-center items-center mr-2 mt-1">
                    <div className="bg-gradient-radial w-5 h-5 m-auto rounded-full transition-transform transform hover:scale-125 duration-300 ease-in-out"></div>
                </div>
                {children}
            </div>
        </motion.h2>
    )
}