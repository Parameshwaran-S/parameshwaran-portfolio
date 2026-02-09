import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
                        <div>
                            <h2>About Me</h2>
                            <p style={{ marginBottom: '2rem' }}>
                                I am a dedicated software developer with over 4 years of experience working with both small and large teams across multiple projects.
                                My expertise lies in designing, developing, and maintaining software applications using Power Apps, Power Automate, Power BI, SharePoint, and related platforms.
                            </p>
                            <p style={{ marginBottom: '2rem' }}>
                                I thrive in both remote and office environments, capable of working independently while providing technical support and resolving issues efficiently.
                            </p>

                            <div style={{ display: 'grid', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <MapPin className="text-accent" /> <span>Trivandrum, Kerala</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Mail className="text-secondary" /> <a href="mailto:paramuu1997@gmail.com">paramuu1997@gmail.com</a>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Phone className="text-secondary" /> <a href="tel:+919020406800">+91 9020406800</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3>Education</h3>
                            <div className="card" style={{ marginTop: '2rem' }}>
                                <h4 style={{ color: 'var(--accent-primary)' }}>B.Tech in Computer Science and Engineering</h4>
                                <p>APJ Abdul Kalam Technological University, Kerala</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    <span>Aug 2015 - May 2019</span>
                                    <span>CGPA: 6.5</span>
                                </div>
                            </div>

                            <h3 style={{ marginTop: '3rem' }}>Certifications</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                                <div className="card" style={{ padding: '1rem' }}>
                                    <strong>PL 400</strong> Microsoft Power Platform Developer Associate
                                </div>
                                <div className="card" style={{ padding: '1rem' }}>
                                    <strong>PL 900</strong> Microsoft Power Platform Fundamentals
                                </div>
                                <div className="card" style={{ padding: '1rem' }}>
                                    <strong>MB 230</strong> Microsoft Dynamics 365 Fundamentals
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
