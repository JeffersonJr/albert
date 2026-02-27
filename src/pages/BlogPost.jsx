import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Zap, Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle, Bookmark } from 'lucide-react';
import Navbar from '../components/Navbar';

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
            authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            date: '15 de Janeiro de 2024',
            readTime: '8 min',
            category: 'Inteligência Artificial',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
            tags: ['IA', 'Inovação', 'Tendências'],
            content: `<h1 style="font-size: 2.5rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1.5rem; margin-top: 2rem;">Como a IA está revolucionando o mercado imobiliário em 2024</h1>
<p style="margin-bottom: 1rem; color: #333; line-height: 1.6;">O mercado imobiliário está passando por uma transformação digital sem precedentes, e a inteligência artificial está no centro dessa mudança.</p>

<h2 style="font-size: 2rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem; margin-top: 2rem;">O Cenário Atual</h2>
<p style="margin-bottom: 1rem; color: #333;">O mercado imobiliário brasileiro move bilhões de reais anualmente, mas enfrenta desafios significativos:</p>

<ul style="list-style-type: disc; padding-left: 2rem; margin-bottom: 1rem; color: #333;">
    <li style="margin-bottom: 0.5rem;"><strong>Alta competitividade:</strong> Mais de 100 mil imobiliárias competindo</li>
    <li style="margin-bottom: 0.5rem;"><strong>Processos manuais:</strong> Operações ainda dependem de papel</li>
    <li style="margin-bottom: 0.5rem;"><strong>Demora no atendimento:</strong> Leads perdem interesse em minutos</li>
    <li style="margin-bottom: 0.5rem;"><strong>Custos elevados:</strong> Equipes grandes para volume crescente</li>
</ul>

<h2 style="font-size: 2rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem; margin-top: 2rem;">Como a IA Está Mudando o Jogo</h2>

<h3 style="font-size: 1.5rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem; margin-top: 1.5rem;">1. Atendimento Instantâneo 24/7</h3>
<p style="margin-bottom: 1rem; color: #333;">A IA permite que imobiliárias atendam leads em segundos, não horas:</p>

<ul style="list-style-type: disc; padding-left: 2rem; margin-bottom: 1rem; color: #333;">
    <li style="margin-bottom: 0.5rem;"><strong>80% dos leads convertem no primeiro contato</strong></li>
    <li style="margin-bottom: 0.5rem;"><strong>Probabilidade cai 10x após 5 minutos</strong></li>
    <li style="margin-bottom: 0.5rem;"><strong>Leads atendidos imediatamente têm 3x mais chance</strong></li>
</ul>

<h3 style="font-size: 1.5rem; font-weight: bold; color: #1e3a5f; margin-bottom: 1rem; margin-top: 1.5rem;">2. Qualificação Automática</h3>
<p style="margin-bottom: 1rem; color: #333;">Sistemas inteligentes podem:</p>

<ul style="list-style-type: disc; padding-left: 2rem; margin-bottom: 1rem; color: #333;">
    <li style="margin-bottom: 0.5rem;">Analisar perfil e intenção do lead</li>
    <li style="margin-bottom: 0.5rem;">Fazer perguntas relevantes automaticamente</li>
    <li style="margin-bottom: 0.5rem;">Segmentar leads por probabilidade</li>
    <li style="margin-bottom: 0.5rem;">Agendar visitas sem intervenção</li>
</ul>

<hr style="margin: 2rem 0; border: 1px solid #ddd;" />

<p style="margin-bottom: 1rem; color: #333;"><strong>Pronto para transformar sua imobiliária com IA?</strong> <a href="https://wa.me/5513997591781" target="_blank" style="color: #25D366;">Fale com nossos especialistas</a></p>`,
            relatedPosts: [
                { id: 2, title: '10 erros que estão custando vendas para sua imobiliária' },
                { id: 3, title: 'Guia completo: Como implementar automação em sua imobiliária' },
                { id: 5, title: 'Como qualificar leads automaticamente e aumentar conversões' }
            ]
        },
        2: {
            title: '10 erros que estão custando vendas para sua imobiliária',
            excerpt: 'Identifique e corrija os principais erros no atendimento ao cliente que podem estar diminuindo suas conversões.',
            author: 'Equipe Albert',
            authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
            date: '10 de Janeiro de 2024',
            readTime: '6 min',
            category: 'Vendas',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop',
            tags: ['Vendas', 'Atendimento', 'Conversão'],
            content: `# 10 erros que estão custando vendas para sua imobiliária

Descubra os erros mais comuns que estão fazendo sua imobiliária perder vendas valiosas e aprenda como corrigi-los.

## 1. Demora no atendimento ao primeiro contato

O erro mais crítico: responder leads após 5 minutos.

**Estatísticas:**
- 80% dos leads compram do primeiro profissional que responde
- A chance de contato cai 10x após 5 minutos
- Leads atendidos em até 1 minuto têm 3x mais chance de fechar

**Solução:** Implemente atendimento instantâneo com IA.

## 2. Não qualificar leads adequadamente

Atender todos os leads da mesma forma é ineficiente.

**Problema:** Tempo desperdiçado com leads não qualificados.

**Solução:** Use IA para qualificar e segmentar leads automaticamente.

## 3. Falta de follow-up sistemático

A maioria das vendas exige múltiplos contatos.

**Regra:** 80% das vendas acontecem após 5-12 contatos.

**Solução:** Automatize sequências de follow-up personalizadas.

## 4. Informações incompletas nos imóveis

Falta de dados essenciais afasta clientes.

**O que incluir:**
- Fotos profissionais de alta qualidade
- Vídeos tours virtuais
- Informações detalhadas sobre o imóvel
- Documentação em dia

## 5. Não usar múltiplos canais de comunicação

Limitar-se a apenas WhatsApp perca oportunidades.

**Canais essenciais:**
- WhatsApp
- E-mail
- Telefone
- Redes sociais
- Chat do site

## 6. Ausência de CRM centralizado

Informações dispersas causam problemas.

**Benefícios do CRM:**
- Histórico completo de interações
- Gestão de pipeline
- Automatização de tarefas
- Relatórios e métricas

## 7. Preços sem estratégia

Definir preços sem análise de mercado.

**Como precificar corretamente:**
- Análise de comparativos
- Tendências da região
- Características únicas do imóvel
- Negociação baseada em dados

## 8. Equipe mal treinada

Vendedores sem preparo perdem vendas.

**Treinamentos essenciais:**
- Técnicas de vendas
- Conhecimento do produto
- Uso de ferramentas digitais
- Atendimento ao cliente

## 9. Não coletar feedback

Sem feedback, não há melhoria contínua.

**O que coletar:**
- Satisfação do cliente
- Motivos de perda de venda
- Sugestões de melhoria
- Experiência de compra

## 10. Ignorar marketing digital

Presença online é fundamental hoje.

**Ações necessárias:**
- Website profissional
- SEO local
- Redes sociais ativas
- Anúncios online segmentados

---

**Evite esses erros e multiplique suas vendas!** [Fale conosco](https://wa.me/5513997591781)`,
            relatedPosts: [
                { id: 1, title: 'Como a IA está revolucionando o mercado imobiliário em 2024' },
                { id: 3, title: 'Guia completo: Como implementar automação em sua imobiliária' },
                { id: 6, title: 'Marketing digital para imobiliárias: estratégias que funcionam' }
            ]
        }
    };

    const post = posts[postId] || posts[1]; // Fallback para o primeiro post

    // Debug
    console.log('Post ID:', postId);
    console.log('Post encontrado:', post);
    console.log('Post content length:', post.content?.length);

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
                        <div 
                            className="text-[#333333] leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.content }} 
                        />

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
        </div>
    );
};

export default BlogPost;
