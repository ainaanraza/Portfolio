import React from 'react';
import { motion } from 'framer-motion';
import { HeroCarousel } from './ui/hero-carousel';

// Photos of each achievement, kept locally in the project (not cloud storage).
import sihWinner from '../assets/awards/sih-winner.jpg';
import ibmHackvedaCertificate from '../assets/awards/ibm-hackveda-certificate.jpg';
import ibmHackvedaTeam from '../assets/awards/ibm-hackveda-team.jpg';
import chiefCoordinator from '../assets/awards/chief-coordinator.jpg';
import iscGoldMedal from '../assets/awards/isc-gold-medal.jpg';
import ibmProjectStage from '../assets/awards/ibm-project-stage.jpg';
import ibmProjectGifts from '../assets/awards/ibm-project-gifts.jpg';

const AWARD_ITEMS = [
    {
        id: "sih-2025",
        title: "Smart India\nHackathon",
        image: sihWinner,
        credit: "WINNER – INTERNAL EDITION 2025",
        meta: ["INTEGRAL UNIVERSITY", "1ST PLACE", "TEAM CODE KARMA"],
        accent: "#e04b3f",
        description:
            "Won first place in the Internal Smart India Hackathon 2025 at Integral University by collaborating with a team to develop an innovative, problem-solving technology solution. Contributed to solution development, teamwork, and project presentation during the internal selection process.",
    },
    {
        id: "ibm-aws-hackathon",
        title: "IBM–AWS\nHackathon",
        // Two related photos of the same win share one card.
        images: [ibmHackvedaCertificate, ibmHackvedaTeam],
        image: ibmHackvedaCertificate,
        credit: "HACKVEDA ’26 – WINNER",
        meta: ["IILM UNIVERSITY", "AGENTIC AI", "JAN 2026"],
        accent: "#7b61ff",
        description:
            "Won the IBM–AWS Hackathon with FinTwin, an AI-powered Financial Digital Twin. Contributed to developing a solution using Agentic AI, Retrieval-Augmented Generation (RAG), React.js, FastAPI, and AWS Bedrock to support intelligent financial analysis and data-driven insights.",
    },
    {
        id: "chief-coordinator",
        title: "Chief\nCoordinator",
        image: chiefCoordinator,
        credit: "TECHNICAL COMMITTEE",
        meta: ["INTEGRAL UNIVERSITY", "EVENT OPERATIONS", "LEADERSHIP"],
        accent: "#e04b3f",
        description:
            "Served as Chief Coordinator of the Technical Committee at Integral University, helping coordinate technical activities, manage event-related responsibilities, communicate with participants and team members, and support the smooth execution of university events.",
    },
    {
        id: "gold-medalist",
        title: "ISC 12th\nGold Medalist",
        image: iscGoldMedal,
        credit: "ACADEMIC EXCELLENCE",
        meta: ["93.25%", "CISCE BOARD", "GOLD MEDAL"],
        accent: "#eab308",
        description:
            "Achieved 93.25% in the ISC Class 12 examination and received Gold Medalist recognition for academic performance. Demonstrated consistent academic dedication, discipline, and commitment to excellence.",
    },
    {
        id: "ibm-project-presentation",
        title: "IBM Project\nPresentation",
        // Two related photos of the same win share one card.
        images: [ibmProjectStage, ibmProjectGifts],
        image: ibmProjectStage,
        credit: "WINNER – INTEGRAL UNIVERSITY",
        meta: ["PROJECT SHOWCASE", "1ST PLACE"],
        accent: "#00c8ff",
        description:
            "Won an IBM project presentation competition at Integral University by presenting a project and demonstrating its objectives, implementation approach, and practical applications. Showcased technical understanding, presentation skills, and the ability to communicate project ideas effectively.",
    },
];

const HackathonsAndAwards = () => {
    return (
        <section id="hackathons" className="py-20 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Hackathons & <span className="text-cosmic-red">Awards</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Recognitions, competitive triumphs, and hackathon highlights. Drag or scroll the filmstrip to explore.
                    </p>
                </motion.div>
            </div>

            {/* Full-width editorial carousel stage */}
            <div className="relative w-full h-[650px] md:h-[720px] max-h-[85vh] border-y border-white/10">
                <HeroCarousel
                    items={AWARD_ITEMS}
                    defaultIndex={0}
                    brand="AINAAN RAZA"
                    autoplay={true}
                    autoplayDelay={5000}
                />
            </div>
        </section>
    );
};

export default HackathonsAndAwards;
