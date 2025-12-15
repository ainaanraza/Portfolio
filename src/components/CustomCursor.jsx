import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 10,
                    y: mousePosition.y - 10,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 200,
                }}
            >
                <div className="w-5 h-5 rounded-full bg-white" />
            </motion.div>

            {/* Outer ring */}
            <motion.div
                className="fixed pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 2 : 1,
                }}
                transition={{
                    type: 'spring',
                    damping: 20,
                    stiffness: 100,
                }}
            >
                <div className="w-10 h-10 rounded-full border-2 border-star-blue opacity-50" />
            </motion.div>

            {/* Trail effect */}
            <motion.div
                className="fixed pointer-events-none z-[9998] mix-blend-screen"
                animate={{
                    x: mousePosition.x - 30,
                    y: mousePosition.y - 30,
                }}
                transition={{
                    type: 'spring',
                    damping: 15,
                    stiffness: 50,
                }}
            >
                <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-star-blue to-star-purple blur-xl opacity-30" />
            </motion.div>
        </>
    );
};

export default CustomCursor;
