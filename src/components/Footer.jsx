import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            padding: '2rem 1rem',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.875rem'
        }}>
            <div className="container" style={{ margin: '0 auto' }}>
                <p>&copy; {new Date().getFullYear()} Parameshwaran S. All rights reserved.</p>
                <div style={{ marginTop: '0.5rem' }}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: 'var(--text-secondary)' }}>GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: 'var(--text-secondary)' }}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
