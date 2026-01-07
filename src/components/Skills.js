import React from 'react';
// Skills component displaying technical expertise

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['JavaScript', 'Java', 'Python', 'HTML5', 'CSS3']
        },
        {
            title: 'Frameworks & Libraries',
            skills: ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'Tailwind CSS']
        },
        {
            title: 'Databases',
            skills: ['MySQL', 'MongoDB']
        },
        {
            title: 'DevOps & Tools',
            skills: ['Git/GitHub', 'Linux', 'Docker', 'AWS', 'Terraform']
        }
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <h2 className="section-title" style={{
                    fontSize: '2.5rem',
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}>
                    Technical <span style={{ color: 'var(--accent-color)' }}>Skills</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass-card" style={{ padding: '30px' }}>
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '20px',
                                color: 'var(--accent-color)',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                paddingBottom: '10px'
                            }}>
                                {category.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {category.skills.map(skill => (
                                    <span key={skill} style={{
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        color: '#e0e0e0',
                                        fontSize: '0.95rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.background = 'var(--accent-color)';
                                            e.currentTarget.style.borderColor = 'var(--accent-color)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
