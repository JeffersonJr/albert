import { useEffect, useRef, useState } from 'react';
import { Zap, Check, Calendar, TrendingUp, Users, Clock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import OptimizedImageVite from './OptimizedImageVite';

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
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8FAFA] to-white overflow-hidden">
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
                        <h1 className="text-4xl lg:text-6xl font-bold text-primary-dark leading-tight">
                            Albert IA: Chatbot de Atendimento 24/7 para Imobiliárias
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-[#666666] leading-relaxed max-w-lg">
                            Transforme o atendimento da sua imobiliária com o Albert IA. Responda clientes em segundos, qualifique leads e venda mais, 24 horas por dia. Teste grátis agora.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: Users, text: '10.000+', label: 'Leads Atendidos' },
                                { icon: Clock, text: '24/7', label: 'Disponibilidade' },
                                { icon: TrendingUp, text: '400%', label: 'Aumento Vendas' },
                                { icon: Calendar, text: '365', label: 'Dias/Ano' }
                            ].map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="text-center lg:text-left">
                                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <Icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-2xl font-bold text-primary-dark">{stat.text}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => window.open('https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o', '_blank')}
                                className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <Zap className="w-5 h-5" />
                                Agendar Demonstração
                            </button>
                            <button
                                onClick={() => handleAnchorNavigation('#comparativo')}
                                className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                Ver Comparativo
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Grátis para testar</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Sem cartão</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Ativa imediato</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Mockup */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div ref={mockupRef} className="relative">
                            {/* Main Mockup */}
                            <div className="relative z-10">
                                <OptimizedImageVite
                                    src="/img/hero-mockup.png"
                                    alt="Albert IA Interface - Dashboard para automação imobiliária com atendimento 24/7"
                                    className="rounded-2xl shadow-2xl"
                                    priority={true}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    width={800}
                                    height={600}
                                />
                            </div>

                            {/* Floating Cards */}
                            <div ref={card1Ref} className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 z-20">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">Lead respondido</span>
                                </div>
                            </div>

                            <div ref={card2Ref} className="absolute top-1/2 -left-6 bg-white rounded-xl shadow-lg p-3 z-20">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm font-medium">Visita agendada</span>
                                </div>
                            </div>

                            <div ref={card3Ref} className="absolute -bottom-4 right-1/4 bg-white rounded-xl shadow-lg p-3 z-20">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-medium">Proposta enviada</span>
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
