const SocialProof = () => {
    const logos = [
        { src: '/img/chaves na mão.svg', alt: 'Chaves na Mão' },
        { src: '/img/imovel web.svg', alt: 'Imovel Web' },
        { src: '/img/lopes.svg', alt: 'Lopes' },
        { src: '/img/netimoveis.svg', alt: 'Net Imóveis' },
        { src: '/img/quinto andar.svg', alt: 'Quinto Andar' },
        { src: '/img/viva real.svg', alt: 'Viva Real' },
        { src: '/img/zap.svg', alt: 'Zap Imóveis' },
    ];

    return (
        <div className="bg-white py-16 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                        Confiado por líderes do mercado
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
                        Imobiliárias que confiam no Albert
                    </h2>
                    <p className="text-[#666666] max-w-2xl mx-auto">
                        Principais portais e imobiliárias do Brasil utilizam nossa tecnologia
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div className="flex gap-8 items-center animate-scroll w-max">
                        {[1, 2, 3].map((set) => (
                            <div key={set} className="flex gap-8 items-center">
                                {logos.map((logo, i) => (
                                    <div
                                        key={`${set}-${i}`}
                                        className="flex items-center justify-center h-14 w-28 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                    >
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProof;
