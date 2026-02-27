import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Zap, Menu, X, Phone } from 'lucide-react';

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
            // Se for Home, navega para a página home
            navigate('/');
        } else if (anchor.startsWith('#')) {
            // Se for âncora interna (#solucao, #planos)
            if (location.pathname === '/') {
                // Se já está na home, rola para a âncora
                const element = document.querySelector(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Se está em outra página, vai para a home com a âncora
                navigate(`/${anchor}`);
            }
        }
    };

    const navLinks = [
        { name: 'Home', href: '#', internal: false },
        { name: 'Solução', href: '#solucao', internal: false },
        { name: 'Planos', href: '#planos', internal: false },
        { name: 'Sobre Nós', href: '/sobre', internal: true }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100' 
                        : 'bg-white/80 backdrop-blur-md py-4 border-b border-transparent'
                }`}
            >
                <nav className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/public/img/logo-green.png" alt="logo-albert" className="h-12" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            <ul className="flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        {link.internal ? (
                                            <Link
                                                to={link.href}
                                                className="text-[#1A1A1A] hover:text-primary font-medium transition-colors duration-200"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={() => handleAnchorNavigation(link.href)}
                                                className="text-[#1A1A1A] hover:text-primary font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer"
                                            >
                                                {link.name}
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA"
                                    target="_blank"
                                    className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Falar com Especialista
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-primary-dark" />
                            ) : (
                                <Menu className="w-6 h-6 text-primary-dark" />
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ${
                isMobileMenuOpen 
                    ? 'opacity-100 pointer-events-auto' 
                    : 'opacity-0 pointer-events-none'
            }`}>
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="p-6">
                        {/* Mobile Header */}
                        <div className="flex justify-between items-center mb-8">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold text-primary-dark">Albert IA</span>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-6 h-6 text-primary-dark" />
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
                                    className="flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors duration-200 py-2"
                                >
                                    <Phone className="w-4 h-4" />
                                    (13) 99759-1781
                                </a>
                                <a
                                    href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA"
                                    target="_blank"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full bg-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-center"
                                >
                                    Falar com Especialista
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
