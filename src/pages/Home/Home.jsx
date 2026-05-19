import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import MenuCard from '@components/MenuCard/MenuCard';
import ReviewCard from '@components/ReviewCard/ReviewCard';
import ScrollReveal from '@components/ScrollReveal/ScrollReveal';
import DecryptedText from '@components/DecryptedText/DecryptedText';
import { menuItems } from '@data/menuData';
import { reviews } from '@data/reviewsData';
import { CAFE_NAME, CAFE_TAGLINE } from '@/utils/constants';

const featuredItems = menuItems.filter((item) => item.tag === 'Best Seller' || item.tag === 'Popular');
const featuredReviews = reviews.slice(0, 3);

const highlights = [
  { icon: '🍟', title: 'Crispy Fries', desc: 'Golden, loaded, irresistible.' },
  { icon: '🥟', title: 'Fresh Momos', desc: 'Handmade daily, steamed or fried.' },
  { icon: '☕', title: 'Crafted Drinks', desc: 'Cold coffees and thick shakes.' },
  { icon: '🍫', title: 'Sweet Endings', desc: 'Brownies, waffles, and more.' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <DecryptedText
            text="Welcome to"
            className={styles.heroLabel}
            speed={40}
            maxIterations={5}
          />
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {CAFE_NAME}
          </motion.h1>
          <div className={styles.heroSubWrapper}>
            <DecryptedText
              text={CAFE_TAGLINE}
              className={styles.heroSub}
              speed={30}
              maxIterations={8}
            />
          </div>
          <motion.div
            className={styles.heroCta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link to="/menu" className={styles.ctaPrimary}>Explore Menu</Link>
            <Link to="/about" className={styles.ctaSecondary}>Our Story</Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className={`section ${styles.highlights}`}>
        <div className="container">
          <SectionTitle
            label="Why us"
            title="Made with love, served with care"
            subtitle="Every item on our menu is prepared fresh, using quality ingredients and plenty of heart."
          />
          <div className={styles.highlightGrid}>
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.1}>
                <div className={styles.highlightCard}>
                  <span className={styles.highlightIcon}>{h.icon}</span>
                  <h3 className={styles.highlightTitle}>{h.title}</h3>
                  <p className={styles.highlightDesc}>{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className={`section ${styles.featured}`}>
        <div className="container">
          <SectionTitle
            label="Our favourites"
            title="Most loved dishes"
            subtitle="The items your fellow food lovers keep coming back for."
          />
          <div className={styles.menuGrid}>
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.seeAll}>
            <Link to="/menu" className={styles.ctaPrimary}>See Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Reviews strip */}
      <section className={`section ${styles.reviewsSection}`}>
        <div className="container">
          <SectionTitle
            label="What people say"
            title="Real reviews, real love"
          />
          <div className={styles.reviewsGrid}>
            {featuredReviews.map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>
          <div className={styles.seeAll}>
            <Link to="/reviews" className={styles.ctaSecondary}>Read All Reviews</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
