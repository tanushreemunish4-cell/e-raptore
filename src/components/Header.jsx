import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css'
import logo from '../assets/e-raptore.png';

const navItems = [
  { label: 'Home',     id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Blogs',    id: 'blogs' },
  { label: 'Contact',  id: 'contact' },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [activeId,   setActiveId]   = useState('home');
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Logo */}
      <button className={styles.logo} onClick={() => scrollTo('home')}>
        {/* REPLACE WITH THIS */}
<img src={logo} alt="E-Raptore Logo" className={styles.logoImg} />
<span className={styles.logoText}>E-<span className={styles.logoAccent}>RAPTORE</span></span>
      </button>

      {/* Desktop nav */}
      <ul className={styles.navLinks}>
        {navItems.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <button
              className={`${styles.navLink} ${activeId === item.id ? styles.active : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        className={styles.ctaBtn}
        onClick={() => scrollTo('contact')}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Get Free Consultation
      </motion.button>

      {/* Hamburger */}
      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.mobileLink} ${activeId === item.id ? styles.mobileLinkActive : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button className={styles.ctaBtn} onClick={() => scrollTo('contact')}>
              Get Free Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
