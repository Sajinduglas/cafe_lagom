# Cafe Website — Full Architecture, Phase Plan & Implementation

> Stack: React + Vite + React Router + React Bits (animations) + CSS Modules  
> Type: 100% Static — no backend, no database  
> Theme: Warm cafe aesthetic — earthy tones, cream, deep brown, golden accents

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Folder Structure](#folder-structure)
3. [Phase Plan](#phase-plan)
4. [Phase 1 — Project Setup](#phase-1--project-setup)
5. [Phase 2 — Data Layer](#phase-2--data-layer)
6. [Phase 3 — Shared Components](#phase-3--shared-components)
7. [Phase 4 — Pages](#phase-4--pages)
8. [Phase 5 — Animations (React Bits)](#phase-5--animations-react-bits)
9. [Phase 6 — Routing & Layout](#phase-6--routing--layout)
10. [Phase 7 — Polish & Deploy](#phase-7--polish--deploy)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | Core framework + fast dev server |
| React Router v6 | Client-side routing |
| React Bits | Animation components (text, scroll, reveal) |
| CSS Modules | Scoped styling per component |
| Framer Motion | Page transitions + micro-animations |
| gh-pages / Netlify | Static deployment |

---

## Folder Structure

```
cafe-website/
├── public/
│   ├── favicon.ico
│   └── og-image.jpg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero-bg.jpg
│   │   │   ├── fries.jpg
│   │   │   ├── momos.jpg
│   │   │   ├── burger.jpg
│   │   │   ├── noodles.jpg
│   │   │   ├── cafe-interior.jpg
│   │   │   └── logo.png
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── MenuCard/
│   │   │   ├── MenuCard.jsx
│   │   │   └── MenuCard.module.css
│   │   ├── ReviewCard/
│   │   │   ├── ReviewCard.jsx
│   │   │   └── ReviewCard.module.css
│   │   ├── SectionTitle/
│   │   │   ├── SectionTitle.jsx
│   │   │   └── SectionTitle.module.css
│   │   ├── ScrollReveal/
│   │   │   └── ScrollReveal.jsx
│   │   └── AnimatedText/
│   │       └── AnimatedText.jsx
│   ├── data/
│   │   ├── menuData.js
│   │   └── reviewsData.js
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── Menu/
│   │   │   ├── Menu.jsx
│   │   │   └── Menu.module.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Gallery/
│   │   │   ├── Gallery.jsx
│   │   │   └── Gallery.module.css
│   │   └── Reviews/
│   │       ├── Reviews.jsx
│   │       └── Reviews.module.css
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── utils/
│   │   └── constants.js
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## Phase Plan

| Phase | What | Duration |
|-------|------|----------|
| Phase 1 | Project setup, Vite config, global styles, CSS variables | Day 1 |
| Phase 2 | Static data files — menu items, reviews | Day 1 |
| Phase 3 | Shared components — Navbar, Footer, MenuCard, ReviewCard, SectionTitle | Day 2–3 |
| Phase 4 | All 5 pages — Home, Menu, About, Gallery, Reviews | Day 3–5 |
| Phase 5 | React Bits animations — text effects, scroll reveal, transitions | Day 5–6 |
| Phase 6 | Routing, layout wrapper, page transitions | Day 6 |
| Phase 7 | Responsive polish, SEO meta, deploy | Day 7 |

---

## Phase 1 — Project Setup

### `package.json`

```json
{
  "name": "cafe-website",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "framer-motion": "^11.0.0",
    "react-bits": "^0.0.34"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.1.0",
    "gh-pages": "^6.1.1"
  }
}
```

### `vite.config.js`

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@data': path.resolve(__dirname, './src/data'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
});
```

### `src/styles/variables.css`

```css
:root {
  /* Brand Colors */
  --color-primary: #3B1F0A;       /* deep espresso brown */
  --color-secondary: #C8873A;     /* warm golden amber */
  --color-accent: #E8B86D;        /* light golden */
  --color-bg: #FAF6F0;            /* warm cream */
  --color-bg-dark: #1A0F05;       /* dark roast */
  --color-surface: #FFF8EE;       /* card surface */
  --color-text: #2C1810;          /* body text */
  --color-text-muted: #7A5C45;    /* muted text */
  --color-border: #E8D5BC;        /* soft border */

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;
  --space-2xl: 128px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 4px rgba(59, 31, 10, 0.08);
  --shadow-md: 0 4px 16px rgba(59, 31, 10, 0.12);
  --shadow-lg: 0 12px 40px rgba(59, 31, 10, 0.16);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 600ms ease;

  /* Layout */
  --max-width: 1200px;
  --navbar-height: 72px;
}
```

### `src/styles/global.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
@import './variables.css';

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
  color: var(--color-primary);
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.section {
  padding: var(--space-xl) 0;
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-md);
  }
  .section {
    padding: var(--space-lg) 0;
  }
}
```

---

## Phase 2 — Data Layer

### `src/data/menuData.js`

```js
export const menuCategories = [
  'All',
  'Snacks',
  'Main Course',
  'Beverages',
  'Desserts',
];

export const menuItems = [
  {
    id: 1,
    name: 'Loaded French Fries',
    category: 'Snacks',
    price: 120,
    description: 'Crispy golden fries loaded with cheese sauce, jalapeños, and our signature seasoning.',
    image: '/images/fries.jpg',
    tag: 'Best Seller',
    isVeg: true,
  },
  {
    id: 2,
    name: 'Steamed Momos',
    category: 'Snacks',
    price: 100,
    description: 'Soft handmade dumplings filled with spiced veggies, served with a fiery red chutney.',
    image: '/images/momos.jpg',
    tag: 'Popular',
    isVeg: true,
  },
  {
    id: 3,
    name: 'Fried Momos',
    category: 'Snacks',
    price: 120,
    description: 'Golden crispy momos fried to perfection. A crowd favourite with tangy dipping sauce.',
    image: '/images/fried-momos.jpg',
    tag: null,
    isVeg: true,
  },
  {
    id: 4,
    name: 'Masala Maggi',
    category: 'Main Course',
    price: 80,
    description: 'Classic Maggi noodles tossed with fresh veggies, butter, and aromatic masala spices.',
    image: '/images/maggi.jpg',
    tag: 'Comfort Food',
    isVeg: true,
  },
  {
    id: 5,
    name: 'Veg Burger',
    category: 'Main Course',
    price: 110,
    description: 'Crispy patty stacked with lettuce, tomato, onions, and our house sauce in a toasted bun.',
    image: '/images/burger.jpg',
    tag: null,
    isVeg: true,
  },
  {
    id: 6,
    name: 'Paneer Sandwich',
    category: 'Main Course',
    price: 100,
    description: 'Grilled sandwich with marinated paneer, capsicum, onions, and green chutney.',
    image: '/images/sandwich.jpg',
    tag: null,
    isVeg: true,
  },
  {
    id: 7,
    name: 'Cold Coffee',
    category: 'Beverages',
    price: 90,
    description: 'Rich blended coffee with chilled milk, ice, and a layer of cream. Pure refreshment.',
    image: '/images/cold-coffee.jpg',
    tag: 'Must Try',
    isVeg: true,
  },
  {
    id: 8,
    name: 'Mango Shake',
    category: 'Beverages',
    price: 80,
    description: 'Fresh Alphonso mango blended with chilled milk. Thick, creamy, and irresistible.',
    image: '/images/mango-shake.jpg',
    tag: null,
    isVeg: true,
  },
  {
    id: 9,
    name: 'Chocolate Brownie',
    category: 'Desserts',
    price: 70,
    description: 'Warm fudgy brownie with a gooey centre, served with a scoop of vanilla ice cream.',
    image: '/images/brownie.jpg',
    tag: 'New',
    isVeg: true,
  },
  {
    id: 10,
    name: 'Waffle',
    category: 'Desserts',
    price: 110,
    description: 'Crispy Belgian waffle topped with maple syrup, whipped cream, and mixed berries.',
    image: '/images/waffle.jpg',
    tag: null,
    isVeg: true,
  },
];
```

### `src/data/reviewsData.js`

```js
export const reviews = [
  {
    id: 1,
    name: 'Arjun Menon',
    avatar: 'AM',
    rating: 5,
    date: 'March 2024',
    review:
      'Best momos I have had outside of a proper Tibetan place. The fried momos are absolutely killer. Love the vibe here — chill, cozy, and the staff is super friendly.',
    item: 'Fried Momos',
  },
  {
    id: 2,
    name: 'Priya Nair',
    avatar: 'PN',
    rating: 5,
    date: 'February 2024',
    review:
      'The loaded fries are dangerously addictive. I came once and now I am here every weekend. The cold coffee is the perfect pair with it. 10/10 would recommend.',
    item: 'Loaded French Fries',
  },
  {
    id: 3,
    name: 'Rahul Krishnan',
    avatar: 'RK',
    rating: 4,
    date: 'January 2024',
    review:
      'Really cozy little cafe. The masala maggi took me straight back to hostel days. Good music, good food, great value for money. Only wish they were open later.',
    item: 'Masala Maggi',
  },
  {
    id: 4,
    name: 'Meera Suresh',
    avatar: 'MS',
    rating: 5,
    date: 'December 2023',
    review:
      'Stumbled upon this place and honestly one of the best accidental discoveries. The chocolate brownie with ice cream is pure heaven. Will definitely be back.',
    item: 'Chocolate Brownie',
  },
  {
    id: 5,
    name: 'Devika Thomas',
    avatar: 'DT',
    rating: 5,
    date: 'November 2023',
    review:
      'Super clean, very affordable, and the food is made fresh. The paneer sandwich was beautifully grilled. This is my new go-to spot after college.',
    item: 'Paneer Sandwich',
  },
  {
    id: 6,
    name: 'Aditya Varma',
    avatar: 'AV',
    rating: 4,
    date: 'October 2023',
    review:
      'Mango shake was thick and not too sweet — exactly how it should be. The ambience is relaxed and perfect for a lazy afternoon hangout. Prices are very student-friendly.',
    item: 'Mango Shake',
  },
];
```

### `src/utils/constants.js`

```js
export const CAFE_NAME = 'The Cozy Cup';
export const CAFE_TAGLINE = 'Good food. Good vibes. Always.';
export const CAFE_ADDRESS = '42, MG Road, Pathanamthitta, Kerala 689645';
export const CAFE_PHONE = '+91 94470 00000';
export const CAFE_EMAIL = 'hello@thecozycup.in';
export const CAFE_HOURS = {
  weekdays: '10:00 AM – 10:00 PM',
  weekends: '9:00 AM – 11:00 PM',
};
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/thecozycup',
  facebook: 'https://facebook.com/thecozycup',
  zomato: 'https://zomato.com',
};
```

---

## Phase 3 — Shared Components

### `src/components/Navbar/Navbar.jsx`

```jsx
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { CAFE_NAME } from '@/utils/constants';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/reviews', label: 'Reviews' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          ☕ {CAFE_NAME}
        </NavLink>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.x1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.x2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.x3 : ''}`} />
        </button>
      </div>
    </nav>
  );
}
```

### `src/components/Navbar/Navbar.module.css`

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--navbar-height);
  background: transparent;
  transition: background var(--transition-base), box-shadow var(--transition-base);
}

.navbar.scrolled {
  background: rgba(250, 246, 240, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-sm);
}

.inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.links {
  display: flex;
  list-style: none;
  gap: var(--space-lg);
  align-items: center;
}

.link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted);
  position: relative;
  transition: color var(--transition-fast);
}

