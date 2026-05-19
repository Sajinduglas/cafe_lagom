import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './FlyingPosters.module.css';

const Poster = ({ item, index, scrollYProgress, total, onImageClick }) => {
  // To make the first item perfectly centered at scroll progress 0, 
  // we step through (total - 1).
  const step = total > 1 ? 1 / (total - 1) : 1;
  const center = index * step;

  // Set the animation window width. 0.45 step ensures a small gap between posters.
  const windowHalfWidth = step * 0.45;
  
  // Use a function mapping for useTransform to completely avoid any WAAPI
  // out-of-bounds or non-decreasing array errors when variables fall outside [0,1].
  
  const opacity = useTransform(scrollYProgress, (val) => {
    const p = (val - center) / windowHalfWidth;
    if (p <= -1 || p >= 1) return 0;
    if (p < -0.5) return (p + 1) * 2; // fade in from -1 to -0.5
    if (p > 0.5) return (1 - p) * 2;  // fade out from 0.5 to 1
    return 1;
  });
  
  const scale = useTransform(scrollYProgress, (val) => {
    const p = (val - center) / windowHalfWidth;
    if (p <= -1) return 0.3;
    if (p >= 1) return 2.5;
    const norm = (p + 1) / 2; // normalize -1 to 1 into 0 to 1
    return 0.3 + norm * (2.5 - 0.3);
  });
  
  // Strong left-to-right flipping effect like a page turn or flipping card
  const rotateY = useTransform(scrollYProgress, (val) => {
    const p = (val - center) / windowHalfWidth;
    if (p <= -1) return 70;
    if (p >= 1) return -70;
    const norm = (p + 1) / 2;
    return 70 - norm * 140; // 70 to -70
  });
  
  // Very slight tilt for dynamism
  const rotateZ = useTransform(scrollYProgress, (val) => {
    const p = (val - center) / windowHalfWidth;
    if (p <= -1) return -5;
    if (p >= 1) return 5;
    const norm = (p + 1) / 2;
    return -5 + norm * 10; // -5 to 5
  });
  
  // Moves slightly vertically to enhance the flying feel
  const y = useTransform(scrollYProgress, (val) => {
    const p = (val - center) / windowHalfWidth;
    if (p <= -1) return '40%';
    if (p >= 1) return '-40%';
    const norm = (p + 1) / 2;
    return `${40 - norm * 80}%`; // 40% to -40%
  });

  const pointerEvents = useTransform(opacity, (val) => (val > 0.5 ? 'auto' : 'none'));

  return (
    <motion.div
      className={styles.poster}
      style={{ opacity, scale, rotateY, rotateZ, y, pointerEvents, zIndex: total - index }}
      onClick={() => onImageClick && onImageClick(item)}
    >
      <img src={item.src} alt={item.alt} />
      <div className={styles.label}>{item.label}</div>
    </motion.div>
  );
};

export default function FlyingPosters({ items, onImageClick }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div 
      className={styles.wrapper} 
      ref={containerRef}
      style={{ height: `${items.length * 90}vh` }}
    >
      <div className={styles.perspectiveContainer}>
        {items.map((item, i) => (
          <Poster
            key={item.id}
            item={item}
            index={i}
            scrollYProgress={scrollYProgress}
            total={items.length}
            onImageClick={onImageClick}
          />
        ))}
      </div>
    </div>
  );
}
