import { motion } from 'framer-motion'

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "C", level: 80 },
                { name: "Java", level: 75 },
                { name: "Python", level: 85 },
                { name: "JavaScript", level: 90 }
            ]
        },
        {
            title: "Frameworks & Tools",
            skills: [
                { name: "React.js", level: 85 },
                { name: "Node.js", level: 70 },
                { name: "Git & GitHub", level: 80 }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", level: 75 },
                { name: "MongoDB", level: 70 }
            ]
        },
        {
            title: "Web Technologies",
            skills: [
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "JavaScript ES6+", level: 88 }
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
                <h1 className="section-title">Skills</h1>
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
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{
                            color: 'var(--accent-primary)',
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem',
                            fontWeight: 600
                        }}>
                            {category.title}
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {category.skills.map((skill, idx) => (
                                <div key={idx}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                                        <span style={{ color: '#fff', fontSize: '0.95rem' }}>{skill.name}</span>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{skill.level}%</span>
                                    </div>
                                    <div style={{
                                        background: 'rgba(255,255,255,0.08)',
                                        borderRadius: '4px',
                                        height: '6px',
                                        overflow: 'hidden'
                                    }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.3 + catIdx * 0.1 + idx * 0.05 }}
                                            style={{
                                                height: '100%',
                                                background: 'var(--accent-gradient)',
                                                borderRadius: '4px',
                                                boxShadow: '0 0 10px var(--accent-glow)'
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
                <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Operating Systems</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {["Windows", "Ubuntu", "Linux"].map((os, idx) => (
                        <motion.span
                            key={idx}
                            whileHover={{
                                y: -3,
                                boxShadow: '0 8px 20px var(--accent-glow)',
                                borderColor: 'var(--accent-primary)'
                            }}
                            style={{
                                padding: '0.6rem 1.5rem',
                                background: 'var(--bg-card)',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                borderRadius: '50px',
                                color: '#fff',
                                fontSize: '0.9rem',
                                cursor: 'default',
                                transition: 'all 0.3s'
                            }}
                        >
                            {os}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Skills
