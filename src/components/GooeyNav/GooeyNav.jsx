import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './GooeyNav.module.css';

export default function GooeyNav({
  items,
  animationTime = 600,
  particleCount = 18,
  particleDistances = [100, 10],
  particleR = 120,
  timeVariance = 200,
  colors = [1, 2, 1, 2, 1, 2],
}) {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const prevActiveIndexRef = useRef(undefined);

  const location = useLocation();
  const activeIndex = Math.max(0, items.findIndex(item => item.path === location.pathname));

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.25),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const makeParticles = (element) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove(styles.active);
      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add(styles.particle);
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', p.color === 1 ? 'var(--color-secondary)' : 'var(--color-primary)');
        particle.style.setProperty('--rotate', `${p.rotate}deg`);
        point.classList.add(styles.point);
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add(styles.active);
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {}
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const stylesObj = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    Object.assign(filterRef.current.style, stylesObj);
    Object.assign(textRef.current.style, stylesObj);
    textRef.current.innerText = element.innerText;
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      
      // Trigger slide and particles if active index actually changed
      if (prevActiveIndexRef.current !== undefined && prevActiveIndexRef.current !== activeIndex) {
        if (filterRef.current) {
          const particles = filterRef.current.querySelectorAll(`.${styles.particle}`);
          particles.forEach(p => {
            try {
              filterRef.current.removeChild(p);
            } catch {}
          });
          makeParticles(filterRef.current);
        }
      }
      prevActiveIndexRef.current = activeIndex;
    }
  }, [activeIndex]);

  // Adjust on window resize
  useEffect(() => {
    const handleResize = () => {
      const activeLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (activeLi) {
        updateEffectPosition(activeLi);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Hidden SVG Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="goo-nav-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
              result="goo"
            />
          </filter>
        </defs>
      </svg>

      <nav className={styles.nav}>
        <ul ref={navRef} className={styles.list}>
          {items.map((item, index) => (
            <li
              key={item.path}
              className={`${styles.item} ${activeIndex === index ? styles.activeItem : ''}`}
            >
              <Link to={item.path} className={styles.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`${styles.effect} ${styles.filter}`} ref={filterRef}>
        <div className={styles.pill} />
      </div>
      <span className={`${styles.effect} ${styles.text}`} ref={textRef} />
    </div>
  );
}
