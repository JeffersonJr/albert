import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-2 border-b border-black/5' : 'bg-white/80 backdrop-blur-md border-b border-transparent py-4'
                }`}
        >
            <nav className="container mx-auto px-6 flex justify-between items-center transition-all duration-400">
                <div className="flex items-center gap-2">
                    <img
                        src="/img/logo-green.png"
                        alt="Albert IA Logo"
                        className={`transition-all duration-400 ${isScrolled ? 'h-8' : 'h-9'}`}
                    />
                </div>

                <ul className="hidden md:flex items-center gap-8 list-none">
                    <li><a href="#solucao" className="nav-link text-sm font-medium text-main hover:text-primary transition-colors">Solução</a></li>
                    <li><a href="#comparativo" className="nav-link text-sm font-medium text-main hover:text-primary transition-colors">Albert vs Humano</a></li>
                    <li><a href="#planos" className="nav-link text-sm font-medium text-main hover:text-primary transition-colors">Planos</a></li>
                    <li>
                        <a
                            href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA"
                            target="_blank"
                            className="bg-gradient-to-br from-primary to-primary-dark text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-400"
                        >
                            Falar com Especialista
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
