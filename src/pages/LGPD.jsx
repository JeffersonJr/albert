import { useState, useEffect } from 'react';
import { Zap, Shield, CheckCircle, AlertCircle, FileText, Users, Database, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';

const LGPD = () => {
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                            <Shield className="w-4 h-4" />
                            LGPD - Lei Geral de Proteção de Dados
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-dark leading-tight">
                            Conformidade total com a <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">LGPD</span>
                        </h1>
                        
                        <p className="text-xl text-[#666666] mb-12 leading-relaxed">
                            Estamos em total conformidade com a Lei 13.709/2018 e protegemos seus dados pessoais
                        </p>
                    </div>
                </div>
            </section>

            {/* Compliance Banner */}
            <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10 border-y border-accent/20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <CheckCircle className="w-8 h-8 text-accent" />
                            <h2 className="text-2xl font-bold text-primary-dark">
                                Albert IA 100% Conforme à LGPD
                            </h2>
                        </div>
                        <p className="text-[#666666] max-w-2xl mx-auto">
                            Nossa plataforma foi projetada desde o início para respeitar todas as exigências 
                            da Lei Geral de Proteção de Dados, garantindo a segurança e privacidade das suas informações.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">O que é a LGPD?</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                A Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018, estabelece regras 
                                claras sobre como empresas devem coletar, armazenar, usar e compartilhar dados pessoais 
                                no Brasil, garantindo transparência e segurança para os cidadãos.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Nossa Conformidade</h2>
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h3 className="text-lg font-semibold text-primary-dark mb-4">Princípios Fundamentais</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-[#666666] font-medium">Transparência</p>
                                                <p className="text-[#666666] text-sm">
                                                    Informações claras sobre tratamento de dados
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-[#666666] font-medium">Finalidade</p>
                                                <p className="text-[#666666] text-sm">
                                                    Uso específico e legítimo de dados
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-[#666666] font-medium">Minimização</p>
                                                <p className="text-[#666666] text-sm">
                                                    Coleta apenas do necessário
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-[#666666] font-medium">Segurança</p>
                                                <p className="text-[#666666] text-sm">
                                                    Proteção robusta contra violações
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h3 className="text-lg font-semibold text-primary-dark mb-4">Direitos dos Titulares</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-[#666666] font-medium">Confirmação</p>
                                                <p className="text-[#666666] text-sm">
                                                    Direito de saber sobre o tratamento
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-[#666666] font-medium">Acesso</p>
                                                <p className="text-[#666666] text-sm">
                                                    Visualizar seus dados pessoais
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-[#666666] font-medium">Correção</p>
                                                <p className="text-[#666666] text-sm">
                                                    Atualizar dados incorretos
                                                </p>
                                            </div>
                </li>
                                        <li className="flex items-start gap-3">
                                            <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-[#666666] font-medium">Exclusão</p>
                                                <p className="text-[#666666] text-sm">
                                                    Remover dados quando solicitado
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Como Protegemos Seus Dados</h2>
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                    <Lock className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-lg font-semibold text-primary-dark mb-2">Criptografia</h3>
                                    <p className="text-[#666666]">
                                        Dados criptografados em trânsito e armazenamento com AES-256
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                    <Database className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-lg font-semibold text-primary-dark mb-2">Armazenamento Seguro</h3>
                                    <p className="text-[#666666]">
                                        Servidores no Brasil com backups automáticos e redundância
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                    <Shield className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-lg font-semibold text-primary-dark mb-2">Controle de Acesso</h3>
                                    <p className="text-[#666666]">
                                        Autenticação multifator e controle rigoroso de permissões
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Base Legal para Tratamento</h2>
                            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-blue-800 mb-4">Nossas Bases Legais:</h3>
                                <ul className="space-y-2 text-[#666666]">
                                    <li><strong>Consentimento:</strong> Autorização explícita do titular</li>
                                    <li><strong>Execução de Contrato:</strong> Necessário para fornecer nossos serviços</li>
                                    <li><strong>Obrigação Legal:</strong> Cumprimento de legislações aplicáveis</li>
                                    <li><strong>Legítimo Interesse:</strong> Interesses comerciais legítimos</li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">DPO - Encarregado de Proteção de Dados</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Nomeamos um Encarregado de Proteção de Dados (DPO) para ser nosso ponto de contato 
                                para assuntos relacionados à LGPD e privacidade.
                            </p>
                            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-primary-dark mb-4">Contato do DPO:</h3>
                                <div className="space-y-2 text-[#666666]">
                                    <p><strong>Email:</strong> dpo@albertia.com.br</p>
                                    <p><strong>WhatsApp:</strong> (13) 99759-1781</p>
                                    <p><strong>Telefone:</strong> (13) 99759-1781</p>
                                    <p><strong>Endereço:</strong> São Paulo, SP, Brasil</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Relatório de Impacto</h2>
                                <p className="text-[#666666] mb-8 leading-relaxed">
                                    Realizamos e mantemos atualizado um Relatório de Impacto à Proteção de Dados (RIPD) 
                                    que documenta nossas atividades de tratamento de dados e avalia os riscos à privacidade.
                                </p>
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-green-800 mb-4">Principais Pontos do RIPD:</h3>
                                <ul className="space-y-2 text-[#666666]">
                                    <li>✅ Mapeamento completo de dados pessoais</li>
                                    <li>✅ Análise de riscos e medidas de mitigação</li>
                                    <li>✅ Plano de resposta a incidentes</li>
                                    <li>✅ Treinamento da equipe em LGPD</li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Canais de Solicitação</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Você pode exercer seus direitos LGPD através de múltiplos canais:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                    <FileText className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-lg font-semibold text-primary-dark mb-2">Portal do Cliente</h3>
                                    <p className="text-[#666666]">
                                        Área exclusiva para gerenciar seus dados e exercer seus direitos
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                    <FileText className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-lg font-semibold text-primary-dark mb-2">Email</h3>
                                    <p className="text-[#666666]">
                                        Envie sua solicitação para dpo@albertia.com.br
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                    <FileText className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-lg font-semibold text-primary-dark mb-2">WhatsApp</h3>
                                    <p className="text-[#666666]">
                                        Fale diretamente com nosso DPO: (13) 99759-1781
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                    <FileText className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-lg font-semibold text-primary-dark mb-2">Telefone</h3>
                                    <p className="text-[#666666]">
                                        Ligue para (13) 99759-1781 durante o horário comercial
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Prazos de Resposta</h2>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-yellow-800 font-medium mb-2">Prazos Estabelecidos pela LGPD:</p>
                                        <ul className="space-y-1 text-[#666666] text-sm">
                                            <li><strong>15 dias:</strong> Para responder a solicitações</li>
                                            <li><strong>Imediato:</strong> Para fornecer confirmação</li>
                                            <li><strong>15 dias:</strong> Para atender solicitações</li>
                                            <li><strong>Imediato:</strong> Para informar sobre compartilhamento</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Treinamento e Conscientização</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Nossa equipe recebe treinamento contínuo sobre LGPD e boas práticas de proteção 
                                de dados. Todos os colaboradores que lidam com dados pessoais são capacitados a:
                            </p>
                            <ul className="space-y-2 text-[#666666] mb-8">
                                <li>• Identificar dados pessoais sensíveis</li>
                                <li>• Aplicar medidas de segurança adequadas</li>
                                <li>• Responder a solicitações de titulares</li>
                                <li>• Reportar incidentes de segurança</li>
                                <li>• Manter documentação atualizada</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Monitoramento e Auditoria</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Implementamos um programa contínuo de monitoramento e auditoria para garantir 
                                conformidade contínua com a LGPD:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                    <h3 className="text-lg font-semibold text-primary-dark mb-2">Monitoramento Interno</h3>
                                    <p className="text-[#666666]">
                                        Auditorias regulares e verificações de conformidade
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                    <h3 className="text-lg font-semibold text-primary-dark mb-2">Avaliações Externas</h3>
                                    <p className="text-[#666666]">
                                        Consultoria especializada em proteção de dados
                                    </p>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-green-800 font-medium mb-2">
                                            Nosso Compromisso LGPD
                                        </p>
                                        <p className="text-green-700 text-sm">
                                            A Albert IA está totalmente comprometida com a proteção de seus dados 
                                            e com a conformidade com a LGPD. Tratamos sua privacidade com a mesma 
                                            seriedade que tratamos nossos negócios.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Atualizações e Melhorias</h2>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                Estamos sempre buscando melhorar nossas práticas de privacidade e segurança. 
                                Esta política e nossos processos são revisados regularmente para garantir que 
                                permaneçam em conformidade com as melhores práticas e exigências legais.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                        Exerça seus direitos LGPD agora mesmo
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Nossa equipe está pronta para ajudar você a exercer todos os seus direitos 
                        garantidos pela Lei Geral de Proteção de Dados
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5513997591781?text=Ol%C3%A1,%20quero%20exercer%20meus%20direitos%20LGPD"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                        >
                            <Zap className="w-5 h-5" />
                            Falar com DPO
                        </a>
                        <a
                            href="mailto:dpo@albertia.com.br"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                        >
                            <FileText className="w-5 h-5" />
                            Enviar Email
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LGPD;
