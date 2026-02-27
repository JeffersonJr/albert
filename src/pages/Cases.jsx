import { useState, useEffect } from 'react';
import { Zap, TrendingUp, Users, Calendar, Star, Quote, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const Cases = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('todos');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { id: 'todos', name: 'Todos' },
        { id: 'venda', name: 'Venda' },
        { id: 'locacao', name: 'Locação' },
        { id: 'lancamento', name: 'Lançamento' }
    ];

    const cases = [
        {
            id: 1,
            title: 'Imobiliária Rio',
            category: 'venda',
            client: 'Ricardo Silva',
            role: 'Diretor Comercial',
            challenge: 'Perdia 60% dos leads por demora no atendimento',
            solution: 'Implementação do Albert IA com resposta em 3 segundos',
            results: [
                '300% de aumento em conversões',
                'Redução de 50% nos custos operacionais',
                'Atendimento 24/7 sem falhas'
            ],
            testimonial: 'Antes do Albert, perdíamos leads por falta de resposta rápida. Hoje, 100% são atendidos em segundos e já chegam qualificados.',
            metrics: {
                leads: '+300%',
                conversion: '+250%',
                time: '-95%'
            },
            featured: true
        },
        {
            id: 2,
            title: 'Elite Properties',
            category: 'locacao',
            client: 'Mariana Costa',
            role: 'CEO',
            challenge: 'Processo de agendamento manual e ineficiente',
            solution: 'Automação completa do funil com agendamento inteligente',
            results: [
                'Agendamento automático de visitas',
                'Qualificação 100% dos leads',
                'Integração total com CRM'
            ],
            testimonial: 'O agendamento automático de visitas foi um divisor de águas. O corretor só abre a agenda e sai para vender.',
            metrics: {
                leads: '+200%',
                conversion: '+180%',
                time: '-80%'
            }
        },
        {
            id: 3,
            title: 'MyHouse',
            category: 'venda',
            client: 'João Pedro',
            role: 'Gerente de Operações',
            challenge: 'Dificuldade na integração entre sistemas',
            solution: 'API personalizada e integração multiplataforma',
            results: [
                'Integração instantânea com CRM',
                'Sincronização em tempo real',
                'Zero retrabalho manual'
            ],
            testimonial: 'A integração com nosso CRM foi instantânea. Não tivemos que mudar o processo, apenas instalamos e escalamos.',
            metrics: {
                leads: '+150%',
                conversion: '+120%',
                time: '-70%'
            }
        },
        {
            id: 4,
            title: 'Chatuba Incorporações',
            category: 'lancamento',
            client: 'Lívio Motta',
            role: 'Diretor',
            challenge: 'Alto volume de leads em lançamentos',
            solution: 'Escala massiva com personalização',
            results: [
                '10k leads processados por mês',
                'Segmentação inteligente',
                'Relatórios avançados'
            ],
            testimonial: 'Decidimos escolher a Albert pelo custo benefício e porque permitiu otimizar e estruturar processos com grande produtividade.',
            metrics: {
                leads: '+500%',
                conversion: '+300%',
                time: '-90%'
            }
        },
        {
            id: 5,
            title: 'UNASP',
            category: 'locacao',
            client: 'Donizeti Prado',
            role: 'Gerente',
            challenge: 'Necessidade de análise preditiva',
            solution: 'Analytics avançado e machine learning',
            results: [
                'Previsão de conversão',
                'Otimização de recursos',
                'ROI mensurável'
            ],
            testimonial: 'Para decisões assertivas, é preciso segurança. O sistema Albert nos dá clareza do cenário atual e previsibilidade.',
            metrics: {
                leads: '+180%',
                conversion: '+160%',
                time: '-75%'
            }
        },
        {
            id: 6,
            title: 'ATEXP',
            category: 'venda',
            client: 'Patrick Train',
            role: 'CEO',
            challenge: 'Suporte humanizado 24/7',
            solution: 'IA com treinamento específico',
            results: [
                'Atendimento natural',
                'Resolução de dúvidas complexas',
                'Satisfação 99%'
            ],
            testimonial: 'O Sistema é Excelente! E o time muito comprometido com o sucesso do cliente.',
            metrics: {
                leads: '+220%',
                conversion: '+190%',
                time: '-85%'
            }
        }
    ];

    const filteredCases = selectedCategory === 'todos' 
        ? cases 
        : cases.filter(case_ => case_.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                            <Star className="w-4 h-4" />
                            Cases de Sucesso
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-dark leading-tight">
                            Histórias reais de <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">transformação digital</span>
                        </h1>
                        
                        <p className="text-xl text-[#666666] mb-12 leading-relaxed">
                            Conheça como imobiliárias como a sua estão aumentando vendas e otimizando processos 
                            com a inteligência artificial do Albert IA
                        </p>
                        
                        <div className="flex flex-wrap gap-4 justify-center mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        selectedCategory === category.id
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'bg-white border border-gray-300 text-[#666666] hover:border-primary hover:text-primary'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Overview */}
            <section className="py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-primary-dark mb-2">500+</div>
                            <p className="text-[#666666] font-medium">Clientes Atendidos</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-primary-dark mb-2">3x</div>
                            <p className="text-[#666666] font-medium">Aumento Médio em Vendas</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-primary-dark mb-2">98%</div>
                            <p className="text-[#666666] font-medium">Taxa de Satisfação</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-primary-dark mb-2">24/7</div>
                            <p className="text-[#666666] font-medium">Atendimento Contínuo</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cases Grid */}
            <section className="py-20 bg-gradient-to-br from-white to-[#F8FAFA]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCases.map((case_) => (
                            <div
                                key={case_.id}
                                className={`bg-white rounded-3xl p-8 shadow-lg border ${
                                    case_.featured 
                                        ? 'border-accent shadow-2xl scale-105' 
                                        : 'border-gray-100 hover:shadow-xl'
                                } transition-all duration-300 hover:-translate-y-2`}
                            >
                                {case_.featured && (
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                                        <Star className="w-4 h-4 fill-current" />
                                        Destaque
                                    </div>
                                )}
                                
                                <h3 className="text-xl font-bold mb-3 text-primary-dark">{case_.title}</h3>
                                
                                <div className="mb-4">
                                    <p className="text-sm text-[#666666] mb-1">{case_.client}</p>
                                    <p className="text-sm text-[#666666]">{case_.role}</p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-primary-dark mb-2">Desafio</h4>
                                    <p className="text-sm text-[#666666] mb-4">{case_.challenge}</p>
                                    
                                    <h4 className="font-semibold text-primary-dark mb-2">Solução</h4>
                                    <p className="text-sm text-[#666666] mb-4">{case_.solution}</p>
                                    
                                    <h4 className="font-semibold text-primary-dark mb-2">Resultados</h4>
                                    <ul className="space-y-1">
                                        {case_.results.map((result, index) => (
                                            <li key={index} className="text-sm text-[#666666] flex items-start gap-2">
                                                <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <blockquote className="border-t border-gray-100 pt-4">
                                    <Quote className="w-8 h-8 text-primary/20 mb-3" />
                                    <p className="text-sm text-[#666666] italic leading-relaxed">
                                        "{case_.testimonial}"
                                    </p>
                                </blockquote>

                                <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-100">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-accent">{case_.metrics.leads}</div>
                                        <p className="text-xs text-[#666666]">Leads</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-primary">{case_.metrics.conversion}</div>
                                        <p className="text-xs text-[#666666]">Conversão</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-primary">{case_.metrics.time}</div>
                                        <p className="text-xs text-[#666666]">Tempo</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                        Pronto para escrever sua própria história de sucesso?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Junte-se a centenas de imobiliárias que já transformaram seus resultados com o Albert IA
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5513997591781?text=Ol%C3%A1,%20quero%20ser%20o%20pr%C3%B3ximo%20case%20de%20sucesso"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                        >
                            <Zap className="w-5 h-5" />
                            Ser Próximo Case
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#planos"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                        >
                            Ver Planos
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cases;
