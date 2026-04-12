import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const floatCards = [
  { icon: '📈', label: 'Revenue Growth', val: '+340%',  change: '▲ This Quarter' },
  { icon: '🎯', label: 'Ad Performance', val: '4.8X ROAS', change: '▲ Above Industry' },
  { icon: '🔥', label: 'Leads Generated', val: '50K+',  change: '▲ Monthly Avg' },
];

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 40 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
});

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      p.className = styles.particle;
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        animation-duration:${Math.random() * 10 + 8}s;
        animation-delay:${Math.random() * 10}s;
      `;
      container.appendChild(p);
    }
    return () => { container.innerHTML = ''; };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className={styles.hero}>
      {/* Galaxy background */}
      <div className={styles.galaxyCanvas}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
        <div className={styles.gridOverlay} />
        <div className={styles.scanLine} />
        <div ref={particlesRef} className={styles.particles} />
      </div>

      {/* Hero content */}
      <div className={styles.heroContent}>
        <motion.div className={styles.badge} {...fadeUp(0)}>
          <span className={styles.badgeDot} />
          ⚡ Digital Performance Agency
        </motion.div>

        <motion.h1 className={styles.title} {...fadeUp(0.2)}>
          <span className={styles.line1}>DOMINATE</span>
          <span className={styles.line2}>THE DIGITAL</span>
          <span className={styles.line3}>LANDSCAPE</span>
        </motion.h1>

        <motion.p className={styles.sub} {...fadeUp(0.4)}>
          We move with <span>raptor-like precision</span> — striking fast, scaling smart,
          and leaving your competition far behind.
        </motion.p>

        <motion.div className={styles.actions} {...fadeUp(0.6)}>
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Start Growing ↗
          </button>
          <button className="btn-outline" onClick={() => scrollTo('services')}>
            Our Services
          </button>
        </motion.div>

        <motion.div className={styles.stats} {...fadeUp(0.8)}>
          {[
            { num: '500+', label: 'Brands Scaled' },
            { num: '12X',  label: 'Avg ROI' },
            { num: '98%',  label: 'Client Retention' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating metric cards */}
      <div className={styles.floatCards}>
        {floatCards.map((card, i) => (
          <motion.div
            key={card.label}
            className={styles.floatCard}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: i === 1 ? 20 : 0 }}
            transition={{ delay: 1 + i * 0.15, duration: 0.7, ease: 'easeOut' }}
            style={{ animationDelay: `${i * -1.5}s` }}
          >
            <div className={styles.cardIcon}>{card.icon}</div>
            <div className={styles.cardLabel}>{card.label}</div>
            <div className={styles.cardVal}>{card.val}</div>
            <div className={styles.cardChange}>{card.change}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
