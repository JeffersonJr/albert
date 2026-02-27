import { Check, Zap, Users, Calendar, HeadphonesIcon, Star, Building2, Rocket, Crown } from 'lucide-react';

const Pricing = () => {
    const plans = [
        { 
            name: 'Essencial', 
            desc: 'Perfeito para começar', 
            price: 'R$ 497',
            period: '/mês',
            features: [
                '500 Atendimentos Mensais',
                'Busca de Imóveis Inteligente', 
                'Agendamento de Visitas',
                'Integração com WhatsApp',
                'Relatórios Básicos',
                'Suporte por Email'
            ], 
            popular: false,
            icon: Building2,
            color: 'primary'
        },
        { 
            name: 'Profissional', 
            desc: 'O mais escolhido', 
            price: 'R$ 997',
            period: '/mês',
            features: [
                '1.000 Atendimentos Mensais',
                'Tudo do Plano Essencial',
                'CRM Próprio Incluído',
                'Analytics Avançado',
                'Integração Múltiplas Plataformas',
                'Suporte Prioritário 24/7',
                'Treinamento Personalizado'
            ], 
            popular: true,
            icon: Rocket,
            color: 'primary'
        },
        { 
            name: 'Enterprise', 
            desc: 'Para grandes operações', 
            price: 'R$ 1.997',
            period: '/mês',
            features: [
                '1.500 Atendimentos Mensais',
                'Tudo do Plano Profissional',
                'Gestão Full de Leads',
                'API Personalizada',
                'White Label',
                'Gerente de Conta Dedicado',
                'Consultoria Estratégica Mensal'
            ], 
            popular: false,
            icon: Star,
            color: 'primary'
        },
        { 
            name: 'Custom', 
            desc: 'Volume sob medida', 
            price: 'Sob Consulta',
            period: '',
            features: [
                'Atendimentos Ilimitados',
                'Tudo do Plano Enterprise',
                'Solução 100% Customizada',
                'Integrações Específicas',
                'Time de Implementação',
                'SLA Garantido',
                'Reuniões Estratégicas Semanais'
            ], 
            popular: false,
            icon: Crown,
            color: 'accent'
        }
    ];

    return (
        <section id="planos" className="py-20 bg-gradient-to-br from-white to-[#F8FAFA]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4" />
                        Planos e Preços
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                        Invista no crescimento da sua imobiliária
                    </h2>
                    <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                        Planos flexíveis que escalam junto com seu negócio. Sem taxas escondidas, sem surpresas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        const isPrimary = plan.color === 'primary';
                        
                        return (
                            <div
                                key={index}
                                className={`relative group ${plan.popular 
                                    ? 'bg-primary text-white shadow-2xl scale-105 border-3 border-primary ring-4 ring-primary/20' 
                                    : 'bg-white border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-primary'
                                } rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3 right-0 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg border-2 border-white">
                                        🚀 MAIS POPULAR
                                    </div>
                                )}

                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className={`w-16 h-16 ${plan.popular ? 'bg-white/30 ring-2 ring-white/50' : isPrimary ? 'bg-primary/10' : 'bg-accent/10'} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-8 h-8 ${plan.popular ? 'text-white drop-shadow-lg' : isPrimary ? 'text-primary' : 'text-accent'}`} />
                                    </div>
                                    
                                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white drop-shadow-sm' : 'text-primary-dark'}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-sm ${plan.popular ? 'text-white/90 font-medium' : 'text-[#666666]'}`}>
                                        {plan.desc}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="text-center mb-8">
                                    <div className={`text-4xl font-bold ${plan.popular ? 'text-white drop-shadow-sm' : 'text-primary-dark'}`}>
                                        {plan.price}
                                    </div>
                                    <div className={`text-sm ${plan.popular ? 'text-white/90 font-medium' : 'text-[#666666]'}`}>
                                        {plan.period}
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white drop-shadow-sm' : 'text-accent'}`} />
                                            <span className={`text-sm ${plan.popular ? 'text-white/95 font-medium' : 'text-gray-700'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="flex justify-center">
                                    <a
                                        href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20plano%20{plan.name}"
                                        target="_blank"
                                        className={`w-full py-4 px-6 rounded-full font-bold text-center transition-all duration-300 ${
                                            plan.popular 
                                                ? 'bg-white text-accent hover:bg-gray-100 shadow-lg' 
                                                : isPrimary 
                                                    ? 'bg-primary text-white hover:bg-primary-dark' 
                                                    : 'bg-accent text-white hover:bg-accent-dark'
                                        } hover:-translate-y-1 hover:shadow-xl`}
                                    >
                                        {plan.name === 'Custom' ? 'Falar com Consultor' : 'Começar Agora'}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Section */}
                <div className="mt-16 text-center">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-left">
                                <h4 className="text-xl font-bold text-primary-dark mb-2">
                                    Sem compromisso, sem risco
                                </h4>
                                <p className="text-[#666666]">
                                    Teste gratuitamente por 14 dias. Cancele quando quiser.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">0%</div>
                                    <p className="text-sm text-[#666666]">Taxa de Setup</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">14</div>
                                    <p className="text-sm text-[#666666]">Dias Grátis</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">✓</div>
                                    <p className="text-sm text-[#666666]">Cancelamento Fácil</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
