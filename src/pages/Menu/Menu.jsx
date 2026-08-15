import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Menu.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import MenuCard from '@components/MenuCard/MenuCard';
import AnimatedList from '@components/AnimatedList/AnimatedList';
import PageShimmer from '@components/PageShimmer/PageShimmer';
import { menuItems, menuCategories } from '@data/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('/images/menu_1.jpeg');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const isFoodCategory = activeCategory === 'Food' || activeCategory === 'Momos';

  return (
    <PageShimmer variant="menu">
      <main className={styles.page}>
      <div className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: "url('/images/menu_1.jpeg')",
            opacity: isFoodCategory ? 0 : 1,
            transform: isFoodCategory ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: "url('/images/menu_2.jpeg')",
            opacity: isFoodCategory ? 1 : 0,
            transform: isFoodCategory ? 'scale(1)' : 'scale(1.05)',
          }}
        />
        <div className={styles.heroOverlay} />
        
        <div className={`container ${styles.heroContent}`}>
          <SectionTitle
            label="What we serve"
            title="Our Menu"
          />
          <button
            className={styles.actionBtn}
            onClick={() => {
              setLightboxImage(isFoodCategory ? '/images/menu_2.jpeg' : '/images/menu_1.jpeg');
              setIsLightboxOpen(true);
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View Chalkboard Menu
          </button>
        </div>
      </div>

      <div className="container section">
        {/* Category filter */}
        <div className={styles.filters}>
          {menuCategories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatedList className={styles.grid}>
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </AnimatedList>

        {filtered.length === 0 && (
          <p className={styles.empty}>No items in this category yet. Check back soon!</p>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className={styles.lightboxHeader} onClick={(e) => e.stopPropagation()}>
              <div className={styles.lightboxTabs}>
                <button
                  className={`${styles.lightboxTabBtn} ${lightboxImage === '/images/menu_1.jpeg' ? styles.active : ''}`}
                  onClick={() => setLightboxImage('/images/menu_1.jpeg')}
                >
                  Drinks & Desserts
                </button>
                <button
                  className={`${styles.lightboxTabBtn} ${lightboxImage === '/images/menu_2.jpeg' ? styles.active : ''}`}
                  onClick={() => setLightboxImage('/images/menu_2.jpeg')}
                >
                  Food & Snacks
                </button>
              </div>
              <button className={styles.closeBtn} onClick={() => setIsLightboxOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Cafe Lagom Chalkboard Menu"
                className={styles.lightboxImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </main>
    </PageShimmer>
  );
}
