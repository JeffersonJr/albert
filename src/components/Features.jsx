import { PieChart, Smartphone, Brain, Zap, Shield, BarChart3, MessageSquare, Calendar } from 'lucide-react';

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
            description: 'Dashboards completos para acompanhar performance, taxas de conversão e ROI.',
            color: 'accent'
        }
    ];

    return (
        <section id="solucao" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4" />
                        Recursos Principais
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                        Tudo que você precisa para escalar vendas
                    </h2>
                    <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                        O Albert entende locação e venda, conhece seu portfólio e processos administrativos.
                    </p>
                </div>

                {/* Dashboard Preview */}
                <div className="mb-16">
                    <div className="relative max-w-5xl mx-auto">
                        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
                            <img
                                src="/dashboard_preview.png"
                                alt="Painel de Controle Albert IA"
                                className="w-full rounded-2xl shadow-xl"
                            />
                        </div>
                        
                        {/* Floating badges */}
                        <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg border border-primary/20">
                            <span className="text-sm font-semibold text-primary">Dashboard em Tempo Real</span>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-accent text-white rounded-full px-4 py-2 shadow-lg">
                            <span className="text-sm font-semibold">Analytics Completo</span>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isPrimary = feature.color === 'primary';
                        
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 ${isPrimary ? 'bg-primary/10' : 'bg-accent/10'} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-7 h-7 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-4 text-primary-dark">
                                    {feature.title}
                                </h3>
                                
                                <p className="text-[#666666] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#planos"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg"
                    >
                        Explorar Todos os Recursos
                        <Zap className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Features;
