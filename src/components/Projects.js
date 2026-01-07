import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'E-commerce Store',
            description: 'Developed an interactive eCommerce store application to simulate real-world online shopping experiences. Implemented responsive and user-friendly UI using HTML, CSS, and JavaScript. Integrated essential features such as product browsing, adding items to the shopping cart, and viewing product details.',
            icon: 'fa-shopping-cart',
            tags: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://shipify-seven.vercel.app/'
        },
        {
            title: 'Saas Landing Page - VirtualR',
            description: 'Created a dynamic and visually appealing SaaS landing page for VirtualR using React.js and Tailwind CSS. Designed a responsive and modern layout, ensuring a seamless experience across both mobile and desktop devices. Focused on performance optimization.',
            icon: 'fa-rocket',
            tags: ['React.js', 'Tailwind CSS'],
            link: 'https://virtualreal.vercel.app/'
        },
        {
            title: 'Spotify Clone',
            description: 'Built a Spotify clone application to replicate the core functionalities of the popular music streaming service. Utilized React.js for dynamic, state-driven components and smooth navigation. Designed a responsive, user-friendly UI using Bootstrap.',
            icon: 'fa-music',
            tags: ['React.js', 'Bootstrap'],
            link: 'https://github.com/07bharani'
        }
    ];

    return (
        <section id="projects" className="section-padding" style={{ background: 'rgba(15, 15, 15, 0.85)', backdropFilter: 'blur(5px)' }}>
            <div className="container">
                <h2 className="section-title" style={{
                    fontSize: '2.5rem',
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}>
                    Featured <span style={{ color: 'var(--accent-color)' }}>Projects</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '30px'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card project-card" style={{
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(220, 20, 60, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '20px',
                                color: 'var(--accent-color)',
                                fontSize: '1.5rem'
                            }}>
                                <i className={`fas ${project.icon}`}></i>
                            </div>

                            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{project.title}</h3>
                            <p style={{ color: '#ccc', marginBottom: '20px', flex: 1 }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '5px 12px',
                                        borderRadius: '15px',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: '#aaa',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                                color: 'var(--accent-color)',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                View Demo <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
