import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Settings, Users, Zap, CheckCircle } from 'lucide-react';

const FAQSection = () => {
    const [openItem, setOpenItem] = useState(null);

    const faqs = [
        {
            question: "Como a IA ajuda no atendimento?",
            answer: "O Albert IA responde clientes em 3 segundos, 24/7, qualifica leads automaticamente e agenda visitas, aumentando sua taxa de conversão em 400%.",
            icon: MessageCircle
        },
        {
            question: "A ferramenta integra com meu CRM?",
            answer: "Sim! O Albert IA se integra com os principais CRMs do mercado (Hubspot, RD Station, PipeDrive, etc.) através de API, sincronizando todos os dados em tempo real.",
            icon: Settings
        },
        {
            question: "Quanto tempo leva para implementar?",
            answer: "A implementação é rápida: em até 48 horas sua imobiliária já estará usando o Albert IA para atender clientes e qualificar leads automaticamente.",
            icon: Zap
        },
        {
            question: "E se eu não tiver experiência com tecnologia?",
            answer: "Não se preocupe! Oferecemos suporte completo, treinamento para sua equipe e acompanhamento durante os primeiros 30 dias para garantir o máximo de resultados.",
            icon: Users
        }
    ];

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                        Tire suas dúvidas sobre como o Albert IA pode transformar sua imobiliária
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const Icon = faq.icon;
                            const isOpen = openItem === index;
                            
                            return (
                                <div 
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                                >
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <div className="flex-shrink-0">
                                            {isOpen ? (
                                                <ChevronUp className="w-5 h-5 text-primary" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-primary" />
                                            )}
                                        </div>
                                    </button>
                                    
                                    {isOpen && (
                                        <div className="px-6 pb-4">
                                            <div className="border-t border-gray-100 pt-4">
                                                <p className="text-gray-700 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Final */}
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-primary-dark mb-4">
                            Ainda tem dúvidas?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Fale com um de nossos especialistas e tire todas as suas dúvidas sobre automação imobiliária
                        </p>
                        <button
                            onClick={() => window.open('https://wa.me/5513997591781?text=Ol%C3%A1,%20tenho%20d%C3%BAvidas%20sobre%20o%20Albert%20IA', '_blank')}
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Falar com Especialista
                        </button>
                    </div>
                </div>
            </div>

            {/* Schema Markup for FAQ */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map((faq, index) => ({
                        "@type": "Question",
                        "position": index + 1,
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })}
            </script>
        </section>
    );
};

export default FAQSection;
