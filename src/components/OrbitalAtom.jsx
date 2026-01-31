import React from 'react';
import { motion } from 'framer-motion';

const OrbitalAtom = ({ size = 200 }) => {
    return (
        <div className="relative" style={{ width: size, height: size }}>
            {/* Nucleus */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-red to-cosmic-dark-red shadow-lg shadow-cosmic-red/50" />
            </motion.div>

            {/* Orbital paths and electrons */}
            {[0, 60, 120].map((offset, index) => (
                <div key={index} className="absolute inset-0">
                    {/* Orbital path */}
                    <div
                        className="absolute inset-0 border border-white/20 rounded-full"
                        style={{
                            transform: `rotateX(60deg) rotateZ(${offset}deg)`,
                        }}
                    />

                    {/* Electron */}
                    <motion.div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 3 + index,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            transformOrigin: `center ${size / 2}px`,
                        }}
                    >
                        <div className="w-3 h-3 rounded-full bg-cosmic-red shadow-lg shadow-cosmic-red/80" />
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default OrbitalAtom;
