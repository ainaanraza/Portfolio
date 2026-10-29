import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechIcons } from './TechIcons';

export const SKILLS_DATA = [
    {
        id: "languages",
        label: "Languages",
        tooltip: "Core Languages",
        icon: "Languages",
        technologies: [
            { name: "Java", icon: "Java" },
            { name: "Python", icon: "Python" },
            { name: "JavaScript", icon: "JavaScript" },
            { name: "C", icon: "C" },
        ],
    },
    {
        id: "frontend",
        label: "Frontend",
        tooltip: "Frontend Development",
        icon: "Frontend",
        technologies: [
            { name: "React.js", icon: "React.js" },
            { name: "HTML5", icon: "HTML5" },
            { name: "CSS3", icon: "CSS3" },
            { name: "Responsive Design", icon: "Frontend" },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        tooltip: "Backend Development",
        icon: "Backend",
        technologies: [
            { name: "FastAPI", icon: "FastAPI" },
            { name: "Spring Boot", icon: "Spring Boot" },
            { name: "REST APIs", icon: "Backend" },
            { name: "Full-Stack Apps", icon: "Languages" },
        ],
    },
    {
        id: "ai-ml",
        label: "AI & ML",
        tooltip: "AI & Machine Learning",
        icon: "AI & ML",
        technologies: [
            { name: "Generative AI", icon: "AI & ML" },
            { name: "LLMs", icon: "AI & ML" },
            { name: "RAG", icon: "Data Science" },
            { name: "Agentic AI", icon: "AI & ML" },
            { name: "Machine Learning", icon: "Data Science" },
        ],
    },
    {
        id: "data-science",
        label: "Data Science",
        tooltip: "Databases & Data Science",
        icon: "Data Science",
        technologies: [
            { name: "SQL", icon: "SQL" },
            { name: "Pandas", icon: "Data Science" },
            { name: "NumPy", icon: "Data Science" },
            { name: "scikit-learn", icon: "AI & ML" },
            { name: "Matplotlib", icon: "Data Science" },
        ],
    },
    {
        id: "cloud-devops",
        label: "Cloud & DevOps",
        tooltip: "Cloud & Developer Tools",
        icon: "Cloud & DevOps",
        technologies: [
            { name: "AWS", icon: "AWS" },
            { name: "AWS Bedrock", icon: "AWS" },
            { name: "Docker", icon: "Docker" },
            { name: "Vercel", icon: "Vercel" },
        ],
    },
    {
        id: "tools",
        label: "Tools",
        tooltip: "Developer Tooling",
        icon: "Tools",
        technologies: [
            { name: "Git", icon: "Git" },
            { name: "GitHub", icon: "GitHub" },
            { name: "AI-Assisted Scraping", icon: "Tools" },
        ],
    },
];

// Single Category Item in Floating Dock
export const SkillsDockItem = ({
    item,
    isActive,
    onSelect,
    onHover,
    onLeave,
    isHovered,
}) => {
    const IconComponent = TechIcons[item.icon] || TechIcons.Default;

    return (
        <div className="relative flex flex-col items-center">
            {/* Tooltip on Hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.92 }}
                        animate={{ opacity: 1, y: -6, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className="pointer-events-none absolute -top-11 z-30 whitespace-nowrap px-3 py-1 rounded-full bg-white text-black font-semibold text-xs tracking-wide shadow-lg shadow-black/40"
                    >
                        {item.tooltip}
                        {/* Little triangle arrow pointing down */}
                        <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 rotate-45 bg-white" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Circular Dock Button */}
            <motion.button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Category ${item.label}`}
                onClick={onSelect}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                onFocus={onHover}
                onBlur={onLeave}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelect();
                    }
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className={`relative flex items-center justify-center w-9 h-9 min-[380px]:w-10 min-[380px]:h-10 sm:w-14 sm:h-14 rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cosmic-red ${
                    isActive
                        ? "bg-cosmic-dark-red text-white shadow-[0_6px_18px_rgba(0,0,0,0.35)] border border-white/10"
                        : "bg-white/[0.07] text-gray-300 hover:text-white hover:bg-white/[0.14] border border-white/10"
                }`}
            >
                <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
            </motion.button>
        </div>
    );
};

// Minimal panel: category title + simple skill chips, readable at a glance
export const SkillsDetailPanel = ({ activeCategory }) => {
    return (
        <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-8"
        >
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-5">
                {activeCategory.label}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
                {activeCategory.technologies.map((tech) => {
                    const IconComponent = TechIcons[tech.icon] || TechIcons.Default;
                    return (
                        <li
                            key={tech.name}
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm sm:text-base text-gray-200"
                        >
                            <IconComponent className="w-4 h-4 text-gray-400" />
                            {tech.name}
                        </li>
                    );
                })}
            </ul>
        </motion.div>
    );
};

// Main TechnicalSkillsDock Component
export const TechnicalSkillsDock = () => {
    const [activeCategoryId, setActiveCategoryId] = useState(SKILLS_DATA[0].id);
    const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

    const activeCategory = SKILLS_DATA.find((c) => c.id === activeCategoryId) || SKILLS_DATA[0];

    return (
        <section id="skills" className="py-16 sm:py-24 bg-black text-white relative overflow-hidden">
            {/* Subtle background cosmic glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cosmic-red/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* ── A. Section Heading ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-cosmic-red uppercase mb-3 font-semibold">
                        WHAT I WORK WITH
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
                        My Technical <span className="text-cosmic-red">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        From building responsive applications to engineering AI-powered systems, these are the technologies I use to turn ideas into working products.
                    </p>
                </motion.div>

                {/* ── B. Horizontally Centered Floating Dock ── */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="flex justify-center mb-10"
                >
                    <div
                        role="tablist"
                        aria-label="Technical skill categories"
                        className="flex flex-nowrap items-center justify-center gap-1 sm:gap-3 px-1.5 py-1.5 sm:px-4 sm:py-3 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-visible max-w-full"
                    >
                        {SKILLS_DATA.map((category) => (
                            <SkillsDockItem
                                key={category.id}
                                item={category}
                                isActive={activeCategoryId === category.id}
                                isHovered={hoveredCategoryId === category.id}
                                onSelect={() => setActiveCategoryId(category.id)}
                                onHover={() => setHoveredCategoryId(category.id)}
                                onLeave={() => setHoveredCategoryId(null)}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* ── C. Minimal Skills Panel ── */}
                <div className="w-full">
                    <AnimatePresence mode="wait">
                        <SkillsDetailPanel
                            key={activeCategory.id}
                            activeCategory={activeCategory}
                        />
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkillsDock;
