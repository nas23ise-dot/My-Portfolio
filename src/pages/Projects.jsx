import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaGooglePlay, FaMobile } from 'react-icons/fa'

const Projects = () => {
    const projects = [
        {
            title: "🎓 InternAI – AI Internship Platform",
            description: "An AI-powered internship discovery and application tracking platform for students, featuring real-time job search, AI career assistant, and profile management with Firebase integration.",
            tech: ["React", "Firebase", "Node.js", "AI Integration", "Real-time"],
            github: "https://github.com/nas23ise-dot/InternAI",
            live: "https://ai-internship-frontend.onrender.com"
        },
        {
            title: "🎨 My Portfolio – Personal Website",
            description: "A modern, responsive portfolio website built to showcase my projects and skills. Features smooth animations, dark mode, and a clean user interface.",
            tech: ["React", "Framer Motion", "Vite", "React Router"],
            github: "https://github.com/nas23ise-dot/My-Portfolio",
            live: null
        },
        {
            title: "🪙 Gold Shopy – Digital Gold Management",
            description: "A full-stack web application that enables users to buy, sell, and manage digital gold with real-time tracking. Features a seamless customer experience and powerful admin panel for shop owners.",
            tech: ["React", "Node.js", "MongoDB", "Express", "Full Stack"],
            github: null,
            live: "https://gold-shopy-frontend.onrender.com",
            api: "https://gold-shopy.onrender.com"
        },
        {
            title: "🛡️ Safe City – Safety Companion App",
            description: "A comprehensive safety application with real-time GPS tracking, emergency SOS alerts, 3-layer protection system, and community volunteer network. Features cyber & physical emergency response.",
            tech: ["Flutter", "Dart", "Google Maps", "Firebase", "Provider"],
            github: "https://github.com/nas23ise-dot/SafeCity",
            live: "https://nas23ise-dot.github.io/SafeCity/",
            appType: "mobile"
        },
        {
            title: "✨ Sparkle Wash – Vehicle Cleaning Service",
            description: "A student project for door-to-door vehicle cleaning service. Users can book car or bike washes at their home through a clean, responsive web interface.",
            tech: ["React", "TypeScript", "Netlify", "Responsive Design"],
            github: null,
            live: "https://sparkle-washer.netlify.app"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="container section"
        >
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="section-title">Projects</h1>
                <div className="section-underline" />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px' }}
            >
                Here are some of my recent projects. Click the links to view them live!
            </motion.p>

            {/* Projects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '1.5rem'
                }}
            >
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        className="card"
                        whileHover={{
                            y: -8,
                            boxShadow: '0 20px 50px -15px var(--accent-glow)'
                        }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            border: '1px solid rgba(139, 92, 246, 0.15)'
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.15rem',
                            marginBottom: '0.8rem',
                            color: '#fff',
                            fontWeight: 600
                        }}>
                            {project.title}
                        </h3>

                        <p style={{
                            color: 'var(--text-secondary)',
                            marginBottom: '1.2rem',
                            lineHeight: '1.6',
                            fontSize: '0.9rem',
                            flex: 1
                        }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={{
                                    fontSize: '0.7rem',
                                    padding: '0.2rem 0.6rem',
                                    background: 'rgba(139, 92, 246, 0.15)',
                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                    borderRadius: '20px',
                                    color: 'var(--accent-primary)'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.85rem',
                                        transition: 'color 0.3s'
                                    }}
                                >
                                    <FaGithub /> GitHub
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        color: 'var(--accent-primary)',
                                        fontSize: '0.85rem',
                                        transition: 'color 0.3s',
                                        fontWeight: 500
                                    }}
                                >
                                    {project.appType === 'mobile' ? <FaMobile /> : <FaExternalLinkAlt />}
                                    {project.appType === 'mobile' ? 'Download' : 'Live Demo'}
                                </a>
                            )}
                            {project.api && (
                                <a
                                    href={project.api}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        color: 'var(--text-muted)',
                                        fontSize: '0.85rem',
                                        transition: 'color 0.3s'
                                    }}
                                >
                                    <FaExternalLinkAlt /> API
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Projects
