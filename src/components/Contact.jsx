import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import OrbitalAtom from './OrbitalAtom';
import DNAHelix from './DNAHelix';
import EinsteinQuotes from './EinsteinQuotes';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-star-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            Let's Discover the <span className="text-star-blue">Future</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Whether you have a question, a project idea, or just want to discuss the mysteries of the universe (or code), I'm all ears.
                        </p>

                        {/* Einstein Quotes */}
                        <div className="mb-8">
                            <EinsteinQuotes />
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-star-blue">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium">razaainaan@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-star-purple">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">Golaganj, Lucknow, Uttar Pradesh</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-pink-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-medium">(+91) 8429939031</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                                    <a href="https://www.linkedin.com/in/ainaan-raza-a1569428b" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">LinkedIn</p>
                                    <a href="https://www.linkedin.com/in/ainaan-raza-a1569428b" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-star-blue transition-colors">
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Orbital Atom and DNA Helix */}
                        <div className="flex gap-8 justify-center mt-12">
                            <OrbitalAtom size={150} />
                            <DNAHelix width={80} height={150} />
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
                    >
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-star-blue transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-star-blue transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-star-blue transition-colors"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-star-blue to-star-purple text-black font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>

                            <a
                                href="mailto:razaainaan@gmail.com"
                                className="w-full py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2 block text-center"
                            >
                                Send Email Directly <Mail size={18} />
                            </a>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
