import { useRef, useState, useLayoutEffect } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform, LayoutGroup } from 'framer-motion';

const Pricing = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [canScroll, setCanScroll] = useState(false);
    const [scrollDistance, setScrollDistance] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Calcula o deslocamento horizontal baseado na rolagem vertical
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

    useLayoutEffect(() => {
        const checkScroll = () => {
            if (containerRef.current) {
                const contentWidth = containerRef.current.scrollWidth;
                const viewportWidth = containerRef.current.offsetWidth;
                const distance = contentWidth - viewportWidth;
                
                setCanScroll(distance > 0);
                setScrollDistance(distance > 0 ? distance + 64 : 0); // +64 para margem final
            }
        };

        checkScroll();
        const timer = setTimeout(checkScroll, 100);
        
        window.addEventListener('resize', checkScroll);
        return () => {
            window.removeEventListener('resize', checkScroll);
            clearTimeout(timer);
        };
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
        <section ref={sectionRef} id="planos" className={`relative bg-white transition-all duration-500 ${canScroll ? 'h-[300vh]' : 'h-auto py-24'}`}>
            <div className={`${canScroll ? 'sticky top-0 h-screen overflow-hidden flex flex-col justify-center' : 'relative'}`}>
                <div className="container mx-auto">
                    <div className="text-center mb-16 px-6">
                        <p className="text-[#2D8783] font-bold text-sm tracking-wider mb-2 uppercase">Investimento</p>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#1A1A1A]">
                            Escolha o plano ideal para sua operação
                        </h2>
                        <p className="text-lg text-gray-600">
                            Foco em resultados. Comece a converter mais hoje.
                        </p>
                    </div>

                    <LayoutGroup>
                        <motion.div 
                            ref={containerRef}
                            style={{ x: canScroll ? x : 0 }}
                            className={`max-w-7xl mx-auto px-6 lg:px-0 custom-scrollbar-hidden relative ${!canScroll && 'lg:flex lg:justify-center'}`}
                        >
                            <div className={`${canScroll ? 'min-w-[1000px]' : 'w-full'} bg-white rounded-[32px] border border-gray-100 shadow-soft p-8 hover:shadow-2xl transition-all duration-500`}>
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-100">
                                            <th className="py-6 pr-8 text-left text-xl font-bold text-[#1A1A1A] w-1/4">
                                                Atendimento Mensal
                                            </th>
                                            {plans.map((plan) => (
                                                <th key={plan.name} className="py-6 px-4 text-center text-4xl font-bold text-[#1A1A1A]">
                                                    {plan.name}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {features.map((feature, idx) => (
                                            <tr key={idx} className="group hover:bg-gray-50/50 transition-colors">
                                                <td className="py-5 pr-8 text-sm font-medium text-gray-700">
                                                    {feature.label}
                                                </td>
                                                {plans.map((plan, pIdx) => (
                                                    <td key={pIdx} className="py-5 px-4 text-center">
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
                        </motion.div>
                    </LayoutGroup>

                    <div className={`mt-12 text-center transition-all duration-500 ${canScroll ? 'opacity-100' : ''}`}>
                        <div className="flex justify-center mb-8 px-6">
                            <motion.a
                                id="cta-pricing-consultant"
                                href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20consultor%20sobre%20os%20planos"
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
