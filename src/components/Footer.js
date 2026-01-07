import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: '#050505',
            padding: '40px 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container">
                <p style={{ color: '#888', marginBottom: '10px' }}>
                    &copy; {new Date().getFullYear()} Bharanidharan D. All Rights Reserved.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
                    <a href="https://github.com/07bharani" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem' }}><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem' }}><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem' }}><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
