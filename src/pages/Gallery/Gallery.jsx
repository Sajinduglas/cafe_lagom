import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Gallery.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import FlyingPosters from '@components/FlyingPosters/FlyingPosters';

const galleryImages = [
  { id: 1, src: '/images/gal1.png',           alt: 'Spice Meets Sweet! Honey Chilli Perfection.', label: 'Honey Chilli Special' },
  { id: 2, src: '/images/gal2.png',           alt: 'Cheesy Loaded Fries. Our bestseller for a reason.',  label: 'Cheesy Loaded Fries' },
  { id: 3, src: '/images/gal3.png',           alt: 'We Are Open! Near KSRTC Bus Terminal, Kollam.',   label: 'Our Cafe Space' },
  { id: 4, src: '/images/gal4.png',           alt: 'Cozy backlit Cafe Lagom sign at night.',         label: 'Cozy Signboard' },
  { id: 5, src: '/images/sandwich.jpg',       alt: 'Double-decker grilled club sandwich stacked with fresh veggies.', label: 'Club Sandwich' },
  { id: 6, src: '/images/mojito.jpg',         alt: 'Refreshing mint mojito with lime and sparkling soda.', label: 'Mint Mojito' },
  { id: 7, src: '/images/momos.jpg',           alt: 'Handmade steamed momos with spicy dipping sauce.', label: 'Steamed Momos' },
  { id: 8, src: '/images/burger.jpg',          alt: 'Veg burger stacked with fresh ingredients.',       label: 'Veg Burger' },
];

const placeholder = (label) =>
  `https://placehold.co/600x400/E8D5BC/3B1F0A?text=${encodeURIComponent(label)}`;

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <main className={styles.page}>
      {/* Hero Section with Space Background image */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <SectionTitle
            label="Visual feast"
            title="Gallery"
            subtitle="A glimpse of the delicious flavours and cozy spaces waiting for you at Cafe Lagom."
          />
        </div>
      </div>

      <div className="container section">
        <div className={styles.desktopGrid}>
          <div className={styles.grid}>
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                className={styles.item}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  onError={(e) => { e.target.src = placeholder(img.label); }}
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayText}>
                    <span className={styles.overlayLabel}>{img.label}</span>
                    <span className={styles.overlayView}>View Photo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className={styles.mobileFlying}>
          <FlyingPosters items={galleryImages} onImageClick={setLightbox} />
        </div>
      </div>

      {/* Lightbox Modal with Caption details */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <motion.img
                src={lightbox.src}
                alt={lightbox.alt}
                className={styles.lightboxImg}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onError={(e) => { e.target.src = placeholder(lightbox.label); }}
              />
              <div className={styles.lightboxCaption}>
                <h3 className={styles.captionTitle}>{lightbox.label}</h3>
                <p className={styles.captionDesc}>{lightbox.alt}</p>
              </div>
              <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
