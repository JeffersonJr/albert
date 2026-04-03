import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, CheckCircle, XCircle, UserCheck, TrendingUp, Zap, ArrowRight } from 'lucide-react';

const LeadFlow = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-primary-dark rounded-full text-sm font-semibold mb-6"
                    >
                        <Zap className="w-4 h-4" />
                        Fluxo de Conversão Inteligente
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-secondary mb-6"
                    >
                        Do primeiro contato ao <span className="text-accent">fechamento</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        O Albert gerencia todo o funil inicial de forma autônoma, entregando leads prontos para sua equipe brilhar.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                    {/* Connection Lines (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

                    {/* Step 1: Lead Entry */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:scale-105 transition-transform h-full">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 font-bold text-2xl relative">
                                <UserPlus className="w-8 h-8" />
                                <motion.div 
                                    animate={{ x: [0, 100], opacity: [1, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block"
                                >
                                    <Zap className="w-4 h-4 text-accent" />
                                </motion.div>
                            </div>
                            <h3 className="font-bold text-secondary text-lg mb-2">1. Entrada do Lead</h3>
                            <p className="text-sm text-gray-500">O lead entra em contato via portal ou site e o Albert responde em 3 segundos.</p>
                        </div>
                    </motion.div>

                    {/* Step 2: Qualification */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:scale-105 transition-transform h-full">
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 relative">
                                <div className="flex gap-2">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                    </motion.div>
                                    <XCircle className="w-6 h-6 text-red-300" />
                                </div>
                            </div>
                            <h3 className="font-bold text-secondary text-lg mb-2">2. Qualificação</h3>
                            <p className="text-sm text-gray-500">O Albert faz perguntas estratégicas para filtrar apenas leads com real potencial.</p>
                        </div>
                    </motion.div>

                    {/* Step 3: Handoff */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative z-10"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:scale-105 transition-transform h-full">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <UserCheck className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-secondary text-lg mb-2">3. Encaminhamento</h3>
                            <p className="text-sm text-gray-500">O lead qualificado é passado para o corretor da vez no rodízio automaticamente.</p>
                        </div>
                    </motion.div>

                    {/* Step 4: Closing */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="relative z-10"
                    >
                        <div className="bg-accent text-white p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center group hover:scale-105 transition-transform shadow-accent/30 h-full">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <TrendingUp className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2">4. Venda Concluída</h3>
                            <p className="text-sm text-white/80">Sua equipe foca no fechamento enquanto o Albert cuida da próxima prospecção.</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 p-8 bg-[#F8FAFA] border border-gray-100 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto"
                >
                    <div className="flex-1">
                        <p className="text-secondary font-bold text-xl italic text-center md:text-left">
                            Acelere seu funil: <span className="text-gray-500 font-normal">O Albert qualifica o lead e o corretor foca no que importa: fechar a venda.</span>
                        </p>
                    </div>
                    <a 
                        id="cta-leadflow-consultant"
                        href="https://wa.me/5513997591781"
                        target="_blank"
                        className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
                    >
                        Quero essa produtividade
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadFlow;
