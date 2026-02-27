const Footer = () => {
    return (
        <footer className="bg-[#111] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    <div>
                        <img src="/img/logo.png" alt="Albert IA Logo" className="h-8 mb-6" />
                        <p className="opacity-60 max-w-[320px] text-[15px]">
                            A IA que humaniza o atendimento digital e escala a performance da sua imobiliária.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Links</h4>
                        <ul className="space-y-3 text-sm opacity-70">
                            <li><a href="#solucao" className="hover:text-primary transition-colors">Solução</a></li>
                            <li><a href="#planos" className="hover:text-primary transition-colors">Preços</a></li>
                            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Social</h4>
                        <ul className="space-y-3 text-sm opacity-70">
                            <li>
                                <a
                                    href="https://www.instagram.com/eusoualbertoficial/"
                                    target="_blank"
                                    className="hover:text-primary transition-colors"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[13px] opacity-40 gap-4">
                    <p>&copy; {new Date().getFullYear()} Albert IA. Direitos Reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
