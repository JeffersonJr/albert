import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Users, Target, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const Sobre = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const values = [
        {
            icon: Target,
            title: 'Foco no Cliente',
            description: 'Cada decisão é tomada pensando em como podemos ajudar nossos clientes a vender mais e melhor. Seu sucesso é nosso sucesso.'
        },
        {
            icon: Users,
            title: 'Inovação Constante',
            description: 'Estamos sempre evoluindo nossa tecnologia com as últimas tendências em IA para oferecer as melhores soluções do mercado.'
        },
        {
            icon: Award,
            title: 'Excelência',
            description: 'Buscamos a excelência em tudo que fazemos, desde o código até o atendimento ao cliente. Qualidade é nossa prioridade.'
        },
        {
            icon: CheckCircle,
            title: 'Transparência',
            description: 'Operamos com total transparência em nossos processos, preços e resultados. Confiança é a base de nosso relacionamento.'
        }
    ];

    const stats = [
        { number: '500+', label: 'Imobiliárias Atendidas' },
        { number: '10k+', label: 'Leads Processados por Dia' },
        { number: '98%', label: 'Taxa de Satisfação' },
        { number: '3x', label: 'Aumento Médio em Vendas' }
    ];

    const team = [
        {
            name: 'Albert IA',
            role: 'Nossa Inteligência Artificial',
            description: 'O cérebro por trás da automação inteligente do atendimento imobiliário.',
            avatar: '/img/albert-avatar.png'
        },
        {
            name: 'Time de Especialistas',
            role: 'Desenvolvimento e Suporte',
            description: 'Profissionais dedicados a garantir a melhor experiência para nossos clientes.',
            avatar: '/img/team-avatar.png'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            <Zap className="w-4 h-4" />
                            Sobre Nós
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-dark leading-tight">
                            Transformando o atendimento imobiliário com <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">inteligência artificial</span>
                        </h1>
                        
                        <p className="text-xl text-[#666666] mb-12 leading-relaxed">
                            Nascemos da necessidade de resolver um dos maiores problemas do mercado imobiliário: 
                            a demora no atendimento aos leads. Hoje, somos a solução que mais de 500 imobiliárias 
                            confiam para escalar suas vendas.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/planos"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg"
                            >
                                Conhecer Nossos Planos
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista"
                                target="_blank"
                                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Falar com Especialista
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-primary-dark mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-[#666666] font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                                Nossa História
                            </h2>
                            <p className="text-xl text-[#666666] leading-relaxed">
                                A jornada que nos transformou na referência em IA para imobiliárias
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-primary-dark">O Problema</h3>
                                <p className="text-[#666666] mb-6 leading-relaxed">
                                    Identificamos que imobiliárias perdiam até 60% dos leads simplesmente por não conseguirem 
                                    responder rapidamente. O tempo médio de resposta era de 45 minutos, um período em que 
                                    a maioria dos clientes já havia contatado a concorrência.
                                </p>
                                
                                <h3 className="text-2xl font-bold mb-4 text-primary-dark">A Solução</h3>
                                <p className="text-[#666666] mb-6 leading-relaxed">
                                    Criamos o Albert IA, uma plataforma inteligente capaz de atender leads em 3 segundos, 
                                    qualificar automaticamente e agendar visitas. Uma solução que funciona 24/7 sem 
                                    necessidade de intervenção humana.
                                </p>
                                
                                <h3 className="text-2xl font-bold mb-4 text-primary-dark">O Resultado</h3>
                                <p className="text-[#666666] leading-relaxed">
                                    Hoje, nossos clientes aumentam em média 3x suas taxas de conversão, reduzem custos 
                                    operacionais e oferecem uma experiência superior aos seus clientes. 
                                </p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
                                <div className="space-y-4">
                                    <CheckCircle className="w-8 h-8 text-accent" />
                                    <h4 className="text-xl font-bold text-primary-dark">Missão</h4>
                                    <p className="text-[#666666]">
                                        Democratizar o acesso à tecnologia de ponta para todas as imobiliárias, 
                                        independentemente do seu tamanho.
                                    </p>
                                </div>
                                
                                <div className="space-y-4 pt-6">
                                    <Target className="w-8 h-8 text-primary" />
                                    <h4 className="text-xl font-bold text-primary-dark">Visão</h4>
                                    <p className="text-[#666666]">
                                        Ser a plataforma líder mundial em automação inteligente para o mercado imobiliário.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                            Nossos Valores
                        </h2>
                        <p className="text-xl text-[#666666] max-w-2xl mx-auto">
                            Os princípios que guiam cada decisão que tomamos
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-primary-dark">{value.title}</h3>
                                    <p className="text-[#666666] leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                            Quem Torna Isso Possível
                        </h2>
                        <p className="text-xl text-[#666666] max-w-2xl mx-auto">
                            As pessoas e tecnologia por trás do Albert IA
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary-dark">{member.name}</h3>
                                        <p className="text-[#666666]">{member.role}</p>
                                    </div>
                                </div>
                                <p className="text-[#666666] leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                        Pronto para fazer parte da nossa história?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Junte-se a centenas de imobiliárias que já transformaram seus negócios com o Albert IA
                    </p>
                    <a
                        href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20conhecer%20mais%20sobre%20o%20Albert%20IA"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                    >
                        <Zap className="w-5 h-5" />
                        Começar Agora
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Sobre;
