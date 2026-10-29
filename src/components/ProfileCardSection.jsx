import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { GlassmorphismProfileCard } from "@/components/ui/profile-card";
import profileImg from "../assets/profile-red.jpg";

const ProfileCardSection = () => {
    return (
        <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cosmic-red/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 flex justify-center">
                <GlassmorphismProfileCard
                    avatarUrl={profileImg}
                    name="Ainaan Raza"
                    title="AI/ML Engineer and Full Stack Developer"
                    bio="Science and Mathematics enthusiast. Strong foundation in Java, JavaScript, Python, and responsive web design, focused on building performant and user-friendly interfaces with integration of AI and Machine Learning."
                    socialLinks={[
                        { id: "github", icon: Github, label: "GitHub", href: "https://github.com/ainaanraza" },
                        { id: "linkedin", icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ainaan-raza-a1569428b" },
                        { id: "email", icon: Mail, label: "Email", href: "mailto:razaainaan@gmail.com" },
                    ]}
                    actionButton={{
                        text: "Contact Me",
                        href: "https://wa.me/918429939031?text=Hi%20Ainaan%2C%20wanted%20to%20connect",
                    }}
                />
            </div>
        </section>
    );
};

export default ProfileCardSection;
