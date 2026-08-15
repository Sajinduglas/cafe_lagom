import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PageShimmer.module.css';

/* ── individual shimmer helper ──────────────────────────────── */
function Sh({ className, style }) {
  return <div className={`${styles.shimmerBlock} ${className ?? ''}`} style={style} />;
}

/* ── variant layouts ────────────────────────────────────────── */
function HomeShimmer() {
  return (
    <div className={styles.page}>
      <div className={styles.hero} />
      <div className={styles.container}>
        {/* section title */}
        <div className={styles.titleBlock}>
          <Sh style={{ width: 90, height: 14 }} />
          <Sh style={{ width: 260, height: 32 }} />
          <Sh style={{ width: 380, height: 16 }} />
        </div>
        {/* highlight cards */}
        <div className={styles.grid}>
          {[...Array(4)].map((_, i) => <Sh key={i} className={styles.card} />)}
        </div>
        {/* second section title */}
        <div className={styles.titleBlock} style={{ marginTop: 64 }}>
          <Sh style={{ width: 110, height: 14 }} />
          <Sh style={{ width: 220, height: 32 }} />
        </div>
        <div className={styles.grid}>
          {[...Array(3)].map((_, i) => <Sh key={i} className={styles.card} />)}
        </div>
      </div>
    </div>
  );
}

function MenuShimmer() {
  return (
    <div className={styles.page}>
      <div className={styles.hero} />
      <div className={styles.container}>
        {/* filter pills */}
        <div className={styles.filters}>
          {[80, 50, 70, 60, 90].map((w, i) => (
            <Sh key={i} className={styles.pill} style={{ width: w }} />
          ))}
        </div>
        <div className={styles.grid}>
          {[...Array(6)].map((_, i) => <Sh key={i} className={styles.card} />)}
        </div>
      </div>
    </div>
  );
}

function GalleryShimmer() {
  return (
    <div className={styles.page}>
      <div className={styles.hero} />
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <Sh style={{ width: 100, height: 14 }} />
          <Sh style={{ width: 160, height: 40 }} />
          <Sh style={{ width: 340, height: 16 }} />
        </div>
        <div className={styles.galleryGrid}>
          {[...Array(8)].map((_, i) => <Sh key={i} className={styles.galleryItem} />)}
        </div>
      </div>
    </div>
  );
}

function ReviewsShimmer() {
  return (
    <div className={styles.page}>
      <div className={styles.hero} />
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <Sh style={{ width: 120, height: 14 }} />
          <Sh style={{ width: 260, height: 36 }} />
          <Sh style={{ width: 360, height: 16 }} />
        </div>
        <div className={styles.reviewGrid}>
          {[...Array(6)].map((_, i) => <Sh key={i} className={styles.reviewCard} />)}
        </div>
      </div>
    </div>
  );
}

function AboutShimmer() {
  return (
    <div className={styles.page}>
      <div className={styles.hero} />
      <div className={styles.container}>
        <div className={styles.twoCol}>
          <Sh className={styles.squareBlock} />
          <div className={styles.lines}>
            <Sh style={{ width: 90, height: 14 }} />
            <Sh style={{ width: '85%', height: 30 }} />
            <Sh style={{ width: '100%', height: 16 }} />
            <Sh style={{ width: '95%', height: 16 }} />
            <Sh style={{ width: '80%', height: 16 }} />
            <Sh style={{ width: '90%', height: 16 }} />
          </div>
        </div>
        <div className={styles.twoCol} style={{ marginTop: 64 }}>
          <div className={styles.lines}>
            <Sh style={{ width: 90, height: 14 }} />
            <Sh style={{ width: '85%', height: 30 }} />
            <Sh style={{ width: '100%', height: 16 }} />
            <Sh style={{ width: '95%', height: 16 }} />
          </div>
          <Sh className={styles.squareBlock} />
        </div>
      </div>
    </div>
  );
}

const VARIANTS = { home: HomeShimmer, menu: MenuShimmer, gallery: GalleryShimmer, reviews: ReviewsShimmer, about: AboutShimmer };

/* ── Main export ─────────────────────────────────────────────── */
export default function PageShimmer({ variant = 'home', duration = 1200, children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const ShimmerLayout = VARIANTS[variant] ?? HomeShimmer;

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="shimmer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ShimmerLayout />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
