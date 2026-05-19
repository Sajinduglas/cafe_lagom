import styles from './Reviews.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import ReviewCard from '@components/ReviewCard/ReviewCard';
import { reviews } from '@data/reviewsData';

const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

export default function Reviews() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <SectionTitle
            label="Customer love"
            title="What our guests say"
            subtitle="Honest reviews from the people who matter most — our customers."
          />
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>{avgRating}</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{reviews.length}+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>★★★★★</span>
              <span className={styles.statLabel}>5-star reviews</span>
            </div>
          </div>
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
