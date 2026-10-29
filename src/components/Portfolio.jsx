import React from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import ProfileCardSection from './ProfileCardSection';
import CustomCursor from './CustomCursor';
import Resume from './Resume';
import HackathonsAndAwards from './HackathonsAndAwards';
import { ArcRevealHero } from './ui/arc-preloader-hero';
import { Reveal, GlowDivider, ScrollProgress } from './ui/premium-reveal';

function Portfolio() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-cosmic-red selection:text-black cursor-none">
            
            <CustomCursor />

            <ArcRevealHero
                greetings={[{ text: "Welcome." }]}
                greetingHold={1000}
                revealDuration={1600}
                className="bg-black text-white overflow-visible"
                introClassName="bg-black text-white"
                greetingClassName="text-white font-bold tracking-wider"
                curtainColor="#ffffff"
            >
                <ScrollProgress />
                <Navbar />
                <Hero />
                <Reveal><About /></Reveal>
                <GlowDivider />
                <Reveal><Projects /></Reveal>
                <GlowDivider />
                <Reveal><HackathonsAndAwards /></Reveal>
                <GlowDivider />
                <Reveal><Resume /></Reveal>
                <GlowDivider />
                <Reveal><ProfileCardSection /></Reveal>
            </ArcRevealHero>
        </div>
    );
}
export default Portfolio;

