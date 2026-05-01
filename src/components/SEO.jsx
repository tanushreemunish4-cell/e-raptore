// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
}) {
  const siteName = 'E-Raptore';
  const fullTitle = `${title} | ${siteName}`;
  const defaultDesc = 'E-Raptore — A performance-driven digital marketing agency built for speed, precision, and results.';
  const defaultImage = '/og-image.jpg'; // place a 1200x630px image in /public folder

  return (
    <Helmet>
      {/* ── Basic Meta ── */}
      <title>{fullTitle}</title>
      <meta name="description"        content={description || defaultDesc} />
      <meta name="keywords"           content={keywords || 'digital marketing, SEO, performance marketing, Google Ads, social media, Jodhpur'} />
      <meta name="author"             content="E-Raptore" />
      <meta name="robots"             content="index, follow" />

      {/* ── Open Graph (Facebook, WhatsApp, LinkedIn) ── */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={siteName} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image"       content={image || defaultImage} />
      <meta property="og:url"         content={url || 'https://e-raptore.com'} />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image"       content={image || defaultImage} />

      {/* ── Canonical URL ── */}
      <link rel="canonical" href={url || 'https://e-raptore.com'} />
    </Helmet>
  );
}