import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
    const benefits = [
        'Setup em menos de 24 horas',
        'Teste gratuito por 14 dias',
        'Sem cartão de crédito necessário',
        'Cancelamento a qualquer momento'
    ];

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[60px] p-12 lg:p-20 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                                <Zap className="w-4 h-4" />
                                Última Chance
                            </div>
                            
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                                Pronto para transformar sua imobiliária hoje?
                            </h2>
                            
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Junte-se a mais de 500 imobiliárias que já aumentaram suas vendas em 3x com o Albert. 
                                Recupere seu tempo e pare de perder leads para a concorrência.
                            </p>

                            {/* Benefits */}
                            <div className="space-y-3 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-white/90">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/5513997591781?text=Ol%C3%A1,%20quero%20testar%20o%20Albert%20gr%C3%A1tis"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-accent hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <Zap className="w-5 h-5" />
                                    Começar Teste Grátis
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="#planos"
                                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30 hover:border-white/50 transition-all duration-300"
                                >
                                    Ver Planos
                                </a>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div className="grid grid-cols-2 gap-8">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-accent mb-2">500+</div>
                                <p className="text-white/90 font-medium">Imobiliárias Ativas</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-accent mb-2">3x</div>
                                <p className="text-white/90 font-medium">Aumento em Vendas</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-accent mb-2">98%</div>
                                <p className="text-white/90 font-medium">Satisfação</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-accent mb-2">24/7</div>
                                <p className="text-white/90 font-medium">Atendimento</p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-12 pt-8 border-t border-white/20 text-center">
                        <p className="text-white/70 text-sm">
                            Sem compromisso. Cancele quando quiser. Suporte dedicado durante todo o período de teste.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
