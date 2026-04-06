import { Check, X, AlertTriangle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Comparison = () => {
    const negativePoints = [
        { title: "Resposta lenta", desc: "Média de 45 minutos para primeiro contato" },
        { title: "Horário limitado", desc: "Indisponível após 18h, fins de semana e feriados" },
        { title: "Custo elevado", desc: "Salário + encargos + treinamento constante" }
    ];

    const positivePoints = [
        { title: "Resposta instantânea", desc: "3 segundos para qualificar qualquer lead" },
        { title: "Disponível 24/7", desc: "Atendimento em madrugadas, domingos e feriados" },
        { title: "Custo previsível", desc: "Investimento fixo sem surpresas ou encargos" }
    ];

    return (
        <section id="comparativo" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-secondary">
                        Albert vs Atendimento Tradicional
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        A diferença entre um modelo limitado que está freando seu crescimento e o futuro do atendimento imobiliário.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Atendimento Humano */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2rem] p-8 lg:p-10 border border-gray-100 shadow-sm flex flex-col h-full"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <h3 className="text-xl font-bold text-secondary">Atendimento Humano</h3>
                        </div>
                        <p className="text-gray-500 text-sm mb-8 italic">O modelo tradicional que está limitando seu crescimento</p>

                        <ul className="space-y-6 mb-10 flex-grow">
                            {negativePoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-gray-800 leading-tight mb-1">{point.title}</p>
                                        <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto bg-red-50 rounded-2xl p-6 flex items-start gap-4 border border-red-100">
                            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                            <p className="text-red-600 font-bold leading-tight">
                                ⚠️ Perda de 60% dos leads por demora no atendimento
                            </p>
                        </div>
                    </motion.div>

                    {/* Albert IA */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2rem] p-8 lg:p-10 border-2 border-emerald-900/50 shadow-xl relative flex flex-col h-full"
                    >
                        <div className="absolute -top-4 right-8 bg-[#1B4D4B] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                            COM ALBERT IA
                        </div>

                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 rounded-full bg-emerald-600" />
                            <h3 className="text-xl font-bold text-secondary">Albert IA</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-8 font-medium italic">O futuro do atendimento imobiliário</p>

                        <ul className="space-y-6 mb-10 flex-grow">
                            {positivePoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <Check className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-emerald-900 leading-tight mb-1">{point.title}</p>
                                        <p className="text-sm text-gray-700 leading-relaxed">{point.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto bg-emerald-50 rounded-2xl p-6 flex items-start gap-4 border border-emerald-100">
                            <Check className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                            <p className="text-emerald-800 font-bold leading-tight">
                                ✅ 100% dos leads atendidos em segundos
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="text-center mt-12">
                    <motion.a 
                        id="cta-comparison-results"
                        href="https://wa.me/5513997591781"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 group transition-all"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Quero os resultados do Albert
                            <Zap className="w-6 h-6" />
                        </span>
                        <motion.div 
                            className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ left: ['100%', '-100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
