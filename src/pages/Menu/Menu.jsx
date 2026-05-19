import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Menu.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import MenuCard from '@components/MenuCard/MenuCard';
import AnimatedList from '@components/AnimatedList/AnimatedList';
import { menuItems, menuCategories } from '@data/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <SectionTitle
            label="What we serve"
            title="Our Menu"
            subtitle="Fresh, flavourful, and made with care. Something for every craving."
          />
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
    </main>
  );
}
