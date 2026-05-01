import './styles/globals.css';
import SEO      from './components/SEO';
import Header  from './components/Header';
import Hero    from './components/Hero';
import Marquee from './components/Marquee';
import About   from './components/About';
import Services from './components/Services';
import Blogs   from './components/Blogs';
import Contact from './components/Contact';
import Footer  from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <SEO
        title="Dominate the Digital Landscape"
        description="E-Raptore is a performance-driven digital marketing agency in Udaipur. We specialize in SEO, Google Ads, Social Media Marketing, and Web Development."
        keywords="digital marketing agency Udaipur, SEO services Rajasthan, Google Ads, performance marketing, social media marketing India"
        url="https://e-raptore.com"
      />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
