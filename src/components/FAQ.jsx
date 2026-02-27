import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Zap, Shield } from 'lucide-react';

const FAQItem = ({ question, answer, icon: Icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border rounded-2xl bg-white overflow-hidden transition-all duration-300 ${
            isOpen ? 'border-primary shadow-lg' : 'border-gray-200 hover:border-gray-300'
        }`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-primary-dark">{question}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                }`} />
            </button>
            <div className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <div className="px-6 pb-6 pl-20">
                    <p className="text-[#666666] leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { 
            question: 'O que é o Albert?', 
            answer: 'O Albert é uma plataforma inteligente de CRM focada no mercado imobiliário, projetada para otimizar a gestão de leads, melhorar a comunicação e aumentar as taxas de conversão através de IA avançada.',
            icon: HelpCircle
        },
        { 
            question: 'Albert é um chatbot convencional?', 
            answer: 'Não! Enquanto chatbots tradicionais têm regras fixas, o Albert utiliza IA de última geração para oferecer um atendimento humanizado, entendendo interações e aprendendo com cada conversa.',
            icon: MessageCircle
        },
        { 
            question: 'Quais tipos de atendimento ele realiza?', 
            answer: 'Ele é especializado em locação e venda, conhece seu portfólio, tira dúvidas sobre imóveis e processos, além de tratar assuntos administrativos e financeiros de forma inteligente.',
            icon: Zap
        },
        { 
            question: 'Já uso um chatbot, o Albert ainda é útil?', 
            answer: 'Com certeza. Chatbots comuns apenas filtram; o Albert realiza o atendimento completo e humanizado, personalizando a experiência com base no contexto do cliente e aumentando significativamente as conversões.',
            icon: Shield
        },
    ];

    return (
        <section id="faq" className="py-20 bg-gradient-to-br from-white to-[#F8FAFA]">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                        <HelpCircle className="w-4 h-4" />
                        Dúvidas Comuns
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                        Tudo que você precisa saber
                    </h2>
                    <p className="text-xl text-[#666666] max-w-2xl mx-auto">
                        Encontre respostas claras para as principais dúvidas sobre nossa plataforma
                    </p>
                </div>

                <div className="space-y-4 mb-12">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>

                {/* Still have questions */}
                <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        Nossa equipe de especialistas está pronta para ajudar você a encontrar a solução perfeita para sua imobiliária.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20tirar%20mais%20d%C3%BAvidas%20sobre%20o%20Albert%20IA"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Falar com Especialista
                        </a>
                        <a
                            href="#planos"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold transition-colors"
                        >
                            <Zap className="w-5 h-5" />
                            Ver Planos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
