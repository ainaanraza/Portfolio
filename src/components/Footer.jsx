import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10 text-center">
            <div className="flex justify-center gap-6 mb-4">
                <a href="#" className="text-gray-400 hover:text-star-blue transition-colors"><Github size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-star-blue transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-star-blue transition-colors"><Linkedin size={20} /></a>
            </div>
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Einstein Portfolio. Made with <span className="text-star-purple">♥</span> and Stardust.
            </p>
        </footer>
    );
};

export default Footer;
