import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { CAFE_NAME, CAFE_ADDRESS, CAFE_PHONE, CAFE_HOURS, SOCIAL_LINKS } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <img src="/images/logo.png" alt="Cafe Lagom" className={styles.footerLogo} />
          <h3 className={styles.logoText}>{CAFE_NAME}</h3>
          <p className={styles.tagline}>not too much, not too little.</p>
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
