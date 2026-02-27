const SocialProof = () => {
    const logos = [
        { src: '/img/cyrela.svg', alt: 'Cyrela' },
        { src: '/img/lopes.svg', alt: 'Lopes' },
        { src: '/img/mundo apto.svg', alt: 'Mundo Apto' },
        { src: '/img/plano e planos.svg', alt: 'Plano e Planos' },
        { src: '/img/remax.svg', alt: 'Remax' },
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
                        Mais de 50 empresas já transformaram seu atendimento com nossa IA
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div className="flex gap-12 items-center animate-scroll w-max">
                        {[1, 2, 3].map((set) => (
                            <div key={set} className="flex gap-12 items-center">
                                {logos.map((logo, i) => (
                                    <div
                                        key={`${set}-${i}`}
                                        className="flex items-center justify-center h-16 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
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
