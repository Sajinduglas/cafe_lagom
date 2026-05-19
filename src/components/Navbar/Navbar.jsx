import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { CAFE_NAME } from '@/utils/constants';
import GooeyNav from '../GooeyNav/GooeyNav';
import StaggeredMenu from '../StaggeredMenu/StaggeredMenu';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/reviews', label: 'Reviews' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightNavbar = location.pathname !== '/' && !scrolled;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isLightNavbar ? styles.lightNavbar : ''}`}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          <img
            src={isLightNavbar ? "/images/logo-green.png" : "/images/logo.png"}
            alt="Cafe Lagom"
            className={styles.logoImg}
          />
          <span className={`${styles.logoText} ${isLightNavbar ? styles.lightLogoText : ''}`}>{CAFE_NAME}</span>
        </NavLink>

        <div className={styles.desktopLinks}>
          <GooeyNav items={navLinks} />
        </div>

        <AnimatePresence>
          {menuOpen && (
            <StaggeredMenu links={navLinks} closeMenu={() => setMenuOpen(false)} />
          )}
        </AnimatePresence>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.x1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.x2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.x3 : ''}`} />
        </button>
      </div>
    </nav>
  );
}
