import { useEffect, useRef } from 'react';
import { Zap, Check, Calendar, TrendingUp, Users, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const mockupRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 3D Tilt Effect on Scroll
            gsap.to(mockupRef.current, {
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                z: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Floating Cards Parallax
            [card1Ref.current, card2Ref.current].forEach((card, i) => {
                gsap.to(card, {
                    y: -50 * (i + 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="pt-32 pb-16 overflow-hidden relative bg-gradient-to-br from-[#F8FAFA] to-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D8783' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4" />
                        O Futuro do Atendimento Imobiliário
                    </div>
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 text-primary-dark max-w-5xl mx-auto">
                        Respondemos seus leads em{' '}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3 segundos</span>
                        {' '}o tempo todo.
                    </h1>
                    <p className="text-xl lg:text-2xl text-[#666666] mb-12 max-w-3xl mx-auto leading-relaxed">
                        O Albert é o mordomo digital que qualifica, agenda e converte leads 24h por dia. 
                        Pare de perder vendas por falta de resposta.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <a
                            href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg cursor-pointer"
                            style={{ pointerEvents: 'auto', zIndex: 10 }}
                        >
                            <Zap className="fill-white w-5 h-5" /> 
                            Ativar o Albert Agora
                        </a>
                        <a
                            href="#comparativo"
                            className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                            style={{ pointerEvents: 'auto', zIndex: 10 }}
                        >
                            Ver Demonstração
                        </a>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="text-primary w-6 h-6" />
                        </div>
                        <div className="text-3xl font-bold text-primary-dark mb-2">10k+</div>
                        <p className="text-[#666666] font-medium">Leads Atendidos/mês</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="text-accent w-6 h-6" />
                        </div>
                        <div className="text-3xl font-bold text-primary-dark mb-2">96%</div>
                        <p className="text-[#666666] font-medium">Satisfação de Leads</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="text-primary w-6 h-6" />
                        </div>
                        <div className="text-3xl font-bold text-primary-dark mb-2">3 seg</div>
                        <p className="text-[#666666] font-medium">Tempo de Resposta</p>
                    </div>
                </div>

                {/* Dashboard Preview */}
                <div className="flex justify-center">
                    <div className="relative max-w-4xl w-full">
                        <img
                            ref={mockupRef}
                            src="/dashboard_preview.png"
                            alt="Albert IA - Dashboard"
                            className="w-full rounded-3xl shadow-2xl border border-white/20"
                        />

                        {/* Floating Cards */}
                        <div
                            ref={card1Ref}
                            className="absolute top-[10%] -right-8 bg-white/90 backdrop-blur-md border border-white/40 p-4 rounded-2xl flex items-center gap-3 shadow-xl z-10"
                        >
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                <Check className="text-white w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-primary-dark">Lead Qualificado!</p>
                                <p className="text-xs text-[#666666]">Pronto para conversão</p>
                            </div>
                        </div>

                        <div
                            ref={card2Ref}
                            className="absolute bottom-[15%] -left-10 bg-white/90 backdrop-blur-md border border-white/40 p-4 rounded-2xl flex items-center gap-3 shadow-xl z-10"
                        >
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                <Calendar className="text-white w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-primary-dark">Visita Agendada!</p>
                                <p className="text-xs text-[#666666]">Hoje às 14:30h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
