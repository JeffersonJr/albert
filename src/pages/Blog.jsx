import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';

const Blog = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            featured: true,
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
            title: 'O futuro das corretoras: tendências para 2024',
            excerpt: 'Prepare sua imobiliária para o futuro com estas tendências que já estão moldando o mercado.',
            author: 'Equipe Albert',
            date: '28 de Dezembro de 2023',
            readTime: '7 min',
            category: 'negocios',
            image: 'https://images.unsplash.com/photo-1497366216548-37524070bc85?w=800&h=400&fit=crop',
            tags: ['Futuro', 'Tendências', 'Mercado']
        },
        {
            id: 5,
            title: 'Como qualificar leads automaticamente e aumentar conversões',
            excerpt: 'Estratégias práticas para implementar qualificação de leads que realmente funciona e gera resultados.',
            author: 'Albert IA',
            date: '20 de Dezembro de 2023',
            readTime: '9 min',
            category: 'leads',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop',
            tags: ['Leads', 'Qualificação', 'Conversão']
        },
        {
            id: 6,
            title: 'Marketing digital para imobiliárias: estratégias que funcionam',
            excerpt: 'Aprenda as melhores práticas de marketing digital para atrair mais clientes e fechar mais negócios.',
            author: 'Equipe Albert',
            date: '15 de Dezembro de 2023',
            readTime: '10 min',
            category: 'marketing',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
            tags: ['Marketing', 'Digital', 'Estratégias']
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'todos' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = blogPosts.find(post => post.featured);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            <Zap className="w-4 h-4" />
                            Blog Albert IA
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-dark leading-tight">
                            Conteúdo que <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">transforma</span> seu negócio
                        </h1>
                        
                        <p className="text-xl text-[#666666] mb-12 leading-relaxed">
                            Artigos, guias e insights sobre tecnologia, vendas e o futuro do mercado imobiliário
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
                                <input
                                    type="text"
                                    placeholder="Buscar artigos..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:border-primary focus:outline-none bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/20">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                                            <Zap className="w-4 h-4" />
                                            Destaque
                                        </div>
                                        <h2 className="text-3xl font-bold mb-4 text-primary-dark">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-[#666666] mb-6 leading-relaxed">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 mb-6 text-sm text-[#666666]">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4" />
                                                {featuredPost.author}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {featuredPost.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readTime}
                                            </div>
                                        </div>
                                        <Link
                                            to={`/blog/post/${featuredPost.id}`}
                                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
                                        >
                                            Ler Artigo Completo
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            className="w-full rounded-2xl shadow-lg"
                                        />
                                        <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold">
                                            Mais Lido
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Category Filter */}
            <section className="py-8 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
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
            </section>

            {/* Posts Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                                            {categories.find(c => c.id === post.category)?.name}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-primary-dark line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#666666] mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center gap-4 mb-4 text-sm text-[#666666]">
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <Link
                                        to={`/blog/post/${post.id}`}
                                        className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                                    >
                                        Ler mais
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-[#666666] text-lg">
                                Nenhum artigo encontrado para "{searchTerm}" na categoria "{selectedCategory}"
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                        Receba os melhores conteúdos em primeira mão
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Inscreva-se na nossa newsletter e fique por dentro das tendências do mercado imobiliário
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none"
                        />
                        <button className="bg-accent hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold transition-colors">
                            Inscrever-se
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
