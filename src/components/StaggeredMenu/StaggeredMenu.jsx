import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from './StaggeredMenu.module.css';

const menuVariants = {
  closed: {
    scale: 0,
    opacity: 0,
    transition: {
      delay: 0.15,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: { x: -20, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

export default function StaggeredMenu({ links, closeMenu }) {
  return (
    <motion.ul
      className={styles.staggeredMenu}
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {links.map((link) => (
        <motion.li key={link.path} variants={itemVariants} className={styles.item}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        </motion.li>
      ))}
    </motion.ul>
  );
}
