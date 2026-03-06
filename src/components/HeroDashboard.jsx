import { Zap, Shield, Users, BarChart3 } from 'lucide-react';

const HeroDashboard = () => {
    return (
        <div className="relative z-10 w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
            <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 lg:p-8 border border-gray-100 relative overflow-hidden">
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
                                <h3 className="text-lg font-bold text-primary-dark">Albert IA</h3>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider">Ativo Agora</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 py-1 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="text-xs font-bold text-gray-400">v2.4.0</span>
                        </div>
                    </div>

                    {/* Primary Metric */}
                    <div className="bg-primary-dark rounded-2xl p-6 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <TrendingUp className="w-24 h-24" />
                        </div>
                        <p className="text-primary-light/80 text-sm font-medium mb-1">Performance Semanal</p>
                        <div className="flex items-baseline gap-2">
                            <h4 className="text-4xl font-black">+400%</h4>
                            <span className="text-xs font-bold text-accent-light bg-accent/20 px-2 py-0.5 rounded-full">Recorde</span>
                        </div>
                        <p className="text-[10px] text-white/40 mt-4 font-mono">ID: ALBERT-SH-001293</p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <Users className="w-4 h-4 text-blue-500" />
                                </div>
                                <span className="text-xs font-bold text-gray-600 uppercase">Leads</span>
                            </div>
                            <div className="text-xl font-bold text-primary-dark">10.428</div>
                            <div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
                                <div className="bg-blue-500 h-full w-[85%] rounded-full"></div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                                    <BarChart3 className="w-4 h-4 text-accent" />
                                </div>
                                <span className="text-xs font-bold text-gray-600 uppercase">ROI</span>
                            </div>
                            <div className="text-xl font-bold text-primary-dark">12.4x</div>
                            <div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
                                <div className="bg-accent h-full w-[92%] rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Stats */}
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex -space-x-2" aria-label="Usuários ativos">
                            {['C', 'M', 'R', 'J'].map((initial, i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white" style={{ background: ['#2D8783', '#1D5C59', '#4A9E9A', '#1E5C59'][i] }}>
                                    {initial}
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-[10px] font-bold">+12</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Secure Cloud</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Supporting Lucide Icon not in main imports
const TrendingUp = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

export default HeroDashboard;
