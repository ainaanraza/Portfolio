import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
    return (
        <motion.div
            aria-hidden
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-cosmic-dark-red via-cosmic-red to-cosmic-dark-red"
        />
    );
};

export const Reveal = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)', scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

export const GlowDivider = () => (
    <div aria-hidden className="relative h-px max-w-5xl mx-auto overflow-hidden">
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-red/60 to-transparent origin-center"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
            className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            animate={{ left: ['-10%', '110%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
        />
    </div>
);
