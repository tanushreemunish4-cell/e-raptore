import './styles/globals.css';
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
