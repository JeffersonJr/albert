import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Zap, Menu, X, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleAnchorNavigation = (anchor) => {
        if (anchor === '#') {
            navigate('/');
            return;
        }

        if (anchor.startsWith('#')) {
            if (location.pathname === '/') {
                try {
                    const element = document.querySelector(anchor);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (e) {
                    console.warn('Invalid anchor in Navbar:', anchor);
                }
            } else {
                navigate(`/${anchor}`);
            }
        }
    };

    const navLinks = [
        { name: 'Home', href: '#', internal: false },
        { name: 'Solução', href: '#solucao', internal: false },
        { name: 'Planos', href: '#planos', internal: false },
        { name: 'Sobre Nós', href: '/sobre', internal: true },
        { name: 'Blog', href: '/blog', internal: true }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[1000] transition-[padding,background-color] duration-300 min-h-[72px] lg:min-h-[80px] ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100'
                    : 'bg-white/80 backdrop-blur-md py-4 border-b border-transparent'
                    }`}
            >
                <nav className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link to="/" title="Página Inicial Albert IA" className="flex items-center gap-3">
                                <img
                                    src="/img/logo-green.png"
                                    alt="Albert IA"
                                    title="Albert IA - Atendimento Inteligente"
                                    className="h-10 lg:h-12 w-auto"
                                    style={{ aspectRatio: '376 / 93' }}
                                    width="376"
                                    height="93"
                                    fetchpriority="high"
                                    decoding="async"
                                />
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            <ul className="flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <li 
                                        key={link.name} 
                                        className="relative py-2"
                                        onMouseEnter={() => setHoveredLink(link.name)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                    >
                                        {link.internal ? (
                                            <Link
                                                to={link.href}
                                                title={link.name}
                                                className="text-[#1A1A1A] hover:text-primary font-medium transition-colors duration-200 relative z-10 block px-2"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={() => handleAnchorNavigation(link.href)}
                                                title={`Ir para ${link.name}`}
                                                className="text-[#1A1A1A] hover:text-primary font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer relative z-10 block px-2"
                                            >
                                                {link.name}
                                            </button>
                                        )}
                                        
                                        {/* Animated Underline */}
                                        <AnimatePresence>
                                            {hoveredLink === link.name && (
                                                <motion.div
                                                    layoutId="nav-underline"
                                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full z-0"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-4">
                                <motion.a
                                    id="cta-nav-consultant"
                                    href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA"
                                    target="_blank"
                                    title="Falar com Especialista no WhatsApp"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative overflow-hidden bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transition-all"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Falar com Especialista
                                        <MessageCircle className="w-4 h-4" />
                                    </span>
                                    <motion.div 
                                        className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{ left: ['100%', '-100%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu-navigation"
                            className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-primary-dark" aria-hidden="true" />
                            ) : (
                                <Menu className="w-6 h-6 text-primary-dark" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <div
                id="mobile-menu-navigation"
                className={`fixed inset-0 z-[999] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="p-6">
                        {/* Mobile Header */}
                        <div className="flex justify-between items-center mb-8">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} title="Página Inicial Albert IA" className="flex items-center gap-3">
                                <img
                                    src="/img/logo-green.png"
                                    alt="Albert IA"
                                    title="Albert IA - Atendimento Inteligente"
                                    className="h-10 lg:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                                    width="376"
                                    height="93"
                                />
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Fechar menu"
                                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-6 h-6 text-primary-dark" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <nav className="space-y-6">
                            <ul className="space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        {link.internal ? (
                                            <Link
                                                to={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                title={link.name}
                                                className="block text-lg font-medium text-[#1A1A1A] hover:text-primary transition-colors duration-200 py-2"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={() => {
                                                    handleAnchorNavigation(link.href);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                title={`Ir para ${link.name}`}
                                                className="block text-lg font-medium text-[#1A1A1A] hover:text-primary transition-colors duration-200 py-2 bg-transparent border-none cursor-pointer text-left w-full"
                                            >
                                                {link.name}
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile CTA */}
                            <div className="space-y-4 pt-6 border-t border-gray-200">
                                <a
                                    href="tel:+5513997591781"
                                    title="Ligar para Albert IA"
                                    className="flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors duration-200 py-2"
                                >
                                    <Phone className="w-4 h-4" />
                                    (13) 99759-1781
                                </a>
                                <motion.a
                                    href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA"
                                    target="_blank"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    title="Falar com Especialista no WhatsApp"
                                    whileTap={{ scale: 0.95 }}
                                    className="relative overflow-hidden block w-full bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 group transition-all text-center"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Falar com Especialista
                                        <MessageCircle className="w-4 h-4" />
                                    </span>
                                    <motion.div 
                                        className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{ left: ['100%', '-100%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
