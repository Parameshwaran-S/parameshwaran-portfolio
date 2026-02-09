import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, UserCheck } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Get In Touch</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3>Contact Details</h3>
                        <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                            Feel free to reach out for collaborations or opportunities.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a href="mailto:paramuu1997@gmail.com" className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: 'none', background: 'var(--bg-primary)' }}>
                                <Mail size={24} color="var(--accent-primary)" />
                                <span className="text-secondary">paramuu1997@gmail.com</span>
                            </a>
                            <a href="tel:+919020406800" className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: 'none', background: 'var(--bg-primary)' }}>
                                <Phone size={24} color="var(--accent-primary)" />
                                <span className="text-secondary">+91 9020406800</span>
                            </a>
                            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: 'none', background: 'var(--bg-primary)' }}>
                                <MapPin size={24} color="var(--accent-primary)" />
                                <span className="text-secondary">Trivandrum, Kerala</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3>Reference</h3>
                        <div className="card" style={{ marginTop: '1rem', background: 'var(--bg-primary)', border: 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <UserCheck size={32} color="var(--accent-secondary)" />
                                <div>
                                    <h4 style={{ margin: 0 }}>Arun Hariharan</h4>
                                    <p style={{ fontSize: '0.875rem', margin: 0 }}>Practice Lead - Automation & Intelligence AI</p>
                                    <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Nest Digital STC</p>
                                </div>
                            </div>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                                <Phone size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                                <a href="tel:+919995822625">+91 9995822625</a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
