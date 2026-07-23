import React, { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import profilePic from '../assets/profile-red.jpg';

// PhotoMesh removed to use DOM image for layout morphing
const WarpParticles = () => {
    const groupRef = useRef();
    
    // Create random positions for particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 200; i++) {
            temp.push({
                x: (Math.random() - 0.5) * 60,
                y: (Math.random() - 0.5) * 60,
                z: (Math.random() - 0.5) * 100 - 50,
                speed: Math.random() * 2 + 1,
                isRed: Math.random() > 0.7
            });
        }
        return temp;
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.children.forEach((child, i) => {
                const data = particles[i];
                child.position.z += data.speed * 60 * delta;
                if (child.position.z > 20) {
                    child.position.z = -100;
                }
            });
        }
    });

    return (
        <group ref={groupRef}>
            {particles.map((data, i) => (
                <mesh key={i} position={[data.x, data.y, data.z]}>
                    <sphereGeometry args={[data.isRed ? 0.15 : 0.08, 8, 8]} />
                    <meshBasicMaterial color={data.isRed ? '#d32f2f' : '#ffffff'} />
                </mesh>
            ))}
        </group>
    );
};

const IntroAnimation = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 4500); // 4.5 seconds for the 3D intro animation
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div 
            className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center perspective-[1000px]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
        >
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                    <color attach="background" args={['#050505']} />
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
                    <pointLight position={[-10, -10, -10]} intensity={2} color="#d32f2f" />
                    
                    <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={3} />
                    <WarpParticles />
                </Canvas>
            </div>
            
            {/* The 3D DOM element that layoutId morphs into Hero section */}
            <motion.div
                className="relative z-10 w-40 h-40 md:w-56 md:h-56"
                initial={{ scale: 0.01, z: -2000 }}
                animate={{ scale: 1, z: 0 }}
                transition={{ duration: 4.5, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                <motion.img
                    layoutId="profile-pic"
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full rounded-full border-2 border-white/20 object-cover shadow-[0_0_50px_rgba(211,47,47,0.8)]"
                />
            </motion.div>
        </motion.div>
    );
};

export default IntroAnimation;
