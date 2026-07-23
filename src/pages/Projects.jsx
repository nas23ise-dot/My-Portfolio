import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaGooglePlay, FaMobile } from 'react-icons/fa'

const Projects = () => {
    const projects = [
        {
            title: "🌟 Clarity – AI Architecture Analysis Tool",
            description: "A cutting-edge developer tool that instantly understands, visualizes, and audits any GitHub repository. Generates interactive dependency graphs using Dagre, summarizes architecture with Groq LLM (Llama 3.3 70B), and audits environments for secrets. Features an AI-powered code interaction chat for deep codebase exploration.",
            tech: ["React", "FastAPI", "PostgreSQL", "Llama 3.3", "Framer Motion", "Supabase", "OAuth 2.0"],
            github: null,
            live: "https://clarity-8372.onrender.com/"
        },
        {
            title: "🚀 CollabCode – Real-Time Collaborative Code Editor",
            description: "A full-featured browser-based collaborative code editor where multiple developers build full-stack apps together in real time. Features Monaco editor with Yjs CRDT collaboration, integrated Linux terminal, GitHub import/push, 22 programming languages with live preview, persistent team chat, and real-time cursors & presence.",
            tech: ["React", "Node.js", "MongoDB", "Socket.IO", "Yjs CRDT", "Monaco Editor", "xterm.js", "Clerk Auth", "GitHub API", "Redis"],
            github: "https://github.com/NavDevs/CollabCode",
            live: "https://collabcode-hu9d.onrender.com/"
        },
        {
            title: "⏱️ CronDash – Visual Cron Job Manager",
            description: "A web-based cron job management system with a terminal-style interface. Schedule, monitor, and manage automated HTTP tasks with precision. Features cron expression scheduling, execution history with status logs, Slack/email/webhook failure alerts, and a 'keep-alive' system for Render free-tier apps.",
            tech: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS", "PostgreSQL", "Prisma", "JWT Auth", "Docker", "node-cron"],
            github: "https://github.com/NavDevs/CronDash",
            live: "https://crondash-18xd.onrender.com/"
        },
        {
            title: "🔍 DPI Engine – Deep Packet Inspection System",
            description: "A multi-threaded Deep Packet Inspection system that analyzes network traffic to identify applications, block unwanted traffic, and provide detailed insights. Features SNI extraction from TLS handshakes, flow-based blocking, load-balanced thread architecture, and a Flask web dashboard.",
            tech: ["C++17", "Python", "Flask", "Multi-threading", "TLS/SNI", "PCAP", "Network Protocols"],
            github: "https://github.com/NavDevs/DPI-Engine",
            live: "https://packet-analyzer-virid.vercel.app/"
        },
        {
            title: "🚑 EV Priority System – ML Traffic Control",
            description: "ML-powered emergency vehicle priority system using Random Forest algorithm with 99.2% accuracy. Optimizes traffic signal preemption for 60% faster emergency response times across 17 road layouts.",
            tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Random Forest ML"],
            github: "https://github.com/NavDevs/Emergency_Vehicles",
            live: "https://emergency-vehicles.onrender.com"
        },
        {
            title: "🧠 DocMind – AI Document Assistant",
            description: "A full-stack RAG application that lets you upload PDFs and chat with them using AI. Get instant summaries, ask questions, and track usage through an analytics dashboard.",
            tech: ["React", "Node.js", "MongoDB", "OpenAI", "Firebase", "Pinecone"],
            github: "https://github.com/NavDevs/DocMind",
            live: "https://docmind-client.onrender.com",
            api: "https://docmind-server.onrender.com"
        },
        {
            title: "🎓 InternAI – AI Internship Platform",
            description: "An AI-powered internship discovery and application tracking platform for students, featuring real-time job search, AI career assistant, and profile management with Firebase integration.",
            tech: ["React", "Firebase", "Node.js", "AI Integration", "Real-time"],
            github: "https://github.com/nas23ise-dot/InternAI",
            live: "https://ai-internship-frontend.onrender.com"
        },
        {
            title: "⚡ ExplainX – AI Text Explainer",
            description: "A powerful Chrome Extension that provides instant AI-powered explanations for any text on the web. Select any text, click ExplainX, and get clear, concise explanations in seconds.",
            tech: ["Chrome Extension", "JavaScript", "AI Integration", "HTML", "CSS"],
            github: "https://github.com/navdevs/ExplainX",
            live: "https://navdevs.github.io/ExplainX/"
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
            live: "https://safe-cty.netlify.app/",
            apk: "https://drive.google.com/drive/folders/1Osf8jMaN_GrT0kpfCPdcXufKZ2qOa4-k?usp=sharing"
        },
        {
            title: "✨ Sparkle Wash – Vehicle Cleaning Service",
            description: "A student project for door-to-door vehicle cleaning service. Users can book car or bike washes at their home through a clean, responsive web interface.",
            tech: ["React", "TypeScript", "Netlify", "Responsive Design"],
            github: null,
            live: "https://sparkle-washer.netlify.app"
        },
        {
            title: "📅 Smart Timetable Reminder – Academic Schedule Manager",
            description: "A full-featured mobile application built with React Native & Expo to help students manage their academic schedule efficiently. Provides intelligent reminders for classes, assignments, and exams with priority-based task management and customizable themes.",
            tech: ["React Native", "Expo SDK 54", "TypeScript", "Expo Router", "React Query", "Async Storage"],
            github: null,
            live: "https://campus-pulse-planner-fa9n.vercel.app/",
            appType: "mobile"
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
                <h1 className="section-title cyber-glitch" data-text="PROJECTS">PROJECTS</h1>
                <div className="section-underline" />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                style={{ 
                    color: 'var(--text-secondary)', 
                    marginBottom: '2rem', 
                    maxWidth: '600px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem'
                }}
            >
                {'>'} ACCESSING PROJECT DATABASE... SELECT A PROJECT TO VIEW DETAILS_
            </motion.p>

            {/* Projects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}
            >
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        className="card"
                        whileHover={{
                            y: -4,
                            boxShadow: '0 0 20px rgba(0, 255, 136, 0.4), 0 0 40px rgba(0, 255, 136, 0.2)'
                        }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-card)',
                            clipPath: 'polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))'
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.05rem',
                            marginBottom: '0.8rem',
                            color: 'var(--accent-primary)',
                            fontWeight: 700,
                            fontFamily: 'var(--font-heading)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
                        }}>
                            {project.title}
                        </h3>

                        <p style={{
                            color: 'var(--text-secondary)',
                            marginBottom: '1.2rem',
                            lineHeight: '1.6',
                            fontSize: '0.85rem',
                            flex: 1,
                            fontFamily: 'var(--font-body)'
                        }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={{
                                    fontSize: '0.7rem',
                                    padding: '0.25rem 0.6rem',
                                    background: 'rgba(0, 255, 136, 0.1)',
                                    border: '1px solid rgba(0, 255, 136, 0.3)',
                                    color: 'var(--accent-primary)',
                                    fontFamily: 'var(--font-accent)',
                                    letterSpacing: '0.05em',
                                    clipPath: 'polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))'
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
                                        fontSize: '0.8rem',
                                        fontFamily: 'var(--font-accent)',
                                        transition: 'all 0.3s',
                                        letterSpacing: '0.05em'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--accent-primary)';
                                        e.currentTarget.style.textShadow = '0 0 8px rgba(0, 255, 136, 0.5)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                        e.currentTarget.style.textShadow = 'none';
                                    }}
                                >
                                    <FaGithub /> [CODE]
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
                                        color: 'var(--accent-tertiary)',
                                        fontSize: '0.8rem',
                                        fontFamily: 'var(--font-accent)',
                                        transition: 'all 0.3s',
                                        fontWeight: 600,
                                        letterSpacing: '0.05em',
                                        textShadow: '0 0 8px rgba(0, 212, 255, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.textShadow = '0 0 15px rgba(0, 212, 255, 0.6)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.textShadow = '0 0 8px rgba(0, 212, 255, 0.3)';
                                    }}
                                >
                                    {project.appType === 'mobile' ? <FaMobile /> : <FaExternalLinkAlt />}
                                    {project.appType === 'mobile' ? '[APK]' : '[LIVE]'}
                                </a>
                            )}
                            {project.apk && (
                                <a
                                    href={project.apk}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        color: 'var(--text-muted)',
                                        fontSize: '0.8rem',
                                        fontFamily: 'var(--font-accent)',
                                        transition: 'all 0.3s',
                                        letterSpacing: '0.05em'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--accent-primary)';
                                        e.currentTarget.style.textShadow = '0 0 8px rgba(0, 255, 136, 0.5)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                        e.currentTarget.style.textShadow = 'none';
                                    }}
                                >
                                    <FaMobile /> [APK]
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
                                        fontSize: '0.8rem',
                                        fontFamily: 'var(--font-accent)',
                                        transition: 'all 0.3s',
                                        letterSpacing: '0.05em'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--accent-primary)';
                                        e.currentTarget.style.textShadow = '0 0 8px rgba(0, 255, 136, 0.5)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                        e.currentTarget.style.textShadow = 'none';
                                    }}
                                >
                                    <FaExternalLinkAlt /> [API]
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
