import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ArrowUpRight } from 'lucide-react';

const education = [
    { degree: "B.Tech – CSE (Data Science & AI)", institution: "Integral University, Lucknow", score: "8.9 CGPA", year: "Ongoing" },
    { degree: "Intermediate (PCM) – CISCE", institution: "Unity College, Lucknow", score: "93.25%", year: "Class 12" },
    { degree: "High School – CISCE", institution: "Unity College, Lucknow", score: "86.4%", year: "Class 10" },
];

const certifications = [
    { name: "PHP and MySQL", org: "Integral University" },
    { name: "Data Analysis", org: "IBM" },
    { name: "Python for Data Science", org: "IBM" },
    { name: "Generative AI", org: "Google Cloud" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const item = {
    hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Panel = ({ icon: Icon, title, children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        className="group relative rounded-2xl p-[1px] overflow-hidden"
    >
        {/* rotating conic border */}
        <motion.div
            aria-hidden
            className="absolute -inset-[100%] opacity-60"
            style={{ background: 'conic-gradient(from 0deg, transparent 0 70%, var(--color-cosmic-red) 85%, transparent 100%)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <div className="relative h-full rounded-2xl bg-black/90 backdrop-blur-xl border border-white/5 p-6">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-cosmic-red/10 border border-cosmic-red/30 flex items-center justify-center">
                    <Icon className="text-cosmic-red" size={18} />
                </div>
                <h3 className="text-lg font-display font-semibold tracking-wide">{title}</h3>
            </div>
            {children}
        </div>
    </motion.div>
);

const Resume = () => (
    <section id="resume" className="py-16 bg-black text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                    Resume <span className="text-cosmic-red">Highlights</span>
                </h2>
                <p className="text-gray-400 text-sm">Academics & certifications at a glance.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                <div className="md:col-span-3">
                    <Panel icon={GraduationCap} title="Education">
                        <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative pl-5">
                            <motion.span
                                aria-hidden
                                className="absolute left-[5px] top-1 bottom-1 w-px bg-gradient-to-b from-cosmic-red via-cosmic-red/40 to-transparent origin-top"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                            />
                            {education.map((edu) => (
                                <motion.li key={edu.degree} variants={item} className="relative pb-5 last:pb-0">
                                    <span className="absolute -left-5 top-1.5 w-[11px] h-[11px] rounded-full bg-black border-2 border-cosmic-red">
                                        <span className="absolute inset-0 rounded-full bg-cosmic-red animate-ping opacity-40" />
                                    </span>
                                    <div className="flex items-start justify-between gap-4 rounded-xl px-3 py-2 -mx-3 transition-colors duration-300 hover:bg-white/[0.03]">
                                        <div className="min-w-0">
                                            <p className="text-[11px] uppercase tracking-widest text-gray-500">{edu.year}</p>
                                            <h4 className="font-semibold text-white leading-snug">{edu.degree}</h4>
                                            <p className="text-sm text-gray-400">{edu.institution}</p>
                                        </div>
                                        <span className="shrink-0 rounded-full border border-cosmic-red/30 bg-cosmic-red/10 px-3 py-1 text-sm font-semibold text-cosmic-red">
                                            {edu.score}
                                        </span>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </Panel>
                </div>

                <div className="md:col-span-2">
                    <Panel icon={Award} title="Certifications" delay={0.15}>
                        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-2.5">
                            {certifications.map((c) => (
                                <motion.div
                                    key={c.name}
                                    variants={item}
                                    whileHover={{ x: 4 }}
                                    className="relative overflow-hidden flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-colors duration-300 hover:border-cosmic-red/40"
                                >
                                    <motion.span
                                        aria-hidden
                                        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                                        animate={{ left: ['-50%', '150%'] }}
                                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                                    />
                                    <span className="text-sm text-white font-medium">{c.name}</span>
                                    <span className="text-[11px] uppercase tracking-wider text-gray-500">{c.org}</span>
                                </motion.div>
                            ))}
                            <motion.a
                                variants={item}
                                href="https://www.linkedin.com/in/ainaan-raza-a1569428b/details/certifications/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link flex items-center justify-center gap-1.5 pt-2 text-sm font-medium text-cosmic-red"
                            >
                                View all
                                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </motion.a>
                        </motion.div>
                    </Panel>
                </div>
            </div>
        </div>
    </section>
);

export default Resume;
