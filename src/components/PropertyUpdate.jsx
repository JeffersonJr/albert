import React from 'react';
import { motion } from 'framer-motion';
import { User, MessageSquare, Database, CheckCircle2, XCircle, ArrowRight, Home } from 'lucide-react';

const PropertyUpdate = () => {
    return (
        <section className="py-24 bg-[#F8FAFA] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary-dark rounded-full text-sm font-semibold mb-6"
                    >
                        <Home className="w-4 h-4" />
                        Atualização Automática de Imóveis
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-secondary mb-6"
                    >
                        Mantenha sua carteira <span className="text-primary">sempre atualizada</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        O Albert monitora seus imóveis e entra em contato com os proprietários para garantir que as informações estejam corretas, sem que você precise mover um dedo.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                    {/* Connection Lines (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

                    {/* Step 1: Albert contacts Owner */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 space-y-6"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-[#2d87831a] rounded-2xl flex items-center justify-center text-[#2d8783] mb-6 font-bold text-2xl relative">
                                <User className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-secondary text-lg mb-2">Monitoramento</h3>
                            <p className="text-sm text-gray-500">Albert identifica imóveis há mais de 30 dias sem atualização.</p>
                        </div>
                    </motion.div>

                    {/* Step 2: Owner responds */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10 space-y-6"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-[#2d87831a] rounded-2xl flex items-center justify-center text-[#2d8783] mb-6 relative">
                                <MessageSquare className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-secondary text-lg mb-2">Resposta</h3>
                            <p className="text-sm text-gray-500">O proprietário responde ao Albert com as novas informações ou fotos.</p>
                        </div>
                    </motion.div>

                    {/* Step 3: Albert to System */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative z-10 space-y-6"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-[#2d87831a] rounded-2xl flex items-center justify-center text-[#2d8783] mb-6 relative">
                                <Database className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-secondary text-lg mb-2">Sincronização</h3>
                            <p className="text-sm text-gray-500">Albert organiza os dados e envia diretamente para o sistema.</p>
                        </div>
                    </motion.div>

                    {/* Step 4: User Approval */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="relative z-10 space-y-6"
                    >
                        <div className="bg-primary text-white p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center group hover:scale-105 transition-transform shadow-primary/30">
                            <div className="flex gap-2 mb-6">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/5">
                                    <XCircle className="w-6 h-6 text-white/50" />
                                </div>
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2">Validação</h3>
                            <p className="text-sm text-white/80">Você aprova a mudança com um clique e o imóvel é atualizado.</p>
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
                            O Albert faz o trabalho pesado: <span className="text-gray-500 font-normal">Sua equipe foca em vender, enquanto garantimos que sua base de imóveis esteja perfeita.</span>
                        </p>
                    </div>
                    <motion.a 
                        id="cta-property-update"
                        href="https://wa.me/5513997591781"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden w-full md:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 group transition-all"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Saber mais sobre Atualização
                            <ArrowRight className="w-5 h-5" />
                        </span>
                        <motion.div 
                            className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ left: ['100%', '-100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default PropertyUpdate;
