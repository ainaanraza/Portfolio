import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FloatingFormulas from './FloatingFormulas';
import profilePic from '../assets/profile-red.jpg';

const Hero = () => {
    const canvasRef = useRef(null);
    const [warpSpeed, setWarpSpeed] = useState(false);
    const particlesRef = useRef([]);
    const photonsRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Star Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update(mouse, warp) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 2;
                    this.y -= Math.sin(angle) * force * 2;
                }

                if (warp) {
                    this.speedX *= 1.1;
                    this.speedY *= 1.1;
                } else {
                    this.speedX *= 0.98;
                    this.speedY *= 0.98;
                }

                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Photon class - travels at light speed
        class Photon {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.angle = Math.random() * Math.PI * 2;
                this.speed = 15; // Speed of light (fast!)
                this.size = 3;
                this.life = 100;
                this.maxLife = 100;
                this.trail = [];
                this.color = Math.random() > 0.5 ? '211, 47, 47' : '127, 0, 0'; // cosmic-red or cosmic-dark-red
            }

            update() {
                this.trail.push({ x: this.x, y: this.y });
                if (this.trail.length > 20) this.trail.shift();

                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.life--;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.angle = Math.PI - this.angle;
                if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;
            }

            draw() {
                // Draw trail
                this.trail.forEach((point, index) => {
                    const alpha = (index / this.trail.length) * (this.life / this.maxLife);
                    ctx.fillStyle = `rgba(${this.color}, ${alpha * 0.5})`;
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, this.size * (index / this.trail.length), 0, Math.PI * 2);
                    ctx.fill();
                });

                // Draw photon
                const alpha = this.life / this.maxLife;

                // Outer glow
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
                gradient.addColorStop(0, `rgba(${this.color}, ${alpha})`);
                gradient.addColorStop(0.5, `rgba(${this.color}, ${alpha * 0.5})`);
                gradient.addColorStop(1, `rgba(${this.color}, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                ctx.fill();

                // Core
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }

            isDead() {
                return this.life <= 0;
            }
        }

        // Initialize particles
        for (let i = 0; i < 100; i++) {
            particlesRef.current.push(new Particle());
        }

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleClick = (e) => {
            // Generate 3-5 photons on click
            const photonCount = Math.floor(Math.random() * 3) + 3;
            for (let i = 0; i < photonCount; i++) {
                photonsRef.current.push(new Photon(e.clientX, e.clientY));
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleClick);
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particlesRef.current.forEach((particle) => {
                particle.update(mouseRef.current, warpSpeed);
                particle.draw();
            });

            // Update and draw photons
            photonsRef.current = photonsRef.current.filter(photon => !photon.isDead());
            photonsRef.current.forEach((photon) => {
                photon.update();
                photon.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('click', handleClick);
            window.removeEventListener('resize', handleResize);
        };
    }, [warpSpeed]);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-cosmic-bg">
            {/* Canvas Background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-10 cursor-none" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent z-0 pointer-events-none"></div>

            {/* Floating Formulas */}
            <FloatingFormulas formulas={[
                { text: "E=mc²", x: 10, y: 15 },
                { text: "∇·E=ρ/ε₀", x: 85, y: 20 },
                { text: "F=ma", x: 15, y: 75 },
                { text: "ℏω=E", x: 80, y: 80 },
                { text: "Δx·Δp≥ℏ/2", x: 50, y: 10 },
            ]} />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Profile Photo */}
                    <div className="mb-8 relative inline-block group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-red to-cosmic-dark-red rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 object-cover shadow-2xl shadow-cosmic-red/20"
                        />
                    </div>

                    <h2 className="text-cosmic-red font-medium tracking-widest mb-4 uppercase">Developer</h2>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                        Ainaan <span className="text-white">Raza</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
                        Strong foundation in Java, JavaScript, Python, and responsive web design, focused on building performant and user-friendly interfaces with integration of AI and Machine Learning.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
                        >
                            View Work <ArrowRight size={20} />
                        </motion.a>
                        <motion.button
                            onClick={() => setWarpSpeed(!warpSpeed)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-8 py-3 border rounded-full transition-colors ${warpSpeed
                                ? 'border-cosmic-red bg-cosmic-red/20 text-cosmic-red'
                                : 'border-white/20 text-white hover:bg-white/10'
                                }`}
                        >
                            {warpSpeed ? 'Warp Active' : 'Warp Speed'}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
