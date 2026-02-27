import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`mb-3 border border-gray-100 rounded-2xl bg-white overflow-hidden transition-all duration-400 ${isOpen ? 'shadow-soft' : ''}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-primary-dark"
            >
                {question}
                <ChevronDown className={`transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-400 ease-in-out ${isOpen ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-[#666] leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { question: 'O que é o Albert?', answer: 'O Albert é uma plataforma inteligente de CRM focada no mercado imobiliário, projetada para otimizar a gestão de leads, melhorar a comunicação e aumentar as taxas de conversão.' },
        { question: 'Albert é um chatbot convencional?', answer: 'Não! Enquanto chatbots tradicionais têm regras fixas, o Albert utiliza IA para oferecer um atendimento humanizado, entendendo interações e aprendendo com cada conversa.' },
        { question: 'Quais tipos de atendimento ele realiza?', answer: 'Ele é especializado em locação e venda, conhece seu portfólio, tira dúvidas sobre imóveis e processos, além de tratar assuntos administrativos e financeiros.' },
        { question: 'Já uso um chatbot, o Albert ainda é útil?', answer: 'Com certeza. Chatbots comuns apenas filtram; o Albert realiza o atendimento completo e humanizado, personalizando a experiência com base no contexto do cliente.' },
    ];

    return (
        <section id="faq" className="py-24 bg-[#F8FAFA]">
            <div className="container mx-auto px-6 max-w-[800px]">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase mb-4">
                        Dúvidas Comuns
                    </div>
                    <h2 className="text-4xl font-bold text-primary-dark">Perguntas Frequentes</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
