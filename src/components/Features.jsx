import { PieChart, Smartphone, Brain, Zap, Shield, BarChart3, MessageSquare, Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FeaturesDashboard from './FeaturesDashboard';

const Features = () => {
    const features = [
        {
            icon: Brain,
            title: 'IA de Última Geração',
            description: 'Diferente de bots comuns, o Albert aprende com cada conversa e responde de forma natural e humanizada.',
            color: 'primary'
        },
        {
            icon: MessageSquare,
            title: 'Conversas Naturais',
            description: 'Entende o contexto, faz perguntas inteligentes e guia o lead pelo funil de vendas.',
            color: 'accent'
        },
        {
            icon: Calendar,
            title: 'Agendamento Automático',
            description: 'Qualifica o interesse e agenda visitas diretamente na agenda do corretor disponível.',
            color: 'primary'
        },
        {
            icon: Smartphone,
            title: 'Integração Total',
            description: 'Conecta com seu CRM, sistema de agendamento e outras ferramentas que você já usa.',
            color: 'accent'
        },
        {
            icon: Shield,
            title: 'Segurança e Conformidade',
            description: 'Dados criptografados, conformidade com LGPD e backup automático de todas as conversas.',
            color: 'primary'
        },
        {
            icon: BarChart3,
            title: 'Analytics em Tempo Real',
            description: 'Dashboards completos para acompanhar os atendimentos do Albert em tempo real.',
            color: 'accent'
        }
    ];

    return (
        <section id="solucao" className="py-12 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary-dark rounded-full text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4" aria-hidden="true" />
                        Recursos Principais
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                        Tudo que você precisa para escalar vendas
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        O Albert entende locação e venda, conhece seu portfólio e processos administrativos.
                    </p>
                </motion.div>

                {/* Dashboard Preview */}
                <div className="mb-16">
                    <FeaturesDashboard />

                </div>
                {/* Features Grid */}
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isPrimary = feature.color === 'primary';

                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                            >
                                <motion.div 
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className={`w-14 h-14 ${isPrimary ? 'bg-primary/10' : 'bg-accent/10'} rounded-xl flex items-center justify-center mb-6 transition-colors duration-300`}
                                >
                                    <Icon className={`w-7 h-7 ${isPrimary ? 'text-primary' : 'text-accent'}`} aria-hidden="true" />
                                </motion.div>

                                <h3 className="text-xl font-bold mb-4 text-primary-dark">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="text-center mt-12">
                    <motion.a
                        id="cta-features-explore"
                        href="#planos"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title="Ver todos os planos e preços"
                        className="relative overflow-hidden inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 group transition-all"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explorar Todos os Recursos
                            <ChevronRight className="w-5 h-5" />
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

export default Features;