.link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-secondary);
  transition: width var(--transition-base);
}

.link:hover,
.link.active {
  color: var(--color-primary);
}

.link:hover::after,
.link.active::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-primary);
  transition: transform var(--transition-base), opacity var(--transition-fast);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .links {
    position: fixed;
    top: var(--navbar-height);
    left: 0;
    right: 0;
    background: var(--color-surface);
    flex-direction: column;
    padding: var(--space-lg);
    gap: var(--space-md);
    transform: translateY(-120%);
    transition: transform var(--transition-base);
    box-shadow: var(--shadow-md);
  }

  .links.open {
    transform: translateY(0);
  }

  .x1 { transform: translateY(7px) rotate(45deg); }
  .x2 { opacity: 0; }
  .x3 { transform: translateY(-7px) rotate(-45deg); }
}
```

### `src/components/MenuCard/MenuCard.jsx`

```jsx
import { motion } from 'framer-motion';
import styles from './MenuCard.module.css';

export default function MenuCard({ item }) {
  const { name, description, price, image, tag, isVeg } = item;

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
          src={image}
          alt={name}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/400x280/E8D5BC/3B1F0A?text=${encodeURIComponent(name)}`;
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
        <div className={styles.footer}>
          <span className={styles.price}>₹{price}</span>
          <button className={styles.btn} aria-label={`Order ${name}`}>
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
```

### `src/components/MenuCard/MenuCard.module.css`

```css
.card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  transition: box-shadow var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.imageWrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.card:hover .image {
  transform: scale(1.06);
}

.tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--color-secondary);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: var(--radius-full);
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 1rem;
}

.body {
  padding: var(--space-md);
}

.name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: var(--space-xs);
  color: var(--color-primary);
}

.description {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-secondary);
  font-family: var(--font-heading);
}

.btn {
  background: var(--color-primary);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.btn:hover {
  background: var(--color-secondary);
  transform: scale(1.04);
}
```

### `src/components/ReviewCard/ReviewCard.jsx`

```jsx
import { motion } from 'framer-motion';
import styles from './ReviewCard.module.css';

function StarRating({ rating }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? styles.filled : styles.empty}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewCard({ review, index }) {
  const { name, avatar, rating, date, review: text, item } = review;

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.header}>
        <div className={styles.avatar}>{avatar}</div>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.date}>{date}</p>
        </div>
        <StarRating rating={rating} />
      </div>

      <blockquote className={styles.text}>"{text}"</blockquote>

      {item && (
        <p className={styles.item}>
          <span className={styles.itemLabel}>Ordered:</span> {item}
        </p>
      )}
    </motion.div>
  );
}
```

### `src/components/ReviewCard/ReviewCard.module.css`

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
}

