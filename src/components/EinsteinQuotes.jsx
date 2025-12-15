import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
    "Imagination is more important than knowledge.",
    "The only source of knowledge is experience.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "The important thing is not to stop questioning.",
    "A person who never made a mistake never tried anything new.",
];

const EinsteinQuotes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % quotes.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-24 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute text-center px-4"
                >
                    <p className="text-lg md:text-xl text-gray-400 italic font-serif">
                        "{quotes[currentIndex]}"
                    </p>
                    <p className="text-sm text-star-blue mt-2">- Albert Einstein</p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default EinsteinQuotes;
