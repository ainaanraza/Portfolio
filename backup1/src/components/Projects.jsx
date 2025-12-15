import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Atom } from 'lucide-react';

const Projects = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const projects = [
        {
            title: "Quantum Dashboard",
            description: "A real-time data visualization tool for monitoring quantum states. Built with React and D3.js.",
            tags: ["React", "D3.js", "WebSockets"],
            links: { demo: "#", github: "#" }
        },
        {
            title: "Relativity Commerce",
            description: "E-commerce platform with time-dilation based flash sales. Features a custom cart engine.",
            tags: ["Next.js", "Stripe", "Tailwind"],
            links: { demo: "#", github: "#" }
        },
        {
            title: "Neural Net Visualizer",
            description: "Interactive 3D visualization of neural network layers using Three.js and WebGL.",
            tags: ["Three.js", "WebGL", "Python"],
            links: { demo: "#", github: "#" }
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
            onMouseMove={handleMouseMove}
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
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        <span className="text-star-purple">Gravitational</span> Experiments
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        "I have no special talent. I am only passionately curious." - Watch how these projects orbit your cursor.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            mousePosition={mousePosition}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index, mousePosition }) => {
    const cardRef = React.useRef(null);
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const deltaX = mousePosition.x - cardCenterX;
        const deltaY = mousePosition.y - cardCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < 300) {
            const force = (300 - distance) / 300;
            setTilt({
                x: (deltaY / distance) * force * 10,
                y: -(deltaX / distance) * force * 10,
            });
        } else {
            setTilt({ x: 0, y: 0 });
        }
    }, [mousePosition]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
                rotateX: tilt.x,
                rotateY: tilt.y,
            }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-star-purple/50 transition-all group"
        >
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-star-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Atom className="text-gray-700 group-hover:text-star-purple transition-colors duration-500" size={64} />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-star-purple transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a href={project.links.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <Github size={16} /> Code
                    </a>
                    <a href={project.links.demo} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <ExternalLink size={16} /> Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
