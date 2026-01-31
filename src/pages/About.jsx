import { motion } from 'framer-motion'
import { FaCalendarAlt, FaGraduationCap } from 'react-icons/fa'

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const education = [
        {
            period: "2023 - 2027",
            title: "B.E. Information Science & Engineering",
            institution: "CMR Institute of Technology (CMRIT), Bengaluru",
            score: "CGPA: 8.81 (Pursuing)"
        },
        {
            period: "2021 - 2023",
            title: "Pre-University Course (Science)",
            institution: "St. Francis Composite PU College, Bengaluru",
            score: "Percentage: 90.88%"
        },
        {
            period: "2019 - 2021",
            title: "SSLC - Karnataka State Board",
            institution: "St. Francis High School, Bengaluru",
            score: "Percentage: 90.88%"
        }
    ]

    const experience = [
        {
            period: "2023 - Present",
            title: "Full Stack Developer",
            description: "Building modern, responsive web applications using React.js, Node.js, and databases like MySQL and MongoDB. Passionate about creating seamless user experiences."
        },
        {
            period: "2023 - Present",
            title: "DSA & Competitive Programming",
            description: "Strong foundation in Data Structures and Algorithms. Regular practice on LeetCode with proficiency in C, Java, and Python."
        }
    ]

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
                <h1 className="section-title">About Me</h1>
                <div className="section-underline" />
            </motion.div>

            {/* Intro */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ marginBottom: '3rem', maxWidth: '800px' }}
            >
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 400 }}>
                    I'm <span className="gradient-text" style={{ fontWeight: 600 }}>Naveen S</span>, a <span style={{ color: 'var(--accent-primary)' }}>Full Stack Developer</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    Currently pursuing B.E. in Information Science at CMRIT, Bengaluru with a CGPA of 8.81.
                    I specialize in building modern web applications using React.js, Node.js, and database technologies.
                    Strong foundation in DSA with regular practice on competitive programming platforms.
                </p>
            </motion.div>

            {/* Education & Experience Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '3rem'
                }}
            >
                {/* Education */}
                <motion.div variants={itemVariants}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaGraduationCap style={{ color: 'var(--accent-primary)' }} /> Education
                    </h3>
                    <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(139, 92, 246, 0.3)' }}>
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                style={{ position: 'relative', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: idx < education.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    left: '-1.75rem',
                                    top: '4px',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-primary)',
                                    boxShadow: '0 0 10px var(--accent-glow)'
                                }} />

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                                    <FaCalendarAlt style={{ color: 'var(--accent-primary)', fontSize: '0.75rem' }} />
                                    <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem' }}>{edu.period}</span>
                                </div>
                                <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.3rem', fontWeight: 600 }}>{edu.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{edu.institution}</p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{edu.score}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience */}
                <motion.div variants={itemVariants}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>💼</span> Experience
                    </h3>
                    <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(139, 92, 246, 0.3)' }}>
                        {experience.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                style={{ position: 'relative', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: idx < experience.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    left: '-1.75rem',
                                    top: '4px',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-primary)',
                                    boxShadow: '0 0 10px var(--accent-glow)'
                                }} />

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                                    <FaCalendarAlt style={{ color: 'var(--accent-primary)', fontSize: '0.75rem' }} />
                                    <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem' }}>{exp.period}</span>
                                </div>
                                <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.4rem', fontWeight: 600 }}>{exp.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
