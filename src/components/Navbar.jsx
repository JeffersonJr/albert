import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes fadeRightIn {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .logo-animate {
                    animation: fadeRightIn 0.5s ease-out forwards;
                }
                .shine-effect {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
                    animation: shine 3s infinite linear;
                }
                @keyframes shine {
                    0% { left: 100%; }
                    100% { left: -100%; }
                }
            `}} />
            <header
                className={`fixed top-0 left-0 right-0 z-[1000] transition-[padding,background-color] duration-300 min-h-[72px] lg:min-h-[80px] ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100'
                    : 'bg-white/80 backdrop-blur-md py-4 border-b border-transparent'
                    }`}
            >
                <nav className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="logo-animate relative">
                            <Link to="/" title="Página Inicial Albert IA" className="flex items-center gap-3">
                                <img
                                    src="/img/logo-green.png"
                                    alt="Albert IA"
                                    title="Albert IA - Atendimento Inteligente"
                                    className="h-10 lg:h-12 w-auto transition-transform hover:scale-105"
                                    style={{ aspectRatio: '376 / 93' }}
                                    width="376"
                                    height="93"
                                    fetchPriority="high"
                                    decoding="async"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            <ul className="flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <li 
                                        key={link.name} 
                                        className="relative py-2 group"
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
                                        {/* CSS Animated Underline */}
                                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0 z-0"></div>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-4">
                                <a
                                    id="cta-nav-consultant"
                                    href="https://wa.me/5513997591781?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Albert%20e%20suas%20funcionalidades"
                                    target="_blank"
                                    title="Falar com Especialista no WhatsApp"
                                    className="relative overflow-hidden bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Falar com Especialista
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5 C21 14.5 18.5 17 15.5 17 C15 17 14.5 16.9 14 16.7 L10 18 L11.3 14 C11.1 13.5 11 13 11 12.5 C11 9.5 13.5 7 16.5 7 C19.5 7 22 9.5 22 12.5 Z"/></svg>
                                    </span>
                                    <div className="shine-effect"></div>
                                </a>
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
                                <svg className="w-6 h-6 text-primary-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            ) : (
                                <svg className="w-6 h-6 text-primary-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
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
                                    className="h-10 lg:h-12 w-auto hover:scale-105 transition-transform duration-300"
                                    width="376"
                                    height="93"
                                />
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Fechar menu"
                                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-6 h-6 text-primary-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <nav className="space-y-6">
                            <ul className="space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.name} className="relative group">
                                        {link.internal ? (
                                            <Link
                                                to={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                title={link.name}
                                                className="block text-lg font-medium text-[#1A1A1A] hover:text-primary transition-colors duration-200 py-2 inline-block w-full"
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
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                (13) 99759-1781
                            </a>
                            <a
                                href="https://wa.me/5513997591781?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Albert%20e%20suas%20funcionalidades"
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                title="Falar com Especialista no WhatsApp"
                                className="relative overflow-hidden block w-full bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 transition-transform duration-200 text-center active:scale-95"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Falar com Especialista
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5 C21 14.5 18.5 17 15.5 17 C15 17 14.5 16.9 14 16.7 L10 18 L11.3 14 C11.1 13.5 11 13 11 12.5 C11 9.5 13.5 7 16.5 7 C19.5 7 22 9.5 22 12.5 Z"/></svg>
                                </span>
                                <div className="shine-effect"></div>
                            </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
