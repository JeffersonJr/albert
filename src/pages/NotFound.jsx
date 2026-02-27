import { Link } from 'react-router-dom';
import { Ghost, Home, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F8FAFA] to-white min-h-[90vh] flex items-center justify-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="relative mb-12">
                            {/* Floating Orbs for Premium feel */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="text-[120px] lg:text-[180px] font-black text-primary/10 select-none leading-none">
                                    404
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Ghost className="w-24 h-24 lg:w-32 lg:h-32 text-primary animate-bounce-slow" />
                                </div>
                            </div>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                            Ops! Parece que você se perdeu no portfólio.
                        </h1>

                        <p className="text-xl text-[#666666] mb-8 leading-relaxed italic">
                            "Isso fica feliz em ser útil."
                        </p>

                        <p className="text-[#666666] mb-12 max-w-lg mx-auto">
                            Infelizmente, a página que você procura não foi encontrada. Mas não se preocupe, o Albert está sempre pronto para te ajudar a encontrar o caminho de volta.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg"
                            >
                                <Home className="w-5 h-5" />
                                Voltar para a Home
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Voltar Anterior
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
