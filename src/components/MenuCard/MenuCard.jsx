import { motion } from 'framer-motion';
import styles from './MenuCard.module.css';

const getImagePath = (item) => {
  if (item.image) return item.image;
  
  const sub = item.subCategory?.toLowerCase() || '';
  const cat = item.category?.toLowerCase() || '';
  const name = item.name?.toLowerCase() || '';
  
  if (sub.includes('fries')) return '/images/fries.jpg';
  if (sub.includes('chicken')) return '/images/fried-chicken.jpg';
  if (cat.includes('momo')) {
    if (name.includes('fried') || name.includes('honey') || name.includes('crispy')) {
      return '/images/fried-momos.jpg';
    }
    return '/images/momos.jpg';
  }
  if (sub.includes('burger') || sub.includes('special')) return '/images/burger.jpg';
  if (sub.includes('sandwich') || sub.includes('wrap')) return '/images/sandwich.jpg';
  if (name.includes('cold coffee')) return '/images/cold-coffee.jpg';
  if (name.includes('mango')) return '/images/mango-shake.jpg';
  if (sub.includes('shake') || sub.includes('mojito') || sub.includes('lime') || sub.includes('juice') || cat.includes('drink')) {
    return '/images/cold-coffee.jpg';
  }
  if (sub.includes('falooda') || name.includes('salad')) return '/images/waffle.jpg';
  if (name.includes('brownie')) return '/images/brownie.jpg';
  
  // Brand colors: primary #0D4A35 (deep green) and accent #E8DCC8 (cream)
  return `https://placehold.co/400x280/0D4A35/E8DCC8?text=${encodeURIComponent(item.name)}`;
};

export default function MenuCard({ item }) {
  const { name, description, price, image, tag, isVeg, priceNote } = item;
  const imageSrc = getImagePath(item);

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={imageSrc}
          alt={name}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/400x280/0D4A35/E8DCC8?text=${encodeURIComponent(name)}`;
          }}
        />
        {tag && <span className={styles.tag}>{tag}</span>}
        <span className={`${styles.badge} ${isVeg ? styles.veg : styles.nonveg}`}>
          {isVeg ? '🟢' : '🔴'}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        {priceNote && (
          <p className={styles.priceNote}>{priceNote}</p>
        )}
        <div className={styles.footer}>
          <span className={styles.price}>₹{price}</span>
        </div>
      </div>
    </motion.div>
  );
}
