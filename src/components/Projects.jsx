import React from 'react';
import { motion } from 'framer-motion';
import { ProjectShowcase } from '@/components/ui/project-showcase';
import aidubeImg from '../assets/aidube.png';
import fintwinImg from '../assets/fintwin.png';
import unityErpImg from '../assets/unity-iti-erp.png';

const Projects = () => {


    const projects = [
        {
            name: "Aidube – A Modern Classroom",
            designation: "🌟 Industry-Ready Product",
            quote: "Aidube helps you learn faster and smarter by providing freely available educational content built on AI-powered roadmaps and structured guidance.",
            src: aidubeImg,
            link: "https://aidube.com",
            github: "#",
        },
        {
            name: "FinTwin – AI Financial Digital Twin",
            designation: "🏆 Winner – IBM–AWS Hackathon",
            quote: "An AI-powered Financial Digital Twin built with React.js, FastAPI, Retrieval-Augmented Generation (RAG), and AWS Bedrock. It uses Agentic AI to support financial analysis and provide intelligent, data-driven insights.",
            src: fintwinImg,
            link: "https://fin-twin-one.vercel.app/",
            github: "https://github.com/ainaanraza/FinTwin",
        },
        {
            name: "UNITY ITI – School ERP",
            designation: "💼 Professional Freelance Project",
            quote: "A school ERP built for UNITY ITI, bringing admissions, student records, attendance, documents, and fee management into one dashboard.",
            src: unityErpImg,
            link: "https://erp.unityiti.edu.in",
            github: "https://github.com/ainaanraza/schoolerp",
        }
    ];

    const formulas = [
        { text: "E=mc²", x: 10, y: 20 },
        { text: "F=ma", x: 85, y: 30 },
        { text: "∇×B=μ₀J", x: 15, y: 70 },
        { text: "Rμν=8πGTμν", x: 80, y: 80 },
    ];

    return (
        <section
            id="projects"
            className="py-20 bg-cosmic-bg text-white relative overflow-hidden"
        >
            {/* Floating Formulas */}
            {formulas.map((formula, i) => (
                <motion.div
                    key={i}
                    className="absolute text-6xl font-bold text-white/5 pointer-events-none select-none font-serif"
                    style={{ left: `${formula.x}%`, top: `${formula.y}%` }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {formula.text}
                </motion.div>
            ))}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        <span className="text-cosmic-red">Featured</span> Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of projects demonstrating my skills in frontend development, machine learning, and software engineering.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <ProjectShowcase
                        testimonials={projects}
                        imageAspectRatio={2.15}
                        colors={{
                            name: "#ffffff",
                            position: "var(--color-cosmic-red)",
                            testimony: "#9ca3af",
                        }}
                        fontSizes={{
                            name: "1.5rem",
                            position: "0.8rem",
                            testimony: "0.95rem",
                        }}
                        spacing={{
                            top: "1rem",
                            bottom: "1rem",
                            lineHeight: "1.5",
                            nameTop: "0",
                            nameBottom: "0.35em",
                            positionTop: "0",
                            positionBottom: "0",
                            testimonyTop: "0.75em",
                            testimonyBottom: "1em",
                        }}
                        outlineColor="rgba(255,255,255,0.12)"
                        hoverOutlineColor="color-mix(in srgb, var(--color-cosmic-red) 50%, transparent)"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
