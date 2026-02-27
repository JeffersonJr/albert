const SocialProof = () => {
    const logos = [
        { src: '/img/cyrela.svg', alt: 'Cyrela' },
        { src: '/img/lopes.svg', alt: 'Lopes' },
        { src: '/img/mundo apto.svg', alt: 'Mundo Apto' },
        { src: '/img/plano e planos.svg', alt: 'Plano e Planos' },
        { src: '/img/remax.svg', alt: 'Remax' },
    ];

    return (
        <div className="bg-white py-10 border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto text-center mb-8">
                <p className="font-bold text-[#666] tracking-[2px] text-xs uppercase opacity-70">
                    CONFIADO POR IMOBILIÁRIAS DE TODO O BRASIL
                </p>
            </div>

            <div className="relative overflow-hidden whitespace-nowrap">
                <div className="flex gap-20 items-center animate-scroll w-max">
                    {/* Repeating for infinite effect */}
                    {[1, 2, 3].map((set) => (
                        <div key={set} className="flex gap-20 items-center">
                            {logos.map((logo, i) => (
                                <img
                                    key={`${set}-${i}`}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-8 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-400"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialProof;
