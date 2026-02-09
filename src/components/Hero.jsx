import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Software Developer
                    </h2>
                    <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Hi, I'm <span style={{ color: 'var(--text-primary)' }}>Parameshwaran S</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
                        Oriented software developer with 4+ years of professional work experience.
                        specializing in Power Platform, SharePoint, and full-stack development.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
