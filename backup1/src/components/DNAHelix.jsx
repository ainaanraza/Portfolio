import React from 'react';
import { motion } from 'framer-motion';

const DNAHelix = ({ width = 100, height = 200 }) => {
    const pairs = 12;

    return (
        <div className="relative" style={{ width, height }}>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                className="absolute inset-0"
            >
                {/* Left strand */}
                <motion.path
                    d={`M ${width * 0.2} 0 Q ${width * 0.2} ${height * 0.25} ${width * 0.8} ${height * 0.5} T ${width * 0.2} ${height}`}
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Right strand */}
                <motion.path
                    d={`M ${width * 0.8} 0 Q ${width * 0.8} ${height * 0.25} ${width * 0.2} ${height * 0.5} T ${width * 0.8} ${height}`}
                    stroke="url(#gradient2)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                />

                {/* Base pairs */}
                {Array.from({ length: pairs }).map((_, i) => {
                    const y = (height / (pairs - 1)) * i;
                    const offset = Math.sin((i / pairs) * Math.PI * 2) * (width * 0.3);
                    const x1 = width * 0.5 - offset;
                    const x2 = width * 0.5 + offset;

                    return (
                        <motion.line
                            key={i}
                            x1={x1}
                            y1={y}
                            x2={x2}
                            y2={y}
                            stroke="rgba(144, 205, 244, 0.5)"
                            strokeWidth="2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{
                                duration: 2,
                                delay: i * 0.1,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}

                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#90cdf4" />
                        <stop offset="100%" stopColor="#d6bcfa" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d6bcfa" />
                        <stop offset="100%" stopColor="#90cdf4" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default DNAHelix;
