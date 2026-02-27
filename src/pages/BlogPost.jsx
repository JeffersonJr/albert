import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Zap, Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle, Bookmark } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPost = () => {
    const { postId } = useParams();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mock data - em um app real, viria de uma API
    const posts = {
        1: {
            title: 'Como a IA está revolucionando o mercado imobiliário em 2024',
            excerpt: 'Descubra as tendências que estão transformando a forma como imobiliárias atendem seus clientes e aumentam vendas.',
            author: 'Albert IA',
            authorAvatar: '/img/author-albert.jpg',
            date: '15 de Janeiro de 2024',
            readTime: '8 min',
            category: 'Inteligência Artificial',
            image: '/img/blog-ia-imobiliario.jpg',
            tags: ['IA', 'Inovação', 'Tendências'],
            content: `# Como a IA está revolucionando o mercado imobiliário em 2024

O mercado imobiliário está passando por uma transformação digital sem precedentes, e a inteligência artificial está no centro dessa mudança. Neste artigo, vamos explorar como as tecnologias de IA estão redefinindo a forma como as imobiliárias operam, atendem clientes e fecham negócios.

## O Cenário Atual do Mercado Imobiliário

O mercado imobiliário brasileiro move bilhões de reais anualmente, mas ainda enfrenta desafios significativos:

- **Alta competitividade**: Mais de 100 mil imobiliárias competindo por atenção
- **Processos manuais**: Muitas operações ainda dependem de papel e planilhas
- **Demora no atendimento**: Leads perdem interesse em minutos, não horas
- **Custos operacionais elevados**: Equipes grandes para atender volume crescente

## Como a IA Está Mudando o Jogo

### 1. Atendimento Instantâneo 24/7

A IA permite que imobiliárias atendam leads em segundos, não horas. Isso é crucial porque:

- **80% dos leads convertem no primeiro contato**
- **A probabilidade de contato cai 10x após 5 minutos**
- **Leads atendidos imediatamente têm 3x mais chance de fechar negócio**

### 2. Qualificação Automática de Leads

Sistemas inteligentes podem:
- Analisar o perfil e intenção do lead
- Fazer perguntas relevantes automaticamente
- Segmentar leads por probabilidade de conversão
- Agendar visitas sem intervenção humana

### 3. Previsão e Análise Preditiva

Ferramentas de IA modernas oferecem:
- **Previsão de preços com base em dados históricos**
- **Análise de mercado em tempo real**
- **Identificação de oportunidades de investimento**
- **Previsão de demanda por região**

## Tecnologias de IA Mais Impactantes

### Chatbots e Assistentes Virtuais

- **Atendimento natural**: Conversas que parecem humanas
- **Aprendizado contínuo**: Melhoram com cada interação
- **Integração total**: Conectam-se a CRMs e sistemas existentes

### Machine Learning para Análise

- **Análise de sentimentos**: Entendem a intenção dos clientes
- **Recomendação personalizada**: Sugerem imóveis baseados no perfil
- **Otimização de preços**: Ajustam valores dinamicamente

### Automação de Processos

- **Documentação automática**: Geração de contratos e propostas
- **Agendamento inteligente**: Otimização de visitas e reuniões
- **Follow-up automatizado**: Comunicação personalizada em escala

## Cases de Sucesso Reais

### Imobiliária Rio: +300% em Conversões

Implementou IA para atendimento e viu:
- **Tempo de resposta**: 45 minutos → 3 segundos
- **Taxa de conversão**: 15% → 45%
- **Custo por lead**: Reduzido em 60%

### Elite Properties: Escala sem Perder Qualidade

- **Atendimento 24/7**: Sem aumento de equipe
- **Qualificação 100%**: Todos os leads processados
- **Satisfação do cliente**: Aumentou para 98%

## Como Implementar IA na Sua Imobiliária

### Passo 1: Diagnóstico
- Mapear processos atuais
- Identificar gargalos
- Definir KPIs importantes

### Passo 2: Escolha da Tecnologia
- Avaliar soluções disponíveis
- Considerar integrações necessárias
- Analisar custo-benefício

### Passo 3: Implementação Gradual
- Começar com atendimento ao cliente
- Expandir para outros processos
- Medir resultados continuamente

### Passo 4: Otimização Contínua
- Analisar dados e métricas
- Ajustar parâmetros da IA
- Escalar conforme necessário

## O Futuro do Mercado Imobiliário com IA

As tendências para os próximos anos incluem:

### Realidade Aumentada
- **Tours virtuais imersivos**
- **Visualização de mobiliário em tempo real**
- **Experiências de compra remotas**

### Blockchain e Smart Contracts
- **Transações mais seguras**
- **Redução de burocracia**
- **Transparência total**

### IA Preditiva Avançada
- **Previsão de valorização de imóveis**
- **Análise de risco de crédito**
- **Otimização de portfólios**

## Conclusão

A inteligência artificial não é mais uma opção, mas uma necessidade para imobiliárias que querem permanecer competitivas. As empresas que adotarem essas tecnologias agora terão vantagem significativa sobre as que esperarem.

O futuro do mercado imobiliário será digital, automatizado e inteligente. A questão não é se sua imobiliária vai adotar IA, mas quando e como.

---

**Pronto para transformar sua imobiliária com IA?** [Fale com nossos especialistas](https://wa.me/5513997591781)`,
            relatedPosts: [
                { id: 2, title: '10 erros que estão custando vendas para sua imobiliária' },
                { id: 3, title: 'Guia completo: Como implementar automação em sua imobiliária' },
                { id: 5, title: 'Como qualificar leads automaticamente e aumentar conversões' }
            ]
        }
    };

    const post = posts[postId] || posts[1]; // Fallback para o primeiro post

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href
            });
        } else {
            // Fallback para navegadores que não suportam Web Share API
            navigator.clipboard.writeText(window.location.href);
            alert('Link copiado para a área de transferência!');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-[#666666] mb-8">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>/</span>
                            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                            <span>/</span>
                            <span className="text-primary">{post.title.substring(0, 50)}...</span>
                        </nav>

                        {/* Header */}
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                                <Zap className="w-4 h-4" />
                                {post.category}
                            </div>
                            
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-dark leading-tight">
                                {post.title}
                            </h1>
                            
                            <p className="text-xl text-[#666666] mb-8 leading-relaxed">
                                {post.excerpt}
                            </p>

                            {/* Author and Meta */}
                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                                        {post.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-primary-dark">{post.author}</p>
                                        <p className="text-sm text-[#666666]">Especialista em IA Imobiliária</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 text-sm text-[#666666]">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </div>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => setIsLiked(!isLiked)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                                        isLiked 
                                            ? 'bg-red-50 border-red-200 text-red-600' 
                                            : 'border-gray-300 text-[#666666] hover:border-red-300 hover:text-red-600'
                                    }`}
                                >
                                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                                    {isLiked ? 'Curtido' : 'Curtir'}
                                </button>
                                
                                <button
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                                        isBookmarked 
                                            ? 'bg-primary/10 border-primary text-primary' 
                                            : 'border-gray-300 text-[#666666] hover:border-primary hover:text-primary'
                                    }`}
                                >
                                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                                    {isBookmarked ? 'Salvo' : 'Salvar'}
                                </button>
                                
                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-[#666666] hover:border-primary hover:text-primary transition-all"
                                >
                                    <Share2 className="w-4 h-4" />
                                    Compartilhar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full rounded-3xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16 bg-gradient-to-br from-white to-[#F8FAFA]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <article className="prose prose-lg max-w-none">
                            <div 
                                dangerouslySetInnerHTML={{ 
                                    __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, (match) => {
                                    const level = match.trim().length;
                                    return `<h${level} class="text-${level === 1 ? '4xl' : level === 2 ? '3xl' : level === 3 ? '2xl' : 'xl'} font-bold text-primary-dark mb-4 mt-8">`;
                                }).replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-dark">$1</strong>')
                                }} 
                            />
                        </article>

                        {/* Author Bio */}
                        <div className="mt-16 p-8 bg-white rounded-3xl border border-gray-200">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary-dark">{post.author}</h3>
                                    <p className="text-[#666666]">Especialista em IA para o mercado imobiliário</p>
                                </div>
                            </div>
                            <p className="text-[#666666] leading-relaxed">
                                Com mais de 10 anos de experiência em tecnologia imobiliária, ajudo imobiliárias a implementar 
                                soluções de IA que realmente geram resultados. Meu foco é tornar a tecnologia acessível 
                                e prática para empresas de todos os tamanhos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-primary-dark">
                            Artigos Relacionados
                        </h2>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {post.relatedPosts.map((relatedPost) => (
                                <article key={relatedPost.id} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-lg font-bold mb-3 text-primary-dark line-clamp-2">
                                        {relatedPost.title}
                                    </h3>
                                    <Link
                                        to={`/blog/post/${relatedPost.id}`}
                                        className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                                    >
                                        Ler mais
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                        Pronto para aplicar esses conceitos na sua imobiliária?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Fale com nossos especialistas e descubra como a IA pode transformar seus resultados
                    </p>
                    <a
                        href="https://wa.me/5513997591781?text=Ol%C3%A1,%20li%20o%20artigo%20sobre%20IA%20e%20quero%20saber%20mais"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                    >
                        <Zap className="w-5 h-5" />
                        Falar com Especialista
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPost;
