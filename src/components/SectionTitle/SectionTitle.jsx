import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';
import { BlurText } from '../AnimatedText/AnimatedText';

export default function SectionTitle({ label, title, subtitle, animateTitle = false }) {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {label && <span className={styles.label}>{label}</span>}
      {animateTitle ? (
        <h2 className={styles.title}>
          <BlurText text={title} />
        </h2>
      ) : (
        <h2 className={styles.title}>{title}</h2>
      )}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
