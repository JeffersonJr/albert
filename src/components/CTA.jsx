const CTA = () => {
    return (
        <section className="py-20 px-6 relative z-10">
            <div className="container mx-auto max-w-[1000px] bg-gradient-to-br from-primary-dark to-primary text-white rounded-[60px] p-12 lg:p-20 text-center shadow-strong">
                <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">Pronto para transformar sua imobiliária?</h2>
                <p className="opacity-90 text-xl mb-10 max-w-[600px] mx-auto">
                    Recupere seu tempo e pare de jogar dinheiro fora com leads mal atendidos.
                </p>
                <a
                    href="https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA"
                    target="_blank"
                    className="inline-block bg-accent hover:bg-[#20BA5A] text-white px-12 py-5 rounded-full font-bold text-xl shadow-lg hover:-translate-y-1 transition-all"
                >
                    Quero conhecer o Albert agora
                </a>
            </div>
        </section>
    );
};

export default CTA;
