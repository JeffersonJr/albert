import { XCircle, CheckCircle, Clock, Users, Zap, Shield } from 'lucide-react';

const Comparison = () => {
    return (
        <section id="comparativo" className="py-20 bg-gradient-to-br from-[#F8FAFA] to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4" />
                        Comparativo Direto
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                        Albert vs Atendimento Tradicional
                    </h2>
                    <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                        Descubra por que as imobiliárias que mais crescem estão migrando para a automação de elite
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Atendimento Tradicional */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full flex items-center justify-center">
                            <XCircle className="text-red-500 w-8 h-8" />
                        </div>
                        
                        <div className="mb-6 relative z-10">
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">Atendimento Humano</h3>
                            <p className="text-[#666666]">O modelo tradicional que está limitando seu crescimento</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Clock className="text-red-600 w-4 h-4" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Resposta lenta</p>
                                    <p className="text-sm text-[#666666]">Média de 45 minutos para primeiro contato</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <XCircle className="text-red-600 w-4 h-4" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Horário limitado</p>
                                    <p className="text-sm text-[#666666]">Indisponível após 18h, fins de semana e feriados</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Users className="text-red-600 w-4 h-4" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Custo elevado</p>
                                    <p className="text-sm text-[#666666]">Salário + encargos + treinamento constante</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                            <p className="text-sm text-red-800 font-medium">
                                ⚠️ Perda de 60% dos leads por demora no atendimento
                            </p>
                        </div>
                    </div>

                    {/* Albert IA */}
                    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full flex items-center justify-center">
                            <CheckCircle className="text-white w-8 h-8" />
                        </div>
                        
                        <div className="mb-6 relative z-10">
                            <h3 className="text-2xl font-bold mb-2 text-white">Albert IA</h3>
                            <p className="text-white/90">O futuro do atendimento imobiliário</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Zap className="text-white w-4 h-4" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Resposta instantânea</p>
                                    <p className="text-sm text-white/80">3 segundos para qualificar qualquer lead</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Clock className="text-white w-4 h-4" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Disponível 24/7</p>
                                    <p className="text-sm text-white/80">Atendimento em madrugadas, domingos e feriados</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Shield className="text-white w-4 h-4" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Custo previsível</p>
                                    <p className="text-sm text-white/80">Investimento fixo sem surpresas ou encargos</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4">
                            <p className="text-sm text-white font-medium">
                                ✅ 100% dos leads atendidos em segundos
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#planos"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg"
                    >
                        Ver Planos e Preços
                        <Zap className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