.avatar {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: var(--radius-full);
  background: var(--color-secondary);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-primary);
}

.date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.stars {
  margin-left: auto;
  font-size: 1.1rem;
}

.filled { color: #F4B942; }
.empty  { color: var(--color-border); }

.text {
  font-size: 0.9rem;
  line-height: 1.8;
  color: var(--color-text);
  font-style: italic;
  border-left: 3px solid var(--color-accent);
  padding-left: var(--space-md);
  margin-bottom: var(--space-sm);
}

.item {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.itemLabel {
  font-weight: 600;
  color: var(--color-secondary);
}
```

### `src/components/SectionTitle/SectionTitle.jsx`

```jsx
import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
```

### `src/components/SectionTitle/SectionTitle.module.css`

```css
.wrapper {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-xl);
}

.label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: var(--space-sm);
}

.title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.15;
  margin-bottom: var(--space-md);
}

.subtitle {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.8;
}
```

### `src/components/ScrollReveal/ScrollReveal.jsx`

```jsx
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

### `src/components/Footer/Footer.jsx`

```jsx
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { CAFE_NAME, CAFE_ADDRESS, CAFE_PHONE, CAFE_HOURS, SOCIAL_LINKS } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <h3 className={styles.logo}>☕ {CAFE_NAME}</h3>
          <p className={styles.tagline}>
            A cozy corner for good food, great company, and unforgettable flavours.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.colLinks}>
            {['/', '/menu', '/about', '/gallery', '/reviews'].map((path, i) => (
              <li key={path}>
                <Link to={path} className={styles.colLink}>
                  {['Home', 'Menu', 'About', 'Gallery', 'Reviews'][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Opening Hours</h4>
          <p className={styles.info}>Mon – Fri: {CAFE_HOURS.weekdays}</p>
          <p className={styles.info}>Sat – Sun: {CAFE_HOURS.weekends}</p>
          <p className={`${styles.info} ${styles.address}`}>{CAFE_ADDRESS}</p>
          <p className={styles.info}>{CAFE_PHONE}</p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {CAFE_NAME}. All rights reserved.
        </p>
        <div className={styles.social}>
          {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
```

