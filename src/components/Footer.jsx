import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Zap, Shield } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAnchorNavigation = (anchor) => {
        if (location.pathname === '/') {
            // Se já está na home, apenas rola para a âncora
            const element = document.querySelector(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Se está em outra página, vai para a home com a âncora
            navigate(`/#${anchor.replace('#', '')}`);
        }
    };

    const footerLinks = {
        produto: [
            { name: 'Recursos', href: '#solucao', internal: false },
            { name: 'Planos', href: '#planos', internal: false },
            { name: 'Integrações', href: '#solucao', internal: false },
            { name: 'API', href: '/documentacao', internal: true }
        ],
        empresa: [
            { name: 'Sobre Nós', href: '/sobre', internal: true },
            { name: 'Casos de Sucesso', href: '/cases', internal: true },
        ],
        suporte: [
            { name: 'F.A.Q.', href: '#faq', internal: false },
            { name: 'Contato', href: 'https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA', internal: false, target: '_blank' },
            { name: 'Status do Sistema', href: '/status', internal: true },
            { name: 'Documentação', href: '/documentacao', internal: true }
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

    return (
        <footer className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/img/logo.png" alt="logo-albert" className="h-12" />
                        </div>
                        
                        <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
                            A IA que humaniza o atendimento digital e escala a performance da sua imobiliária. 
                            Atendimento 24/7, qualificação automática e aumento real em vendas.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                                <a href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA" 
                                   target="_blank" 
                                   className="hover:text-white">
                                    Fale conosco no WhatsApp
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Phone className="w-5 h-5" />
                                <a href="tel:+5513997591781" className="hover:text-white">
                                    (13) 99759-1781
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                <span>Brasil - Atendimento Nacional</span>
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
                                        className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Produto</h4>
                        <ul className="space-y-3">
                            {footerLinks.produto.map((link, index) => (
                                <li key={index}>
                                    {link.internal ? (
                                        <Link 
                                            to={link.href} 
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => handleAnchorNavigation(link.href)}
                                            className="text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
                                        >
                                            {link.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Empresa</h4>
                        <ul className="space-y-3">
                            {footerLinks.empresa.map((link, index) => (
                                <li key={index}>
                                    {link.internal ? (
                                        <Link 
                                            to={link.href} 
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => handleAnchorNavigation(link.href)}
                                            className="text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
                                        >
                                            {link.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Suporte</h4>
                        <ul className="space-y-3">
                            {footerLinks.suporte.map((link, index) => (
                                <li key={index}>
                                    {link.internal ? (
                                        <Link 
                                            to={link.href} 
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => handleAnchorNavigation(link.href)}
                                            className="text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
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
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Albert IA. Todos os direitos reservados.
                        </div>
                        
                        <div className="flex flex-wrap gap-6 text-sm">
                            {footerLinks.legal.map((link, index) => (
                                link.internal ? (
                                    <Link
                                        key={index}
                                        to={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                            <button
                                onClick={() => window.openCookieSettings && window.openCookieSettings()}
                                className="text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
                            >
                                Cookies
                            </button>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>Feito com</span>
                            <span className="text-accent">❤️</span>
                            <span>no Brasil</span>
                        </div>
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-400">100% Brasileiro</span>
                        </div>
                        <div className="w-px h-4 bg-gray-700"></div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm text-gray-400">LGPD Compliant</span>
                        </div>
                        <div className="w-px h-4 bg-gray-700"></div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-accent" />
                            <span className="text-sm text-gray-400">99.9% Uptime</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
