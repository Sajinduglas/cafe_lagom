# Cafe Lagom — Website Plan (Updated with Real Branding)

> Stack: React + Vite + React Router + React Bits (animations) + CSS Modules  
> Type: 100% Static — no backend, no database  
> Brand: **Cafe Lagom** — "not too much, not too little"  
> Theme: Deep forest green + warm cream — extracted directly from the real menu boards and logo

---

## ⚠️ AGENT INSTRUCTIONS — What Changed vs Previous Plan

This document is an **update** to the original `cafe_website_plan.md`. The architecture, component structure, routing, animation setup, and deployment plan are **identical**. Only the following three things changed:

1. **Brand name & tagline** → `Cafe Lagom` / `not too much, not too little`
2. **Color system** → full replacement with Cafe Lagom's real green palette
3. **Menu data** → full replacement with the real menu from the physical menu boards

**Do NOT change** anything else from the original plan. Only replace the three sections below in their respective files.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System — Replace `variables.css`](#color-system--replace-variablescss)
3. [Logo Usage Instructions](#logo-usage-instructions)
4. [Constants — Replace `constants.js`](#constants--replace-constantsjs)
5. [Menu Data — Replace `menuData.js`](#menu-data--replace-menudatajs)
6. [Reviews Data — Keep or Replace `reviewsData.js`](#reviews-data)

---

## Brand Identity

| Property | Value |
|----------|-------|
| **Cafe Name** | Cafe Lagom |
| **Tagline** | not too much, not too little |
| **Logo file** | `src/assets/images/logo.png` (use the provided circular logo with fork-plate-spoon icon) |
| **Brand feel** | Clean, minimal, slightly premium — not loud, not boring |
| **Primary color** | Deep forest green `#0D4A35` |
| **Accent color** | Warm cream / off-white `#E8DCC8` |
| **Font pairing** | Keep `Playfair Display` for headings + `Inter` for body — matches the logo's serif+sans mix |

---

## Color System — Replace `variables.css`

**Replace the entire `src/styles/variables.css` with this:**

```css
:root {
  /* ─── Brand Colors (extracted from Cafe Lagom menu boards & logo) ─── */
  --color-primary: #0D4A35;        /* deep forest green — main brand color */
  --color-primary-dark: #082D20;   /* darker green — hover states, footer */
  --color-primary-light: #155C42;  /* lighter green — cards on dark bg */
  --color-secondary: #C8A96E;      /* warm golden tan — price highlights, CTAs */
  --color-accent: #E8DCC8;         /* warm cream — logo text color, light accents */

  /* ─── Background Colors ─── */
  --color-bg: #F5F0E8;             /* warm off-white — main page background */
  --color-bg-green: #0D4A35;       /* deep green — hero sections, dark panels */
  --color-surface: #FFFFFF;        /* pure white — cards */
  --color-surface-cream: #FAF6EE;  /* light cream — alternating section bg */

  /* ─── Text Colors ─── */
  --color-text: #1A1A1A;           /* near black — body text on light bg */
  --color-text-on-green: #E8DCC8;  /* cream — text on dark green backgrounds */
  --color-text-muted: #5A6B5E;     /* muted green-grey — descriptions, captions */
  --color-text-muted-on-green: rgba(232, 220, 200, 0.65); /* muted cream on green */

  /* ─── UI Colors ─── */
  --color-border: #D8CDB8;         /* warm beige border */
  --color-border-green: rgba(232, 220, 200, 0.2); /* subtle border on green bg */
  --color-tag-bg: #C8A96E;         /* tag/badge background */
  --color-tag-text: #fff;

  /* ─── Typography ─── */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* ─── Spacing (unchanged) ─── */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;
  --space-2xl: 128px;

  /* ─── Border Radius (unchanged) ─── */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* ─── Shadows (adjusted for green theme) ─── */
  --shadow-sm: 0 1px 4px rgba(13, 74, 53, 0.08);
  --shadow-md: 0 4px 16px rgba(13, 74, 53, 0.12);
  --shadow-lg: 0 12px 40px rgba(13, 74, 53, 0.18);

  /* ─── Transitions (unchanged) ─── */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 600ms ease;

  /* ─── Layout (unchanged) ─── */
  --max-width: 1200px;
  --navbar-height: 72px;
}
```

### Color Usage Guide for the Agent

| Where | Variable to use |
|-------|----------------|
| Page background | `--color-bg` |
| Hero / dark sections | `--color-bg-green` |
| Navbar background (scrolled) | `rgba(13, 74, 53, 0.96)` with backdrop-filter |
| Navbar links (scrolled) | `--color-text-on-green` |
| Section titles on light bg | `--color-primary` |
| Section titles on dark bg | `--color-text-on-green` |
| Body text on light bg | `--color-text` |
| Body text on dark bg | `--color-text-on-green` |
| Muted text on light bg | `--color-text-muted` |
| Muted text on dark bg | `--color-text-muted-on-green` |
| Price text | `--color-secondary` |
| CTA buttons (primary) | bg: `--color-secondary`, text: `#fff` |
| CTA buttons (secondary) | border: `--color-border-green`, text: `--color-text-on-green` |
| Card background | `--color-surface` |
| Footer background | `--color-primary-dark` |
| Tags / badges | bg: `--color-tag-bg`, text: `--color-tag-text` |
| Star ratings | `#F4B942` (unchanged) |

---

## Logo Usage Instructions

The logo file (`logo.png`) is the **circular Cafe Lagom logo** — a fork-plate-spoon icon above "cafe Lagom" text, inside a double-ring circle, with the tagline "not too much, not too little" along the bottom arc.

### In `Navbar.jsx` — replace the text logo with the image logo:

```jsx
// BEFORE (old placeholder text logo):
<NavLink to="/" className={styles.logo}>
  ☕ {CAFE_NAME}
</NavLink>

// AFTER (real logo image):
<NavLink to="/" className={styles.logo}>
  <img
    src="/images/logo.png"
    alt="Cafe Lagom"
    className={styles.logoImg}
  />
  <span className={styles.logoText}>{CAFE_NAME}</span>
</NavLink>
```

### Add to `Navbar.module.css`:

```css
.logoImg {
  width: 44px;
  height: 44px;
  object-fit: contain;
  /* The logo is cream on dark green — works perfectly on scrolled green navbar */
  /* On transparent navbar (hero), add a subtle drop shadow for legibility */
  filter: drop-shadow(0 1px 3px rgba(0,0,0,0.2));
}

.logoText {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-on-green);
  letter-spacing: -0.01em;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}
```

> **Note:** The Navbar background when scrolled should be `rgba(13, 74, 53, 0.96)` (dark green) not the previous cream color. The logo is cream on green, so it reads perfectly on the scrolled state. On the hero (transparent navbar), the logo also works since the hero bg is dark green.

### In `Footer.jsx` — add logo to footer brand column:

```jsx
// In the brand div of Footer.jsx, add the logo image above the text:
<div className={styles.brand}>
  <img src="/images/logo.png" alt="Cafe Lagom" className={styles.footerLogo} />
  <h3 className={styles.logoText}>{CAFE_NAME}</h3>
  <p className={styles.tagline}>not too much, not too little.</p>
</div>
```

### Add to `Footer.module.css`:

```css
.footerLogo {
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-bottom: var(--space-sm);
  /* Logo is cream — perfectly visible on dark green footer */
}
```

---

## Constants — Replace `constants.js`

**Replace the entire `src/utils/constants.js` with this:**

```js
export const CAFE_NAME = 'Cafe Lagom';
export const CAFE_TAGLINE = 'not too much, not too little';
export const CAFE_DESCRIPTION =
  'A place where every dish is freshly prepared, every drink is made with care, and every visit feels just right.';
export const CAFE_NOTE =
  'All our dishes are freshly prepared. Please allow 20 minutes or more for your order — good food takes time!';
export const CAFE_ADDRESS = 'Pathanamthitta, Kerala';
export const CAFE_PHONE = '+91 00000 00000';
export const CAFE_EMAIL = 'hello@cafelagom.in';
export const CAFE_HOURS = {
  weekdays: '10:00 AM – 10:00 PM',
  weekends: '9:00 AM – 11:00 PM',
};
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/cafelagom',
  facebook: 'https://facebook.com/cafelagom',
  zomato: 'https://zomato.com',
};
```

---

## Menu Data — Replace `menuData.js`

**Replace the entire `src/data/menuData.js` with this.**

### Menu Structure

The real Cafe Lagom menu has **two boards**:

- **Board 1 (Drinks):** Lime, Fresh Juice, Avil Milk, Tender Coconut Blend, Hot Drinks, Shakes, Special Shakes, Mojito, Falooda
- **Board 2 (Food):** Fried Chicken, French Fries, Burgers, Specials, Wraps, Sandwich, Club Sandwich, Momo

Categories for the filter tabs on the Menu page:
```
All | Food | Drinks | Shakes & Falooda | Momos
```

Each `menuItem` has:
- `id` — unique number
- `name` — item name
- `category` — one of the filter categories
- `subCategory` — the actual section heading from the menu board (e.g. "French Fries", "Mojito")
- `price` — number (base price; for momos with size variants, use the lowest price)
- `priceNote` — string or null (e.g. "Non-Veg Full ₹170 / Half ₹90 | Veg Full ₹150 / Half ₹80")
- `description` — short description
- `tag` — "Best Seller" | "Popular" | "Must Try" | "New" | "Special" | null
- `isVeg` — boolean

```js
// ─────────────────────────────────────────────
// menuData.js — Cafe Lagom Real Menu
// ─────────────────────────────────────────────

export const menuCategories = [
  'All',
  'Food',
  'Drinks',
  'Shakes & Falooda',
  'Momos',
];

export const menuItems = [

  // ─── FRENCH FRIES ───────────────────────────
  {
    id: 1,
    name: 'Regular Fries',
    category: 'Food',
    subCategory: 'French Fries',
    price: 60,
    priceNote: null,
    description: 'Classic golden crispy fries. Simple, perfect, addictive.',
    tag: null,
    isVeg: true,
  },
  {
    id: 2,
    name: 'Peri-Peri Fries',
    category: 'Food',
    subCategory: 'French Fries',
    price: 70,
    priceNote: null,
    description: 'Crispy fries tossed in fiery Peri-Peri seasoning.',
    tag: 'Popular',
    isVeg: true,
  },
  {
    id: 3,
    name: 'Loaded Cheese Fries',
    category: 'Food',
    subCategory: 'French Fries',
    price: 150,
    priceNote: null,
    description: 'Golden fries smothered in rich, melted cheese sauce.',
    tag: 'Best Seller',
    isVeg: true,
  },

  // ─── FRIED CHICKEN ──────────────────────────
  {
    id: 4,
    name: 'Chicken Strips',
    category: 'Food',
    subCategory: 'Fried Chicken',
    price: 199,
    priceNote: null,
    description: '6 pcs fried boneless strips served with Mayonnaise & Ketchup.',
    tag: 'Best Seller',
    isVeg: false,
  },
  {
    id: 5,
    name: 'Snack Box',
    category: 'Food',
    subCategory: 'Fried Chicken',
    price: 149,
    priceNote: null,
    description: '2 pcs Chicken + 1 Chappathi, Mayonnaise & Ketchup.',
    tag: null,
    isVeg: false,
  },
  {
    id: 6,
    name: 'Dinner Box',
    category: 'Food',
    subCategory: 'Fried Chicken',
    price: 249,
    priceNote: null,
    description: '4 pcs Chicken + 2 Chappathi, Mayonnaise & Ketchup.',
    tag: 'Popular',
    isVeg: false,
  },
  {
    id: 7,
    name: 'Family Meal Box',
    category: 'Food',
    subCategory: 'Fried Chicken',
    price: 449,
    priceNote: null,
    description: '8 pcs Chicken + 3 Chappathi + French Fries, Mayonnaise & Ketchup.',
    tag: 'Special',
    isVeg: false,
  },

  // ─── BURGERS ────────────────────────────────
  {
    id: 8,
    name: 'Regular Burger',
    category: 'Food',
    subCategory: 'Burgers',
    price: 69,
    priceNote: 'Chicken ₹89 | Veg ₹69',
    description: 'Classic burger with a juicy patty and fresh toppings.',
    tag: null,
    isVeg: false,
  },
  {
    id: 9,
    name: 'Cheese Burger',
    category: 'Food',
    subCategory: 'Burgers',
    price: 89,
    priceNote: 'Chicken ₹109 | Veg ₹89',
    description: 'Burger loaded with melted cheese and classic fixings.',
    tag: null,
    isVeg: false,
  },
  {
    id: 10,
    name: 'Double Cheese Burger',
    category: 'Food',
    subCategory: 'Burgers',
    price: 119,
    priceNote: 'Chicken ₹149 | Veg ₹119',
    description: 'Double the cheese, double the satisfaction.',
    tag: 'Popular',
    isVeg: false,
  },
  {
    id: 11,
    name: 'Zinger (Fried Chicken) Burger',
    category: 'Food',
    subCategory: 'Burgers',
    price: 129,
    priceNote: 'Chicken only ₹129',
    description: 'Crispy fried chicken fillet in a toasted bun with sauce.',
    tag: 'Best Seller',
    isVeg: false,
  },
  {
    id: 12,
    name: 'Cheese Zinger Burger',
    category: 'Food',
    subCategory: 'Burgers',
    price: 139,
    priceNote: 'Chicken only ₹139',
    description: 'Zinger patty topped with melted cheese.',
    tag: null,
    isVeg: false,
  },
  {
    id: 13,
    name: 'Double Cheese Zinger',
    category: 'Food',
    subCategory: 'Burgers',
    price: 199,
    priceNote: 'Chicken only ₹199',
    description: 'Double cheese on a crispy fried Zinger fillet. A beast of a burger.',
    tag: null,
    isVeg: false,
  },
  {
    id: 14,
    name: 'Mexican Spicy Burger',
    category: 'Food',
    subCategory: 'Burgers',
    price: 119,
    priceNote: 'Chicken ₹139 | Veg ₹119',
    description: 'Spicy Mexican-style patty with jalapeños and salsa.',
    tag: null,
    isVeg: false,
  },
  {
    id: 15,
    name: 'Schezwan Burger',
    category: 'Food',
    subCategory: 'Burgers',
    price: 119,
    priceNote: 'Chicken only ₹119',
    description: 'Bold Schezwan sauce burger with a crispy chicken fillet.',
    tag: null,
    isVeg: false,
  },

  // ─── SPECIALS ───────────────────────────────
  {
    id: 16,
    name: 'Honey Chilli Chicken Burger',
    category: 'Food',
    subCategory: 'Specials',
    price: 149,
    priceNote: null,
    description: 'Sweet and spicy honey chilli glazed chicken in a premium bun.',
    tag: 'Special',
    isVeg: false,
  },
  {
    id: 17,
    name: 'Korean BBQ Chicken Burger',
    category: 'Food',
    subCategory: 'Specials',
    price: 199,
    priceNote: null,
    description: 'Korean BBQ marinated fried chicken with slaw and gochujang mayo.',
    tag: 'New',
    isVeg: false,
  },

  // ─── WRAPS ──────────────────────────────────
  {
    id: 18,
    name: 'Fried Chicken Wrap (Zinger Roll)',
    category: 'Food',
    subCategory: 'Wraps',
    price: 109,
    priceNote: null,
    description: 'Crispy Zinger chicken rolled with fresh veggies and sauce.',
    tag: 'Popular',
    isVeg: false,
  },
  {
    id: 19,
    name: 'Mexican Spicy Wrap',
    category: 'Food',
    subCategory: 'Wraps',
    price: 109,
    priceNote: null,
    description: 'Spicy Mexican-style wrap with chicken, salsa, and jalapeños.',
    tag: null,
    isVeg: false,
  },
  {
    id: 20,
    name: 'Tikka Roll',
    category: 'Food',
    subCategory: 'Wraps',
    price: 109,
    priceNote: null,
    description: 'Tender tikka-marinated chicken rolled in a soft wrap.',
    tag: null,
    isVeg: false,
  },
  {
    id: 21,
    name: 'Veg Roll',
    category: 'Food',
    subCategory: 'Wraps',
    price: 79,
    priceNote: null,
    description: 'Crispy veggie filling in a soft roll with chutney and sauce.',
    tag: null,
    isVeg: true,
  },

  // ─── SANDWICH ───────────────────────────────
  {
    id: 22,
    name: 'Fried Chicken Sandwich',
    category: 'Food',
    subCategory: 'Sandwich',
    price: 109,
    priceNote: null,
    description: 'Crispy fried chicken with lettuce and sauce in a toasted sandwich.',
    tag: 'Best Seller',
    isVeg: false,
  },
  {
    id: 23,
    name: 'Mexican Spicy Sandwich',
    category: 'Food',
    subCategory: 'Sandwich',
    price: 99,
    priceNote: null,
    description: 'Spicy Mexican chicken sandwich with jalapeños and salsa.',
    tag: null,
    isVeg: false,
  },
  {
    id: 24,
    name: 'Chicken Tikka Sandwich',
    category: 'Food',
    subCategory: 'Sandwich',
    price: 79,
    priceNote: null,
    description: 'Tandoori-style tikka chicken in a toasted sandwich.',
    tag: null,
    isVeg: false,
  },
  {
    id: 25,
    name: 'Cheese Chicken Sandwich',
    category: 'Food',
    subCategory: 'Sandwich',
    price: 119,
    priceNote: null,
    description: 'Grilled chicken with melted cheese, lettuce, and mayo.',
    tag: null,
    isVeg: false,
  },
  {
    id: 26,
    name: 'Veg Sandwich',
    category: 'Food',
    subCategory: 'Sandwich',
    price: 69,
    priceNote: null,
    description: 'Fresh veggies with chutney and cheese in toasted bread.',
    tag: null,
    isVeg: true,
  },

  // ─── CLUB SANDWICH ──────────────────────────
  {
    id: 27,
    name: 'Fried Chicken Club (Zinger)',
    category: 'Food',
    subCategory: 'Club Sandwich',
    price: 129,
    priceNote: null,
    description: 'Triple-decker club with crispy Zinger chicken, lettuce, tomato, and mayo.',
    tag: 'Popular',
    isVeg: false,
  },
  {
    id: 28,
    name: 'Chicken Tikka Club',
    category: 'Food',
    subCategory: 'Club Sandwich',
    price: 109,
    priceNote: null,
    description: 'Triple-decker club with tandoori tikka chicken and fresh veggies.',
    tag: null,
    isVeg: false,
  },
  {
    id: 29,
    name: 'Mexican Club',
    category: 'Food',
    subCategory: 'Club Sandwich',
    price: 129,
    priceNote: null,
    description: 'Spicy Mexican triple-decker with jalapeños, salsa, and chicken.',
    tag: null,
    isVeg: false,
  },
  {
    id: 30,
    name: 'Cheese Chicken Club',
    category: 'Food',
    subCategory: 'Club Sandwich',
    price: 139,
    priceNote: null,
    description: 'Triple-decker loaded with chicken and double cheese.',
    tag: null,
    isVeg: false,
  },
  {
    id: 31,
    name: 'Veg Club',
    category: 'Food',
    subCategory: 'Club Sandwich',
    price: 99,
    priceNote: null,
    description: 'Triple-decker club with fresh veggies, chutney, and cheese.',
    tag: null,
    isVeg: true,
  },

  // ─── MOMOS ──────────────────────────────────
  // Note: Momos have Non-Veg and Veg pricing, Full (10 pcs) and Half (5 pcs)
  // priceNote carries the full breakdown. price = lowest (Veg Half)
  {
    id: 32,
    name: 'The Classic Fried Momo',
    category: 'Momos',
    subCategory: 'Momo',
    price: 80,
    priceNote: 'Non-Veg: Full ₹170 / Half ₹90 | Veg: Full ₹150 / Half ₹80',
    description: 'Crispy fried momo with fillings in Chicken, Beef, Paneer, or Mushroom.',
    tag: 'Best Seller',
    isVeg: false,
  },
  {
    id: 33,
    name: 'Schezwan Momo',
    category: 'Momos',
    subCategory: 'Momo',
    price: 90,
    priceNote: 'Non-Veg: Full ₹190 / Half ₹100 | Veg: Full ₹170 / Half ₹90',
    description: 'Crispy fried momo topped with classic Schezwan sauce.',
    tag: 'Popular',
    isVeg: false,
  },
  {
    id: 34,
    name: 'Peri-Peri Dusted Momo',
    category: 'Momos',
    subCategory: 'Momo',
    price: 90,
    priceNote: 'Non-Veg: Full ₹190 / Half ₹100 | Veg: Full ₹170 / Half ₹90',
    description: 'Crispy fried momo dusted with Peri-Peri Masala.',
    tag: null,
    isVeg: false,
  },
  {
    id: 35,
    name: 'Honey Chilli Momo',
    category: 'Momos',
    subCategory: 'Momo',
    price: 100,
    priceNote: 'Non-Veg: Full ₹210 / Half ₹110 | Veg: Full ₹190 / Half ₹100',
    description: 'Crispy momo in a sweet and spicy honey chilli glaze.',
    tag: 'Must Try',
    isVeg: false,
  },
  {
    id: 36,
    name: 'Creamy Malai Momo',
    category: 'Momos',
    subCategory: 'Momo',
    price: 110,
    priceNote: 'Non-Veg: Full ₹220 / Half ₹120 | Veg: Full ₹210 / Half ₹110',
    description: 'Crispy fried momo served in a rich and creamy Malai sauce.',
    tag: 'New',
    isVeg: false,
  },

  // ─── LIME ───────────────────────────────────
  {
    id: 37,
    name: 'Fresh Lime',
    category: 'Drinks',
    subCategory: 'Lime',
    price: 25,
    priceNote: null,
    description: 'Freshly squeezed lime. Clean, simple, refreshing.',
    tag: null,
    isVeg: true,
  },
  {
    id: 38,
    name: 'Soda Lime',
    category: 'Drinks',
    subCategory: 'Lime',
    price: 30,
    priceNote: null,
    description: 'Fizzy lime soda — the perfect thirst quencher.',
    tag: null,
    isVeg: true,
  },
  {
    id: 39,
    name: 'Blue Lime',
    category: 'Drinks',
    subCategory: 'Lime',
    price: 40,
    priceNote: null,
    description: 'Lime with a striking blue coloring — vibrant and refreshing.',
    tag: null,
    isVeg: true,
  },
  {
    id: 40,
    name: 'Mint Lime',
    category: 'Drinks',
    subCategory: 'Lime',
    price: 40,
    priceNote: null,
    description: 'Fresh lime with crushed mint. Cooling and light.',
    tag: 'Popular',
    isVeg: true,
  },
  {
    id: 41,
    name: 'Ginger Lime',
    category: 'Drinks',
    subCategory: 'Lime',
    price: 40,
    priceNote: null,
    description: 'Tangy lime with a warming kick of fresh ginger.',
    tag: null,
    isVeg: true,
  },
  {
    id: 42,
    name: 'Watermelon Lime',
    category: 'Drinks',
    subCategory: 'Lime',
    price: 40,
    priceNote: null,
    description: 'Juicy watermelon blended with fresh lime.',
    tag: null,
    isVeg: true,
  },
  {
    id: 43,
    name: 'Grape Lime',
    category: 'Drinks',
    subCategory: 'Lime',
    price: 40,
    priceNote: null,
    description: 'Sweet grape flavor with a tangy lime twist.',
    tag: null,
    isVeg: true,
  },
  {
    id: 44,
    name: 'Orange Lime',
    category: 'Drinks',
    subCategory: 'Lime',
    price: 50,
    priceNote: null,
    description: 'Fresh orange and lime — a citrus punch.',
    tag: null,
    isVeg: true,
  },
  {
    id: 45,
    name: 'Pineapple Lime',
    category: 'Drinks',
    subCategory: 'Lime',
    price: 50,
    priceNote: null,
    description: 'Tropical pineapple with a zesty lime finish.',
    tag: null,
    isVeg: true,
  },

  // ─── FRESH JUICE ────────────────────────────
  {
    id: 46,
    name: 'Orange Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 60,
    priceNote: null,
    description: 'Freshly squeezed orange juice. No sugar, no nonsense.',
    tag: null,
    isVeg: true,
  },
  {
    id: 47,
    name: 'Pineapple Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 60,
    priceNote: null,
    description: 'Sweet tropical pineapple, freshly juiced.',
    tag: null,
    isVeg: true,
  },
  {
    id: 48,
    name: 'Grape Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 60,
    priceNote: null,
    description: 'Chilled fresh grape juice — rich and naturally sweet.',
    tag: null,
    isVeg: true,
  },
  {
    id: 49,
    name: 'Shamam Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 50,
    priceNote: null,
    description: 'Refreshing shamam melon juice — light and fragrant.',
    tag: null,
    isVeg: true,
  },
  {
    id: 50,
    name: 'Watermelon Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 40,
    priceNote: null,
    description: 'Pure chilled watermelon juice. Summer in a glass.',
    tag: 'Popular',
    isVeg: true,
  },
  {
    id: 51,
    name: 'Carrot Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 60,
    priceNote: null,
    description: 'Freshly juiced carrots — naturally sweet and nutritious.',
    tag: null,
    isVeg: true,
  },
  {
    id: 52,
    name: 'Cucumber Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 40,
    priceNote: null,
    description: 'Cool and hydrating fresh cucumber juice.',
    tag: null,
    isVeg: true,
  },
  {
    id: 53,
    name: 'Pomegranate Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 110,
    priceNote: null,
    description: 'Rich, ruby-red fresh pomegranate juice.',
    tag: null,
    isVeg: true,
  },
  {
    id: 54,
    name: 'Apple Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 100,
    priceNote: null,
    description: 'Crisp freshly juiced apple.',
    tag: null,
    isVeg: true,
  },
  {
    id: 55,
    name: 'ABC Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 80,
    priceNote: null,
    description: 'Apple + Beetroot + Carrot — a powerful nutrition blend.',
    tag: 'Must Try',
    isVeg: true,
  },
  {
    id: 56,
    name: 'CAP Juice',
    category: 'Drinks',
    subCategory: 'Fresh Juice',
    price: 80,
    priceNote: null,
    description: 'Carrot + Apple + Pineapple — sweet tropical goodness.',
    tag: null,
    isVeg: true,
  },

  // ─── AVIL MILK ──────────────────────────────
  {
    id: 57,
    name: 'Avil Milk',
    category: 'Drinks',
    subCategory: 'Avil Milk',
    price: 60,
    priceNote: null,
    description: 'Classic Kerala-style Avil Milk — chilled, creamy, comforting.',
    tag: null,
    isVeg: true,
  },
  {
    id: 58,
    name: 'Tender Coconut Avil',
    category: 'Drinks',
    subCategory: 'Avil Milk',
    price: 80,
    priceNote: null,
    description: 'Avil Milk with fresh tender coconut water and pulp.',
    tag: 'Best Seller',
    isVeg: true,
  },
  {
    id: 59,
    name: 'Chikku Avil',
    category: 'Drinks',
    subCategory: 'Avil Milk',
    price: 80,
    priceNote: null,
    description: 'Avil Milk with sweet Chikku (Sapota) flavour.',
    tag: null,
    isVeg: true,
  },
  {
    id: 60,
    name: 'Dry Fruit Avil',
    category: 'Drinks',
    subCategory: 'Avil Milk',
    price: 110,
    priceNote: null,
    description: 'Avil Milk loaded with premium dry fruits and nuts.',
    tag: null,
    isVeg: true,
  },
  {
    id: 61,
    name: 'Fruits Avil',
    category: 'Drinks',
    subCategory: 'Avil Milk',
    price: 100,
    priceNote: null,
    description: 'Avil Milk with fresh mixed fruit pieces.',
    tag: null,
    isVeg: true,
  },
  {
    id: 62,
    name: 'Avil Boost',
    category: 'Drinks',
    subCategory: 'Avil Milk',
    price: 70,
    priceNote: null,
    description: 'Avil Milk with a boost of chocolate Boost powder.',
    tag: null,
    isVeg: true,
  },
  {
    id: 63,
    name: 'Oreo Avil',
    category: 'Drinks',
    subCategory: 'Avil Milk',
    price: 90,
    priceNote: null,
    description: 'Avil Milk with crushed Oreo cookies blended in.',
    tag: 'Popular',
    isVeg: true,
  },
  {
    id: 64,
    name: 'Mango Avil',
    category: 'Drinks',
    subCategory: 'Avil Milk',
    price: 90,
    priceNote: null,
    description: 'Avil Milk with ripe mango pulp — a seasonal treat.',
    tag: null,
    isVeg: true,
  },
  {
    id: 65,
    name: 'Special Avil',
    category: 'Drinks',
    subCategory: 'Avil Milk',
    price: 120,
    priceNote: null,
    description: 'The ultimate Avil — loaded with dry fruits, fruits, and special toppings.',
    tag: 'Special',
    isVeg: true,
  },

  // ─── TENDER COCONUT BLEND ───────────────────
  {
    id: 66,
    name: 'Tender Coconut Grape',
    category: 'Drinks',
    subCategory: 'Tender Coconut Blend',
    price: 100,
    priceNote: null,
    description: 'Fresh tender coconut water blended with grape.',
    tag: null,
    isVeg: true,
  },
  {
    id: 67,
    name: 'Tender Coconut Mango',
    category: 'Drinks',
    subCategory: 'Tender Coconut Blend',
    price: 100,
    priceNote: null,
    description: 'Tender coconut water with sweet mango pulp.',
    tag: 'Popular',
    isVeg: true,
  },
  {
    id: 68,
    name: 'Tender Coconut Chikku',
    category: 'Drinks',
    subCategory: 'Tender Coconut Blend',
    price: 100,
    priceNote: null,
    description: 'Tender coconut blended with creamy Chikku (Sapota).',
    tag: null,
    isVeg: true,
  },
  {
    id: 69,
    name: 'Tender Coconut Oreo',
    category: 'Drinks',
    subCategory: 'Tender Coconut Blend',
    price: 100,
    priceNote: null,
    description: 'Tender coconut water with crushed Oreo cookies.',
    tag: null,
    isVeg: true,
  },
  {
    id: 70,
    name: 'Tender Coconut Avocado',
    category: 'Drinks',
    subCategory: 'Tender Coconut Blend',
    price: 120,
    priceNote: null,
    description: 'Creamy avocado blended with fresh tender coconut water.',
    tag: 'Must Try',
    isVeg: true,
  },

  // ─── HOT DRINKS ─────────────────────────────
  {
    id: 71,
    name: 'Coffee',
    category: 'Drinks',
    subCategory: 'Hot Drinks',
    price: 20,
    priceNote: null,
    description: 'Classic hot coffee — simple, warm, comforting.',
    tag: null,
    isVeg: true,
  },
  {
    id: 72,
    name: 'Black Coffee',
    category: 'Drinks',
    subCategory: 'Hot Drinks',
    price: 15,
    priceNote: null,
    description: 'Pure black coffee — no milk, no fuss.',
    tag: null,
    isVeg: true,
  },
  {
    id: 73,
    name: 'Lemon Tea',
    category: 'Drinks',
    subCategory: 'Hot Drinks',
    price: 15,
    priceNote: null,
    description: 'Hot tea with a squeeze of fresh lemon.',
    tag: null,
    isVeg: true,
  },

  // ─── SHAKES ─────────────────────────────────
  {
    id: 74,
    name: 'Oreo Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 80,
    priceNote: null,
    description: 'Thick blended shake with crushed Oreo cookies and milk.',
    tag: 'Best Seller',
    isVeg: true,
  },
  {
    id: 75,
    name: 'KitKat Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 80,
    priceNote: null,
    description: 'Creamy shake blended with crunchy KitKat bars.',
    tag: 'Popular',
    isVeg: true,
  },
  {
    id: 76,
    name: 'Dairy Milk Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 80,
    priceNote: null,
    description: 'Rich milk shake blended with Cadbury Dairy Milk chocolate.',
    tag: null,
    isVeg: true,
  },
  {
    id: 77,
    name: 'Snickers Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 80,
    priceNote: null,
    description: 'Indulgent shake with Snickers — peanut, caramel, and chocolate.',
    tag: null,
    isVeg: true,
  },
  {
    id: 78,
    name: 'Mango Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 70,
    priceNote: null,
    description: 'Thick ripe mango shake — tropical and creamy.',
    tag: null,
    isVeg: true,
  },
  {
    id: 79,
    name: 'Tender Coconut Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 60,
    priceNote: null,
    description: 'Fresh tender coconut blended into a light, natural shake.',
    tag: null,
    isVeg: true,
  },
  {
    id: 80,
    name: 'Avocado Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 80,
    priceNote: null,
    description: 'Creamy blended avocado shake — smooth and nutritious.',
    tag: null,
    isVeg: true,
  },
  {
    id: 81,
    name: 'Sharjah Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 60,
    priceNote: null,
    description: 'The classic Gulf-style Sharjah shake with milk and bananas.',
    tag: null,
    isVeg: true,
  },
  {
    id: 82,
    name: 'Icecream Sharjah',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 80,
    priceNote: null,
    description: 'Sharjah shake upgraded with a scoop of ice cream on top.',
    tag: null,
    isVeg: true,
  },
  {
    id: 83,
    name: 'Chikku Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 80,
    priceNote: null,
    description: 'Sweet Chikku (Sapota) blended into a thick, creamy shake.',
    tag: null,
    isVeg: true,
  },
  {
    id: 84,
    name: 'Vanilla Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 90,
    priceNote: null,
    description: 'Classic vanilla shake — smooth, sweet, timeless.',
    tag: null,
    isVeg: true,
  },
  {
    id: 85,
    name: 'Chocolate Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 90,
    priceNote: null,
    description: 'Rich chocolate shake blended thick and creamy.',
    tag: 'Popular',
    isVeg: true,
  },
  {
    id: 86,
    name: 'Strawberry Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Shakes',
    price: 90,
    priceNote: null,
    description: 'Sweet and tangy strawberry shake — vibrant and refreshing.',
    tag: null,
    isVeg: true,
  },

  // ─── SPECIAL SHAKES ─────────────────────────
  {
    id: 87,
    name: 'Nutella Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Special Shakes',
    price: 100,
    priceNote: null,
    description: 'Thick shake blended with Nutella — hazelnut heaven.',
    tag: 'Must Try',
    isVeg: true,
  },
  {
    id: 88,
    name: 'Lotus Biscoff Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Special Shakes',
    price: 120,
    priceNote: null,
    description: 'Premium shake blended with iconic Lotus Biscoff cookies.',
    tag: 'Special',
    isVeg: true,
  },
  {
    id: 89,
    name: 'Chikku Chocolate Shake',
    category: 'Shakes & Falooda',
    subCategory: 'Special Shakes',
    price: 120,
    priceNote: null,
    description: 'The winning combo — Chikku and chocolate blended together.',
    tag: null,
    isVeg: true,
  },

  // ─── MOJITO ─────────────────────────────────
  {
    id: 90,
    name: 'Strawberry Mojito',
    category: 'Drinks',
    subCategory: 'Mojito',
    price: 90,
    priceNote: null,
    description: 'Fresh strawberry mojito with mint, lime, and soda.',
    tag: 'Best Seller',
    isVeg: true,
  },
  {
    id: 91,
    name: 'Grape Mojito',
    category: 'Drinks',
    subCategory: 'Mojito',
    price: 70,
    priceNote: null,
    description: 'Sweet grape mojito with fresh mint and a lime kick.',
    tag: null,
    isVeg: true,
  },
  {
    id: 92,
    name: 'Pineapple Mojito',
    category: 'Drinks',
    subCategory: 'Mojito',
    price: 70,
    priceNote: null,
    description: 'Tropical pineapple mojito — fizzy and refreshing.',
    tag: null,
    isVeg: true,
  },
  {
    id: 93,
    name: 'Passionfruit Mojito',
    category: 'Drinks',
    subCategory: 'Mojito',
    price: 70,
    priceNote: null,
    description: 'Exotic passionfruit mojito with mint and soda.',
    tag: null,
    isVeg: true,
  },
  {
    id: 94,
    name: 'Watermelon Mojito',
    category: 'Drinks',
    subCategory: 'Mojito',
    price: 60,
    priceNote: null,
    description: 'Juicy watermelon mojito — summer in every sip.',
    tag: 'Popular',
    isVeg: true,
  },
  {
    id: 95,
    name: 'Orange Mojito',
    category: 'Drinks',
    subCategory: 'Mojito',
    price: 80,
    priceNote: null,
    description: 'Fresh orange mojito with a bright citrus fizz.',
    tag: null,
    isVeg: true,
  },
  {
    id: 96,
    name: 'Green Apple Mojito',
    category: 'Drinks',
    subCategory: 'Mojito',
    price: 100,
    priceNote: null,
    description: 'Tart green apple mojito with fresh mint and lime soda.',
    tag: null,
    isVeg: true,
  },
  {
    id: 97,
    name: 'Pomegranate Mojito',
    category: 'Drinks',
    subCategory: 'Mojito',
    price: 100,
    priceNote: null,
    description: 'Rich pomegranate mojito — bold, red, and refreshing.',
    tag: null,
    isVeg: true,
  },

  // ─── FALOODA ────────────────────────────────
  {
    id: 98,
    name: 'Mix Fruit Falooda',
    category: 'Shakes & Falooda',
    subCategory: 'Falooda',
    price: 130,
    priceNote: null,
    description: 'Classic falooda with mixed fruits, basil seeds, vermicelli, and ice cream.',
    tag: null,
    isVeg: true,
  },
  {
    id: 99,
    name: 'Dry Fruit Falooda',
    category: 'Shakes & Falooda',
    subCategory: 'Falooda',
    price: 150,
    priceNote: null,
    description: 'Premium falooda loaded with dry fruits, nuts, and ice cream.',
    tag: 'Popular',
    isVeg: true,
  },
  {
    id: 100,
    name: 'Chocolate Falooda',
    category: 'Shakes & Falooda',
    subCategory: 'Falooda',
    price: 180,
    priceNote: null,
    description: 'Chocolate-flavored falooda with chocolate ice cream and cocoa drizzle.',
    tag: 'Special',
    isVeg: true,
  },
  {
    id: 101,
    name: 'Gulab Jamun Falooda',
    category: 'Shakes & Falooda',
    subCategory: 'Falooda',
    price: 150,
    priceNote: null,
    description: 'Falooda topped with soft Gulab Jamun and rose syrup.',
    tag: 'Must Try',
    isVeg: true,
  },
  {
    id: 102,
    name: 'Fruit Salad',
    category: 'Shakes & Falooda',
    subCategory: 'Falooda',
    price: 90,
    priceNote: null,
    description: 'Fresh seasonal fruits tossed with cream and honey.',
    tag: null,
    isVeg: true,
  },
];
```

---

## Reviews Data

The reviews in `reviewsData.js` from the original plan are placeholder. Replace them with the following real-feel reviews written for **Cafe Lagom**. Keep the same data structure — the `ReviewCard` component does not need to change.

**Replace the entire `src/data/reviewsData.js` with this:**

```js
export const reviews = [
  {
    id: 1,
    name: 'Arjun Menon',
    avatar: 'AM',
    rating: 5,
    date: 'April 2024',
    review:
      'The Honey Chilli Momos are absolutely unreal. That glaze is addictive. I have been back three times in two weeks and I am not stopping. Best momos I have had anywhere in Kerala.',
    item: 'Honey Chilli Momo',
  },
  {
    id: 2,
    name: 'Priya Suresh',
    avatar: 'PS',
    rating: 5,
    date: 'March 2024',
    review:
      'Loaded Cheese Fries + Strawberry Mojito = the perfect combination. The fries are genuinely crispy, not soggy. The mojito was perfectly balanced. Cafe Lagom gets it right.',
    item: 'Loaded Cheese Fries',
  },
  {
    id: 3,
    name: 'Rahul Thomas',
    avatar: 'RT',
    rating: 5,
    date: 'March 2024',
    review:
      'Came in for the Lotus Biscoff Shake after seeing it online. It lived up to every bit of the hype. Thick, creamy, packed with flavor. The Zinger Burger was also top notch.',
    item: 'Lotus Biscoff Shake',
  },
  {
    id: 4,
    name: 'Meera Nair',
    avatar: 'MN',
    rating: 5,
    date: 'February 2024',
    review:
      'The Tender Coconut Avil is something special. Very Kerala, very fresh, very satisfying. The whole place has a calm vibe — not too much, not too little. The tagline fits perfectly.',
    item: 'Tender Coconut Avil',
  },
  {
    id: 5,
    name: 'Devika Krishnan',
    avatar: 'DK',
    rating: 4,
    date: 'January 2024',
    review:
      'The Korean BBQ Chicken Burger is a hidden gem on the menu. The sauce is bold and the chicken is super crispy. Prices are very student-friendly. Will definitely be my go-to spot.',
    item: 'Korean BBQ Chicken Burger',
  },
  {
    id: 6,
    name: 'Aditya Varma',
    avatar: 'AV',
    rating: 5,
    date: 'December 2023',
    review:
      'ABC Juice was a pleasant surprise — fresh, not too sweet, and you can actually taste all three ingredients. The place is clean, the food comes fast, and the staff is super friendly.',
    item: 'ABC Juice',
  },
];
```

---

## Global CSS — Updated Color Usage in `global.css`

The global body background should now use the green-adjusted value. **Update the body rule in `src/styles/global.css`:**

```css
body {
  font-family: var(--font-body);
  background-color: var(--color-bg);   /* #F5F0E8 — warm off-white */
  color: var(--color-text);             /* #1A1A1A */
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}
```

No other changes needed in `global.css`.

---

## Navbar Color — Updated Scrolled State

In `Navbar.module.css`, the scrolled state should now use **green** (not cream). Update this rule:

```css
/* BEFORE */
.navbar.scrolled {
  background: rgba(250, 246, 240, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-sm);
}

/* AFTER — Cafe Lagom green */
.navbar.scrolled {
  background: rgba(13, 74, 53, 0.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

/* Also update nav link colors for scrolled state (they need to be cream on green) */
.navbar.scrolled .link {
  color: rgba(232, 220, 200, 0.75);
}

.navbar.scrolled .link:hover,
.navbar.scrolled .link.active {
  color: var(--color-accent);
}
```

---

## Summary of Files to Change

| File | Change |
|------|--------|
| `src/styles/variables.css` | Full replacement — new green color system |
| `src/utils/constants.js` | Full replacement — Cafe Lagom name, tagline, contact |
| `src/data/menuData.js` | Full replacement — 102 real menu items with subCategory |
| `src/data/reviewsData.js` | Full replacement — Cafe Lagom themed reviews |
| `src/components/Navbar/Navbar.jsx` | Logo image swap only (2 lines) |
| `src/components/Navbar/Navbar.module.css` | Scrolled state color + logoImg style |
| `src/components/Footer/Footer.jsx` | Add logo image to brand column |
| `src/components/Footer/Footer.module.css` | Add `.footerLogo` style |
| `src/assets/images/logo.png` | Place the real Cafe Lagom circular logo here |

## Files That DO NOT Change

Everything else from the original `cafe_website_plan.md` stays **exactly the same**:
- `App.jsx`, `Layout.jsx`, `main.jsx`, `vite.config.js`, `package.json`, `index.html`
- `ScrollReveal.jsx`, `AnimatedText.jsx`, `SectionTitle.jsx`
- `MenuCard.jsx/css`, `ReviewCard.jsx/css`
- `Home.jsx/css`, `Menu.jsx/css`, `About.jsx/css`, `Gallery.jsx/css`, `Reviews.jsx/css`
- All animation logic, routing, phase structure, and deploy setup

---

### One Extra: MenuCard — Render `priceNote` for Momos

The `MenuCard.jsx` needs one small addition to render the `priceNote` field (used by momo items that have size-based pricing). Add this **inside the `.body` div, below `.description`, before `.footer`**:

```jsx
{/* Add this after the description <p> tag */}
{item.priceNote && (
  <p className={styles.priceNote}>{item.priceNote}</p>
)}
```

And add this to `MenuCard.module.css`:

```css
.priceNote {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--color-secondary);
  background: rgba(200, 169, 110, 0.1);
  border-radius: var(--radius-sm);
  padding: 6px 10px;
  margin-bottom: var(--space-sm);
  line-height: 1.6;
}
```

---

*Cafe: Cafe Lagom | Updated: May 2026 | Agent: Replace only the listed sections above — architecture unchanged*
