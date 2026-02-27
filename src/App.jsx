import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieAlert from './components/CookieAlert';
import WhatsAppButton from './components/WhatsAppButton';
import { Analytics } from '@vercel/analytics/react';
import Comparison from './components/Comparison';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';

// Pages
import Sobre from './pages/Sobre';
import Cases from './pages/Cases';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Status from './pages/Status';
import Documentacao from './pages/Documentacao';
import Termos from './pages/Termos';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import LGPD from './pages/LGPD';

// Componente para rolar para o topo
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Rola para o topo quando muda de pathname (navegação entre páginas)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    useEffect(() => {
        // Se há hash na URL, rola para o elemento após um pequeno delay
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                // Timeout para garantir que o elemento exista no DOM
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 500); // Aumentado para garantir que o elemento exista
            }
        }
    }, [hash, pathname]); // Adicionado pathname para re-executar quando navegar

    return null;
};

// Componente Home
const Home = () => (
  <>
    <Hero />
    <SocialProof />
    <Comparison />
    <Features />
    <Testimonials />
    <Pricing />
    <FAQ />
    <CTA />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post/:postId" element={<BlogPost />} />
            <Route path="/status" element={<Status />} />
            <Route path="/documentacao" element={<Documentacao />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/lgpd" element={<LGPD />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
        <CookieAlert />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
