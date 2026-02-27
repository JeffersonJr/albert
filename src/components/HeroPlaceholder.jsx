import { Zap, Shield, Users, BarChart3, MessageSquare, TrendingUp } from 'lucide-react';

const HeroPlaceholder = () => {
    return (
        <div className="relative z-10">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-2xl p-8 max-w-lg mx-auto border border-primary/20 min-h-[500px] flex items-center justify-center">
                <div className="text-center space-y-6 w-full">
                    {/* Main Icon */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg flex-shrink-0">
                        <img src="/img/fav-white.png" alt="logo-albert" className="h-12" />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-primary-dark">
                        Albert IA Dashboard
                    </h3>
                    <p className="text-gray-600">
                        Controle completo do seu negócio imobiliário
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/70 rounded-lg p-4 text-center backdrop-blur-sm min-h-[120px] flex flex-col justify-center">
                            <Users className="w-8 h-8 text-primary mx-auto mb-2 flex-shrink-0" />
                            <p className="text-sm font-semibold text-gray-800">10.000+ Leads</p>
                            <p className="text-xs text-gray-600">Atendidos</p>
                        </div>
                        <div className="bg-white/70 rounded-lg p-4 text-center backdrop-blur-sm min-h-[120px] flex flex-col justify-center">
                            <Shield className="w-8 h-8 text-accent mx-auto mb-2 flex-shrink-0" />
                            <p className="text-sm font-semibold text-gray-800">100% Seguro</p>
                            <p className="text-xs text-gray-600">LGPD Compliance</p>
                        </div>
                        <div className="bg-white/70 rounded-lg p-4 text-center backdrop-blur-sm min-h-[120px] flex flex-col justify-center">
                            <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2 flex-shrink-0" />
                            <p className="text-sm font-semibold text-gray-800">Analytics</p>
                            <p className="text-xs text-gray-600">Em tempo real</p>
                        </div>
                        <div className="bg-white/70 rounded-lg p-4 text-center backdrop-blur-sm min-h-[120px] flex flex-col justify-center">
                            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2 flex-shrink-0" />
                            <p className="text-sm font-semibold text-gray-800">400%</p>
                            <p className="text-xs text-gray-600">Aumento</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="border-t border-primary/20 pt-6">
                        <div className="flex justify-around text-center">
                            <div className="flex-shrink-0">
                                <div className="text-3xl font-bold text-primary">3s</div>
                                <p className="text-xs text-gray-600">Resposta</p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="text-3xl font-bold text-accent">24/7</div>
                                <p className="text-xs text-gray-600">Disponível</p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="text-3xl font-bold text-primary">98%</div>
                                <p className="text-xs text-gray-600">Satisfação</p>
                            </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                            <MessageSquare className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>Atendimento automatizado</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                            <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>Integração total</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPlaceholder;
