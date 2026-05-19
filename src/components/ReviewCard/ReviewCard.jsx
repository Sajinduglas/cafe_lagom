import { motion } from 'framer-motion';
import styles from './ReviewCard.module.css';

function StarRating({ rating }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? styles.filled : styles.empty}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewCard({ review, index }) {
  const { name, avatar, rating, date, review: text, item } = review;

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.header}>
        <div className={styles.avatar}>{avatar}</div>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.date}>{date}</p>
        </div>
        <StarRating rating={rating} />
      </div>

      <blockquote className={styles.text}>"{text}"</blockquote>

      {item && (
        <p className={styles.item}>
          <span className={styles.itemLabel}>Ordered:</span> {item}
        </p>
      )}
    </motion.div>
  );
}
