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
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';

// Lazy load Below The Fold content for optimal PageSpeed Vitals
const Comparison = lazy(() => import('./components/Comparison'));
const Features = lazy(() => import('./components/Features'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const PropertyUpdate = lazy(() => import('./components/PropertyUpdate'));
const CTA = lazy(() => import('./components/CTA'));
const TagCloud = lazy(() => import('./components/TagCloud'));
const LeadFlow = lazy(() => import('./components/LeadFlow'));
const Kanban = lazy(() => import('./components/Kanban'));
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'));

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

// Componente para rolar para o topo
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    if (hash && hash.startsWith('#')) {
      const id = hash.slice(1);
      const isValidId = /^[a-zA-Z0-9\-_]+$/.test(id);

      if (isValidId) {
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      }
    }
  }, [hash, pathname]);

  return null;
};

// Componente Home - Keep Hero non-lazy for 100/100 LCP (First Contentful Paint)
const Home = () => (
  <>
    <Hero />
    <SocialProof />
    <Suspense fallback={<div className="min-h-[50vh]" />}>
      <Comparison />
      <Features />
      <LeadFlow />
      <Kanban />
      <PropertyUpdate />
      <Testimonials />
      <Pricing />
      <FAQSection />
      <CTA />
      <TagCloud />
    </Suspense>
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
