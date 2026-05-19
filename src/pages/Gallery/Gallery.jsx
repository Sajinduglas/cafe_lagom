import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Gallery.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import FlyingPosters from '@components/FlyingPosters/FlyingPosters';

const galleryImages = [
  { id: 1, src: '/images/fries.jpg',         alt: 'Loaded French Fries',  label: 'Loaded Fries' },
  { id: 2, src: '/images/momos.jpg',          alt: 'Steamed Momos',        label: 'Steamed Momos' },
  { id: 3, src: '/images/burger.jpg',         alt: 'Veg Burger',           label: 'Veg Burger' },
  { id: 4, src: '/images/cafe-interior.jpg',  alt: 'Cafe Interior',        label: 'Our Space' },
  { id: 5, src: '/images/cold-coffee.jpg',    alt: 'Cold Coffee',          label: 'Cold Coffee' },
  { id: 6, src: '/images/brownie.jpg',        alt: 'Chocolate Brownie',    label: 'Brownie' },
  { id: 7, src: '/images/maggi.jpg',          alt: 'Masala Maggi',         label: 'Masala Maggi' },
  { id: 8, src: '/images/waffle.jpg',         alt: 'Waffle',               label: 'Waffle' },
];

const placeholder = (label) =>
  `https://placehold.co/600x400/E8D5BC/3B1F0A?text=${encodeURIComponent(label)}`;

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <SectionTitle
            label="Visual feast"
            title="Gallery"
            subtitle="A glimpse of what awaits you at The Cozy Cup."
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
                  <span className={styles.overlayLabel}>{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className={styles.mobileFlying}>
          <FlyingPosters items={galleryImages} onImageClick={setLightbox} />
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              className={styles.lightboxImg}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onError={(e) => { e.target.src = placeholder(lightbox.label); }}
            />
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
