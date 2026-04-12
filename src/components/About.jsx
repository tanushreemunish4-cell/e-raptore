import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

const pillars = [
  { icon: '⚡', title: 'Speed to Market',   desc: 'Launch campaigns in 48 hours, not weeks. Agility is our edge.' },
  { icon: '🎯', title: 'Precision Targeting', desc: 'Every dollar spent with surgical accuracy. Zero waste.' },
  { icon: '📊', title: 'Data-Driven ROI',    desc: 'Every decision backed by real data and measurable outcomes.' },
  { icon: '🚀', title: 'Scalable Growth',    desc: 'Systems built to scale with you from startup to enterprise.' },
];

const processSteps = [
  { num: '01', title: 'Discovery',  desc: 'Deep dive into your brand, market & competitors' },
  { num: '02', title: 'Strategy',   desc: 'Custom growth blueprint tailored to your goals' },
  { num: '03', title: 'Execution',  desc: 'Launch with speed, precision & creative excellence' },
  { num: '04', title: 'Optimize',   desc: 'Continuous testing & scaling for maximum ROI' },
  { num: '05', title: 'Scale',      desc: 'Compound growth that builds momentum over time' },
];

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
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

export default function About() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={styles.grid}>
            {/* Visual column */}
            <FadeUp className={styles.visual}>
              <div className={styles.visualBox}>
                <span className={styles.bigLetter}>E</span>
              </div>
              <motion.div
                className={`${styles.badgeFloat} ${styles.badgeTopRight}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className={styles.badgeNum}>500+</div>
                <div className={styles.badgeTxt}>Projects Delivered</div>
              </motion.div>
              <motion.div
                className={`${styles.badgeFloat} ${styles.badgeBottomLeft}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className={styles.badgeNum}>#1</div>
                <div className={styles.badgeTxt}>Ranked Agency</div>
              </motion.div>
            </FadeUp>

            {/* Text column */}
            <div>
              <FadeUp><div className="section-label">About E-Raptore</div></FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="section-title">BUILT TO <span>HUNT</span><br />RESULTS</h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="section-sub">
                  Like a raptor, we're built for precision. We don't just run campaigns — we engineer
                  growth systems that turn your digital presence into a relentless revenue engine.
                </p>
              </FadeUp>

              <div className={styles.pillars}>
                {pillars.map((p, i) => (
                  <FadeUp key={p.title} delay={0.1 * (i + 1)}>
                    <motion.div
                      className={styles.pillar}
                      whileHover={{ y: -3, borderColor: 'rgba(57,255,20,0.4)', background: 'rgba(57,255,20,0.07)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={styles.pillarIcon}>{p.icon}</div>
                      <div className={styles.pillarTitle}>{p.title}</div>
                      <div className={styles.pillarDesc}>{p.desc}</div>
                    </motion.div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.5}>
                <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => scrollTo('contact')}>
                  Work With Us ↗
                </button>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Process strip */}
      <div className={styles.processStrip}>
        <div className={styles.processSteps}>
          {processSteps.map((step, i) => (
            <FadeUp key={step.num} delay={0.1 * i} className={styles.processStep}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDesc}>{step.desc}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </>
  );
}
