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
  if (sub.includes('burger') || name.includes('burger')) return '/images/burger.jpg';
  if (sub.includes('wrap') || name.includes('roll')) return '/images/wrap.jpg';
  if (sub.includes('sandwich')) return '/images/sandwich.jpg';
  
  // Avil Milk
  if (sub.includes('avil') || name.includes('avil')) return '/images/avil-milk.jpg';
  
  // Tender Coconut Blend
  if (sub.includes('coconut') || name.includes('coconut')) {
    if (name.includes('grape')) return '/images/lime-juice.jpg';
    return '/images/vanilla-shake.jpg';
  }
  
  // Specific Shakes
  if (name.includes('oreo')) return '/images/oreo-shake.jpg';
  if (name.includes('strawberry') && (sub.includes('shake') || sub.includes('mojito'))) return '/images/strawberry-shake.jpg';
  if (name.includes('mango')) return '/images/mango-shake.jpg';
  if (name.includes('chocolate') || name.includes('nutella') || name.includes('biscoff') || name.includes('boost')) return '/images/chocolate-shake.jpg';
  if (sub.includes('shake')) return '/images/vanilla-shake.jpg';
  
  // Mojitos & Limes & Juices
  if (sub.includes('mojito')) return '/images/mojito.jpg';
  if (name.includes('orange')) return '/images/orange-juice.jpg';
  if (name.includes('watermelon')) return '/images/watermelon-juice.jpg';
  if (name.includes('pineapple')) return '/images/pineapple-juice.jpg';
  if (name.includes('pomegranate')) return '/images/pomegranate-juice.jpg';
  if (sub.includes('juice')) return '/images/orange-juice.jpg';
  if (sub.includes('lime')) return '/images/lime-juice.jpg';
  
  // Falooda
  if (sub.includes('falooda') || name.includes('salad')) return '/images/falooda.jpg';
  
  // Hot Drinks
  if (sub.includes('hot') || name.includes('coffee') || name.includes('tea')) return '/images/hot-drink.jpg';
  
  if (name.includes('brownie')) return '/images/brownie.jpg';
  if (name.includes('waffle')) return '/images/waffle.jpg';
  
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
