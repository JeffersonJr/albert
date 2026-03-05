import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
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

// Lazy load pages for performance
const Sobre = lazy(() => import('./pages/Sobre'));
const Cases = lazy(() => import('./pages/Cases'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Status = lazy(() => import('./pages/Status'));
const Documentacao = lazy(() => import('./pages/Documentacao'));
const Termos = lazy(() => import('./pages/Termos'));
const PoliticaPrivacidade = lazy(() => import('./pages/PoliticaPrivacidade'));
const LGPD = lazy(() => import('./pages/LGPD'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback components
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const HomeLoading = () => (
  <div className="w-full h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-500 font-medium">Carregando experiência...</p>
    </div>
  </div>
);

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
      const isValidId = /^[a-zA-Z0-9\-_]+$/.test(id);

      if (isValidId) {
        const element = document.getElementById(id);
        if (element) {
          // Timeout para garantir que o elemento esteja renderizado
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      }
    }
  }, [hash, pathname]);

  return null;
};

// Componente Home - Keep Home non-lazy for LCP, or lazy with a skeleton
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
            <Suspense fallback={<PageLoading />}>
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
            </Suspense>
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
