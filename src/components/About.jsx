import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Rocket, Globe } from 'lucide-react';
import FloatingFormulas from './FloatingFormulas';

const About = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const gridSize = 40;
        const rows = Math.ceil(canvas.height / gridSize) + 1;
        const cols = Math.ceil(canvas.width / gridSize) + 1;

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleResize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        // Use window listeners to capture mouse movement over the whole page
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'rgba(211, 47, 47, 0.15)';
            ctx.lineWidth = 1;

            // Draw horizontal lines with distortion
            for (let i = 0; i < rows; i++) {
                ctx.beginPath();
                for (let j = 0; j < cols; j++) {
                    const x = j * gridSize;
                    const y = i * gridSize;
                    const dx = mouseRef.current.x - x;
                    const dy = mouseRef.current.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 150;
                    let offsetX = 0;
                    let offsetY = 0;
                    if (distance < maxDistance) {
                        const force = (1 - distance / maxDistance) * 20;
                        const angle = Math.atan2(dy, dx);
                        offsetX = Math.cos(angle) * force;
                        offsetY = Math.sin(angle) * force;
                    }
                    const finalX = x + offsetX;
                    const finalY = y + offsetY;
                    if (j === 0) ctx.moveTo(finalX, finalY);
                    else ctx.lineTo(finalX, finalY);
                }
                ctx.stroke();
            }

            // Draw vertical lines with distortion
            for (let j = 0; j < cols; j++) {
                ctx.beginPath();
                for (let i = 0; i < rows; i++) {
                    const x = j * gridSize;
                    const y = i * gridSize;
                    const dx = mouseRef.current.x - x;
                    const dy = mouseRef.current.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 150;
                    let offsetX = 0;
                    let offsetY = 0;
                    if (distance < maxDistance) {
                        const force = (1 - distance / maxDistance) * 20;
                        const angle = Math.atan2(dy, dx);
                        offsetX = Math.cos(angle) * force;
                        offsetY = Math.sin(angle) * force;
                    }
                    const finalX = x + offsetX;
                    const finalY = y + offsetY;
                    if (i === 0) ctx.moveTo(finalX, finalY);
                    else ctx.lineTo(finalX, finalY);
                }
                ctx.stroke();
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const features = [
        { icon: <Code className="text-cosmic-red" size={32} />, title: 'Programming', description: 'JavaScript, Java, Python, C' },
        { icon: <Globe className="text-white" size={32} />, title: 'Frontend', description: 'HTML5, CSS3, React.js, Responsive Web Design' },
        { icon: <Rocket className="text-cosmic-red" size={32} />, title: 'Tools & Platforms', description: 'Git, GitHub, VS Code, Vercel, Docker, AWS (basic deployments)' },
        { icon: <Brain className="text-cosmic-red" size={32} />, title: 'Concepts', description: 'Component-based architecture, REST APIs, State management, OOP, DSA' },
    ];

    return (
        <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Spacetime Grid Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

            {/* Floating Formulas */}
            <FloatingFormulas formulas={[
                { text: "∫F·ds", x: 12, y: 25 },
                { text: "∇²φ=0", x: 88, y: 30 },
                { text: "Gμν=8πTμν", x: 20, y: 70 },
            ]} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Technical <span className="text-cosmic-red">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Skilled in translating requirements into clean, maintainable code and deploying applications using Docker, AWS, and Vercel. Experienced in creating data-driven and education-focused web applications and collaborating in academic and personal projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-red/50 transition-colors group backdrop-blur-sm">
                            <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-white/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
