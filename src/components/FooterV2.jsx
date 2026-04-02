import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram, Linkedin, MessageSquare } from 'lucide-react';

const FooterV2 = () => {
    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 rounded-lg bg-accent-neon flex items-center justify-center shadow-[0_0_10px_rgba(0,245,225,0.4)]">
                                <Zap size={18} className="text-black fill-black" />
                            </div>
                            <span className="text-xl font-bold text-white">Albert<span className="text-accent-neon">.</span></span>
                        </Link>
                        <p className="text-white/40 leading-relaxed mb-6">
                            Transformando o futuro do atendimento ao cliente com inteligência artificial de ponta.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent-neon transition-colors">
                                <Instagram size={18} className="text-white/60" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent-neon transition-colors">
                                <Linkedin size={18} className="text-white/60" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Produto</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/40 hover:text-accent-neon transition-colors">Funcionalidades</a></li>
                            <li><a href="#" className="text-white/40 hover:text-accent-neon transition-colors">Integrações</a></li>
                            <li><a href="#" className="text-white/40 hover:text-accent-neon transition-colors">Preços</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Empresa</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/40 hover:text-accent-neon transition-colors">Sobre Nós</a></li>
                            <li><a href="#" className="text-white/40 hover:text-accent-neon transition-colors">Vagas</a></li>
                            <li><a href="#" className="text-white/40 hover:text-accent-neon transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Suporte</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/40 hover:text-accent-neon transition-colors">Documentação</a></li>
                            <li><a href="#" className="text-white/40 hover:text-accent-neon transition-colors">Central de Ajuda</a></li>
                            <li><a href="#" className="text-white/40 hover:text-accent-neon transition-colors">Status</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/5 gap-6">
                    <p className="text-white/30 text-sm">
                        © 2026 Albert IA. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-8">
                        <Link to="/termos" className="text-white/30 text-sm hover:text-white transition-colors">Termos</Link>
                        <Link to="/politica-privacidade" className="text-white/30 text-sm hover:text-white transition-colors">Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV2;
