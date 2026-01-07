import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ background: 'rgba(15, 15, 15, 0.85)', backdropFilter: 'blur(5px)' }}>
            <div className="container">
                <h2 className="section-title" style={{
                    fontSize: '2.5rem',
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}>
                    Get In <span style={{ color: 'var(--accent-color)' }}>Touch</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '50px'
                }}>
                    <div className="contact-info">
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Let's Talk</h3>
                        <p style={{ color: '#aaa', marginBottom: '2.5rem' }}>
                            I'm open to new opportunities and collaborations. Feel free to reach out to me for any queries or just to say hi!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-color)',
                                    fontSize: '1.2rem'
                                }}>
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Phone</h4>
                                    <p style={{ color: '#ccc' }}>+91 9361917993</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-color)',
                                    fontSize: '1.2rem'
                                }}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Email</h4>
                                    <p style={{ color: '#ccc' }}>Bharanid410@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-color)',
                                    fontSize: '1.2rem'
                                }}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Location</h4>
                                    <p style={{ color: '#ccc' }}>Mayiladuthurai, Tamil Nadu</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form glass-card" style={{ padding: '40px' }}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div style={{ marginBottom: '20px' }}>
                                <input type="text" placeholder="Your Name" style={{
                                    width: '100%',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    outline: 'none'
                                }} />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <input type="email" placeholder="Your Email" style={{
                                    width: '100%',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    outline: 'none'
                                }} />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <textarea rows="5" placeholder="Your Message" style={{
                                    width: '100%',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    outline: 'none',
                                    resize: 'none'
                                }}></textarea>
                            </div>
                            <button type="submit" style={{
                                width: '100%',
                                background: 'var(--accent-color)',
                                color: '#fff',
                                padding: '15px',
                                borderRadius: '8px',
                                border: 'none',
                                fontWeight: '600',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'background 0.3s'
                            }}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
