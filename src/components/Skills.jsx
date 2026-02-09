import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        'Power Apps', 'Power Automate', 'Power BI', 'Dataverse',
        'SharePoint', 'SQL', 'Python', 'Azure DevOps'
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center' }}
                >
                    <h2 style={{ marginBottom: '3rem' }}>Technical Skills</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="tag"
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                                style={{ fontSize: '1.2rem', padding: '0.75rem 1.5rem', cursor: 'pointer' }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