### `src/components/Footer/Footer.module.css`

```css
.footer {
  background: var(--color-bg-dark);
  color: #ccc;
  padding: var(--space-xl) 0 var(--space-lg);
  margin-top: var(--space-xl);
}

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-xl);
  padding-bottom: var(--space-xl);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.tagline {
  font-size: 0.875rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.5);
}

.colTitle {
  font-family: var(--font-heading);
  font-size: 1rem;
  color: #fff;
  margin-bottom: var(--space-md);
}

.colLinks { list-style: none; }

.colLink {
  display: block;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.55);
  padding: 4px 0;
  transition: color var(--transition-fast);
}

.colLink:hover { color: var(--color-accent); }

.info {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.55);
  margin-bottom: var(--space-sm);
  line-height: 1.6;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-lg);
  flex-wrap: wrap;
  gap: var(--space-md);
}

.copy { font-size: 0.8rem; color: rgba(255,255,255,0.4); }

.social { display: flex; gap: var(--space-md); }

.socialLink {
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  transition: color var(--transition-fast);
}

.socialLink:hover { color: var(--color-accent); }

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
}
```

---

## Phase 4 — Pages

### `src/pages/Home/Home.jsx`

```jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import MenuCard from '@components/MenuCard/MenuCard';
import ReviewCard from '@components/ReviewCard/ReviewCard';
import ScrollReveal from '@components/ScrollReveal/ScrollReveal';
import { menuItems } from '@data/menuData';
import { reviews } from '@data/reviewsData';
import { CAFE_NAME, CAFE_TAGLINE } from '@/utils/constants';

const featuredItems = menuItems.filter((item) => item.tag === 'Best Seller' || item.tag === 'Popular');
const featuredReviews = reviews.slice(0, 3);

const highlights = [
  { icon: '🍟', title: 'Crispy Fries', desc: 'Golden, loaded, irresistible.' },
  { icon: '🥟', title: 'Fresh Momos', desc: 'Handmade daily, steamed or fried.' },
  { icon: '☕', title: 'Crafted Drinks', desc: 'Cold coffees and thick shakes.' },
  { icon: '🍫', title: 'Sweet Endings', desc: 'Brownies, waffles, and more.' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <motion.span
            className={styles.heroLabel}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {CAFE_NAME}
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {CAFE_TAGLINE}
          </motion.p>
          <motion.div
            className={styles.heroCta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link to="/menu" className={styles.ctaPrimary}>Explore Menu</Link>
            <Link to="/about" className={styles.ctaSecondary}>Our Story</Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className={`section ${styles.highlights}`}>
        <div className="container">
          <SectionTitle
            label="Why us"
            title="Made with love, served with care"
            subtitle="Every item on our menu is prepared fresh, using quality ingredients and plenty of heart."
          />
          <div className={styles.highlightGrid}>
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.1}>
                <div className={styles.highlightCard}>
                  <span className={styles.highlightIcon}>{h.icon}</span>
                  <h3 className={styles.highlightTitle}>{h.title}</h3>
                  <p className={styles.highlightDesc}>{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className={`section ${styles.featured}`}>
        <div className="container">
          <SectionTitle
            label="Our favourites"
            title="Most loved dishes"
            subtitle="The items your fellow food lovers keep coming back for."
          />
          <div className={styles.menuGrid}>
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.seeAll}>
            <Link to="/menu" className={styles.ctaPrimary}>See Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Reviews strip */}
      <section className={`section ${styles.reviewsSection}`}>
        <div className="container">
          <SectionTitle
            label="What people say"
            title="Real reviews, real love"
          />
          <div className={styles.reviewsGrid}>
            {featuredReviews.map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>
          <div className={styles.seeAll}>
            <Link to="/reviews" className={styles.ctaSecondary}>Read All Reviews</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
```

