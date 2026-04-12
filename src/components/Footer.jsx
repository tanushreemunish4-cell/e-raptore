import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Footer.module.css';

const quickLinks  = ['Home', 'About Us', 'Services', 'Blogs', 'Contact'];
const serviceLinks = ['SEO Optimization', 'Performance Marketing', 'Social Media', 'Google Ads', 'Web Development'];
const contactLinks = ['hello@e-raptore.com', '+91 98765 43210', 'Jodhpur, Rajasthan', 'Free Consultation'];
const socials = ['📸', '💼', '🐦', '▶️', '👍'];

const sectionIds = { 'Home': 'home', 'About Us': 'about', 'Services': 'services', 'Blogs': 'blogs', 'Contact': 'contact' };

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className={styles.footer} ref={ref}>
      <motion.div
        className={styles.grid}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Brand */}
        <div>
          <button className={styles.logo} onClick={() => scrollTo('home')}>
            <span className={styles.logoIcon}>🦅</span>
            <span className={styles.logoText}>E-<span className={styles.accent}>RAPTORE</span></span>
          </button>
          <p className={styles.brandDesc}>
            A performance-driven digital marketing agency built to scale your brand
            with speed, precision, and relentless results.
          </p>
          <div className={styles.socials}>
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href="#"
                className={styles.socialBtn}
                whileHover={{ borderColor: '#39ff14', color: '#39ff14', boxShadow: '0 0 10px rgba(57,255,20,0.2)' }}
                transition={{ duration: 0.2 }}
              >
                {s}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className={styles.colTitle}>Quick Links</div>
          <ul className={styles.links}>
            {quickLinks.map((item) => (
              <li key={item}>
                <motion.button
                  className={styles.link}
                  onClick={() => scrollTo(sectionIds[item] || 'home')}
                  whileHover={{ color: '#39ff14', x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  → {item}
                </motion.button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className={styles.colTitle}>Services</div>
          <ul className={styles.links}>
            {serviceLinks.map((item) => (
              <li key={item}>
                <motion.button
                  className={styles.link}
                  onClick={() => scrollTo('services')}
                  whileHover={{ color: '#39ff14', x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  → {item}
                </motion.button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className={styles.colTitle}>Contact</div>
          <ul className={styles.links}>
            {contactLinks.map((item) => (
              <li key={item}>
                <motion.span
                  className={styles.link}
                  whileHover={{ color: '#39ff14', x: 4 }}
                  transition={{ duration: 0.15 }}
                  style={{ cursor: 'default' }}
                >
                  {item}
                </motion.span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.copy}>
          © 2025 <span>E-Raptore</span>. All rights reserved. Built for dominance.
        </div>
        <div className={styles.bottomLinks}>
          {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((l) => (
            <motion.a
              key={l}
              href="#"
              className={styles.bottomLink}
              whileHover={{ color: '#39ff14' }}
              transition={{ duration: 0.2 }}
            >
              {l}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
