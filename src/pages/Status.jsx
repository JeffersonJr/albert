import { useState, useEffect } from 'react';
import { Zap, CheckCircle, AlertCircle, Clock, Activity, Server, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';

const Status = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            name: 'API Albert IA',
            status: 'operational',
            uptime: '99.9%',
            responseTime: '< 200ms',
            lastIncident: null,
            description: 'API principal para atendimento e qualificação de leads'
        },
        {
            name: 'Dashboard Analytics',
            status: 'operational',
            uptime: '99.8%',
            responseTime: '< 300ms',
            lastIncident: null,
            description: 'Painel de controle e métricas em tempo real'
        },
        {
            name: 'Integração WhatsApp',
            status: 'operational',
            uptime: '99.7%',
            responseTime: '< 500ms',
            lastIncident: null,
            description: 'Conexão com WhatsApp Business API'
        },
        {
            name: 'CRM Integration',
            status: 'operational',
            uptime: '99.6%',
            responseTime: '< 400ms',
            lastIncident: null,
            description: 'Integração com CRMs de terceiros'
        },
        {
            name: 'Database',
            status: 'operational',
            uptime: '99.9%',
            responseTime: '< 100ms',
            lastIncident: null,
            description: 'Banco de dados principal e backups'
        },
        {
            name: 'Email Service',
            status: 'operational',
            uptime: '99.5%',
            responseTime: '< 1s',
            lastIncident: null,
            description: 'Envio de notificações e comunicados'
        }
    ];

    const incidents = [
        {
            id: 1,
            date: '2024-01-15 14:30',
            service: 'API Albert IA',
            severity: 'minor',
            status: 'resolved',
            duration: '5 min',
            description: 'Lentidão temporária na API devido a alta demanda',
            resolution: 'Escalonamento automático de recursos'
        },
        {
            id: 2,
            date: '2024-01-10 09:15',
            service: 'WhatsApp Integration',
            severity: 'minor',
            status: 'resolved',
            duration: '12 min',
            description: 'Falha na conexão com WhatsApp API',
            resolution: 'Reinicialização do serviço e ajuste de configurações'
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'operational':
                return <CheckCircle className="w-5 h-5 text-green-500" />;
            case 'degraded':
                return <AlertCircle className="w-5 h-5 text-yellow-500" />;
            case 'down':
                return <AlertCircle className="w-5 h-5 text-red-500" />;
            default:
                return <Clock className="w-5 h-5 text-gray-500" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'operational':
                return 'bg-green-50 text-green-700 border-green-200';
            case 'degraded':
                return 'bg-yellow-50 text-yellow-700 border-yellow-200';
            case 'down':
                return 'bg-red-50 text-red-700 border-red-200';
            default:
                return 'bg-gray-50 text-gray-700 border-gray-200';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'operational':
                return 'Operacional';
            case 'degraded':
                return 'Degradado';
            case 'down':
                return 'Indisponível';
            default:
                return 'Verificando';
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            <Activity className="w-4 h-4" />
                            Status do Sistema
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-dark leading-tight">
                            Monitoramento <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">24/7</span> dos nossos serviços
                        </h1>
                        
                        <p className="text-xl text-[#666666] mb-12 leading-relaxed">
                            Transparência total sobre a disponibilidade e performance de todos os sistemas Albert IA
                        </p>
                        
                        {/* Overall Status */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <h3 className="text-lg font-semibold text-primary-dark">
                                        Todos os Sistemas Operacionais
                                    </h3>
                                </div>
                                <span className="text-sm text-[#666666]">
                                    Última verificação: {new Date().toLocaleString('pt-BR')}
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-green-600">99.8%</div>
                                    <p className="text-sm text-[#666666]">Uptime Médio</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary-dark">&lt;250ms</div>
                                    <p className="text-sm text-[#666666]">Tempo de Resposta</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-accent">99.9%</div>
                                    <div className="text-sm text-[#666666]">Disponibilidade</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Status */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-primary-dark">
                            Status dos Serviços
                        </h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl p-6 border ${getStatusColor(service.status)} transition-all duration-300 hover:shadow-lg`}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <Server className="w-5 h-5 text-primary" />
                                            <h3 className="font-semibold text-primary-dark">
                                                {service.name}
                                            </h3>
                                        </div>
                                        {getStatusIcon(service.status)}
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-[#666666]">Status:</span>
                                            <span className={`text-sm font-medium ${getStatusColor(service.status).split(' ')[0]}`}>
                                                {getStatusText(service.status)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-[#666666]">Uptime:</span>
                                            <span className="text-sm font-medium text-primary-dark">
                                                {service.uptime}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-[#666666]">Tempo Resposta:</span>
                                            <span className="text-sm font-medium text-primary-dark">
                                                {service.responseTime}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-[#666666] mt-4">
                                        {service.description}
                                    </p>
                                    
                                    {service.lastIncident && (
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <div className="flex items-center gap-2 text-sm">
                                                <AlertCircle className="w-4 h-4 text-yellow-500" />
                                                <span className="text-yellow-700">
                                                    Último incidente: {service.lastIncident}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Incidents */}
            <section className="py-20 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-primary-dark">
                            Incidentes Recentes
                        </h2>
                        
                        <div className="space-y-4">
                            {incidents.map((incident) => (
                                <div
                                    key={incident.id}
                                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <AlertCircle className={`w-5 h-5 ${
                                                    incident.severity === 'minor' 
                                                        ? 'text-yellow-500' 
                                                        : 'text-red-500'
                                                }`} />
                                                <h3 className="font-semibold text-primary-dark">
                                                    {incident.service}
                                                </h3>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    incident.severity === 'minor'
                                                        ? 'bg-yellow-100 text-yellow-700'
                                                        : 'bg-red-100 text-red-700'
                                                }`}>
                                                    {incident.severity === 'minor' ? 'Menor' : 'Crítico'}
                                                </span>
                                            </div>
                                            <div className="text-sm text-[#666666]">
                                                {incident.date}
                                            </div>
                                        </div>
                                        <div className="text-sm text-green-600 font-medium">
                                            ✅ Resolvido em {incident.duration}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-[#666666] mb-2">
                                            <strong>Descrição:</strong> {incident.description}
                                        </p>
                                        <p className="text-[#666666]">
                                            <strong>Resolução:</strong> {incident.resolution}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {incidents.length === 0 && (
                            <div className="text-center py-12">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                                    Sem Incidentes Recentes
                                </h3>
                                <p className="text-[#666666]">
                                    Todos os sistemas estão operando normalmente sem interrupções.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* SLA Information */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-primary-dark">
                            Nosso SLA (Acordo de Nível de Serviço)
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold mb-6 text-primary-dark">
                                    Disponibilidade
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-[#666666]">99.9% de uptime mensal garantido</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-[#666666]">Manutenção programada sem impacto</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-[#666666]">Monitoramento 24/7</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-bold mb-6 text-primary-dark">
                                    Performance
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-[#666666]">Tempo de resposta &lt; 250ms</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-[#666666]">Taxa de erro &lt; 0.1%</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-[#666666]">Backups automáticos diários</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-primary/20">
                            <div className="text-center">
                                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-primary-dark mb-4">
                                    Compromisso com a Qualidade
                                </h3>
                                <p className="text-[#666666] max-w-2xl mx-auto">
                                    Nosso compromisso é fornecer a melhor experiência possível para nossos clientes. 
                                    Monitoramos continuamente nossos sistemas e mantemos uma equipe de especialistas 
                                    pronta para responder a qualquer incidente.
                                </p>
                                <div className="mt-6 flex justify-center gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-dark">24/7</div>
                                        <p className="text-sm text-[#666666]">Suporte Técnico</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-dark">&lt;1h</div>
                                        <p className="text-sm text-[#666666]">Tempo Resposta</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-dark">99.9%</div>
                                        <p className="text-sm text-[#666666]">Satisfação</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Status;