### `src/pages/Home/Home.module.css`

```css
/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url('/images/hero-bg.jpg') center/cover no-repeat;
  background-color: var(--color-primary);
}

.heroOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26,15,5,0.85) 0%, rgba(59,31,10,0.6) 100%);
}

.heroContent {
  position: relative;
  z-index: 1;
  padding-top: var(--navbar-height);
  max-width: 680px;
}

.heroLabel {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-sm);
}

.heroTitle {
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.05;
  margin-bottom: var(--space-md);
}

.heroSub {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255,255,255,0.75);
  margin-bottom: var(--space-lg);
  line-height: 1.7;
}

.heroCta {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.ctaPrimary {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  background: var(--color-secondary);
  color: #fff;
  font-weight: 600;
  border-radius: var(--radius-full);
  font-size: 0.95rem;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.ctaPrimary:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
}

.ctaSecondary {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  border: 2px solid rgba(255,255,255,0.4);
  color: #fff;
  font-weight: 600;
  border-radius: var(--radius-full);
  font-size: 0.95rem;
  transition: border-color var(--transition-fast), background var(--transition-fast);
}

.ctaSecondary:hover {
  border-color: rgba(255,255,255,0.8);
  background: rgba(255,255,255,0.08);
}

/* Highlights */
.highlights { background: var(--color-bg); }

.highlightGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.highlightCard {
  text-align: center;
  padding: var(--space-lg);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.highlightCard:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.highlightIcon { font-size: 2.2rem; display: block; margin-bottom: var(--space-md); }

.highlightTitle {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.highlightDesc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

/* Menu grid */
.featured { background: var(--color-bg); }

.menuGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.seeAll {
  text-align: center;
  margin-top: var(--space-xl);
}

/* Reviews */
.reviewsSection { background: var(--color-surface); }

.reviewsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

@media (max-width: 1024px) {
  .highlightGrid { grid-template-columns: repeat(2, 1fr); }
  .menuGrid { grid-template-columns: repeat(2, 1fr); }
  .reviewsGrid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .highlightGrid { grid-template-columns: 1fr; }
  .menuGrid { grid-template-columns: 1fr; }
  .reviewsGrid { grid-template-columns: 1fr; }
}
```

