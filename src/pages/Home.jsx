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
            <div className="hero-content" style={{ maxWidth: '800px' }}>
                {/* Avatar with HUD Frame */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-avatar"
                    style={{
                        width: 'clamp(140px, 30vw, 200px)',
                        height: 'clamp(140px, 30vw, 200px)',
                        margin: '0 auto 2.5rem',
                        position: 'relative',
                    }}
                >
                    {/* Cyberpunk corner brackets */}
                    <div style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '-10px',
                        width: '30px',
                        height: '30px',
                        borderTop: '3px solid var(--accent-primary)',
                        borderLeft: '3px solid var(--accent-primary)',
                        boxShadow: '0 0 10px var(--accent-primary)',
                        zIndex: 10
                    }} />
                    <div style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px',
                        width: '30px',
                        height: '30px',
                        borderTop: '3px solid var(--accent-primary)',
                        borderRight: '3px solid var(--accent-primary)',
                        boxShadow: '0 0 10px var(--accent-primary)',
                        zIndex: 10
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: '-10px',
                        width: '30px',
                        height: '30px',
                        borderBottom: '3px solid var(--accent-primary)',
                        borderLeft: '3px solid var(--accent-primary)',
                        boxShadow: '0 0 10px var(--accent-primary)',
                        zIndex: 10
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-10px',
                        right: '-10px',
                        width: '30px',
                        height: '30px',
                        borderBottom: '3px solid var(--accent-primary)',
                        borderRight: '3px solid var(--accent-primary)',
                        boxShadow: '0 0 10px var(--accent-primary)',
                        zIndex: 10
                    }} />
                    <img
                        src={`${import.meta.env.BASE_URL}profile.jpg`}
                        alt="Naveen S"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            border: '2px solid var(--accent-primary)',
                            boxShadow: '0 0 30px rgba(0, 255, 136, 0.4), inset 0 0 30px rgba(0, 255, 136, 0.1)',
                            animation: 'float 6s ease-in-out infinite'
                        }}
                    />
                </motion.div>

                {/* Glitch Name */}
                <motion.h1
                    className="cyber-glitch"
                    data-text="NAVEEN S"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ 
                        fontSize: 'clamp(2.5rem, 10vw, 4rem)', 
                        fontWeight: 900, 
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'var(--accent-primary)',
                        textShadow: '0 0 20px rgba(0, 255, 136, 0.8), 0 0 40px rgba(0, 255, 136, 0.4)'
                    }}
                >
                    NAVEEN S
                </motion.h1>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ 
                        fontSize: 'clamp(1rem, 3.5vw, 1.4rem)', 
                        fontWeight: 400, 
                        color: 'var(--text-secondary)', 
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-accent)',
                        letterSpacing: '0.1em'
                    }}
                >
                    Student at <span style={{ color: 'var(--accent-tertiary)', textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' }}>CMRIT</span> // AI-Powered Full Stack Developer
                </motion.h2>

                {/* Tech Stack - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        padding: '1rem 1.5rem',
                        marginBottom: '2.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        color: 'var(--accent-primary)',
                        clipPath: 'polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))',
                        boxShadow: '0 0 15px rgba(0, 255, 136, 0.15)'
                    }}
                >
                    <span style={{ color: 'var(--text-muted)' }}>{'>  '}</span>
                    <span>LOADING SKILLS:</span>
                    <span style={{ color: 'var(--accent-tertiary)' }}> MERN Stack</span>
                    <span style={{ color: 'var(--text-muted)' }}> | </span>
                    <span style={{ color: 'var(--accent-tertiary)' }}>LLM & AI</span>
                    <span style={{ color: 'var(--text-muted)' }}> | </span>
                    <span style={{ color: 'var(--accent-tertiary)' }}>Real-Time Systems</span>
                    <span style={{ color: 'var(--text-muted)' }}> | </span>
                    <span style={{ color: 'var(--accent-tertiary)' }}>RAG Systems</span>
                    <span style={{ color: 'var(--text-muted)' }}> | </span>
                    <span style={{ color: 'var(--accent-tertiary)' }}>DSA</span>
                    <span style={{ color: 'var(--text-muted)' }}> | </span>
                    <span style={{ color: 'var(--accent-tertiary)' }}>REST APIs</span>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <Link to="/projects">
                        <button className="btn-primary">{'>'} VIEW PROJECTS</button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn-secondary">{'>'} CONTACT ME</button>
                    </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: '1.6rem' }}
                >
                    <a href="https://github.com/NavDevs" target="_blank" rel="noopener noreferrer"
                        style={{ 
                            color: 'var(--text-secondary)', 
                            transition: 'all 0.3s',
                            padding: '0.5rem',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--accent-primary)';
                            e.currentTarget.style.textShadow = '0 0 15px rgba(0, 255, 136, 0.6)';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.textShadow = 'none';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/naveen-s-b77a03343/" target="_blank" rel="noopener noreferrer"
                        style={{ 
                            color: 'var(--text-secondary)', 
                            transition: 'all 0.3s',
                            padding: '0.5rem',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--accent-tertiary)';
                            e.currentTarget.style.textShadow = '0 0 15px rgba(0, 212, 255, 0.6)';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.textShadow = 'none';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <FaLinkedin />
                    </a>
                    <a href="https://leetcode.com/u/Naveen_031" target="_blank" rel="noopener noreferrer"
                        style={{ 
                            color: 'var(--text-secondary)', 
                            transition: 'all 0.3s',
                            padding: '0.5rem',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--accent-secondary)';
                            e.currentTarget.style.textShadow = '0 0 15px rgba(255, 0, 255, 0.6)';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.textShadow = 'none';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <SiLeetcode />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=huesh180@gmail.com" target="_blank" rel="noopener noreferrer"
                        style={{ 
                            color: 'var(--text-secondary)', 
                            transition: 'all 0.3s',
                            padding: '0.5rem',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--accent-primary)';
                            e.currentTarget.style.textShadow = '0 0 15px rgba(0, 255, 136, 0.6)';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.textShadow = 'none';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <FaEnvelope />
                    </a>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Home
