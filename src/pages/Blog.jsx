import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'todos', name: 'Todos' },
        { id: 'ia', name: 'Inteligência Artificial' },
        { id: 'imobiliario', name: 'Mercado Imobiliário' },
        { id: 'vendas', name: 'Vendas' },
        { id: 'tecnologia', name: 'Tecnologia' },
        { id: 'negocios', name: 'Negócios' }
    ];

    const blogPosts = [
        {
            id: 1,
            title: 'Como a IA está revolucionando o mercado imobiliário em 2024',
            excerpt: 'Descubra as tendências que estão transformando a forma como imobiliárias atendem seus clientes e aumentam vendas.',
            author: 'Albert IA',
            date: '15 de Janeiro de 2024',
            readTime: '8 min',
            category: 'ia',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop',
            tags: ['IA', 'Inovação', 'Tendências']
        },
        {
            id: 2,
            title: '10 erros que estão custando vendas para sua imobiliária',
            excerpt: 'Identifique e corrija os principais erros no atendimento ao cliente que podem estar diminuindo suas conversões.',
            author: 'Equipe Albert',
            date: '10 de Janeiro de 2024',
            readTime: '6 min',
            category: 'vendas',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop',
            tags: ['Vendas', 'Atendimento', 'Conversão']
        },
        {
            id: 3,
            title: 'Guia completo: Como implementar automação em sua imobiliária',
            excerpt: 'Passo a passo prático para digitalizar seus processos e escalar suas operações sem perder o toque humano.',
            author: 'Albert IA',
            date: '5 de Janeiro de 2024',
            readTime: '12 min',
            category: 'tecnologia',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
            tags: ['Automação', 'Processos', 'Escala']
        },
        {
            id: 4,
            title: 'O futuro das imobiliárias: tendências de negócios para 2024',
            excerpt: 'Prepare sua imobiliária para o futuro com estas tendências que já estão moldando o mercado.',
            author: 'Equipe Albert',
            date: '28 de Dezembro de 2023',
            readTime: '7 min',
            category: 'negocios',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
            tags: ['Futuro', 'Tendências', 'Mercado']
        },
        {
            id: 5,
            title: 'Análise detalhada do Mercado Imobiliário Brasileiro atual',
            excerpt: 'O que esperar do mercado de imóveis nos próximos meses e como se posicionar estrategicamente.',
            author: 'Albert IA',
            date: '20 de Dezembro de 2023',
            readTime: '9 min',
            category: 'imobiliario',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=400&fit=crop',
            tags: ['Mercado', 'Imóveis', 'Estratégia']
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'todos' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans']">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F8FAFA] to-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary-dark rounded-full text-sm font-bold mb-6">
                            <Zap className="w-4 h-4 text-accent" aria-hidden="true" />
                            Insights & Tendências
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta text-secondary leading-tight tracking-tight">
                            Conteúdo que <span className="relative inline-block">
                                <span className="relative z-10 text-accent">transforma</span>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="absolute bottom-2 left-0 h-3 bg-accent/20 -rotate-1 z-0"
                                />
                            </span> seu negócio
                        </h1>

                        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                            Artigos, guias e insights estratégicos sobre IA, automação e o futuro do mercado imobiliário.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl group-focus-within:bg-primary/10 transition-all duration-300" />
                                <div className="relative flex items-center bg-white border border-gray-100 rounded-full p-2 shadow-sm focus-within:shadow-md focus-within:border-primary/30 transition-all">
                                    <Search className="ml-4 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Pesquisar artigos..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="flex-1 px-4 py-3 rounded-full focus:outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
                                    />
                                    <button className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-12 bg-gray-50/50 sticky top-[72px] z-30 backdrop-blur-md border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-primary text-white shadow-xl shadow-primary/25 scale-105'
                                    : 'bg-white border border-gray-200 text-gray-500 hover:border-primary/50 hover:text-primary hover:bg-primary/5'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-extrabold uppercase tracking-wider text-primary shadow-lg">
                                                {categories.find(c => c.id === post.category)?.name}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </div>
                                        <h3 className="text-xl font-extrabold mb-4 text-primary-dark group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 mb-8 line-clamp-3 text-sm leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white border border-primary/20 flex items-center justify-center overflow-hidden aspect-square shrink-0 p-0.5">
                                                    <img src="/img/fav.png" alt="Albert IA" className="w-full h-full object-contain" />
                                                </div>
                                                <span className="text-xs font-bold text-gray-700">{post.author}</span>
                                            </div>
                                            <Link
                                                to={`/blog/post/${post.id}`}
                                                className="text-primary font-extrabold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                            >
                                                Ler mais
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredPosts.length === 0 && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-8 h-8 text-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark mb-2">Nenhum resultado encontrado</h3>
                            <p className="text-gray-500">Tente buscar por termos diferentes ou navegue por outra categoria.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 translate-x-1/4" />
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
                                    Mantenha sua imobiliária <span className="text-accent">atualizada</span>.
                                </h2>
                                <p className="text-xl text-white/70 leading-relaxed">
                                    Inscreva-se para receber novos artigos, estudos de caso e insights sobre o mercado imobiliário e IA.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Seu melhor e-mail corporativo"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border-0 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-accent transition-all outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-accent hover:bg-accent-dark text-white px-8 py-5 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-accent/20"
                                    >
                                        Quero Receber Insights
                                    </button>
                                    <p className="text-center text-[10px] text-white/40 uppercase tracking-widest font-bold">
                                        Sem spam. Apenas conteúdo de valor.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
