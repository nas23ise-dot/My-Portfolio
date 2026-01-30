import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            label: "Location",
            value: "HSR Layout, Bengaluru, Karnataka",
            link: "https://maps.google.com/?q=HSR+Layout+Bengaluru"
        },
        {
            icon: <FaPhone />,
            label: "Phone",
            value: "+91 8971557328",
            link: "tel:+918971557328"
        },
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "huesh180@gmail.com",
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=huesh180@gmail.com"
        }
    ]

    const socialLinks = [
        {
            icon: <FaGithub />,
            label: "GitHub",
            url: "https://github.com/nas23ise-dot",
            color: "#fff"
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/naveen-s-b77a03343/",
            color: "#0077b5"
        },
        {
            icon: <SiLeetcode />,
            label: "LeetCode",
            url: "https://leetcode.com/u/Naveen_031",
            color: "#FFA116"
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="container section"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '80vh'
            }}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: '3rem' }}
            >
                <h1 className="section-title">Get In Touch</h1>
                <div className="section-underline" style={{ margin: '0 auto' }} />
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '500px' }}>
                    I'm always open to new opportunities and collaborations. Feel free to reach out through any of the platforms below!
                </p>
            </motion.div>

            {/* Contact Info Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    width: '100%',
                    maxWidth: '900px',
                    marginBottom: '4rem'
                }}
            >
                {contactInfo.map((info, idx) => (
                    <motion.a
                        key={idx}
                        href={info.link}
                        target={info.link.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="card"
                        whileHover={{ y: -8, borderColor: 'var(--accent-primary)' }}
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            textDecoration: 'none'
                        }}
                    >
                        <div style={{
                            color: 'var(--accent-primary)',
                            fontSize: '2rem',
                            background: 'rgba(139, 92, 246, 0.1)',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '0.5rem',
                            boxShadow: '0 0 20px var(--accent-glow)'
                        }}>
                            {info.icon}
                        </div>
                        <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {info.label}
                        </h4>
                        <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 500 }}>
                            {info.value}
                        </p>
                    </motion.a>
                ))}
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ textAlign: 'center' }}
            >
                <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: '#fff' }}>Connect With Me</h3>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {socialLinks.map((link, idx) => (
                        <motion.a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: link.color }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--text-secondary)',
                                transition: 'all 0.3s'
                            }}
                        >
                            <span style={{ fontSize: '2.5rem' }}>{link.icon}</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{link.label}</span>
                        </motion.a>
                    ))}
                </div>

                <motion.a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=huesh180@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem'
                    }}
                >
                    <FaEnvelope /> Send an Email
                </motion.a>
            </motion.div>
        </motion.div>
    )
}

export default Contact
