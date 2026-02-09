import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const jobs = [
        {
            company: 'Nest Digital STC, Trivandrum',
            role: 'Senior Software Engineer',
            period: 'Feb 2024 - Present',
            description: [
                'Completed PL-400 Microsoft Power Platform Developer Certification and Power Automate Desktop course',
                'Visited PCB Manufacturing Plant at Nest SFO for implementing automation to make some repetitive activities easier.'
            ]
        },
        {
            company: 'Bourntec Solutions Inc, Kochi',
            role: 'Associate Software Engineer',
            period: 'Sep 2021 – Nov 2024',
            description: [
                'Design, develop, and maintain software applications using Power Apps, Power Automate, Power Bi, SharePoint, and other related Power platforms.',
                'Work with other engineers to design and implement software architectures.',
                'Provided technical support to users and resolved issues in a timely manner.'
            ]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Work Experience</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {jobs.map((job, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="card" style={{ padding: '1.5rem' }}>
                                <span className="text-accent" style={{ fontSize: '0.875rem', fontWeight: '600' }}>{job.period}</span>
                                <h3 style={{ margin: '0.5rem 0' }}>{job.company}</h3>
                                <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{job.role}</h4>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                                    {job.description.map((desc, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
