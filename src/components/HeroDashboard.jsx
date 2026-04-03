import { Zap, TrendingUp, Users, Clock, CheckCircle, BarChart3 } from 'lucide-react';

const HeroDashboard = () => {
    return (
        <div className="relative z-10 w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 lg:p-8 border border-gray-100 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full -ml-12 -mb-12 blur-2xl"></div>

                <div className="relative space-y-6">
                    {/* Header with Status */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <div className="text-lg font-bold text-secondary">Albert IA</div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">IA Especializada Ativa</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Performance Metrics List */}
                    <div className="space-y-4">
                        <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase">1º Atendimento</p>
                                    <p className="text-sm font-bold text-secondary">Velocidade Máxima</p>
                                </div>
                            </div>
                            <div className="text-xl font-black text-primary">&lt; 60s</div>
                        </div>

                        <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase">Aproveitamento</p>
                                    <p className="text-sm font-bold text-secondary">Recuperação de Leads</p>
                                </div>
                            </div>
                            <div className="text-xl font-black text-primary">90%</div>
                        </div>

                        <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase">Follow-up</p>
                                    <p className="text-sm font-bold text-secondary">Automação Humanizada</p>
                                </div>
                            </div>
                            <div className="text-xl font-black text-primary">100%</div>
                        </div>

                        <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase">Qualificação</p>
                                    <p className="text-sm font-bold text-secondary">Foco em fechamento</p>
                                </div>
                            </div>
                            <div className="text-xl font-black text-primary">100%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroDashboard;
