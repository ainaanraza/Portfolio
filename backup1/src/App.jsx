import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-star-blue selection:text-black cursor-none">
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
