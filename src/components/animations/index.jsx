import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function ProgressBar() {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-teal-400 origin-left"
            style={{ scaleX: scrollYProgress }}
        />
    );
}

export function FadeInSection({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}

export function SmoothProgressBar() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
            initial={{ scaleX: 0 }}
            className="fixed top-0 left-0 right-0 h-1 bg-teal-400 origin-left z-50"
            style={{ scaleX }}
        />
    )
}


export function ColorChangeOnScroll() {
    const { scrollYProgress } = useScroll();
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["#1e293b", "#334155", "#0f172a"]
    );

    return (
        <motion.div
            className="fixed inset-0 -z-10"
            style={{ backgroundColor }}
        />
    );
}