import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Resume from './components/Resume';
import IntroAnimation from './components/IntroAnimation';

function App() {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <LayoutGroup>
            <div className="bg-black min-h-screen text-white selection:bg-cosmic-red selection:text-black cursor-none">
                <Analytics />
                <CustomCursor />
                
                <AnimatePresence>
                    {showIntro && (
                        <IntroAnimation key="intro" onComplete={() => setShowIntro(false)} />
                    )}
                </AnimatePresence>

                {/* Main App Content - fades in slightly after intro finishes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showIntro ? 0 : 1 }}
                    transition={{ duration: 1, delay: showIntro ? 0 : 0.5 }}
                    className={showIntro ? "h-screen overflow-hidden" : ""}
                >
                    <Navbar />
                    <Hero />
                    <About />
                    <Projects />
                    <Resume />
                    <Contact />
                    <Footer />
                </motion.div>
            </div>
        </LayoutGroup>
    );
}

export default App;
