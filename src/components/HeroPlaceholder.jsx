import { Zap, Shield, Users, BarChart3 } from 'lucide-react';

const HeroPlaceholder = () => {
    return (
        <div className="relative z-10">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-primary/20">
                <div className="text-center space-y-6">
                    {/* Main Icon */}
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Zap className="w-10 h-10 text-primary" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-primary-dark">
                        Albert IA Dashboard
                    </h3>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/50 rounded-lg p-3 text-center">
                            <Users className="w-6 h-6 text-primary mx-auto mb-1" />
                            <p className="text-xs text-gray-700">10.000+ Leads</p>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3 text-center">
                            <Shield className="w-6 h-6 text-primary mx-auto mb-1" />
                            <p className="text-xs text-gray-700">100% Seguro</p>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3 text-center">
                            <BarChart3 className="w-6 h-6 text-primary mx-auto mb-1" />
                            <p className="text-xs text-gray-700">Analytics</p>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3 text-center">
                            <Zap className="w-6 h-6 text-primary mx-auto mb-1" />
                            <p className="text-xs text-gray-700">24/7 Ativo</p>
                        </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="border-t border-primary/20 pt-4">
                        <div className="flex justify-around text-center">
                            <div>
                                <div className="text-2xl font-bold text-primary">400%</div>
                                <p className="text-xs text-gray-600">Aumento Vendas</p>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-primary">3s</div>
                                <p className="text-xs text-gray-600">Resposta</p>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-primary">98%</div>
                                <p className="text-xs text-gray-600">Satisfação</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPlaceholder;
