import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './FlyingPosters.module.css';

const Poster = ({ item, index, scrollYProgress, total, onImageClick }) => {
  const step = 1 / total;
  const start = index * step;
  const center = start + (step / 2);
  const end = start + step;

  // Extend the animation slightly before and after its designated step to overlap
  const animationStart = Math.max(0, start - step);
  const animationEnd = Math.min(1, end + step);

  const opacity = useTransform(
    scrollYProgress,
    [animationStart, center, animationEnd],
    [0, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [animationStart, center, animationEnd],
    [0.2, 1, 3]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [animationStart, center, animationEnd],
    [70, 0, -70]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [animationStart, center, animationEnd],
    [index % 2 === 0 ? 30 : -30, 0, index % 2 === 0 ? -30 : 30]
  );
  const y = useTransform(
    scrollYProgress,
    [animationStart, center, animationEnd],
    ['120%', '0%', '-120%']
  );

  // When opacity is 0, we can use display: none or pointer-events: none to avoid clicking hidden items
  const pointerEvents = useTransform(opacity, (val) => (val > 0.5 ? 'auto' : 'none'));

  return (
    <motion.div
      className={styles.poster}
      style={{ opacity, scale, rotateX, rotateY, y, pointerEvents, zIndex: total - index }}
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
      style={{ height: `${(items.length + 1) * 60}vh` }}
    >
      <div className={styles.perspectiveContainer}>
        <div className={styles.scrollText}>Scroll.</div>
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
