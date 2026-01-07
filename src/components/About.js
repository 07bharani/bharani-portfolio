import React from 'react';
import resume from '../pdf_images/Bharanidharan_resume_1.pdf';
import profileImg from '../pdf_images/pic-1.jpg';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'rgba(15, 15, 15, 0.85)', backdropFilter: 'blur(5px)' }}>
            <div className="container">
                <h2 className="section-title" style={{
                    fontSize: '2.5rem',
                    marginBottom: '3rem',
                    textAlign: 'center'
                }}>
                    About <span style={{ color: 'var(--accent-color)' }}>Me</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '50px',
                    alignItems: 'center'
                }}>
                    <div className="about-image" style={{ position: 'relative' }}>
                        <div style={{
                            width: '100%',
                            paddingBottom: '100%',
                            borderRadius: '20px',
                            background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '2px solid var(--accent-color)',
                            boxShadow: '0 0 20px rgba(220, 20, 60, 0.3)'
                        }}>
                            <img
                                src={profileImg}
                                alt="Bharanidharan D"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                    transform: 'scale(0.92) translateY(-15px)',
                                    borderRadius: '18px'
                                }}
                            />
                        </div>
                    </div>

                    <div className="about-content">
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                            Turning logical problems into <span style={{ color: 'var(--accent-color)' }}>Creative Solutions</span>
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            I am a passionate Full Stack Developer with a strong foundation in the MERN stack.
                            My journey involves building scalable applications, integrating APIs, and delivering performance-focused solutions.
                            I love tackling challenges and learning new technologies to build better digital experiences.
                        </p>

                        <div className="education-card glass-card" style={{ padding: '20px', marginTop: '30px' }}>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>
                                <i className="fas fa-graduation-cap" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i>
                                Education
                            </h4>
                            <div style={{ paddingLeft: '30px' }}>
                                <h5 style={{ fontSize: '1.2rem', color: '#fff' }}>BE- Computer Science</h5>
                                <p style={{ color: 'var(--text-secondary)' }}>Annamalai University FEAT (2020- 2024)</p>
                                <p style={{ color: 'var(--accent-color)', fontWeight: '600' }}>GPA: 8.3/10</p>
                            </div>
                        </div>

                        <a href={resume} download="Bharanidharan_Resume.pdf" className="btn-primary" style={{
                            background: 'var(--accent-color)',
                            color: '#fff',
                            padding: '12px 30px',
                            marginTop: '2rem',
                            borderRadius: '50px',
                            fontWeight: '600',
                            display: 'inline-block',
                            boxShadow: '0 10px 30px var(--accent-glow)'
                        }}>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
