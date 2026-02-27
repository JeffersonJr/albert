import { XCircle, CheckCircle } from 'lucide-react';

const Comparison = () => {
    return (
        <section id="comparativo" className="py-24 bg-[#F0F7F6]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-5 text-primary-dark">Albert vs Equipe Humana</h2>
                    <p className="text-[#666] max-w-[600px] mx-auto">
                        Por que as imobiliárias que mais crescem estão migrando para a automação de elite?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Human Team */}
                    <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-soft border-l-4 border-l-[#f44336] hover:-translate-y-2 hover:shadow-strong transition-all duration-400">
                        <h3 className="text-2xl font-bold mb-6 text-[#f44336]">Atendimento Humano</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 opacity-70">
                                <XCircle className="text-[#f44336] w-5" />
                                <span>Resposta média: 45 minutos</span>
                            </li>
                            <li className="flex items-center gap-3 opacity-70">
                                <XCircle className="text-[#f44336] w-5" />
                                <span>Indisponível após as 18h e fds</span>
                            </li>
                            <li className="flex items-center gap-3 opacity-70">
                                <XCircle className="text-[#f44336] w-5" />
                                <span>Custo fixo alto com encargos</span>
                            </li>
                        </ul>
                    </div>

                    {/* Albert IA */}
                    <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-soft border-l-4 border-l-accent hover:-translate-y-2 hover:shadow-strong transition-all duration-400">
                        <h3 className="text-2xl font-bold mb-6 text-primary">Albert (Sua Nova IA)</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <CheckCircle className="text-accent w-5" />
                                <span className="font-semibold">Resposta Instantânea (3 seg)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="text-accent w-5" />
                                <span className="font-semibold">Ativo 24/7 (Madrugada e Feriados)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="text-accent w-5" />
                                <span className="font-semibold">Atendimento Humanizado e Natural</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
