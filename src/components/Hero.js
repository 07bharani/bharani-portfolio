import React, { useState, useEffect } from 'react';

import resume from '../pdf_images/Bharanidharan_resume_1.pdf';

const TypingText = ({ strings }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % strings.length;
            const fullText = strings[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 100);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, strings, typingSpeed]);

    return <span style={{ color: 'var(--accent-color)' }}>{text}<span className="cursor">|</span></span>;
};

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '80px',
            background: 'radial-gradient(circle at 50% 50%, rgba(220, 20, 60, 0.15) 0%, transparent 70%)'
        }}>
            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: 'var(--accent-color)',
                        marginBottom: '1rem',
                        fontWeight: '500',
                        letterSpacing: '2px'
                    }}>
                        HELLO, I'M
                    </h2>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: '700',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        color: '#fff'
                    }}>
                        Bharanidharan D
                    </h1>
                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        marginBottom: '2rem',
                        color: '#e0e0e0'
                    }}>
                        I am a <TypingText strings={['Full Stack Developer', 'MERN Stack Expert', 'React Native Developer']} />
                    </h3>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        marginBottom: '2.5rem'
                    }}>
                        Full Stack Developer with 1.8 years of experience in MERN stack development, React Native, and AWS cloud deployment. Strong in building scalable applications.
                    </p>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#contact" className="btn-primary" style={{
                            background: 'var(--accent-color)',
                            color: '#fff',
                            padding: '12px 30px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            display: 'inline-block',
                            boxShadow: '0 10px 30px var(--accent-glow)'
                        }}>
                            Hire Me
                        </a>
                        <a href={resume} download="Bharanidharan_Resume.pdf" className="btn-outline" style={{
                            background: 'transparent',
                            color: '#fff',
                            border: '2px solid rgba(255,255,255,0.2)',
                            padding: '12px 30px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            display: 'inline-block'
                        }}>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
