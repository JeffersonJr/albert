import React from 'react';
import { motion } from 'framer-motion';

const tags = [
    { text: 'Inteligência Artificial para Imobiliárias', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'CRM Imobiliário', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'Qualificação de Leads', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'Follow-up Automático', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { type: 'icon' },
    { text: 'Atendimento 24/7', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'Inteligência Artificial para Corretores', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'SDR Digital', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'Conversão de Leads', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { type: 'icon' },
    { text: 'Real Estate AI', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'Automação de Vendas', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'Gestão de Atendimento', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'PropTech', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { type: 'icon' },
    { text: 'Inovação Imobiliária', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'Agendamento de Visitas', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'Nutrição de Leads', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
    { text: 'WhatsApp Marketing para Imóveis', bg: 'bg-[#E6F6F0]', border: 'border-[#00A86B]/30', textCol: 'text-[#00A86B]' },
];

const row1 = [...tags.slice(0, 10), ...tags.slice(0, 10)];
const row2 = [...tags.slice(10), ...tags.slice(10)];

const MarqueeRow = ({ items, reverse = false, duration = 40 }) => (
    <div className="flex overflow-hidden relative">
        <motion.div
            initial={{ x: reverse ? "-50%" : "0%" }}
            animate={{ x: reverse ? "0%" : "-50%" }}
            transition={{ 
                duration, 
                repeat: Infinity, 
                ease: "linear" 
            }}
            className="flex gap-4 md:gap-6 whitespace-nowrap py-2 px-4"
        >
            {items.map((tag, index) => (
                tag.type === 'icon' ? (
                    <div key={index} className="flex items-center justify-center px-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <img src="/img/fav.png" alt="Albert" className="w-6 h-6 object-contain" />
                        </div>
                    </div>
                ) : (
                    <div
                        key={index}
                        className={`px-5 py-2.5 rounded-full border ${tag.bg} ${tag.border} ${tag.textCol} font-semibold text-sm md:text-base shadow-sm hover:shadow-md transition-shadow duration-300`}
                    >
                        {tag.text}
                    </div>
                )
            ))}
        </motion.div>
    </div>
);

const TagCloud = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark"
                >
                    Pioneirismo em <span className="text-primary italic">Tecnologia Imobiliária</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-700 max-w-3xl mx-auto"
                >
                    O Albert utiliza o que há de mais moderno em IA para garantir que sua imobiliária esteja sempre um passo à frente no mercado digital.
                </motion.p>
            </div>

            <div className="relative group">
                {/* Gradient Masks for Edge Fading */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="space-y-6 md:space-y-8">
                    <MarqueeRow items={row1} duration={45} />
                    <MarqueeRow items={row2} reverse duration={55} />
                </div>
            </div>
        </section>
    );
};

export default TagCloud;
