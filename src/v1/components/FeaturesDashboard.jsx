import { BarChart3, TrendingUp, Users, Zap, Shield, MessageSquare, CheckCircle2 } from 'lucide-react';

const FeaturesDashboard = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 lg:p-8">
            <div className="bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Sidebar - Navigation Mockup */}
                    <div className="lg:col-span-3 bg-gray-50/50 p-6 border-r border-gray-100 hidden lg:block">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-bold text-primary-dark">Albert</span>
                            </div>

                            <nav className="space-y-1">
                                {[
                                    { icon: BarChart3, label: 'Resumo', active: true },
                                    { icon: Users, label: 'Leads', active: false },
                                    { icon: MessageSquare, label: 'Conversas', active: false },
                                    { icon: Zap, label: 'Automações', active: false },
                                    { icon: Shield, label: 'Segurança', active: false }
                                ].map((item, i) => (
                                    <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${item.active ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700'}`}>
                                        <item.icon className="w-4 h-4" />
                                        {item.label}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Feed Content */}
                    <div className="lg:col-span-9 p-6 lg:p-8">
                        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-primary-dark">Performance de Vendas</h3>
                                <p className="text-sm text-gray-600">Relatório atualizado em tempo real</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="px-4 py-2 bg-primary/5 text-primary rounded-full text-xs font-bold">Hoje</div>
                                <div className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-full text-xs font-bold transition-colors cursor-pointer" aria-label="Ver dados da última semana">Última Semana</div>
                            </div>
                        </header>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-5 text-white shadow-lg shadow-primary/20">
                                <TrendingUp className="w-6 h-6 mb-4 text-primary-light" />
                                <div className="text-2xl font-black mb-1">400%</div>
                                <p className="text-xs font-bold opacity-70 uppercase tracking-wider">Crescimento</p>
                            </div>
                            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                                <Users className="w-6 h-6 mb-4 text-accent" />
                                <div className="text-2xl font-black mb-1 text-primary-dark">10K+</div>
                                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">Leads Qualificados</p>
                            </div>
                            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                                <Zap className="w-6 h-6 mb-4 text-yellow-500" />
                                <div className="text-2xl font-black mb-1 text-primary-dark">3s</div>
                                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">Resp. Média</p>
                            </div>
                        </div>

                        {/* Recent Activity List */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4">Atividade Recente</h4>
                            {[
                                { user: 'Ana Silva', action: 'Agendou uma visita', time: '2 min atrás', type: 'success' },
                                { user: 'Leandro Melo', action: 'Lead qualificado (Venda)', time: '15 min atrás', type: 'info' },
                                { user: 'Propriedade #102', action: 'Proposta enviada', time: '1 hora atrás', type: 'success' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100/50 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-primary-dark">{item.user}</p>
                                            <p className="text-xs text-gray-600">{item.action}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-600 uppercase">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesDashboard;
