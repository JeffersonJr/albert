import { useState, useEffect } from 'react';
import { Zap, Shield, Eye, Lock, Database, User, Mail, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PoliticaPrivacidade = () => {
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
                            <Shield className="w-4 h-4" />
                            Política de Privacidade
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-dark leading-tight">
                            Sua privacidade é nossa <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">prioridade</span>
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
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">1. Introdução</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Na Albert IA, estamos comprometidos em proteger sua privacidade e garantir a segurança 
                                de seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, 
                                compartilhamos e protegemos suas informações quando você utiliza nossos serviços, 
                                em conformidade com a Lei Geral de Proteção de Dados (LGPD) e outras legislações aplicáveis.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">2. Dados que Coletamos</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[#666666]">
                                            <strong>Dados Pessoais:</strong> Nome, email, telefone, CPF/CNPJ, endereço e outras informações 
                                            de identificação necessárias para criar e gerenciar sua conta.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Database className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[#666666]">
                                            <strong>Dados de Uso:</strong> Informações sobre como você utiliza nossos serviços, 
                                            incluindo logs de acesso, preferências e configurações.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[#666666]">
                                            <strong>Dados de Comunicação:</strong> Conteúdo de conversas com nossa IA, 
                                            mensagens de suporte e outras comunicações.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[#666666]">
                                            <strong>Dados de Pagamento:</strong> Informações de cartão de crédito e outros 
                                            dados financeiros necessários para processar pagamentos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">3. Como Usamos Seus Dados</h2>
                            <div className="space-y-4 mb-8">
                                <p className="text-[#666666]">
                                    <strong>Para fornecer nossos serviços:</strong> Utilizamos seus dados para criar e manter sua conta, 
                                    processar pagamentos e fornecer suporte técnico.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Para melhorar nossos serviços:</strong> Analisamos o uso para identificar tendências, 
                                    otimizar funcionalidades e desenvolver novos recursos.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Para comunicação:</strong> Enviamos atualizações sobre o serviço, 
                                    notificações importantes e materiais de marketing (com sua autorização).
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Para segurança:</strong> Monitoramos atividades suspeitas e protegemos 
                                    nossos serviços contra fraudes e abusos.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">4. Compartilhamento de Dados</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto nas seguintes situações:
                            </p>
                            <div className="space-y-4 mb-8">
                                <p className="text-[#666666]">
                                    <strong>Com seu consentimento:</strong> Quando você nos autoriza explicitamente.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Para processamento de pagamentos:</strong> Com provedores de pagamento 
                                    para processar transações de forma segura.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Por exigência legal:</strong> Quando solicitado por autoridades governamentais 
                                    ou para cumprir obrigações legais.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Parceiros de negócios:</strong> Com empresas que nos ajudam a fornecer 
                                    nossos serviços, sempre com proteção adequada dos dados.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">5. Segurança dos Dados</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Implementamos medidas robustas de segurança para proteger seus dados:
                            </p>
                            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-3">
                                        <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-[#666666] font-medium">Criptografia</p>
                                            <p className="text-[#666666] text-sm">
                                                Dados criptografados em trânsito e armazenamento
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-[#666666] font-medium">Firewall</p>
                                            <p className="text-[#666666] text-sm">
                                                Proteção contra acessos não autorizados
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Database className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-[#666666] font-medium">Backups</p>
                                            <p className="text-[#666666] text-sm">
                                                Backups automáticos e criptografados
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Eye className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-[#666666] font-medium">Monitoramento</p>
                                            <p className="text-[#666666] text-sm">
                                                Monitoramento 24/7 de atividades suspeitas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">6. Seus Direitos (LGPD)</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Conforme a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
                            </p>
                            <div className="space-y-4 mb-8">
                                <p className="text-[#666666]">
                                    <strong>Confirmar:</strong> Solicitar confirmação sobre o tratamento de seus dados.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Acessar:</strong> Acessar seus dados pessoais que tratamos.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Corrigir:</strong> Solicitar correção de dados incompletos ou incorretos.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Excluir:</strong> Solicitar exclusão de seus dados pessoais.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Portabilidade:</strong> Transferir seus dados para outro fornecedor.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Informação:</strong> Saber com quem compartilhamos seus dados.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Opor-se:</strong> Não consentir com o tratamento de seus dados.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">7. Cookies e Tecnologias Similares</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Utilizamos cookies e tecnologias similares para melhorar sua experiência:
                            </p>
                            <div className="space-y-4 mb-8">
                                <p className="text-[#666666]">
                                    <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Cookies de Desempenho:</strong> Coletam informações sobre como você usa nosso site.
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Cookies de Marketing:</strong> Usados para personalizar anúncios (com seu consentimento).
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">8. Retenção de Dados</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades 
                                para as quais foram coletados, ou conforme exigido por lei. Após esse período, 
                                seus dados são excluídos ou anonimizados de forma segura.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">9. Crianças e Adolescentes</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos 
                                intencionalmente informações de crianças. Se descobrirmos que coletamos 
                                dados de uma criança, tomaremos medidas para removê-los imediatamente.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">10. Transferências Internacionais</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Seus dados são armazenados e processados no Brasil. Não realizamos transferências 
                                internacionais de dados pessoais, exceto quando necessário para fornecer 
                                nossos serviços e sempre com proteção adequada.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">11. Alterações nesta Política</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Podemos atualizar esta política periodicamente para refletir mudanças em nossas 
                                práticas ou requisitos legais. Notificaremos você sobre alterações significativas 
                                através de nosso site ou por email.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">12. Contato</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Para exercer seus direitos ou tirar dúvidas sobre esta política:
                            </p>
                            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                                <p className="text-[#666666] mb-2">
                                    <strong>Email:</strong> privacidade@albertia.com.br
                                </p>
                                <p className="text-[#666666] mb-2">
                                    <strong>WhatsApp:</strong> (13) 99759-1781
                                </p>
                                <p className="text-[#666666] mb-2">
                                    <strong>Encarregado:</strong> DPO (Data Protection Officer)
                                </p>
                                <p className="text-[#666666]">
                                    <strong>Endereço:</strong> São Paulo, SP, Brasil
                                </p>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                                <div className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-green-800 font-medium mb-2">
                                            Nosso Compromisso
                                        </p>
                                        <p className="text-green-700 text-sm">
                                            Estamos comprometidos em proteger sua privacidade e garantir a 
                                            segurança de seus dados. Esta política reflete nosso compromisso 
                                            com a transparência e conformidade com a LGPD.
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
                        Precisa exercer seus direitos?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Nossa equipe de proteção de dados está pronta para ajudar você a exercer seus direitos
                    </p>
                    <a
                        href="https://wa.me/5513997591781?text=Ol%C3%A1,%20preciso%20exercer%20meus%20direitos%20LGPD"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                    >
                        <Zap className="w-5 h-5" />
                        Falar com DPO
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PoliticaPrivacidade;
