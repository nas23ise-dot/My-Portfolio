import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className="navbar" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backdropFilter: 'blur(10px)',
            background: 'rgba(10, 10, 10, 0.8)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '1rem 2rem'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
                <NavLink to="/" className="nav-logo" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
                    Naveen<span className="gradient-text">.S</span>
                </NavLink>

                {/* Desktop Menu */}
                <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
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
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            overflow: 'hidden',
                            background: 'var(--bg-dark)',
                            borderBottom: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <ul className="mobile-menu-list" style={{ padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {links.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.to}
                                        style={({ isActive }) => ({
                                            color: isActive ? 'var(--accent-primary)' : '#fff',
                                            fontSize: '1.1rem'
                                        })}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
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
            width: 40px;
            height: 40px;
            border-radius: 8px;
            transition: background 0.3s;
        }
        .mobile-toggle:active {
            background: rgba(139, 92, 246, 0.2);
        }
        .mobile-menu-list {
            padding: 0.75rem 1rem !important;
        }
        .mobile-menu-list li {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .mobile-menu-list li:last-child {
            border-bottom: none;
        }
        .mobile-menu-list a {
            display: block;
            padding: 0.5rem 0;
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
        @media (max-width: 360px) {
            .navbar {
                padding: 0.6rem 0.75rem !important;
            }
            .navbar .nav-logo {
                font-size: 1.1rem !important;
            }
            .mobile-toggle {
                width: 36px;
                height: 36px;
                font-size: 1.2rem !important;
            }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