### `src/pages/Menu/Menu.jsx`

```jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Menu.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import MenuCard from '@components/MenuCard/MenuCard';
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
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35 }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No items in this category yet. Check back soon!</p>
        )}
      </div>
    </main>
  );
}
```

### `src/pages/Menu/Menu.module.css`

```css
.page { padding-top: var(--navbar-height); }

.hero {
  background: var(--color-primary);
  padding: var(--space-xl) 0 var(--space-lg);
}

.hero :global(.wrapper) { margin-bottom: 0; }
.hero :global(.label) { color: var(--color-accent); }
.hero :global(.title) { color: #fff; }
.hero :global(.subtitle) { color: rgba(255,255,255,0.65); }

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.filterBtn {
  padding: 9px 20px;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-muted);
  background: transparent;
  transition: all var(--transition-fast);
}

.filterBtn:hover {
  border-color: var(--color-secondary);
  color: var(--color-secondary);
}

.filterBtn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.empty {
  text-align: center;
  padding: var(--space-xl);
  color: var(--color-text-muted);
  font-size: 1rem;
}

@media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .grid { grid-template-columns: 1fr; } }
```

### `src/pages/Reviews/Reviews.jsx`

```jsx
import styles from './Reviews.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import ReviewCard from '@components/ReviewCard/ReviewCard';
import { reviews } from '@data/reviewsData';

const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

export default function Reviews() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <SectionTitle
            label="Customer love"
            title="What our guests say"
            subtitle="Honest reviews from the people who matter most — our customers."
          />
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>{avgRating}</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{reviews.length}+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>★★★★★</span>
              <span className={styles.statLabel}>5-star reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className={styles.grid}>
          {reviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
```

### `src/pages/Reviews/Reviews.module.css`

```css
.page { padding-top: var(--navbar-height); }

.hero {
  background: var(--color-primary);
  padding: var(--space-xl) 0;
}

.hero :global(.title) { color: #fff; }
.hero :global(.label) { color: var(--color-accent); }
.hero :global(.subtitle) { color: rgba(255,255,255,0.65); }

.stats {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
}

.stat { text-align: center; }

.statNum {
  display: block;
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-accent);
}

.statLabel {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.6);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

@media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .grid { grid-template-columns: 1fr; } }
```

