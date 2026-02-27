import { PieChart, Smartphone } from 'lucide-react';

const Features = () => {
    return (
        <section id="solucao" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1">
                        <img
                            src="/dashboard_preview.png"
                            alt="Painel de Controle Albert IA"
                            className="w-full rounded-2xl shadow-strong"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-6 text-primary-dark">Visibilidade Total do seu Funil</h2>
                        <p className="text-[#666] mb-8">
                            O Albert entende locação e venda, tira dúvidas do seu portfólio e processos administrativos.
                        </p>

                        <div className="grid gap-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#F8FAFA] rounded-xl flex items-center justify-center text-primary">
                                    <PieChart />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-primary-dark">IA de Última Geração</h4>
                                    <p className="text-sm opacity-70">
                                        Diferente de bots comuns, o Albert aprende com cada conversa e responde naturalmente.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#F8FAFA] rounded-xl flex items-center justify-center text-primary">
                                    <Smartphone />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-primary-dark">Integração com seu CRM</h4>
                                    <p className="text-sm opacity-70">
                                        Os dados fluem diretamente para sua ferramenta de gestão, sem retrabalho.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
