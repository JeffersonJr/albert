import { useState } from 'react';
import { Zap, CheckCircle, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import LeadCaptureModal from './LeadCaptureModal';

const CTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const benefits = [
        'Setup entre 15 a 20 dias',
        'Inteligência Artificial Especializada',
        'Suporte especializado no processo',
        'Cancelamento a qualquer momento'
    ];

    return (
        <section className="py-12 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-accent">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[30px] lg:rounded-[60px] p-8 lg:p-20 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
                                <Zap className="w-4 h-4" aria-hidden="true" />
                                Última Chance
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                                Pronto para transformar sua imobiliária?
                            </h2>

                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Recupere leads que seriam perdidos pelo esquecimento com o Albert.
                                Recupere seu tempo e pare de perder leads para a concorrência.
                            </p>

                            {/* Benefits */}
                            <div className="space-y-3 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#00ff9d] flex-shrink-0" aria-hidden="true" />
                                        <span className="text-white font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    id="cta-bottom-consultant"
                                    onClick={() => setIsModalOpen(true)}
                                    title="Falar com Consultor"
                                    aria-label="Abrir formulário de Falar com Especialista"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative overflow-hidden bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transition-all"
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
                                </motion.button>
                                <button
                                    id="cta-bottom-plans"
                                    onClick={() => document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' })}
                                    title="Ver Planos de Preço"
                                    aria-label="Ver Planos e Preços de assinatura"
                                    className="bg-primary-dark/30 text-white border-2 border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark/50 transition-[transform,background-color,backdrop-filter] duration-300 hover:scale-105 backdrop-blur-sm shadow-lg"
                                >
                                    Ver Planos
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div className="grid grid-cols-2 gap-8">
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">90%</div>
                                <p className="text-white/90 font-medium">Aproveitamento</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
                                <p className="text-white/90 font-medium">Follow-up</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
                                <p className="text-white/90 font-medium">Qualificação</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">&lt; 60s</div>
                                <p className="text-white/90 font-medium">1º Atendimento</p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-12 pt-8 border-t border-white/20 text-center">
                        <p className="text-white/90 text-sm">
                            Cancele quando quiser. Suporte dedicado durante todo o processo.
                        </p>
                    </div>
                </div>
            </div>

            <LeadCaptureModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
};

export default CTA;
