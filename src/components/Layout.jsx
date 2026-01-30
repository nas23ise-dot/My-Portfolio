import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    return (
        <>
            <Navbar />
            <div className="grid-bg" />
            <motion.main
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="container"
                style={{ paddingTop: '80px', minHeight: '100vh', position: 'relative' }}
            >
                {children}
            </motion.main>
        </>
    );
};

export default Layout;
