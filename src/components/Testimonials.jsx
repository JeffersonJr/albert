const Testimonials = () => {
    const testimonials = [
        {
            text: '"Antes do Albert, perdíamos leads por falta de resposta rápida. Hoje, 100% são atendidos em segundos e já chegam qualificados."',
            name: 'Ricardo Silva',
            role: 'Diretor Comercial - Imobiliária Rio',
            featured: false,
        },
        {
            text: '"O agendamento automático de visitas foi um divisor de águas. O corretor só abre a agenda e sai para vender."',
            name: 'Mariana Costa',
            role: 'CEO - Elite Properties',
            featured: true,
        },
        {
            text: '"A integração com nosso CRM foi instantânea. Não tivemos que mudar o processo, apenas instalamos e escalamos."',
            name: 'João Pedro',
            role: 'Gerente de Operações - MyHouse',
            featured: false,
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase mb-4">
                        Prova Social
                    </div>
                    <h2 className="text-4xl font-bold text-primary-dark">Quem já usa, aprova</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`p-8 rounded-3xl transition-all duration-400 border ${t.featured ? 'border-primary shadow-lg scale-105 z-10' : 'border-gray-100 shadow-soft'
                                }`}
                        >
                            <p className="italic text-[#666] mb-6">"{t.text}"</p>
                            <h4 className="text-sm font-bold text-primary-dark">{t.name}</h4>
                            <p className="text-xs text-[#666]">{t.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
