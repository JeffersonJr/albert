import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            text: 'Antes do Albert, perdíamos leads por falta de resposta rápida. Hoje, 100% são atendidos em segundos e já chegam qualificados.',
            name: 'Ricardo Silva',
            role: 'Diretor Comercial - Imobiliária Rio',
            rating: 5,
            company: 'Imobiliária Rio',
            avatar: '/img/logo-green.png',
            featured: true,
        },
        {
            text: 'A qualificação de leads foi um divisor de águas. O corretor só abre a agenda e sai para vender para quem já está pronto.',
            name: 'Mariana Costa',
            role: 'CEO - Elite Properties',
            rating: 5,
            company: 'Elite Properties',
            avatar: '/img/logo.png',
            featured: false,
        },
        {
            text: 'A integração com nosso CRM foi instantânea. Não tivemos que mudar o processo, apenas instalamos e escalamos.',
            name: 'João Pedro',
            role: 'Gerente de Operações - MyHouse',
            rating: 5,
            company: 'MyHouse',
            avatar: '/img/logo-green.png',
            featured: false,
        }
    ];

    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-1" role="img" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        aria-hidden="true"
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="py-20 bg-gradient-to-br from-[#F8FAFA] to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-[#1d5c59] rounded-full text-sm font-semibold mb-6">
                        <Star className="w-4 h-4 fill-current" />
                        Resultados reais
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                        Quem usa, não volta atrás
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Veja como o Albert está transformando imobiliárias em todo o Brasil
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto overflow-visible p-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`relative group flex flex-col ${testimonial.featured
                                ? 'bg-gradient-to-br from-primary to-primary-dark text-white scale-105 shadow-2xl z-10'
                                : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'
                                } rounded-3xl p-8 transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-2`}
                        >
                            {/* Quote Icon */}
                            <div className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center ${testimonial.featured
                                ? 'bg-white/20'
                                : 'bg-primary/10'
                                }`}>
                                <Quote className={`w-5 h-5 ${testimonial.featured ? 'text-white' : 'text-primary'
                                    }`} />
                            </div>

                            {/* Content */}
                            <div className="mb-4">
                                <StarRating rating={testimonial.rating} />
                            </div>

                            <blockquote className={`text-base leading-relaxed mb-6 italic flex-1 ${testimonial.featured ? 'text-white' : 'text-gray-700'}`}>
                                "{testimonial.text}"
                            </blockquote>

                            {/* Author */}
                            <div className="mt-auto flex items-center gap-4 border-t pt-6 border-white/10">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="min-w-0">
                                    <h3 className={`font-bold text-sm truncate ${testimonial.featured ? 'text-white' : 'text-primary-dark'
                                        }`}>
                                        {testimonial.name}
                                    </h3>
                                    <p className={`text-[10px] truncate ${testimonial.featured ? 'text-white/70' : 'text-gray-500'
                                        }`}>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Skeleton Placeholder */}
                    <div className="bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-colors">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-300 group-hover:text-primary/30 transition-colors">
                            <Star className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-gray-400 mb-2 font-display">Seu Próximo Sucesso</h3>
                        <p className="text-sm text-gray-400 mb-6">Estamos prontos para transformar sua operação e colocar seu depoimento aqui.</p>
                        <div className="h-2 w-32 bg-gray-100 rounded-full mx-auto" />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary-dark mb-2">90%</div>
                        <p className="text-gray-700 font-medium">Aproveitamento</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary-dark mb-2">100%</div>
                        <p className="text-gray-700 font-medium">Follow-up</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary-dark mb-2">100%</div>
                        <p className="text-gray-700 font-medium">Qualificação</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#planos"
                        title="Ver planos e preços e começar agora"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-[transform,background-color,box-shadow] duration-300 shadow-lg"
                    >
                        Junte-se a eles
                        <Star className="w-5 h-5" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
