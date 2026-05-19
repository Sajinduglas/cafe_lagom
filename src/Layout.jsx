import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -12 },
};

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Outlet />
      </motion.div>
      <Footer />
    </>
  );
}
