import { useEffect, useRef, useState } from 'react';
import { Zap, Check, Calendar, TrendingUp, Users, Clock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import HeroPlaceholder from './HeroPlaceholder';

const Hero = () => {
    const heroRef = useRef(null);
    const mockupRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAnchorNavigation = (anchor) => {
        if (location.pathname === '/') {
            // Se já está na home, apenas rola para a âncora
            const element = document.querySelector(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Se está em outra página, vai para a home com a âncora
            navigate(`/#${anchor.replace('#', '')}`);
        }
    };

    // Adicionar structured data para o produto/serviço
    useEffect(() => {
        // Only run on client side
        if (typeof document === 'undefined') return;

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Albert IA - Chatbot para Imobiliárias",
            "description": "IA especializada em imobiliárias que atende leads em 24/7, qualifica contatos e agenda visitas automaticamente",
            "url": "https://albert-self.vercel.app",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
                "@type": "Offer",
                "price": "197",
                "priceCurrency": "BRL",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2024-12-31",
                "description": "Plano básico do Albert IA para imobiliárias"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
            },
            "provider": {
                "@type": "Organization",
                "name": "Albert IA",
                "url": "https://albert-self.vercel.app"
            },
            "featureList": [
                "Atendimento 24/7",
                "Qualificação automática de leads",
                "Agendamento de visitas",
                "Integração com CRMs",
                "Analytics em tempo real",
                "Suporte técnico completo"
            ]
        };

        const scriptId = 'hero-json-ld';
        let script = document.getElementById(scriptId);

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }

        script.textContent = JSON.stringify(structuredData);

        return () => {
            // Optional: remove only if necessary, but JSON-LD is usually fine to stay
            // If we remove it too fast, it might cause issues during fast navigation
        };
    }, []);

    // Optimized scroll animations using Intersection Observer
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

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    // Lightweight scroll effects
    useEffect(() => {
        if (!isVisible) return;

        let ticking = false;

        const updateParallax = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;

                    // Simple parallax for mockup
                    if (mockupRef.current) {
                        mockupRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
                    }

                    // Parallax for cards
                    if (card1Ref.current) {
                        card1Ref.current.style.transform = `translateY(${scrollY * 0.05}px)`;
                    }
                    if (card2Ref.current) {
                        card2Ref.current.style.transform = `translateY(${scrollY * 0.08}px)`;
                    }
                    if (card3Ref.current) {
                        card3Ref.current.style.transform = `translateY(${scrollY * 0.03}px)`;
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        const throttledScroll = () => {
            if (!ticking) {
                updateParallax();
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [isVisible]);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-start pt-24 lg:pt-32 justify-center bg-gradient-to-br from-[#F8FAFA] to-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated gradient orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`text-center lg:text-left space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                            <Zap className="w-4 h-4" />
                            IA para Imobiliárias
                        </div>

                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary-dark leading-tight">
                            Albert IA: Chatbot de Atendimento 24/7 para Imobiliárias
                        </h1>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-[#666666] leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Transforme o atendimento da sua imobiliária com o Albert IA. Responda clientes em segundos, qualifique leads e venda mais, 24 horas por dia. Teste grátis agora.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {[
                                { icon: Users, text: '10k+', label: 'Leads' },
                                { icon: Clock, text: '24/7', label: 'Suporte' },
                                { icon: TrendingUp, text: '400%', label: 'Vendas' },
                                { icon: Calendar, text: '365', label: 'Dias' }
                            ].map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="text-center lg:text-left p-3 bg-white/50 rounded-xl backdrop-blur-sm lg:bg-transparent lg:p-0">
                                        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-2 mb-1 lg:mb-2">
                                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <Icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-xl lg:text-2xl font-bold text-primary-dark">{stat.text}</span>
                                        </div>
                                        <p className="text-xs lg:text-sm text-gray-600">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
                            <button
                                onClick={() => window.open('https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o', '_blank')}
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <Zap className="w-5 h-5" />
                                Agendar
                            </button>
                            <button
                                onClick={() => handleAnchorNavigation('#comparativo')}
                                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                Comparativo
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 text-xs lg:text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Grátis</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Sem cartão</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Imediato</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Mockup */}
                    <div className={`relative transition-all duration-1000 delay-300 hidden sm:block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div ref={mockupRef} className="relative">
                            {/* Main Mockup */}
                            <div className="relative z-10 scale-90 lg:scale-100">
                                <HeroPlaceholder />
                            </div>

                            {/* Floating Cards - Hidden on very small mobile if necessary, or adjusted */}
                            <div ref={card1Ref} className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 z-20 hidden lg:block">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-800">Lead respondido</span>
                                </div>
                            </div>

                            <div ref={card2Ref} className="absolute top-1/2 -left-6 bg-white rounded-xl shadow-lg p-3 z-20 hidden lg:block">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-800">Visita agendada</span>
                                </div>
                            </div>

                            <div ref={card3Ref} className="absolute -bottom-4 right-1/4 bg-white rounded-xl shadow-lg p-3 z-20 hidden lg:block">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-800">Proposta enviada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
