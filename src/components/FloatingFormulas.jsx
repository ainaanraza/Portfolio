import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingFormulas = ({ formulas }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
            {formulas.map((formula, i) => (
                <FloatingFormula
                    key={i}
                    formula={formula}
                    index={i}
                    mousePos={mousePos}
                />
            ))}
        </div>
    );
};

const FloatingFormula = ({ formula, index, mousePos }) => {
    const baseX = formula.x || Math.random() * 80 + 10;
    const baseY = formula.y || Math.random() * 80 + 10;

    // Calculate repulsion from mouse
    const dx = mousePos.x - (baseX / 100) * window.innerWidth;
    const dy = mousePos.y - (baseY / 100) * window.innerHeight;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 200;

    let offsetX = 0;
    let offsetY = 0;

    if (distance < maxDistance && distance > 0) {
        const force = (maxDistance - distance) / maxDistance;
        offsetX = -(dx / distance) * force * 50;
        offsetY = -(dy / distance) * force * 50;
    }

    return (
        <motion.div
            className="absolute text-4xl md:text-6xl font-bold text-white/5 select-none font-serif"
            style={{
                left: `${baseX}%`,
                top: `${baseY}%`,
            }}
            animate={{
                x: offsetX,
                y: offsetY,
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                x: { type: "spring", stiffness: 50, damping: 10 },
                y: { type: "spring", stiffness: 50, damping: 10 },
                rotate: {
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
        >
            {formula.text}
        </motion.div>
    );
};

export default FloatingFormulas;
