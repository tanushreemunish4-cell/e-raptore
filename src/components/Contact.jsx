import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Contact.module.css';

// ─────────────────────────────────────────────────────────────
// 👇 PASTE YOUR WEB3FORMS ACCESS KEY HERE (from web3forms.com)
const WEB3FORMS_KEY = 'fa9c30f9-5089-4107-bb07-f6289c3dd59c';
// ─────────────────────────────────────────────────────────────

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

const contactDetails = [
  { icon: '📧', label: 'Email Us',  text: 'tanushree.ffdl@gmail.com' },
  { icon: '📞', label: 'Call Us',   text: '+91 9782642575' },
  { icon: '📍', label: 'Location',  text: 'Udaipur, Rajasthan, India' },
];

const emptyForm = { firstName: '', lastName: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [form,      setForm]      = useState(emptyForm);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,

          // ── Email subject line you'll see in Gmail ──
          subject: `🦅 New Lead from E-Raptore Website — ${form.firstName} ${form.lastName}`,

          // ── Sender info ──
          name:    `${form.firstName} ${form.lastName}`,
          email:   form.email,
          phone:   form.phone,
          message: form.message,

          // ── Extra context in the email body ──
          from_page: 'E-Raptore Contact Form',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setForm(emptyForm);
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Button label logic
  const btnLabel = () => {
    if (loading)   return '⏳ Sending...';
    if (submitted) return "✅ Message Sent! We'll reach out within 24hrs";
    if (error)     return '❌ Failed — Please try again';
    return "🚀 Send Message — It's Free";
  };

  const btnClass = () => {
    if (submitted) return styles.submitSuccess;
    if (error)     return styles.submitError;
    return styles.submit;
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <FadeUp><div className="section-label">Get In Touch</div></FadeUp>

        <div className={styles.grid}>

          {/* ── Left info ── */}
          <div>
            <FadeUp>
              <h2 className={styles.infoTitle}>
                LET'S GROW<br />YOUR <span>BUSINESS</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className={styles.infoSub}>
                Ready to dominate your market? Book a free strategy call and let our experts
                build your custom growth roadmap.
              </p>
            </FadeUp>
            <div className={styles.details}>
              {contactDetails.map((item, i) => (
                <FadeUp key={item.label} delay={0.1 * (i + 2)}>
                  <motion.div
                    className={styles.contactItem}
                    whileHover={{ background: 'rgba(57,255,20,0.07)', borderColor: 'rgba(57,255,20,0.3)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={styles.contactIcon}>{item.icon}</span>
                    <div>
                      <div className={styles.contactLabel}>{item.label}</div>
                      <div className={styles.contactText}>{item.text}</div>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* ── Form ── */}
          <FadeUp delay={0.2}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>

              {/* Anti-spam honeypot — hidden from users, stops bots */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>First Name</label>
                  <input
                    name="firstName" type="text" className={styles.input}
                    placeholder="John" value={form.firstName}
                    onChange={handleChange} required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Last Name</label>
                  <input
                    name="lastName" type="text" className={styles.input}
                    placeholder="Doe" value={form.lastName}
                    onChange={handleChange} required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                  name="email" type="email" className={styles.input}
                  placeholder="john@company.com" value={form.email}
                  onChange={handleChange} required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input
                  name="phone" type="tel" className={styles.input}
                  placeholder="+91 00000 00000" value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Tell Us About Your Goal</label>
                <textarea
                  name="message" className={styles.textarea}
                  placeholder="I want to scale my business to ₹1Cr/month..."
                  value={form.message} onChange={handleChange} required
                />
              </div>

              <motion.button
                type="submit"
                className={btnClass()}
                disabled={loading || submitted}
                whileHover={!loading && !submitted ? {
                  y: -2,
                  boxShadow: '0 0 20px rgba(57,255,20,0.4), 0 0 60px rgba(57,255,20,0.15)'
                } : {}}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {btnLabel()}
              </motion.button>

            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}