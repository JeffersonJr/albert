import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Zap, Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle, Bookmark, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';

const BlogPost = () => {
    const { postId } = useParams();
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setScrollPercentage(Math.round(latest * 100));
        });
    }, [scrollYProgress]);

    // Mock data - em um app real, viria de uma API
    const posts = {
        1: {
            title: 'Como a IA está revolucionando o mercado imobiliário em 2024',
            excerpt: 'Descubra as tendências que estão transformando a forma como imobiliárias atendem seus clientes e aumentam vendas.',
            author: 'Albert IA',
            authorAvatar: '/img/fav.png', // Official Albert avatar
            date: '15 de Janeiro de 2024',
            readTime: '8 min',
            category: 'Inteligência Artificial',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
            tags: ['IA', 'Inovação', 'Tendências'],
            content: `
                <p class="lead">O mercado imobiliário estamos passando por uma transformação digital sem precedentes, e a inteligência artificial está no centro dessa mudança radical.</p>
                
                <h2>O Cenário Atual</h2>
                <p>O mercado imobiliário brasileiro move bilhões de reais anualmente, mas ainda enfrenta gargalos estruturais que impedem o crescimento escalável de muitas imobiliárias:</p>

                <ul>
                    <li><strong>Alta competitividade:</strong> Mais de 100 mil imobiliárias competindo pelos mesmos leads.</li>
                    <li><strong>Processos manuais:</strong> Operações que ainda dependem excessivamente de intervenção humana em tarefas repetitivas.</li>
                    <li><strong>Janela de Oportunidade:</strong> Leads que perdem o interesse se não forem atendidos nos primeiros 5 minutos.</li>
                </ul>

                <h2>Como a IA Está Mudando o Jogo</h2>
                
                <h3>1. Primeiro Atendimento em Segundos</h3>
                <p>A maior revolução está na velocidade. Enquanto um corretor humano pode levar horas para retornar um contato, a IA o faz em segundos, 24 horas por dia, 7 dias por semana.</p>

                <blockquote>
                    "A velocidade de resposta é o fator número 1 na conversão de leads digitais. Quem responde primeiro, geralmente leva o cliente."
                </blockquote>

                <h3>2. Qualificação Humanizada</h3>
                <p>Não se trata apenas de um chatbot básico. As novas IAs utilizam Processamento de Linguagem Natural (NLP) para entender o contexto, as dores e a urgência do comprador, filtrando apenas as oportunidades reais para o time de vendas.</p>

                <div class="highlight-box">
                    <h4>Resultados Médios Observados:</h4>
                    <ul>
                        <li>Aumento de até 400% na taxa de conversão de leads.</li>
                        <li>Redução de 60% no custo de aquisição (CAC).</li>
                        <li>Equipes de vendas focadas 100% em fechamento.</li>
                    </ul>
                </div>

                <h2>O Futuro é Agora</h2>
                <p>Imobiliárias que não adotarem tecnologias de automação e IA nos próximos 24 meses correm o risco sério de se tornarem irrelevantes em um mercado cada vez mais "on-demand" e imediatista.</p>
            `,
            relatedPosts: [
                { id: 2, title: '10 erros que estão custando vendas para sua imobiliária', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop' },
                { id: 3, title: 'Guia completo: Como implementar automação em sua imobiliária', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop' },
                { id: 4, title: 'O futuro das imobiliárias: tendências de negócios para 2024', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop' }
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
            content: `
                <p class="lead">Identificar onde você está perdendo dinheiro é o primeiro passo para escalar. Muitas vezes, o problema não é a falta de leads, mas o que acontece depois que eles chegam.</p>

                <h2>1. Demora no Primeiro Contato</h2>
                <p>Se você demora mais de 10 minutos para responder um lead do Instagram ou portais, sua chance de conversão cai em 80%. O imediatismo é a moeda do novo mercado.</p>

                <h2>2. Falta de Processo de Qualificação</h2>
                <p>Passar todos os leads diretamente para os corretores causa frustração e perda de tempo. É necessário um filtro prévio para entender se o lead tem perfil de compra imediato.</p>

                <h2>3. Não Fazer Follow-up</h2>
                <p>A maioria dos fechamentos acontece entre o 5º e o 12º contato. No entanto, 44% dos corretores desistem após a primeira tentativa frustrada de contato.</p>

                <div class="highlight-box">
                    <h4>Checklist para Correção:</h4>
                    <ul>
                        <li>Implemente automação de resposta instantânea.</li>
                        <li>Defina critérios claros de SQL (Sales Qualified Leads).</li>
                        <li>Monitore o tempo de resposta da sua equipe em tempo real.</li>
                    </ul>
                </div>
            `,
            relatedPosts: [
                { id: 1, title: 'Como a IA está revolucionando o mercado imobiliário em 2024', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop' },
                { id: 3, title: 'Guia completo: Como implementar automação em sua imobiliária', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop' },
                { id: 5, title: 'Análise detalhada do Mercado Imobiliário Brasileiro atual', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop' }
            ]
        }
    };

    const post = posts[postId] || posts[1];

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copiado para a área de transferência!');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 right-0 z-[60]">
                <motion.div
                    className="h-1.5 bg-accent origin-left"
                    style={{ scaleX }}
                />
                <div className="absolute right-4 top-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                    <span className="text-[10px] font-black text-primary-dark uppercase tracking-wider">{scrollPercentage}% lido</span>
                </div>
            </div>
            
            <Navbar />

            {/* Hero Section */}
            <header className="pt-40 pb-20 bg-gradient-to-b from-[#F8FAFA] to-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link 
                                to="/blog" 
                                className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-8 group hover:translate-x-[-4px] transition-transform"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Voltar para o Blog
                            </Link>

                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 bg-primary/10 text-primary-dark rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em]">
                                    {post.category}
                                </span>
                                <span className="text-gray-300">•</span>
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">{post.readTime} de leitura</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-extrabold font-jakarta text-primary-dark leading-[1.1] mb-8 tracking-tight">
                                {post.title}
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                {post.excerpt}
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-6 mt-12 pt-12 border-t border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full border-2 border-primary/20 overflow-hidden bg-white aspect-square shrink-0 flex items-center justify-center p-1">
                                        <img src={post.authorAvatar} alt={post.author} className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary-dark text-lg">{post.author}</p>
                                        <p className="text-sm text-gray-500 font-medium">Equipe Editorial</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={handleShare}
                                        className="inline-flex items-center gap-2 bg-primary/5 text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all border border-primary/10"
                                    >
                                        <Share2 className="w-4 h-4" />
                                        Compartilhar
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Featured Image Section */}
            <section className="px-6 relative z-10">
                <div className="container mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <article className="prose prose-lg prose-emerald max-w-none prose-headings:text-primary-dark prose-headings:font-extrabold prose-p:text-gray-600 prose-p:leading-[1.8] prose-strong:text-primary-dark prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:not-italic prose-blockquote:font-bold prose-blockquote:text-primary-dark">
                            <style dangerouslySetInnerHTML={{ __html: `
                                .prose .lead { font-size: 1.35rem; color: #1e3a5f; font-weight: 500; line-height: 1.7; margin-bottom: 2.5rem; }
                                .prose h2 { font-size: 2.25rem; margin-top: 4rem; margin-bottom: 1.5rem; letter-spacing: -0.02em; }
                                .prose h3 { font-size: 1.5rem; margin-top: 2.5rem; }
                                .prose blockquote p::before, .prose blockquote p::after { content: none; }
                                .highlight-box { background: #f0fdf9; border: 1px solid #ccfbf1; padding: 2.5rem; border-radius: 2rem; margin: 3rem 0; }
                                .highlight-box h4 { margin-top: 0 !important; color: #115e59 !important; font-size: 1.25rem !important; }
                            `}} />
                            
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </article>

                        {/* Author Bio Section */}
                        <div className="mt-24 pt-12 border-t border-gray-100">
                            <div className="bg-gray-50/50 rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left transition-all hover:bg-gray-50">
                                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-lg shadow-primary/20 border-2 border-primary/20 bg-white aspect-square flex items-center justify-center p-2">
                                    <img src={post.authorAvatar} alt={post.author} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                                        <h4 className="text-xl font-extrabold text-primary-dark">{post.author}</h4>
                                        <CheckCircle className="w-5 h-5 text-accent" />
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        A equipe editorial da Albert IA dedica-se a pesquisar e trazer as melhores tendências de tecnologia para o mercado imobiliário brasileiro, ajudando do dono da imobiliária ao corretor autônomo.
                                    </p>
                                    <div className="flex justify-center md:justify-start gap-4">
                                        <button className="text-xs font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-widest">Ver todos os artigos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles Section */}
            <section className="py-24 bg-[#F8FAFA]">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-extrabold text-primary-dark">Artigos Relacionados</h2>
                            <Link to="/blog" className="text-sm font-bold text-accent flex items-center gap-2 group underline underline-offset-8">
                                Ver todos
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-10">
                             {post.relatedPosts.map((related) => (
                                <Link 
                                    key={related.id} 
                                    to={`/blog/post/${related.id}`}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 flex-1">
                                        <h3 className="text-lg font-extrabold text-primary-dark leading-tight line-clamp-2 group-hover:text-primary transition-colors mb-6">
                                            {related.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                            <Clock className="w-4 h-4" />
                                            6 min de leitura
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white px-6">
                <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto bg-primary-dark rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 leading-tight max-w-3xl mx-auto">
                                Transforme sua imobiliária com a <span className="text-accent relative inline-block">
                                    inteligência artificial
                                    <div className="absolute -bottom-2 left-0 w-full h-2 bg-accent/20 -rotate-1" />
                                </span> da Albert.
                            </h2>
                            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
                                Junte-se a centenas de imobiliárias que já automatizaram 100% de seus atendimentos e viram suas vendas escalarem.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a 
                                    href="https://wa.me/5513997591781" 
                                    className="bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent-dark transition-all shadow-xl shadow-accent/30 flex items-center justify-center gap-3"
                                >
                                    <Zap className="w-5 h-5" />
                                    Solicitar Demonstração
                                </a>
                                <Link 
                                    to="/" 
                                    className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-dark transition-all flex items-center justify-center gap-3"
                                >
                                    Saiba Mais
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
