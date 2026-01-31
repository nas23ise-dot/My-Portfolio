import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="container section"
            style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
        >
            <div className="hero-content" style={{ maxWidth: '700px' }}>
                {/* Avatar */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-avatar"
                    style={{
                        width: 'clamp(120px, 30vw, 180px)',
                        height: 'clamp(120px, 30vw, 180px)',
                        margin: '0 auto 2rem',
                        position: 'relative',
                        animation: 'pulse-glow 3s ease-in-out infinite'
                    }}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}profile.jpg`}
                        alt="Naveen S"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid var(--accent-primary)',
                            boxShadow: '0 0 40px var(--accent-glow)',
                            animation: 'float 6s ease-in-out infinite'
                        }}
                    />
                </motion.div>

                {/* Name */}
                <motion.h1
                    className="gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 800, marginBottom: '0.5rem' }}
                >
                    Naveen S
                </motion.h1>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ fontSize: 'clamp(0.9rem, 3vw, 1.3rem)', fontWeight: 400, color: 'var(--text-secondary)', marginBottom: '1rem' }}
                >
                    Student at <span style={{ color: 'var(--accent-primary)' }}>CMRIT</span> | Full Stack Developer
                </motion.h2>

                {/* Tech Stack */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-muted)',
                        marginBottom: '2rem',
                        letterSpacing: '0.5px'
                    }}
                >
                    HTML • CSS • JavaScript (ES6+) • React.js • Node.js • Python (DSA) • MySQL • MongoDB
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <Link to="/projects">
                        <button className="btn-primary">View Projects</button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn-secondary">Contact Me</button>
                    </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '1.4rem' }}
                >
                    <a href="https://github.com/nas23ise-dot" target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/naveen-s-b77a03343/" target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                        <FaLinkedin />
                    </a>
                    <a href="https://leetcode.com/u/Naveen_031" target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                        <SiLeetcode />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=huesh180@gmail.com" target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                        <FaEnvelope />
                    </a>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Home
