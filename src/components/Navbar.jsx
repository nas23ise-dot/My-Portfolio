import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const links = [
    { name: 'Home', to: '/', icon: <FaHome /> },
    { name: 'About', to: '/about', icon: <FaUser /> },
    { name: 'Skills', to: '/skills', icon: <FaCode /> },
    { name: 'Projects', to: '/projects', icon: <FaProjectDiagram /> },
    { name: 'Contact', to: '/contact', icon: <FaEnvelope /> },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <nav className="navbar" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                backdropFilter: 'blur(10px)',
                background: 'rgba(10, 10, 10, 0.9)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '1rem 2rem'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
                    <NavLink to="/" className="nav-logo" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
                        Naveen<span className="gradient-text">.S</span>
                    </NavLink>

                    {/* Desktop Menu */}
                    <ul className="desktop-menu" style={{ gap: '2rem', alignItems: 'center' }}>
                        {links.map((link) => (
                            <li key={link.name} style={{ position: 'relative' }}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                    style={({ isActive }) => ({
                                        opacity: isActive ? 1 : 0.7,
                                        fontWeight: isActive ? 500 : 400,
                                        position: 'relative',
                                        padding: '0.5rem 0'
                                    })}
                                >
                                    {link.name}
                                    {location.pathname === link.to && (
                                        <motion.div
                                            layoutId="underline"
                                            style={{
                                                position: 'absolute',
                                                bottom: '-2px',
                                                left: 0,
                                                right: 0,
                                                height: '2px',
                                                background: 'var(--accent-gradient)',
                                                borderRadius: '2px'
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="mobile-toggle"
                        style={{ fontSize: '1.5rem', color: '#fff' }}
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={toggleMenu}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0, 0, 0, 0.6)',
                                zIndex: 1001,
                                backdropFilter: 'blur(4px)'
                            }}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '280px',
                                maxWidth: '80vw',
                                height: '100%',
                                background: 'linear-gradient(180deg, #0a0a0a 0%, #121212 100%)',
                                zIndex: 1002,
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '4px 0 30px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            {/* Sidebar Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1.5rem',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                            }}>
                                <div style={{
                                    position: 'relative',
                                    padding: '0.5rem 1rem'
                                }}>
                                    {/* Corner brackets */}
                                    <span style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '12px',
                                        height: '12px',
                                        borderLeft: '2px solid var(--accent-primary)',
                                        borderTop: '2px solid var(--accent-primary)'
                                    }} />
                                    <span style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: '12px',
                                        height: '12px',
                                        borderRight: '2px solid var(--accent-primary)',
                                        borderTop: '2px solid var(--accent-primary)'
                                    }} />
                                    <span style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '12px',
                                        height: '12px',
                                        borderLeft: '2px solid var(--accent-primary)',
                                        borderBottom: '2px solid var(--accent-primary)'
                                    }} />
                                    <span style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        width: '12px',
                                        height: '12px',
                                        borderRight: '2px solid var(--accent-primary)',
                                        borderBottom: '2px solid var(--accent-primary)'
                                    }} />
                                    <span style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 300,
                                        letterSpacing: '3px',
                                        fontFamily: 'serif'
                                    }}>
                                        <span style={{ fontStyle: 'italic' }}>M</span>enu
                                    </span>
                                </div>
                                <button
                                    onClick={toggleMenu}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontSize: '1.2rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav style={{ flex: 1, padding: '2rem 0' }}>
                                <ul style={{ display: 'flex', flexDirection: 'column' }}>
                                    {links.map((link, idx) => (
                                        <motion.li
                                            key={link.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <NavLink
                                                to={link.to}
                                                onClick={toggleMenu}
                                                style={({ isActive }) => ({
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '1rem',
                                                    padding: '1rem 2rem',
                                                    color: isActive ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.7)',
                                                    fontSize: '1.1rem',
                                                    fontWeight: isActive ? 600 : 400,
                                                    transition: 'all 0.3s',
                                                    borderLeft: isActive ? '3px solid var(--accent-primary)' : '3px solid transparent',
                                                    background: isActive ? 'rgba(139, 92, 246, 0.1)' : 'transparent'
                                                })}
                                            >
                                                <span style={{ fontSize: '1.2rem', width: '24px', textAlign: 'center' }}>
                                                    {link.icon}
                                                </span>
                                                {link.name}
                                            </NavLink>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Footer */}
                            <div style={{
                                padding: '1.5rem 2rem',
                                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                                color: 'var(--text-muted)',
                                fontSize: '0.85rem'
                            }}>
                                <p>© 2025 Naveen S</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style>{`
                .navbar {
                    padding: 0.75rem 1rem !important;
                }
                .navbar .nav-logo {
                    font-size: 1.2rem !important;
                }
                .desktop-menu { display: none; }
                .mobile-toggle { 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s;
                }
                .mobile-toggle:active {
                    background: rgba(139, 92, 246, 0.2);
                    transform: scale(0.95);
                }
                @media (min-width: 768px) {
                    .navbar {
                        padding: 1rem 2rem !important;
                    }
                    .navbar .nav-logo {
                        font-size: 1.5rem !important;
                    }
                    .desktop-menu { display: flex; }
                    .mobile-toggle { display: none; }
                }
            `}</style>
        </>
    );
};

export default Navbar;
