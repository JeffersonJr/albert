import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            text: 'Antes do Albert, perdíamos leads por falta de resposta rápida. Hoje, 100% são atendidos em segundos e já chegam qualificados.',
            name: 'Ricardo Silva',
            role: 'Diretor Comercial - Imobiliária Rio',
            rating: 5,
            company: 'Imobiliária Rio',
            avatar: '/img/avatar-1.jpg',
            featured: true,
        },
        {
            text: 'O agendamento automático de visitas foi um divisor de águas. O corretor só abre a agenda e sai para vender.',
            name: 'Mariana Costa',
            role: 'CEO - Elite Properties',
            rating: 5,
            company: 'Elite Properties',
            avatar: '/img/avatar-2.jpg',
            featured: false,
        },
        {
            text: 'A integração com nosso CRM foi instantânea. Não tivemos que mudar o processo, apenas instalamos e escalamos.',
            name: 'João Pedro',
            role: 'Gerente de Operações - MyHouse',
            rating: 5,
            company: 'MyHouse',
            avatar: '/img/avatar-3.jpg',
            featured: false,
        },
    ];

    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="py-20 bg-gradient-to-br from-[#F8FAFA] to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                        <Star className="w-4 h-4 fill-current" />
                        Prova Social
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                        Histórias de sucesso reais
                    </h2>
                    <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                        Veja como o Albert está transformando imobiliárias em todo o Brasil
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`relative group ${testimonial.featured 
                                ? 'bg-gradient-to-br from-primary to-primary-dark text-white scale-105 shadow-2xl' 
                                : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'
                            } rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2`}
                        >
                            {/* Quote Icon */}
                            <div className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center ${
                                testimonial.featured 
                                    ? 'bg-white/20' 
                                    : 'bg-primary/10'
                            }`}>
                                <Quote className={`w-6 h-6 ${
                                    testimonial.featured ? 'text-white' : 'text-primary'
                                }`} />
                            </div>

                            {/* Content */}
                            <div className="mb-6">
                                <StarRating rating={testimonial.rating} />
                            </div>

                            <blockquote className="text-lg leading-relaxed mb-8 italic">
                                "{testimonial.text}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className={`font-bold text-lg ${
                                        testimonial.featured ? 'text-white' : 'text-primary-dark'
                                    }`}>
                                        {testimonial.name}
                                    </h4>
                                    <p className={`text-sm ${
                                        testimonial.featured ? 'text-white/80' : 'text-[#666666]'
                                    }`}>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>

                            {/* Company Badge */}
                            {testimonial.featured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold">
                                    CLIENTE DESTAQUE
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary-dark mb-2">500+</div>
                        <p className="text-[#666666] font-medium">Imobiliárias Atendidas</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary-dark mb-2">98%</div>
                        <p className="text-[#666666] font-medium">Taxa de Satisfação</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary-dark mb-2">3x</div>
                        <p className="text-[#666666] font-medium">Aumento em Conversões</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#planos"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg"
                    >
                        Junte-se a eles
                        <Star className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
