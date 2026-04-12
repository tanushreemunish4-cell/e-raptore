import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    num: '01', icon: '🔍', title: 'SEO',
    desc: 'Rank higher, get found faster. We engineer search dominance that drives compounding organic growth month after month.',
    tags: ['On-Page SEO', 'Link Building', 'Technical SEO'],
    accent: 'neon',
  },
  {
    num: '02', icon: '🚀', title: 'Performance Marketing',
    desc: 'Every rupee working harder. We build paid systems that scale profitably with laser-focused targeting and relentless optimization.',
    tags: ['PPC Campaigns', 'ROAS Optimization', 'Retargeting'],
    accent: 'neon',
  },
  {
    num: '03', icon: '📱', title: 'Social Media Marketing',
    desc: 'Turn scrollers into buyers. We create thumb-stopping content and community strategies that build brand loyalty at scale.',
    tags: ['Content Strategy', 'Community Growth', 'Influencer Marketing'],
    accent: 'neon',
  },
  {
    num: '04', icon: '🎯', title: 'Google Ads',
    desc: 'Appear when it matters most. Our Google Ads experts maximize Quality Score and minimize cost-per-acquisition for explosive growth.',
    tags: ['Search Ads', 'Display Network', 'Shopping Ads'],
    accent: 'red',
  },
  {
    num: '05', icon: '💻', title: 'Website Development',
    desc: 'Conversion-first websites that load at lightning speed. Built to impress, optimized to convert, engineered for growth.',
    tags: ['React / Next.js', 'CRO Optimization', 'Speed Optimization'],
    accent: 'red',
  },
];

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <FadeUp><div className="section-label">What We Do</div></FadeUp>
        <FadeUp delay={0.1}><h2 className="section-title">OUR <span>SERVICES</span></h2></FadeUp>
        <FadeUp delay={0.2}>
          <p className="section-sub">
            End-to-end digital solutions engineered for one thing: results that matter to your bottom line.
          </p>
        </FadeUp>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <FadeUp key={svc.num} delay={0.1 * (i % 3)}>
              <motion.div
                className={`${styles.card} ${svc.accent === 'red' ? styles.cardRed : ''}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className={styles.cardTopLine} />
                <div className={styles.serviceNum}>{svc.num}</div>
                <span className={styles.serviceIcon}>{svc.icon}</span>
                <div className={styles.serviceTitle}>{svc.title}</div>
                <div className={styles.serviceDesc}>{svc.desc}</div>
                <div className={styles.tags}>
                  {svc.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            </FadeUp>
          ))}

          {/* CTA card */}
          <FadeUp delay={0.4}>
            <motion.div
              className={`${styles.card} ${styles.ctaCard}`}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className={styles.ctaLabel}>READY TO DOMINATE?</div>
              <h3 className={styles.ctaTitle}>LET'S <span>TALK</span></h3>
              <p className={styles.ctaDesc}>Get a free strategy session with our growth experts.</p>
              <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => scrollTo('contact')}>
                Book Free Call ↗
              </button>
            </motion.div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
