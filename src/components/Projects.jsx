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
            title: "Garage Management Software – GarageMax",
            description: "Built a responsive garage management dashboard to track vehicles, services, and statuses using HTML, CSS, and JavaScript. Implemented dynamic UI interactions and deployed on Vercel.",
            tags: ["HTML", "CSS", "JavaScript", "Vercel"],
            links: { demo: "https://garagemax.vercel.app", github: "https://github.com/ainaanraza/GarageManager" }
        },
        {
            title: "NaturalHealer – Wellness Landing / Web App",
            description: "Developed a modern, responsive landing page for a wellness/health-focused brand using HTML, CSS, and JavaScript, emphasizing clean layout and mobile-first design.",
            tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            links: { demo: "#", github: "https://github.com/ainaanraza/NaturalHealer" }
        },
        {
            title: "House Pricing Prediction",
            description: "Created a user-friendly web interface for predicting house prices using a machine learning model. Integrated frontend with backend/ML service and containerized using Docker.",
            tags: ["ML", "Docker", "AWS", "Frontend"],
            links: { demo: "#", github: "https://github.com/ainaanraza/House-Pricing-Prediction" }
        },
        {
            title: "YourClassroom – Self-Paced Education Platform",
            description: "Built a web platform that curates YouTube-based educational content into a focused, distraction-free virtual classroom environment using HTML, CSS, and JavaScript.",
            tags: ["HTML", "CSS", "JavaScript", "Education"],
            links: { demo: "#", github: "#" }
        },
        {
            title: "Sentiment Analysis Web App",
            description: "Designed a basic web interface in Python (Streamlit) that accepts text input and displays sentiment (positive, negative, neutral) using pre-trained models.",
            tags: ["Python", "Streamlit", "ML", "NLP"],
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
                        <span className="text-cosmic-red">Featured</span> Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of projects demonstrating my skills in frontend development, machine learning, and software engineering.
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
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cosmic-dark-red/50 transition-all group"
        >
            <div className="h-48 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cosmic-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Atom className="text-gray-700 group-hover:text-cosmic-red transition-colors duration-500" size={64} />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cosmic-red transition-colors">{project.title}</h3>
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
