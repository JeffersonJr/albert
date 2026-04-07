import { useEffect, useRef, useState } from 'react';
import { Zap, ChevronRight, TrendingUp, Users, Clock, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroDashboard from './HeroDashboard';

const Hero = () => {
    const heroRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAnchorNavigation = (anchor) => {
        if (!anchor || !anchor.startsWith('#')) return;

        if (location.pathname === '/') {
            const element = document.querySelector(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(`/${anchor}`);
        }
    };

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
        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current);
        };
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20 justify-center bg-gradient-to-br from-[#F8FAFA] to-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div 
                        initial="hidden"
                        animate={isVisible ? "show" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.1
                                }
                            }
                        }}
                        className="text-center lg:text-left space-y-8"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary-dark rounded-full text-sm font-semibold"
                        >
                            <Zap className="w-4 h-4" />
                            IA Especializada no Mercado Imobiliário
                        </motion.div>

                        <motion.h1 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight"
                        >
                            Albert IA: <span className="text-primary italic">IA de Atendimento 24/7</span> para Imobiliárias
                        </motion.h1>

                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0"
                        >
                            Aumente sua produtividade com Inteligência Artificial. O Albert realiza o 1º atendimento, qualifica leads e faz follow-up automático, permitindo que sua equipe foque apenas em quem está pronto para comprar.
                        </motion.p>

                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
                        >
                             <motion.button 
                                 id="cta-hero-plans"
                                 onClick={() => document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' })}
                                 whileHover={{ scale: 1.05 }}
                                 whileTap={{ scale: 0.95 }}
                                 className="relative overflow-hidden bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transition-all"
                             >
                                <span className="relative z-10 flex items-center gap-2">
                                    Ver Planos
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                                <motion.div 
                                    className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ left: ['100%', '-100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.button>
                            <motion.a 
                                id="cta-hero-consultant"
                                href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20consultor%20da%20Albert%20IA"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-primary-dark border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-sm hover:shadow-md hover:border-primary/30 hover:text-primary transition-all flex items-center justify-center gap-2 group"
                            >
                                <span className="flex items-center gap-2">
                                    Falar com Especialista
                                    <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                </span>
                            </motion.a>

                        </motion.div>
                    </motion.div>

                    {/* Right Content - Mockup */}
                    <div className={`relative transition-all duration-1000 delay-300 hidden sm:block ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <HeroDashboard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
