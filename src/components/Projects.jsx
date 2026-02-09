import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Fluence Line Automation',
            role: 'Power Platform Lead',
            descriptions: [
                'Developed an assembly line automation and traceability solution for a manufacturing environment.',
                'Replaced manual Excel tracking with structured, role-based Power Apps.',
                'Connected all apps via Power Automate workflows and centralized data storage.',
                'Integrated with TestRail for automated test run creation and result posting.'
            ]
        },
        {
            title: 'Risk Register',
            role: 'Power Platform Developer',
            descriptions: [
                'Developed an application for managing Project/Program risks.',
                'Utilized Power Apps, Power Automate, and Power BI with SharePoint Online backend.',
                'Implemented advanced security with SharePoint item-level constraints.',
                'Created different user roles ensuring proper access control.'
            ]
        },
        {
            title: 'Internal Tools Suite',
            role: 'Power Platform Developer',
            descriptions: [
                'Built a Project Management Tool for streamlining workflows.',
                'Created a Ticket Management App for issue tracking.',
                'Implemented various internal automations to improve efficiency.'
            ]
        }
    ];

    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Featured Projects</h2>

                <div className="grid grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            className="card"
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                {project.role}
                            </p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                                {project.descriptions.map((desc, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
