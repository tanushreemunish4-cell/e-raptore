import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Blogs.module.css';

const posts = [
  {
    cat: 'SEO', catAccent: false,
    bg: 'linear-gradient(135deg,#0a1a0a,#0d2a0d)',
    overlay: 'linear-gradient(135deg,rgba(57,255,20,0.05),transparent)',
    icon: '🔍',
    date: 'Jun 2025', read: '5 min read',
    title: 'How to 10X Your Organic Traffic in 90 Days',
    excerpt: 'The exact SEO playbook we use for clients to compound organic traffic month after month without burning ad budget.',
  },
  {
    cat: 'Google Ads', catAccent: true,
    bg: 'linear-gradient(135deg,#1a0a0a,#2a0d0d)',
    overlay: 'linear-gradient(135deg,rgba(255,4,0,0.05),transparent)',
    icon: '🎯',
    date: 'May 2025', read: '7 min read',
    title: 'Why 90% of Google Ads Campaigns Fail (And How to Fix Yours)',
    excerpt: 'The 5 critical mistakes killing your ROAS and the exact fixes that can double your conversion rate overnight.',
  },
  {
    cat: 'Social Media', catAccent: false,
    bg: 'linear-gradient(135deg,#0a0a1a,#0d0d2a)',
    overlay: 'linear-gradient(135deg,rgba(100,100,255,0.05),transparent)',
    icon: '📱',
    date: 'Apr 2025', read: '4 min read',
    title: 'The Meta Ads Strategy That Generated ₹1Cr in 30 Days',
    excerpt: 'A step-by-step breakdown of the funnel, creative strategy and targeting that scaled a D2C brand to 8 figures.',
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

export default function Blogs() {
  return (
    <section id="blogs" className={styles.blogs}>
      <div className="container">
        <FadeUp><div className="section-label">Insights &amp; Strategy</div></FadeUp>
        <FadeUp delay={0.1}><h2 className="section-title">LATEST <span>BLOGS</span></h2></FadeUp>
        <FadeUp delay={0.2}>
          <p className="section-sub">Actionable insights from the frontlines of digital marketing.</p>
        </FadeUp>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <FadeUp key={post.title} delay={0.1 * i}>
              <motion.div
                className={styles.card}
                whileHover={{ y: -6, borderColor: 'rgba(57,255,20,0.15)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Thumbnail */}
                <div className={styles.imgWrap} style={{ background: post.bg }}>
                  <motion.div
                    className={styles.imgOverlay}
                    style={{ background: post.overlay }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className={styles.imgIcon}>{post.icon}</span>
                  <span
                    className={styles.cat}
                    style={post.catAccent ? { background: '#ff0400', color: '#fff' } : {}}
                  >
                    {post.cat}
                  </span>
                </div>

                {/* Body */}
                <div className={styles.body}>
                  <div className={styles.meta}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.read}</span>
                  </div>
                  <motion.div
                    className={styles.title}
                    whileHover={{ color: '#39ff14' }}
                    transition={{ duration: 0.2 }}
                  >
                    {post.title}
                  </motion.div>
                  <div className={styles.excerpt}>{post.excerpt}</div>
                  <div className={styles.readMore}>Read Article →</div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
