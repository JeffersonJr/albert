import { useState, useEffect } from 'react';
import { Zap, Shield, Scale, AlertCircle, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const Termos = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            <Scale className="w-4 h-4" />
                            Termos de Uso
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-dark leading-tight">
                            Termos de Uso <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Albert IA</span>
                        </h1>
                        
                        <p className="text-xl text-[#666666] mb-12 leading-relaxed">
                            Última atualização: 15 de Janeiro de 2024
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">1. Aceitação dos Termos</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Ao acessar e utilizar os serviços da Albert IA, você concorda com estes Termos de Uso. 
                                Se você não concorda com qualquer parte destes termos, não poderá utilizar nossos serviços.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">2. Descrição dos Serviços</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                A Albert IA oferece uma plataforma de inteligência artificial especializada no mercado imobiliário, 
                                incluindo atendimento automatizado de leads, qualificação, agendamento de visitas e integração 
                                com sistemas CRM.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">3. Responsabilidades do Usuário</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[#666666]">
                                            <strong>Informações Verídicas:</strong> Fornecer informações precisas e atualizadas sobre sua empresa e imóveis.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[#666666]">
                                            <strong>Uso Adequado:</strong> Utilizar a plataforma conforme as leis aplicáveis e estes termos.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[#666666]">
                                            <strong>Segurança:</strong> Manter suas credenciais de acesso seguras e não compartilhá-las.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">4. Propriedade Intelectual</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Todo o conteúdo da Albert IA, incluindo software, textos, gráficos, logos e interfaces, 
                                é protegido por direitos autorais e outras leis de propriedade intelectual. Você não pode 
                                copiar, modificar, distribuir ou criar trabalhos derivados sem nossa autorização expressa.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">5. Privacidade e Dados</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Respeitamos sua privacidade e tratamos seus dados conforme nossa Política de Privacidade 
                                e a Lei Geral de Proteção de Dados (LGPD). Ao utilizar nossos serviços, você concorda 
                                com a coleta e uso de seus dados conforme descrito em nossa política.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">6. Pagamentos e Planos</h2>
                            <div className="space-y-4 mb-8">
                                <p className="text-[#666666]">
                                    <strong>6.1 Planos e Preços:</strong> Os planos e preços estão disponíveis em nosso site e 
                                    podem ser alterados a qualquer momento com aviso prévio de 30 dias.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>6.2 Forma de Pagamento:</strong> Aceitamos pagamentos através de cartão de crédito, 
                                    boleto bancário e outros métodos especificados.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>6.3 Faturamento:</strong> A faturação é mensal e ocorre no início de cada ciclo.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>6.4 Reembolsos:</strong> Oferecemos reembolso integral nos primeiros 14 dias, 
                                    desde que o serviço não tenha sido utilizado excessivamente.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">7. Limitação de Responsabilidade</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                A Albert IA não se responsabiliza por perdas indiretas, incidentais ou consequentes, 
                                incluindo lucros cessantes, mesmo que tenhamos sido avisados sobre a possibilidade de tais danos. 
                                Nossa responsabilidade total não excederá o valor pago por você nos últimos 12 meses.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">8. Disponibilidade do Serviço</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Nosso objetivo é manter os serviços disponíveis 99.9% do tempo. No entanto, não garantimos 
                                disponibilidade ininterrupta e podemos realizar manutenções programadas ou emergenciais 
                                que afetem temporariamente o acesso.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">9. Cancelamento</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Você pode cancelar sua assinatura a qualquer momento através do painel de controle 
                                ou contatando nosso suporte. O cancelamento será efetivado ao final do ciclo de faturação atual.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">10. Alterações nos Termos</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Reservamos o direito de alterar estes termos a qualquer momento. As alterações entrarão 
                                em vigor 30 dias após a publicação em nosso site. O uso continuado dos serviços após 
                                as alterações constitui aceitação dos novos termos.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">11. Lei Aplicável</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Estes termos são regidos pelas leis do Brasil. Qualquer disputa será resolvida nos 
                                tribunais brasileiros, com foro na Comarca de São Paulo, SP.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">12. Contato</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Para dúvidas sobre estes termos, entre em contato:
                            </p>
                            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                                <p className="text-[#666666] mb-2">
                                    <strong>Email:</strong> termos@albertia.com.br
                                </p>
                                <p className="text-[#666666] mb-2">
                                    <strong>WhatsApp:</strong> (13) 99759-1781
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Endereço:</strong> São Paulo, SP, Brasil
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-blue-800 font-medium mb-2">
                                            Importante
                                        </p>
                                        <p className="text-blue-700 text-sm">
                                            Ao continuar usando nossos serviços, você confirma que leu, entendeu e concorda 
                                            com estes Termos de Uso e nossa Política de Privacidade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                        Precisa de ajuda com os termos?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Nossa equipe está disponível para esclarecer qualquer dúvida sobre nossos termos de uso
                    </p>
                    <a
                        href="https://wa.me/5513997591781?text=Ol%C3%A1,%20tenho%20d%C3%BAvidas%20sobre%20os%20termos%20de%20uso"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                    >
                        <Zap className="w-5 h-5" />
                        Falar com Especialista
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Termos;
