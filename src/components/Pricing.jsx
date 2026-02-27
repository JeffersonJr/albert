import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        { name: '500', desc: 'Atendimentos Mensais', features: ['Busca de Imóveis', 'Agendamento de Visitas', 'Envio para CRM', 'Marca Personalizada', '2 Reuniões Estratégicas'], popular: false },
        { name: '1000', desc: 'Atendimentos Mensais', features: ['Tudo do Plano 500', 'CRM Próprio Incluído', 'Suporte Prioritário', '2 Reuniões Estratégicas'], popular: true },
        { name: '1500', desc: 'Atendimentos Mensais', features: ['Tudo do Plano 1000', 'Gestão Full de Leads', '1 Reunião Mensal'], popular: false },
        { name: '2000+', desc: 'Volume Enterprise', features: ['Tudo do Plano 1500', 'Atendimento Customizado', 'Reuniões sob Demanda'], popular: false },
    ];

    return (
        <section id="planos" className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-5 text-primary-dark">Investimento que se paga</h2>
                    <p className="text-[#666]">Planos sob medida com toda a potência da IA imobiliária.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`flex flex-col p-8 rounded-3xl transition-all duration-400 border relative ${plan.popular ? 'border-primary shadow-lg scale-105 z-10' : 'border-gray-100 shadow-soft bg-white/70 backdrop-blur-md'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-[11px] font-extrabold">
                                    MAIS POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2 text-primary-dark">{plan.name}</h3>
                            <p className="text-[13px] text-[#666] mb-6">{plan.desc}</p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feat, j) => (
                                    <li key={j} className="flex gap-2 text-sm text-[#333]">
                                        <Check className="text-accent w-4 h-4 mt-0.5" /> {feat}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA"
                                target="_blank"
                                className={`w-full py-4 rounded-full font-bold text-center transition-all ${plan.popular ? 'bg-primary text-white shadow-lg' : 'bg-[#F8FAFA] text-primary border border-primary/10'
                                    } hover:-translate-y-1`}
                            >
                                {plan.name === '2000+' ? 'Falar com Time' : 'Ativar Plano'}
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-12 text-sm text-[#666] font-semibold">Sem taxas de cancelamento. Sem fidelidade.</p>
            </div>
        </section>
    );
};

export default Pricing;
