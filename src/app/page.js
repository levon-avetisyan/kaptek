import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
