import { motion } from 'framer-motion';
import styles from './About.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import ScrollReveal from '@components/ScrollReveal/ScrollReveal';
import { BlurText } from '@components/AnimatedText/AnimatedText';
import { CAFE_NAME, CAFE_TAGLINE, CAFE_DESCRIPTION } from '@/utils/constants';

const values = [
  { icon: '🌿', title: 'Fresh Ingredients', desc: 'Sourced fresh daily from local vendors, ensuring every bite is vibrant and wholesome.' },
  { icon: '🤝', title: 'Community First', desc: 'Crafted as a warm gathering spot, bridging delicious food and cozy conversations.' },
  { icon: '❤️', title: 'Prepared with Care', desc: 'Every order is made fresh from scratch. We believe good food takes time and love.' },
  { icon: '✨', title: 'Balanced Pricing', desc: 'Premium ingredients at student-friendly prices. We keep quality accessible to all.' },
];

export default function About() {
  return (
    <main className={styles.page}>
      {/* Immersive Hero Section */}
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
          <div className={styles.heroTitles}>
            <span className={styles.heroLabel}>Our Philosophy</span>
            <h1 className={styles.heroTitle}>
              <BlurText text={CAFE_NAME} />
            </h1>
            <p className={styles.heroTagline}>"{CAFE_TAGLINE}"</p>
          </div>
        </div>
      </div>

      {/* The Concept of Lagom & Our Story */}
      <section className="section">
        <div className={`container ${styles.storyContainer}`}>
          <ScrollReveal direction="left" className={styles.storyImageWrapper}>
            <div className={styles.imageCard}>
              <img
                src="/images/cafe-interior.jpg"
                alt="Cafe Lagom Interior"
                className={styles.storyImage}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className={styles.imageDecoration} />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" className={styles.storyTextWrapper}>
            <span className={styles.sectionLabel}>The Concept</span>
            <h2 className={styles.sectionTitle}>
              What does <span className={styles.highlight}>Lagom</span> mean?
            </h2>
            <p className={styles.leadParagraph}>
              Derived from the Swedish word meaning <strong>“not too much, not too little”</strong>, Lagom is the art of balanced living. It is about finding absolute satisfaction in the middle ground.
            </p>
            <p className={styles.bodyParagraph}>
              At Cafe Lagom, we apply this philosophy to every dish we plate and every cup we brew. 
              Our spices are perfectly measured, our milkshakes are richly blended but never overly sweet, and our cozy spaces are curated to offer warm comfort without clutter.
            </p>
            <p className={styles.bodyParagraph}>
              Whether you are here for our legendary <strong>Honey Chilli Momos</strong>, a refreshing <strong>Tender Coconut Avil</strong>, or a simple hot coffee, you will taste the perfect balance we strive for every single day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* History Split Section */}
      <section className={`section ${styles.historySection}`}>
        <div className={`container ${styles.historyContainer}`}>
          <ScrollReveal direction="left" className={styles.historyTextWrapper}>
            <span className={styles.sectionLabel}>How It Started</span>
            <h2 className={styles.sectionTitle}>A small dream, a warm reality</h2>
            <p className={styles.bodyParagraph}>
              {CAFE_NAME} began with a simple question: what if a neighborhood hangout could combine incredible, freshly prepared comfort food with a genuinely calm, slow-paced atmosphere? A place that felt like home, but tasted like a specialty.
            </p>
            <p className={styles.bodyParagraph}>
              We opened our doors with a menu built around what we love most: crispy hand-dusted fries, freshly steamed momos, juicy chicken zingers, and cold shakes that hit the spot. Every order is freshly prepared on demand — because good food simply takes time.
            </p>
            <div className={styles.quoteBox}>
              <p className={styles.quoteText}>
                "We don't do fast food. We do good food, made right, served in the perfect measure."
              </p>
              <span className={styles.quoteAuthor}>— The Cafe Lagom Kitchen Team</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className={styles.historyImageWrapper}>
            <div className={styles.chalkboardCard}>
              <div className={styles.chalkboardHeader}>
                <h3>Kitchen Note</h3>
              </div>
              <div className={styles.chalkboardBody}>
                <p className={styles.chalkboardText}>
                  "All our dishes are freshly prepared. Please allow 20 minutes or more for your order — good food takes time!"
                </p>
                <div className={styles.chalkboardDivider} />
                <ul className={styles.chalkboardList}>
                  <li>✓ 100% Fresh Ingredients</li>
                  <li>✓ Crafted on Order</li>
                  <li>✓ Zero Preservatives</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <SectionTitle
            label="Our Standards"
            title="What we stand for"
            animateTitle={true}
          />
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIconWrapper}>
                    <span className={styles.valueIcon}>{v.icon}</span>
                  </div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
