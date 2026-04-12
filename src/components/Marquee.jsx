import styles from './Marquee.module.css';

const items = [
  'SEO DOMINATION',
  'PERFORMANCE MARKETING',
  'SOCIAL MEDIA MASTERY',
  'GOOGLE ADS EXCELLENCE',
  'WEB DEVELOPMENT',
  'GROWTH HACKING',
  'BRAND STRATEGY',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
