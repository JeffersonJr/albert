import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const NavbarV2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Solução', href: '#solucao' },
        { name: 'Planos', href: '#planos' },
        { name: 'Sobre Nós', href: '/sobre' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled
                ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-accent-neon flex items-center justify-center shadow-[0_0_15px_rgba(0,245,225,0.4)] group-hover:scale-110 transition-transform">
                        <Zap size={24} className="text-black fill-black" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">Albert<span className="text-accent-neon">.</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className="text-white/70 hover:text-accent-neon font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="https://wa.me/5513997591781"
                        target="_blank"
                        className="px-6 py-2.5 rounded-full bg-accent-neon text-black font-bold hover:shadow-[0_0_20px_rgba(0,245,225,0.4)] hover:scale-105 transition-all duration-300"
                    >
                        Falar com Especialista
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden p-2 text-white hover:text-accent-neon transition-colors"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-black/95 z-[999] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                 <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl font-bold text-white hover:text-accent-neon transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/5513997591781"
                        target="_blank"
                        className="mt-4 px-10 py-4 rounded-full bg-accent-neon text-black font-bold text-xl"
                    >
                        Falar com Especialista
                    </a>
                 </div>
            </div>
        </header>
    );
};

export default NavbarV2;
