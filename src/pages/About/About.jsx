import styles from './About.module.css';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import ScrollReveal from '@components/ScrollReveal/ScrollReveal';
import { BlurText } from '@components/AnimatedText/AnimatedText';
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
            animateTitle={true}
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
            <h2 className={styles.storyTitle}>
              <BlurText text="A small dream, a warm reality" />
            </h2>
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
            animateTitle={true}
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
