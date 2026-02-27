import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Comparison from './components/Comparison';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

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
import Cookies from './pages/Cookies';

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
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
