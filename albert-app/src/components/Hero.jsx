import { useEffect, useRef } from 'react';
import { Zap, Check, Calendar } from 'lucide-react';
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
        <section ref={heroRef} className="pt-32 pb-24 overflow-hidden relative">
            {/* Background Blobs */}
            <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(45,135,131,0.1)_0%,_rgba(255,255,255,0)_70%)] rounded-full -z-10 blur-[80px]" />

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-[1.2]">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase mb-4">
                        O Futuro do Atendimento Imobiliário
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-primary-dark">
                        Respondemos seus leads em <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3 segundos</span>. O tempo todo.
                    </h1>
                    <p className="text-xl text-muted text-[#666] mb-10 max-w-[540px]">
                        O Albert é o mordomo digital que qualifica, agenda e converte leads 24h por dia. Pare de perder vendas para a falta de resposta.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA"
                            target="_blank"
                            className="bg-accent hover:bg-[#20BA5A] text-white px-10 py-[18px] rounded-full font-bold text-lg flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all"
                        >
                            <Zap className="fill-white" /> Ativar o Albert Agora
                        </a>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200 flex gap-10">
                        <div>
                            <div className="text-4xl font-extrabold text-primary">10k+</div>
                            <p className="text-[13px] text-muted text-[#666] uppercase font-semibold">Leads Atendidos/mês</p>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-primary">96%</div>
                            <p className="text-[13px] text-muted text-[#666] uppercase font-semibold">Satisfação de Leads</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center [perspective:1200px]">
                    <div className="relative [transform-style:preserve-3d]">
                        <img
                            ref={mockupRef}
                            src="/dashboard_preview.png"
                            alt="Albert IA - Dashboard"
                            className="w-full rounded-3xl shadow-strong [transform:rotateX(10deg)_rotateY(-10deg)_rotateZ(2deg)] animate-float-3d"
                        />

                        {/* Floating Cards */}
                        <div
                            ref={card1Ref}
                            className="absolute top-[10%] -right-8 bg-white/70 backdrop-blur-md border border-white/40 p-4 rounded-2xl flex items-center gap-3 shadow-strong z-10 [transform:translateZ(50px)]"
                        >
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                <Check className="text-white w-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold">Lead Qualificado!</p>
                                <p className="text-[10px] opacity-70">Pronto para conversão</p>
                            </div>
                        </div>

                        <div
                            ref={card2Ref}
                            className="absolute bottom-[15%] -left-10 bg-white/70 backdrop-blur-md border border-white/40 p-4 rounded-2xl flex items-center gap-3 shadow-strong z-10 [transform:translateZ(80px)]"
                        >
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                <Calendar className="text-white w-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold">Visita Agendada!</p>
                                <p className="text-[10px] opacity-70">Hoje às 14:30h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
