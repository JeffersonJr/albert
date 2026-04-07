import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Zap, ArrowRight, MessageCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const HeroDashboard = lazy(() => import('./HeroDashboard'));
const LeadCaptureModal = lazy(() => import('./LeadCaptureModal'));

const Hero = () => {
    const heroRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 640 : true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) observer.observe(heroRef.current);
        
        const handleResize = () => setIsDesktop(window.innerWidth >= 640);
        window.addEventListener('resize', handleResize);
        
        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20 justify-center bg-gradient-to-br from-[#F8FAFA] to-white overflow-hidden">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes fadeUpEager {
                    from { opacity: 0; transform: translate3d(0, 20px, 0); }
                    to { opacity: 1; transform: translate3d(0, 0, 0); }
                }
                .hero-eager-animate { 
                    opacity: 0; 
                    animation: fadeUpEager 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
                    will-change: transform, opacity;
                }
                .hero-stagger-1 { animation-delay: 0.05s; }
                .hero-stagger-2 { animation-delay: 0.1s; }
                .hero-stagger-3 { animation-delay: 0.15s; }
                .hero-stagger-4 { animation-delay: 0.2s; }
                
                /* PERFORMANCE FIX: Desativa animação no mobile para LCP instantâneo */
                @media (max-width: 639px) {
                    .hero-eager-animate {
                        animation: none !important;
                        opacity: 1 !important;
                        transform: translate3d(0, 0, 0) !important;
                    }
                }
            `}} />
            
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="hero-eager-animate hero-stagger-1 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary-dark rounded-full text-sm font-semibold">
                            <Zap className="w-4 h-4" />
                            IA Especializada no Mercado Imobiliário
                        </div>

                        <h1 className="hero-eager-animate hero-stagger-2 text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                            Albert IA: <span className="text-primary italic">IA de Atendimento 24/7</span> para Imobiliárias
                        </h1>

                        <p className="hero-eager-animate hero-stagger-3 text-lg lg:text-xl text-gray-800 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                            Aumente sua produtividade com Inteligência Artificial. O Albert realiza o 1º atendimento, qualifica leads e faz follow-up automático, permitindo que sua equipe foque apenas em quem está pronto para comprar.
                        </p>

                        <div className="hero-eager-animate hero-stagger-4 flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                             <button 
                                 id="cta-hero-plans"
                                 onClick={() => document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' })}
                                 aria-label="Ver Planos e Preços"
                                 className="relative overflow-hidden bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transition-all hover:scale-105 active:scale-95"
                             >
                                <span className="relative z-10 flex items-center gap-2">
                                    Ver Planos
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </button>
                            <a 
                                id="cta-hero-consultant"
                                href="https://wa.me/5513997591781?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Albert%20e%20suas%20funcionalidades"
                                target="_blank"
                                aria-label="Falar com Especialista no WhatsApp"
                                className="bg-white text-primary-dark border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-sm hover:shadow-md hover:border-primary/30 hover:text-primary transition-all flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
                            >
                                <span className="flex items-center gap-2">
                                    Falar com Especialista
                                    <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Mockup */}
                    <div className={`relative transition-all duration-1000 delay-300 hidden sm:block ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        {isDesktop && (
                            <Suspense fallback={<div className="w-[300px] lg:w-[600px] h-[500px] skeleton rounded-3xl opacity-50" />}>
                                {isVisible && <HeroDashboard />}
                            </Suspense>
                        )}
                    </div>
                </div>
            </div>

            <Suspense fallback={null}>
                {isModalOpen && (
                    <LeadCaptureModal 
                        isOpen={isModalOpen} 
                        onClose={() => setIsModalOpen(false)} 
                    />
                )}
            </Suspense>
        </section>
    );
};

export default Hero;
