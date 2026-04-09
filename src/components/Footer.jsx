import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Zap, Shield } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAnchorNavigation = (anchor) => {
        if (!anchor || !anchor.startsWith('#')) return;

        if (location.pathname === '/') {
            // Se já está na home, apenas rola para a âncora
            try {
                const element = document.querySelector(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (e) {
                console.warn('Invalid anchor:', anchor);
            }
        } else {
            // Se está em outra página, vai para a home com a âncora
            navigate(`/${anchor}`);
        }
    };

    const footerLinks = {
        produto: [
            { name: 'Recursos', href: '#solucao', internal: false },
            { name: 'Planos', href: '#planos', internal: false },
        ],
        empresa: [
            { name: 'Sobre Nós', href: '/sobre', internal: true },
            { name: 'Blog', href: '/blog', internal: true },
        ],
        suporte: [
            { name: 'F.A.Q.', href: '#faq', internal: false },
            { name: 'Contato', href: 'https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA', internal: false, target: '_blank' },
        ],
        legal: [
            { name: 'Termos de Uso', href: '/termos', internal: true },
            { name: 'Política de Privacidade', href: '/politica-privacidade', internal: true },
            { name: 'LGPD', href: '/lgpd', internal: true }
        ]
    };

    const socialLinks = [
        { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/eusoualbertoficial/' },
    ];

    const linkStyle = "text-white/70 hover:text-accent font-medium transition-colors duration-200";

    return (
        <footer className="bg-[#1d5c59] text-white pt-20 pb-10 relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <Link to="/" className="inline-block mb-6 group" title="Página Inicial Albert IA">
                                <img
                                    src="/img/logo-green.png"
                                    alt="Albert IA"
                                    title="Albert IA - Atendimento Inteligente"
                                    className="h-10 lg:h-12 w-auto brightness-0 invert group-hover:scale-105 transition-transform duration-300"
                                    width="376"
                                    height="93"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </Link>
                            <p className="text-white/80 max-w-sm leading-relaxed mb-8">
                                Revolucionando o mercado imobiliário com inteligência artificial de ponta para atendimento 24/7.
                                Atendimento 24/7, qualificação automática e aumento real em vendas.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group/item">
                                    <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                                    <a href="tel:+5513997591781" title="Ligar para Albert IA" className="font-medium hover:text-white transition-colors">
                                        (13) 99759-1781
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                                    <span className="font-medium">Brasil - Atendimento Nacional</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={`Seguir no ${social.name}`}
                                            className="w-10 h-10 bg-white/20 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-black/10"
                                            aria-label={social.name}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider text-sm">Produto</h3>
                        <ul className="space-y-3">
                            {footerLinks.produto.map((link, index) => (
                                <li key={index}>
                                    {!link.internal ? (
                                        <button
                                            onClick={() => handleAnchorNavigation(link.href)}
                                            className={linkStyle}
                                        >
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link to={link.href} className={linkStyle}>{link.name}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider text-sm">Empresa</h3>
                        <ul className="space-y-3">
                            {footerLinks.empresa.map((link, index) => (
                                <li key={index}>
                                    {link.internal ? (
                                        <Link to={link.href} className={linkStyle}>{link.name}</Link>
                                    ) : (
                                        <button
                                            onClick={() => handleAnchorNavigation(link.href)}
                                            className={linkStyle}
                                        >
                                            {link.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider text-sm">Suporte</h3>
                        <ul className="space-y-3">
                            {footerLinks.suporte.map((link, index) => (
                                <li key={index}>
                                    {link.href.startsWith('http') ? (
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                                            {link.name}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={() => handleAnchorNavigation(link.href)}
                                            className={linkStyle}
                                        >
                                            {link.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/10 pt-8 mt-16">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-white/40 text-sm font-medium flex flex-col gap-1">
                            <span>© {currentYear} Albert IA. Todos os direitos reservados.</span>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm">
                            {footerLinks.legal.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.href}
                                    className="text-white/50 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
                            <span>Feito com tecnologia incrível</span>
                        </div>
                    </div>
                </div>

                {/* Trust Badges Area */}
                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <div className="inline-flex flex-wrap justify-center items-center gap-6 px-10 py-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10">
                        <div className="flex items-center gap-3 group/badge">
                            <div className="w-2.5 h-2.5 bg-[#00ff9d] rounded-full animate-pulse shadow-[0_0_12px_rgba(0,255,157,0.8)]"></div>
                            <span className="text-sm text-white font-bold tracking-wide">100% Brasileiro</span>
                        </div>
                        <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
                        <div className="flex items-center gap-3 group/badge text-white">
                            <Shield className="w-5 h-5 text-[#00ff9d] drop-shadow-[0_0_8px_rgba(0,255,157,0.4)]" aria-hidden="true" />
                            <span className="text-sm text-white font-bold tracking-wide">LGPD Compliant</span>
                        </div>
                        <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
                        <div className="flex items-center gap-3 group/badge text-white">
                            <Zap className="w-5 h-5 text-[#00ff9d] drop-shadow-[0_0_8px_rgba(0,255,157,0.4)]" aria-hidden="true" />
                            <span className="text-sm text-white font-bold tracking-wide">99.9% Uptime</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
