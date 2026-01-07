import React, { useEffect, useRef } from 'react';

const CyberBackground = () => {
    const binaryCanvasRef = useRef(null);
    const particleCanvasRef = useRef(null);

    // --- Binary Rain Effect ---
    useEffect(() => {
        const canvas = binaryCanvasRef.current;

        // Check if canvas is null before proceeding
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const styles = getComputedStyle(document.body);
        const accentColor = styles.getPropertyValue('--accent-color').trim() || '#dc143c';

        const fontSize = 14;
        const columns = Math.ceil(width / 20);
        const drops = new Array(columns).fill(1);

        const drawBinary = () => {
            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)'; // Trail effect
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = accentColor; // Font color
            ctx.font = `${fontSize}px 'Space Grotesk', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = Math.random() > 0.5 ? '1' : '0';

                ctx.fillText(text, i * 20, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(drawBinary, 50);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    // --- Particle Network Effect ---
    useEffect(() => {
        const canvas = particleCanvasRef.current;

        // Check if canvas is null before proceeding
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const styles = getComputedStyle(document.body);
        const accentColor = styles.getPropertyValue('--accent-color').trim() || '#dc143c';

        // Particle Config
        const particleCount = Math.min(Math.floor((width * height) / 15000), 100);
        const connectionDistance = 150;
        const mouseDistance = 200;

        const particles = [];
        const chars = ['{', '}', '</>', 'const', 'let', 'var', '&&', '||', '=>', 'func'];

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                this.isChar = Math.random() > 0.6;
                this.char = chars[Math.floor(Math.random() * chars.length)];
                this.color = Math.random() > 0.9 ? accentColor : 'rgba(255, 255, 255, 0.6)';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;

                if (this.isChar) {
                    ctx.font = '12px "Space Grotesk", monospace';
                    ctx.fillText(this.char, this.x, this.y);
                } else {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let mouse = { x: null, y: null };

        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        const opacity = 1 - distance / connectionDistance;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.1})`; // Subtle white lines
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // Mouse Connections
                if (mouse.x != null) {
                    const dx = particles[i].x - mouse.x;
                    const dy = particles[i].y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseDistance) {
                        ctx.beginPath();
                        const opacity = 1 - distance / mouseDistance;
                        ctx.strokeStyle = accentColor;
                        ctx.globalAlpha = opacity * 0.5;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }

            // Draw Particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'linear-gradient(to bottom, #050505, #101010)',
        }}>
            {/* Layer 1: Binary Rain (Back) */}
            <canvas
                ref={binaryCanvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.15, // Subtle background effect
                }}
            />

            {/* Layer 2: Particle Network (Front) */}
            <canvas
                ref={particleCanvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
};

export default CyberBackground;
