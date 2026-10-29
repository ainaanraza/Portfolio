import React from 'react';
import FloatingFormulas from './FloatingFormulas';
import TechnicalSkillsDock from './TechnicalSkillsDock';

const About = () => {
    return (
        <section id="about" className="bg-black text-white relative overflow-hidden">
            {/* Floating Formulas */}
            <FloatingFormulas formulas={[
                { text: "∫F·ds", x: 12, y: 25 },
                { text: "∇²φ=0", x: 88, y: 30 },
                { text: "Gμν=8πTμν", x: 20, y: 70 },
            ]} />

            <div className="relative z-10">
                <TechnicalSkillsDock />
            </div>
        </section>
    );
};

export default About;
