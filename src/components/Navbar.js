import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '15px 0' : '25px 0',
        background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '5px' }}>
          Bharani<span style={{ color: 'var(--accent-color)' }}>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '30px' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '500', opacity: 0.9 }}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - simplified for now, assuming responsive needs logic */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: '#1a1a1a',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ color: '#fff', fontSize: '1.1rem', textAlign: 'center' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
