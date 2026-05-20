import { motion } from 'framer-motion';
import styles from './Reviews.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import ReviewCard from '@components/ReviewCard/ReviewCard';
import { reviews } from '@data/reviewsData';

const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

export default function Reviews() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            className={styles.logoWrapper}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 120 }}
          >
            <img
              src="/images/lagom_logo copy.jpeg"
              alt="Cafe Lagom Logo"
              className={styles.heroLogo}
            />
          </motion.div>
          
          <SectionTitle
            label="Customer love"
            title="What our guests say"
            subtitle="Honest reviews from the people who matter most — our customers."
          />

          <motion.div 
            className={styles.stats}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.stat}>
              <span className={styles.statNum}>{avgRating}</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>1,000+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>5-Star Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container section">
        <div className={styles.grid}>
          {reviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
