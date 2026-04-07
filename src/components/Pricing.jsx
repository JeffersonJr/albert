import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, useScroll, LayoutGroup, useMotionValue, useMotionValueEvent, useSpring } from 'framer-motion';

const Pricing = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [canScroll, setCanScroll] = useState(false);
    const [scrollDistance, setScrollDistance] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const section = sectionRef.current;
        if (!container || !section) return;

        const handleWheel = (e) => {
            // Se estiver engajado na horizontal, pula (touchpad nativo swipe)
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            if (maxScrollLeft <= 0) return; // Abortar se a tabela inteira couber na tela
            
            // Margens da extremidade
            const atStart = container.scrollLeft <= 0;
            const atEnd = container.scrollLeft >= maxScrollLeft - 1;

            // Se for pra cima no inicio, pula
            if (e.deltaY < 0 && atStart) return;
            
            // Se for pra baixo no fim, pula
            if (e.deltaY > 0 && atEnd) return;

            // Transfere o scroll vertical para horizontal
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        };

        // capture: true garante captura imediata
        section.addEventListener('wheel', handleWheel, { passive: false, capture: true });
        return () => section.removeEventListener('wheel', handleWheel, { capture: true });
    }, []);

    const plans = [
        { name: '500', meetings: '2 reuniões' },
        { name: '1000', meetings: '2 reuniões' },
        { name: '1500', meetings: '1 reunião mensal' },
        { name: '2000', meetings: 'Sob demanda' }
    ];

    const features = [
        { label: 'Preço', values: ['Sob consulta', 'Sob consulta', 'Sob consulta', 'Sob consulta'] },
        { label: 'Fidelidade', values: ['Flexível', 'Flexível', 'Flexível', 'Flexível'] },
        { label: 'Busca de imóveis', type: 'check' },
        { label: 'Agendamento de visitas', type: 'check' },
        { label: 'Envio de leads para o CRM', type: 'check' },
        { label: 'Suporte', type: 'check' },
        { label: 'Marca personalizada', type: 'check' },
        { label: 'CRM Próprio', type: 'check' },
        { label: 'Reunião Estratégica (consultor)', meetings: true },
    ];

    return (
        <section ref={sectionRef} id="planos" className={`relative bg-white transition-all duration-500 py-24 pb-12`}>
            <div className={`relative`}>
                <div className="container mx-auto">
                    <div className="text-center mb-16 px-6">
                        <p className="text-[#2D8783] font-bold text-sm tracking-wider mb-2 uppercase">Investimento</p>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#1A1A1A]">
                            Escolha o plano ideal para sua operação
                        </h2>
                        <p className="text-lg text-gray-600 mb-2">
                            Foco em resultados. Comece a converter mais hoje.
                        </p>
                        
                        {/* Indicador interativo sutil */}
                        <div className={`transition-opacity duration-300 flex items-center justify-center gap-2 text-primary/60 text-sm font-bold uppercase tracking-widest ${canScroll ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="hidden lg:inline">Role para baixo ou arraste para ver mais</span>
                            <span className="lg:hidden">Arraste para os lados</span>
                            <ArrowRight className="w-4 h-4 animate-pulse" />
                        </div>
                    </div>

                    <LayoutGroup>
                        <div 
                            ref={containerRef}
                            className={`max-w-7xl mx-auto px-6 lg:px-0 overflow-x-auto lg:overflow-x-visible custom-scrollbar-hidden relative pb-10 w-full touch-pan-x`}
                        >
                            <div className={`min-w-[900px] lg:min-w-full lg:max-w-full bg-white rounded-[2rem] border border-gray-100 shadow-soft p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 mx-auto w-fit lg:w-full`}>
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-100">
                                            <th className="py-4 lg:py-6 pr-4 lg:pr-8 text-left text-lg lg:text-xl font-bold text-[#1A1A1A] w-[200px] lg:w-1/4">
                                                Atendimento Mensal
                                            </th>
                                            {plans.map((plan) => (
                                                <th key={plan.name} className="py-4 lg:py-6 px-4 text-center text-3xl lg:text-4xl font-bold text-[#1A1A1A] min-w-[160px]">
                                                    {plan.name}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {features.map((feature, idx) => (
                                            <tr key={idx} className="group hover:bg-gray-50/50 transition-colors">
                                                <td className="py-4 lg:py-5 pr-4 lg:pr-8 text-xs lg:text-sm font-medium text-gray-700">
                                                    {feature.label}
                                                </td>
                                                {plans.map((plan, pIdx) => (
                                                    <td key={pIdx} className="py-4 lg:py-5 px-4 text-center">
                                                        {feature.type === 'check' ? (
                                                            <div className="flex justify-center">
                                                                <Check className="w-5 h-5 text-[#2D8783]" />
                                                            </div>
                                                        ) : feature.meetings ? (
                                                            <span className="text-sm font-medium text-gray-900">{plan.meetings}</span>
                                                        ) : (
                                                            <span className="text-sm font-medium text-gray-900">{feature.values[pIdx]}</span>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </LayoutGroup>

                    <div className={`mt-12 text-center transition-all duration-500 ${canScroll ? 'opacity-100' : ''}`}>
                        <div className="flex justify-center mb-8 px-6">
                            <motion.a
                                id="cta-pricing-consultant"
                                href="https://wa.me/5513997591781?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Albert%20e%20suas%20funcionalidades"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative overflow-hidden inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-xl bg-primary shadow-lg shadow-primary/20 group"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Falar com um consultor
                                    <MessageCircle className="w-5 h-5" />
                                </span>
                                <motion.div 
                                    className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ left: ['100%', '-100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.a>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 px-6 text-sm text-gray-500 font-medium pb-8 lg:pb-0">
                            <span className="flex items-center gap-1.5 whitespace-nowrap">
                                <Check className="w-4 h-4 text-[#2D8783]" /> Setup entre 15 a 20 dias
                            </span>
                            <span className="flex items-center gap-1.5 whitespace-nowrap">
                                <Check className="w-4 h-4 text-[#2D8783]" /> Suporte especializado
                            </span>
                            <span className="flex items-center gap-1.5 whitespace-nowrap">
                                <Check className="w-4 h-4 text-[#2D8783]" /> Cancelamento flexível
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar-hidden::-webkit-scrollbar {
                    display: none;
                }
                .shadow-soft {
                    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.03);
                }
            `}} />
        </section>
    );
};

export default Pricing;
