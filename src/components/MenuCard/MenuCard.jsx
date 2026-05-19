import { motion } from 'framer-motion';
import styles from './MenuCard.module.css';

export default function MenuCard({ item }) {
  const { name, description, price, image, tag, isVeg } = item;

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={name}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/400x280/E8D5BC/3B1F0A?text=${encodeURIComponent(name)}`;
          }}
        />
        {tag && <span className={styles.tag}>{tag}</span>}
        <span className={`${styles.badge} ${isVeg ? styles.veg : styles.nonveg}`}>
          {isVeg ? '🟢' : '🔴'}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>₹{price}</span>
        </div>
      </div>
    </motion.div>
  );
}
