import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Zap, Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle, Bookmark, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';

import { getPostById, getRelatedPosts } from '../data/blogData';

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

    const post = getPostById(postId) || getPostById(1);
    const relatedPosts = getRelatedPosts(post);

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
            <Helmet>
                <title>{post.title} | Blog Albert IA</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

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
                             {relatedPosts.map((related) => (
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
                                            {related.readTime}
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
