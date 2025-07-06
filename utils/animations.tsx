import { motion } from "framer-motion";
const item = {
    hidden: { opacity: 0, y: 40 },
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
            variants={item}
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