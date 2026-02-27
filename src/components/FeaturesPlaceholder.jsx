import { BarChart3, TrendingUp, Users, Zap, Shield, MessageSquare, Activity } from 'lucide-react';

const FeaturesPlaceholder = () => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto">
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-3">
                        Dashboard Albert IA
                    </h3>
                    <p className="text-gray-600 max-w-sm">
                        Analytics em tempo real para sua imobiliária
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-4 text-center">
                        <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">400%</div>
                        <p className="text-xs text-gray-600">Aumento Vendas</p>
                    </div>
                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-4 text-center">
                        <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                        <div className="text-2xl font-bold text-accent">10K+</div>
                        <p className="text-xs text-gray-600">Leads Atendidos</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-4 text-center">
                        <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">3s</div>
                        <p className="text-xs text-gray-600">Tempo Resposta</p>
                    </div>
                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-4 text-center">
                        <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                        <div className="text-2xl font-bold text-accent">100%</div>
                        <p className="text-xs text-gray-600">Seguro</p>
                    </div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Atendimento 24/7</h4>
                            <p className="text-sm text-gray-600">Resposta automática em segundos</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Analytics Completo</h4>
                            <p className="text-sm text-gray-600">Métricas em tempo real</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Integração Total</h4>
                            <p className="text-sm text-gray-600">CRMs populares</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                            <Activity className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Performance</h4>
                            <p className="text-sm text-gray-600">Monitoramento ativo</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-4">
                    <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                        Ver Demonstração
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturesPlaceholder;
