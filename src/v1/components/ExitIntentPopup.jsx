import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, X, ArrowRight, CheckCircle } from 'lucide-react';

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenShown, setHasBeenShown] = useState(false);

    useEffect(() => {
        // Check if the popup was already shown in this session
        const shown = localStorage.getItem('albert_exit_intent_shown');
        if (shown) {
            setHasBeenShown(true);
        }

        const handleMouseLeave = (e) => {
            if (hasBeenShown) return;

            // Trigger when mouse leaves the top of the viewport
            if (e.clientY <= 5) {
                setIsVisible(true);
                setHasBeenShown(true);
                localStorage.setItem('albert_exit_intent_shown', 'true');
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsVisible(false);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [hasBeenShown]);

    const closePopup = () => setIsVisible(false);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-xl bg-[#F8FAFA] border border-gray-200 rounded-[32px] overflow-hidden shadow-2xl"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/5 blur-[80px] rounded-full" />
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 blur-[80px] rounded-full" />

                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-20"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="p-8 lg:p-12 relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                                <Zap className="w-4 h-4" />
                                Convite Exclusivo
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#1A1A1A] leading-tight">
                                Espera! Sua concorrência já está usando o <span className="text-accent">Albert</span>.
                            </h2>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Não deixe sua imobiliária para trás. Recupere o controle dos seus leads e aumente suas vendas em até 3x com o Albert IA.
                            </p>

                            {/* Key Highlights */}
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Teste grátis por 14 dias</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Setup em menos de 24h</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <motion.a
                                    href="https://wa.me/5513997591781?text=Ol%C3%A1,%20quero%20testar%20o%20Albert%20gr%C3%A1tis"
                                    target="_blank"
                                    title="Testar Albert IA Grátis"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center gap-2 w-full bg-[#1D5C59] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-[0_4px_14px_0_rgba(29,92,89,0.39)] hover:shadow-[0_6px_20px_rgba(29,92,89,0.23)]"
                                >
                                    Quero testar grátis agora
                                    <ArrowRight className="w-5 h-5" />
                                </motion.a>

                                <button
                                    onClick={closePopup}
                                    className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors py-2"
                                >
                                    Não, prefiro continuar perdendo leads
                                </button>
                            </div>
                        </div>

                        {/* Animated Float Element */}
                        <div className="absolute -bottom-4 right-12 opacity-10 pointer-events-none">
                            <Zap className="w-24 h-24 text-accent animate-float-3d" />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentPopup;
