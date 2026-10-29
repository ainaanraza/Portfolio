import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Direct motion values for zero-lag 1:1 hardware mouse tracking (no React re-renders)
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Responsive, high-stiffness spring for the outer accent ring (fluid without lag)
    const ringX = useSpring(mouseX, { damping: 26, stiffness: 450, mass: 0.1 });
    const ringY = useSpring(mouseY, { damping: 26, stiffness: 450, mass: 0.1 });

    // Subtle ambient glow follower with snappy response
    const glowX = useSpring(mouseX, { damping: 22, stiffness: 300, mass: 0.15 });
    const glowY = useSpring(mouseY, { damping: 22, stiffness: 300, mass: 0.15 });

    useEffect(() => {
        // Only run on devices with a fine pointer (mouse/trackpad)
        if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) {
            return;
        }

        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target && target.closest && target.closest('a, button, [role="button"], input, textarea, select')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', updateMousePosition, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY]);

    return (
        <div
            className={`transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden="true"
        >
            {/* Main cursor - 1:1 instant tracking with zero lag */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    scale: { duration: 0.15, ease: 'easeOut' },
                }}
            >
                <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
            </motion.div>

            {/* Outer ring - tight, snappy follower */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                    borderColor: isHovering ? 'rgba(224, 75, 63, 0.9)' : 'rgba(224, 75, 63, 0.5)',
                }}
                transition={{
                    scale: { duration: 0.15, ease: 'easeOut' },
                    borderColor: { duration: 0.15 },
                }}
            >
                <div className="w-9 h-9 rounded-full border-2 border-cosmic-red" />
            </motion.div>

            {/* Snappy glow accent */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cosmic-red to-cosmic-dark-red blur-lg opacity-25" />
            </motion.div>
        </div>
    );
};

export default CustomCursor;
