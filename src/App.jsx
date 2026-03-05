import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieAlert from './components/CookieAlert';
import WhatsAppButton from './components/WhatsAppButton';
import PerformanceMonitor from './components/PerformanceMonitor';
import OptimizedAnalytics from './components/OptimizedAnalytics';
import ErrorBoundary from './components/ErrorBoundary';
import StructuredData from './components/StructuredData';
import Comparison from './components/Comparison';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQSection from './components/FAQSection';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import ExitIntentPopup from './components/ExitIntentPopup';

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
import NotFound from './pages/NotFound';

// Componente para rolar para o topo
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Rola para o topo quando muda de pathname (navegação entre páginas)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    // Se há hash na URL e começa com #, rola para o elemento após um pequeno delay
    if (hash && hash.startsWith('#')) {
      // Pega apenas o ID (remove o #)
      const id = hash.slice(1);

      // Validação básica: ID deve conter apenas caracteres alfanuméricos, hífens ou underscores
      // Isso evita processar URLs externas (ex: #https://...) como seletores CSS
      const isValidId = /^[a-zA-Z0-9\-_]+$/.test(id);

      if (isValidId) {
        // Usa getElementById que é mais seguro e performático para IDs simples
        const element = document.getElementById(id);
        if (element) {
          // Timeout para garantir que o elemento esteja renderizado
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 500);
        }
      }
    }
  }, [hash, pathname]);

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
    <FAQSection />
    <CTA />
  </>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <StructuredData />
          <Navbar />
          <PerformanceMonitor />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <OptimizedAnalytics />
          <CookieAlert />
          <WhatsAppButton />
          <ExitIntentPopup />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