### `src/pages/About/About.jsx`

```jsx
import styles from './About.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import ScrollReveal from '@components/ScrollReveal/ScrollReveal';
import { CAFE_NAME } from '@/utils/constants';

const values = [
  { icon: '🌿', title: 'Fresh Ingredients', desc: 'We source local, fresh produce every single day.' },
  { icon: '🤝', title: 'Community First', desc: 'This cafe was born from the community and serves it every day.' },
  { icon: '❤️', title: 'Made with Love', desc: 'Every dish is prepared with care, not just speed.' },
  { icon: '✨', title: 'Affordable Always', desc: 'Great food should not cost a fortune. We keep it real.' },
];

export default function About() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <SectionTitle
            label="Our story"
            title={`The story of ${CAFE_NAME}`}
            subtitle="A little cafe with a big heart."
          />
        </div>
      </div>

      <section className="section">
        <div className={`container ${styles.story}`}>
          <ScrollReveal direction="left" className={styles.storyImage}>
            <img
              src="/images/cafe-interior.jpg"
              alt="Inside the cafe"
              onError={(e) => {
                e.target.src = 'https://placehold.co/600x440/E8D5BC/3B1F0A?text=Our+Cafe';
              }}
            />
          </ScrollReveal>
          <ScrollReveal direction="right" className={styles.storyText}>
            <span className={styles.storyLabel}>How it all started</span>
            <h2 className={styles.storyTitle}>A small dream, a warm reality</h2>
            <p>
              {CAFE_NAME} started as a simple idea — what if there was a place in town where
              you could grab amazing food, sit back, and just breathe? A place that felt like
              home but tasted like a treat.
            </p>
            <p>
              We opened our doors with a menu built around comfort: crispy fries, soft momos,
              hearty noodles, and cold coffees that hit different. Our food is not fancy — it
              is honest, fresh, and made with the kind of care that brings people back.
            </p>
            <p>
              Today, we serve hundreds of happy customers every week and we are just getting
              started. Come in, sit down, and let us feed you something good.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <SectionTitle
            label="What we stand for"
            title="Our values"
          />
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.12}>
                <div className={styles.valueCard}>
                  <span className={styles.valueIcon}>{v.icon}</span>
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
```

### `src/pages/About/About.module.css`

```css
.page { padding-top: var(--navbar-height); }

.hero {
  background: var(--color-primary);
  padding: var(--space-xl) 0;
}

.hero :global(.title) { color: #fff; }
.hero :global(.label) { color: var(--color-accent); }
.hero :global(.subtitle) { color: rgba(255,255,255,0.65); }

.story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.storyImage img {
  border-radius: var(--radius-lg);
  width: 100%;
  height: 440px;
  object-fit: cover;
  box-shadow: var(--shadow-lg);
}

.storyLabel {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: var(--space-sm);
}

.storyTitle {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: var(--space-lg);
  color: var(--color-primary);
}

.storyText p {
  color: var(--color-text-muted);
  margin-bottom: var(--space-md);
  line-height: 1.8;
}

.valuesSection { background: var(--color-surface); }

.valuesGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.valueCard {
  padding: var(--space-lg);
  text-align: center;
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.valueIcon { font-size: 2rem; display: block; margin-bottom: var(--space-md); }
.valueTitle { font-size: 1rem; font-weight: 600; margin-bottom: var(--space-sm); }
.valueDesc { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.7; }

@media (max-width: 1024px) { .valuesGrid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px)  { .story { grid-template-columns: 1fr; } }
@media (max-width: 640px)  { .valuesGrid { grid-template-columns: 1fr; } }
```

### `src/pages/Gallery/Gallery.jsx`

```jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Gallery.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';

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
```

### `src/pages/Gallery/Gallery.module.css`

