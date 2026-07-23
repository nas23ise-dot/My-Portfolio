import { motion } from 'framer-motion'

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", level: 90 },
                { name: "JavaScript (ES6+)", level: 90 },
                { name: "TypeScript", level: 82 },
                { name: "Java", level: 80 },
                { name: "C++", level: 78 },
                { name: "C", level: 75 }
            ]
        },
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", level: 88 },
                { name: "Next.js", level: 80 },
                { name: "Framer Motion", level: 82 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 92 },
                { name: "Tailwind CSS", level: 85 },
                { name: "Bootstrap", level: 85 }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", level: 82 },
                { name: "Express.js", level: 80 },
                { name: "FastAPI", level: 85 },
                { name: "Socket.IO", level: 85 },
                { name: "RESTful APIs", level: 85 },
                { name: "Mongoose", level: 80 },
                { name: "Prisma", level: 78 },
                { name: "JWT Authentication", level: 78 },
                { name: "Supabase", level: 80 },
                { name: "Firebase", level: 75 }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MongoDB", level: 78 },
                { name: "PostgreSQL", level: 78 },
                { name: "MySQL", level: 80 },
                { name: "Redis", level: 70 }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git & GitHub", level: 88 },
                { name: "Vite", level: 85 },
                { name: "Jupyter Notebook", level: 82 },
                { name: "Vercel", level: 78 },
                { name: "Docker", level: 75 },
                { name: "Render", level: 75 }
            ]
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
                <h1 className="section-title cyber-glitch" data-text="SKILLS">SKILLS</h1>
                <div className="section-underline" />
            </motion.div>

            {/* Skills Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}
            >
                {skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={catIdx}
                        variants={itemVariants}
                        className="card"
                        style={{ 
                            padding: '1.5rem',
                            border: '1px solid var(--border)',
                            clipPath: 'polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))'
                        }}
                    >
                        <h3 style={{
                            color: catIdx % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                            fontSize: '1rem',
                            marginBottom: '1.5rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-heading)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            textShadow: catIdx % 2 === 0 
                                ? '0 0 10px rgba(0, 255, 136, 0.5)' 
                                : '0 0 10px rgba(255, 0, 255, 0.5)'
                        }}>
                            {'>'} {category.title}
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {category.skills.map((skill, idx) => (
                                <div key={idx}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ 
                                            color: '#fff', 
                                            fontSize: '0.85rem',
                                            fontFamily: 'var(--font-body)',
                                            letterSpacing: '0.05em'
                                        }}>{skill.name}</span>
                                        <span style={{ 
                                            color: 'var(--accent-primary)', 
                                            fontSize: '0.8rem',
                                            fontFamily: 'var(--font-accent)',
                                            textShadow: '0 0 8px rgba(0, 255, 136, 0.4)'
                                        }}>{skill.level}%</span>
                                    </div>
                                    <div style={{
                                        background: 'rgba(42, 42, 58, 0.5)',
                                        height: '8px',
                                        overflow: 'hidden',
                                        border: '1px solid var(--border)'
                                    }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.2, delay: 0.3 + catIdx * 0.1 + idx * 0.05 }}
                                            style={{
                                                height: '100%',
                                                background: catIdx % 2 === 0 
                                                    ? 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))' 
                                                    : 'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary))',
                                                boxShadow: catIdx % 2 === 0
                                                    ? '0 0 10px var(--accent-primary), 0 0 20px rgba(0, 255, 136, 0.3)'
                                                    : '0 0 10px var(--accent-secondary), 0 0 20px rgba(255, 0, 255, 0.3)'
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* OS Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '2rem' }}
            >
                <h3 style={{ 
                    color: 'var(--accent-tertiary)', 
                    fontSize: '1.1rem', 
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-heading)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    textShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
                }}>
                    {'>'} Operating_Systems
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {["Windows", "Ubuntu", "Linux"].map((os, idx) => (
                        <motion.span
                            key={idx}
                            whileHover={{
                                y: -3,
                                boxShadow: '0 0 15px rgba(0, 255, 136, 0.4)',
                                borderColor: 'var(--accent-primary)',
                                color: 'var(--accent-primary)'
                            }}
                            style={{
                                padding: '0.6rem 1.5rem',
                                background: 'transparent',
                                border: '2px solid var(--border)',
                                color: '#fff',
                                fontSize: '0.85rem',
                                fontFamily: 'var(--font-accent)',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                cursor: 'default',
                                transition: 'all 0.3s',
                                clipPath: 'polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))'
                            }}
                        >
                            {os}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Additional Skills */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{ marginTop: '2rem' }}
            >
                <h3 style={{ 
                    color: 'var(--accent-secondary)', 
                    fontSize: '1.1rem', 
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-heading)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    textShadow: '0 0 10px rgba(255, 0, 255, 0.5)'
                }}>
                    {'>'} Additional_Expertise
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {[
                        "Data Structures & Algorithms",
                        "LLM Technologies",
                        "RAG-based Systems",
                        "WebSocket & Real-Time Systems",
                        "CRDT Collaboration",
                        "AI-Powered Platforms",
                        "Intelligent Automation",
                        "Prompt Engineering",
                        "Generative AI",
                        "OAuth2 & Authentication",
                        "GitHub API Integration",
                        "Terminal Emulation",
                        "Code Editor Integration",
                        "Cron & Task Scheduling",
                        "Docker & Containerization",
                        "Network Security & DPI",
                        "Multi-threaded Concurrency",
                        "Software Architecture Analysis",
                        "Graph Visualization (Dagre)",
                        "Security Auditing"
                    ].map((skill, idx) => (
                        <motion.span
                            key={idx}
                            whileHover={{
                                y: -3,
                                boxShadow: '0 0 15px rgba(255, 0, 255, 0.4)',
                                borderColor: 'var(--accent-secondary)',
                                color: 'var(--accent-secondary)'
                            }}
                            style={{
                                padding: '0.6rem 1.5rem',
                                background: 'transparent',
                                border: '2px solid var(--border)',
                                color: '#fff',
                                fontSize: '0.8rem',
                                fontFamily: 'var(--font-accent)',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                cursor: 'default',
                                transition: 'all 0.3s',
                                clipPath: 'polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))'
                            }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Skills
