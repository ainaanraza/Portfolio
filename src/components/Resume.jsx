import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const Resume = () => {
    const education = [
        {
            degree: "B.Tech – Computer Science and Engineering (Data Science & Artificial Intelligence)",
            institution: "Integral University, Lucknow",
            details: "CGPA: 8.9 (till 2nd year)"
        },
        {
            degree: "Intermediate (PCM) – CISCE Board",
            institution: "Unity College, Lucknow",
            details: "Percentage: 93.25%"
        },
        {
            degree: "High School – CISCE Board",
            institution: "Unity College, Lucknow",
            details: "Percentage: 86.4%"
        }
    ];

    const certifications = [
        "PHP and MySQL – Integral University Lucknow",
        "Data Analysis – IBM",
        "Python for Data Science – IBM",
        "Generative AI – Google Cloud Platform"
    ];

    const achievements = [
        {
            text: "Gold Medalist in ISC 12th Board Examination.",
            link: null
        },
        {
            text: "Won SIH 2025-Internal Edition",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7392251734787555328/"
        }
    ];

    return (
        <section id="resume" className="py-20 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Resume <span className="text-star-blue">Highlights</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A journey through academia, certifications, and milestones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-star-blue" size={32} />
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-8 border-l border-white/10">
                                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-star-blue"></div>
                                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                    <p className="text-star-purple font-medium mb-2">{edu.institution}</p>
                                    <p className="text-gray-400 text-sm">{edu.details}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <Award className="text-pink-400" size={32} />
                                <h3 className="text-2xl font-bold">Certifications</h3>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-pink-400/50 transition-colors">
                                        <p className="text-gray-300">{cert}</p>
                                    </div>
                                ))}
                                <a
                                    href="https://www.linkedin.com/in/ainaan-raza-a1569428b/details/certifications/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-star-blue transition-all text-center text-star-blue font-medium"
                                >
                                    View All Certifications →
                                </a>
                            </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <Trophy className="text-yellow-400" size={32} />
                                <h3 className="text-2xl font-bold">Achievements</h3>
                            </div>
                            <div className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="p-6 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400 rounded-r-xl">
                                        {achievement.link ? (
                                            <a
                                                href={achievement.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg text-white font-medium hover:text-yellow-400 transition-colors flex items-center gap-2"
                                            >
                                                {achievement.text}
                                                <span className="text-sm opacity-70">↗</span>
                                            </a>
                                        ) : (
                                            <p className="text-lg text-white font-medium">{achievement.text}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