```css
.page { padding-top: var(--navbar-height); }

.hero {
  background: var(--color-primary);
  padding: var(--space-xl) 0;
}

.hero :global(.title) { color: #fff; }
.hero :global(.label) { color: var(--color-accent); }
.hero :global(.subtitle) { color: rgba(255,255,255,0.65); }

.grid {
  columns: 3;
  column-gap: var(--space-md);
}

.item {
  break-inside: avoid;
  margin-bottom: var(--space-md);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.item img {
  width: 100%;
  display: block;
  transition: transform var(--transition-slow);
}

.item:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(26,15,5,0);
  display: flex;
  align-items: flex-end;
  padding: var(--space-md);
  transition: background var(--transition-base);
}

.item:hover .overlay {
  background: rgba(26,15,5,0.5);
}

.overlayLabel {
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.item:hover .overlayLabel {
  opacity: 1;
  transform: translateY(0);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0,0,0,0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg);
}

.lightboxImg {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: var(--radius-md);
  object-fit: contain;
}

.lightboxClose {
  position: absolute;
  top: 24px;
  right: 24px;
  color: #fff;
  font-size: 1.4rem;
  opacity: 0.7;
  transition: opacity var(--transition-fast);
}

.lightboxClose:hover { opacity: 1; }

@media (max-width: 768px) { .grid { columns: 2; } }
@media (max-width: 480px) { .grid { columns: 1; } }
```

---

## Phase 5 — Animations (React Bits)

### `src/components/AnimatedText/AnimatedText.jsx`

```jsx
/**
 * AnimatedText — wraps React Bits text animation components.
 * variant options: 'split' | 'typewriter' | 'blur' | 'wave'
 */
import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.4, ease: 'easeOut' },
  }),
};

export function SplitText({ text, className }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

const wordVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function BlurText({ text, className }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={wordVariants}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
```

---

## Phase 6 — Routing & Layout

### `src/App.jsx`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './Layout';
import Home from '@pages/Home/Home';
import Menu from '@pages/Menu/Menu';
import About from '@pages/About/About';
import Gallery from '@pages/Gallery/Gallery';
import Reviews from '@pages/Reviews/Reviews';

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
```

### `src/Layout.jsx`

```jsx
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -12 },
};

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Outlet />
      </motion.div>
      <Footer />
    </>
  );
}
```

### `src/main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="The Cozy Cup — Good food, good vibes. French fries, momos, cold coffee and more in Pathanamthitta." />
    <meta property="og:title" content="The Cozy Cup Cafe" />
    <meta property="og:description" content="Good food. Good vibes. Always." />
    <meta property="og:image" content="/og-image.jpg" />
    <title>The Cozy Cup</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## Phase 7 — Polish & Deploy

### Setup commands

```bash
# 1. Create project
npm create vite@latest cafe-website -- --template react
cd cafe-website

# 2. Install all dependencies
npm install react-router-dom framer-motion

# 3. Install React Bits
npm install react-bits

# 4. Install gh-pages for deployment
npm install -D gh-pages

# 5. Run dev server
npm run dev

# 6. Build for production
npm run build

# 7. Deploy to GitHub Pages
npm run deploy
```

### Checklist before deploy

- [ ] Replace all placeholder images with real cafe photos
- [ ] Update `CAFE_NAME`, `CAFE_ADDRESS`, `CAFE_PHONE` in `constants.js`
- [ ] Update `SOCIAL_LINKS` with real social media URLs
- [ ] Add `base: '/repo-name/'` to `vite.config.js` if deploying to GitHub Pages subfolder
- [ ] Test on mobile — check all grid breakpoints
- [ ] Run `npm run build` and test `npm run preview`
- [ ] Add Google Fonts preconnect in `index.html` for performance
- [ ] Add `loading="lazy"` is already set on all images ✓
- [ ] Verify all `onError` image fallbacks are working ✓

---

## Architecture Summary

```
Static data (JS files)
       ↓
Page components consume data
       ↓
Shared components render UI
       ↓
Framer Motion handles all animations
       ↓
React Router handles navigation
       ↓
CSS Modules scope all styles
       ↓
Vite builds optimized static bundle
       ↓
Deploy to GitHub Pages / Netlify / Vercel
```

---

*Built by: Senior React Developer*  
*Project: The Cozy Cup — Cafe Static Website*  
*Total files: 30+ | Estimated build time: 5–7 days*
