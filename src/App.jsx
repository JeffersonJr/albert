import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
const Footer = lazy(() => import('./components/Footer'));
const CookieAlert = lazy(() => import('./components/CookieAlert'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const PerformanceMonitor = lazy(() => import('./components/PerformanceMonitor'));
import ErrorBoundary from './components/ErrorBoundary';
import StructuredData from './components/StructuredData';
import Hero from './components/Hero';
// Lazy load Below The Fold content for optimal PageSpeed Vitals
const SocialProof = lazy(() => import('./components/SocialProof'));
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

// Carrega conteúdo apenas quando entra na viewport (fracionamento de carga)
const DeferredRender = ({ children, fallback = null, rootMargin = '200px', delay = 0 }) => {
  const [load, setLoad] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    let timeout;
    
    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // Em vez de eventos globais, usamos puro scroll/intersecting
            if (delay > 0) {
              timeout = setTimeout(() => setLoad(true), delay);
            } else {
              setLoad(true);
            }
            if (observer) observer.disconnect();
          }
        },
        { rootMargin }
      );
      observer.observe(ref.current);
    }
    
    return () => {
      if (observer) observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [rootMargin, delay]);

  return <div ref={ref} className="deferred-chunk">{load ? children : fallback}</div>;
};

// Componente Home - Keep Hero non-lazy for 100/100 LCP (First Contentful Paint)
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Albert IA | Atendimento Automático e Qualificação de Leads Imobiliários</title>
        <meta name="description" content="Transforme sua imobiliária com o Albert. Inteligência artificial focada em automação de leads, atendimento imobiliário 24/7 e pré-qualificação inteligente de corretores." />
        <meta name="keywords" content="IA para imobiliárias, automação de leads, Albert IA, corretor virtual inteligente, chatbot para corretores, conversão imobiliária" />
      </Helmet>
      
      <Hero />
      
      {/* Bloco 1 - Aparece logo abaixo da dobra */}
      <DeferredRender rootMargin="100px" fallback={<div className="min-h-[20vh]" />}>
        <Suspense fallback={<div className="min-h-[20vh] skeleton" />}>
          <SocialProof />
          <Comparison />
        </Suspense>
      </DeferredRender>

      {/* Bloco 2 - Corpo principal I */}
      <DeferredRender rootMargin="200px" fallback={<div className="min-h-[30vh]" />}>
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <Features />
          <LeadFlow />
          <Kanban />
        </Suspense>
      </DeferredRender>

      {/* Bloco 3 - Corpo principal II */}
      <DeferredRender rootMargin="200px" fallback={<div className="min-h-[30vh]" />}>
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <PropertyUpdate />
          <Testimonials />
          <Pricing />
        </Suspense>
      </DeferredRender>

      {/* Bloco 4 - Rodapé do Home */}
      <DeferredRender rootMargin="200px" fallback={<div className="min-h-[30vh]" />}>
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <FAQSection />
          <CTA />
          <TagCloud />
        </Suspense>
      </DeferredRender>
    </>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <StructuredData />
          <Navbar />
          <Suspense fallback={null}>
            <PerformanceMonitor />
          </Suspense>
          <main>
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={
                  <>
                    <Helmet>
                      <title>Sobre Nós | Evolves Tecnologia & Albert IA</title>
                      <meta name="description" content="Conheça a história e a missão técnica por trás da Albert IA, a inteligência artificial desenvolvida exclusivamente para revolucionar imobiliárias." />
                    </Helmet>
                    <Sobre />
                  </>
                } />
                <Route path="/cases" element={
                  <>
                    <Helmet>
                      <title>Cases de Sucesso | Imobiliárias Crescendo com Albert IA</title>
                      <meta name="description" content="Veja como imobiliárias estão utilizando a Albert IA para aumentar o aproveitamento de leads, diminuir o tempo de resposta e escalar o faturamento." />
                    </Helmet>
                    <Cases />
                  </>
                } />
                <Route path="/blog" element={
                  <>
                    <Helmet>
                      <title>Blog Albert IA | Tudo sobre Automação para Corretores</title>
                      <meta name="description" content="Artigos avançados, tutoriais de vendas e inovações do mercado imobiliário sob a ótica da inteligência artificial generativa." />
                    </Helmet>
                    <Blog />
                  </>
                } />
                <Route path="/blog/post/:postId" element={<BlogPost />} />
                <Route path="/status" element={
                  <>
                    <Helmet>
                      <title>Status do Sistema | Albert IA Operations</title>
                    </Helmet>
                    <Status />
                  </>
                } />
                <Route path="/documentacao" element={
                  <>
                    <Helmet>
                      <title>Documentação | API e Guias da Albert IA</title>
                    </Helmet>
                    <Documentacao />
                  </>
                } />
                <Route path="/termos" element={
                  <>
                    <Helmet>
                      <title>Termos de Uso | Albert IA</title>
                    </Helmet>
                    <Termos />
                  </>
                } />
                <Route path="/politica-privacidade" element={
                  <>
                    <Helmet>
                      <title>Política de Privacidade | Albert IA</title>
                    </Helmet>
                    <PoliticaPrivacidade />
                  </>
                } />
                <Route path="/lgpd" element={
                  <>
                    <Helmet>
                      <title>Portal da Transparência LGPD | Albert IA</title>
                    </Helmet>
                    <LGPD />
                  </>
                } />
                <Route path="*" element={
                  <>
                    <Helmet>
                      <title>Página Não Encontrada | Albert IA</title>
                    </Helmet>
                    <NotFound />
                  </>
                } />
              </Routes>
            </Suspense>
          </main>
          <DeferredRender>
            <Suspense fallback={null}>
              <Footer />
              <CookieAlert />
              <WhatsAppButton />
              <ExitIntentPopup />
            </Suspense>
          </DeferredRender>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
