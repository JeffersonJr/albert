import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
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
        <section id="planos" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#2D8783] font-bold text-sm tracking-wider mb-2">INVESTIMENTO</p>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#1A1A1A]">
                        Escolha o plano ideal para sua operação
                    </h2>
                    <p className="text-lg text-gray-600">
                        Foco em resultados. Comece a converter mais hoje.
                    </p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl mx-auto overflow-x-auto lg:overflow-visible"
                >
                    <div className="min-w-[800px] bg-white rounded-[32px] border border-gray-100 shadow-soft p-8 hover:shadow-2xl transition-all duration-500">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="py-6 pr-8 text-left text-xl font-bold text-[#1A1A1A] w-1/5">
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

                <div className="mt-12 text-center">
                    <div className="flex justify-center mb-8">
                        <motion.a
                            id="cta-pricing-consultant"
                            href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20consultor%20sobre%20os%20planos"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-xl bg-gradient-to-r from-[#2D8783] to-[#1D5C59] shadow-lg group"
                        >
                            <span className="relative z-10">Falar com um consultor</span>
                            <motion.div 
                                className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                animate={{ left: ['100%', '-100%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.a>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500 font-medium">
                        <span className="flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-[#2D8783]" /> Planos Flexíveis
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-[#2D8783]" /> Resultados reais
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-[#2D8783]" /> Atendimento personalizado
                        </span>
                        <span className="flex items-center gap-1.5 peer">
                            <Check className="w-4 h-4 text-[#2D8783]" /> Cancele quando quiser
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
