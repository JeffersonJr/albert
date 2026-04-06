import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, LayoutGroup } from 'framer-motion';
import { Zap, Clock, ChevronRight, MoreHorizontal } from 'lucide-react';

const leads = [
    { id: 0, name: 'David Bowie', status: 'Starman em busca...', column: 'qualificando', avatar: 'DB', priority: 'Alta', time: '2h' },
    { id: 1, name: 'Marilyn Monroe', status: 'Diamantes e Jardins', column: 'qualificando', avatar: 'MM', priority: 'Média', time: '5h' },
    { id: 2, name: 'Freddie Mercury', status: 'We want it all!', column: 'conhecendo', avatar: 'FM', priority: 'Alta', time: '1d' },
    { id: 3, name: 'Madonna', status: 'Vogue! Loft Moema', column: 'conhecendo', avatar: 'M', priority: 'Baixa', time: '2d' },
    { id: 4, name: 'Elvis Presley', status: 'Blue Suede Home', column: 'agendado', avatar: 'EP', priority: 'Alta', time: '3d' },
    { id: 5, name: 'Prince', status: 'Purple Rain', column: 'negociando', avatar: 'P', priority: 'Média', time: '4d' },
    { id: 6, name: 'Audrey Hepburn', status: 'Breakfast at...', column: 'negociando', avatar: 'AH', priority: 'Alta', time: '1w' },
];

const columns = [
    { id: 'qualificando', title: 'Qualificando', color: 'bg-blue-500' },
    { id: 'conhecendo', title: 'Conhecendo', color: 'bg-purple-500' },
    { id: 'agendado', title: 'Agendado', color: 'bg-amber-500' },
    { id: 'negociando', title: 'Negociando', color: 'bg-emerald-500' },
];

const Kanban = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [canScroll, setCanScroll] = useState(false);
    const [scrollDistance, setScrollDistance] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Usa pixel real calculado dinamicamente para precisão absoluta
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

    useLayoutEffect(() => {
        const checkScroll = () => {
            if (containerRef.current) {
                const contentWidth = containerRef.current.scrollWidth;
                const viewportWidth = containerRef.current.offsetWidth;
                const distance = contentWidth - viewportWidth;
                
                setCanScroll(distance > 0);
                setScrollDistance(distance + 48); // +48 para compensar o padding px-6 do container e dar uma folga
            }
        };

        checkScroll();
        // Pequeno delay para garantir que o layout dos cards foi processado
        const timer = setTimeout(checkScroll, 100);
        
        window.addEventListener('resize', checkScroll);
        return () => {
            window.removeEventListener('resize', checkScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={sectionRef} className={`relative bg-[#F8FAFB] transition-all duration-500 ${canScroll ? 'h-[350vh]' : 'h-auto py-20 pb-12'}`}>
            <div className={`${canScroll ? 'sticky top-0 h-screen overflow-hidden flex flex-col justify-center' : 'relative'}`}>
                <div className="container mx-auto">
                    <div className="text-center mb-16 px-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary-dark rounded-full text-sm font-semibold mb-6">
                            <Zap className="w-4 h-4" />
                            Gestão Proativa de Leads
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                            Pipeline inteligente focado em conversão
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Acompanhe em tempo real a jornada de cada cliente. A Albert qualifica e organiza seus leads para que seu time foque apenas no que realmente importa: o fechamento do negócio.
                        </p>
                    </div>

                    <LayoutGroup>
                        <motion.div 
                            ref={containerRef}
                            style={{ x: canScroll ? x : 0 }}
                            className={`flex flex-row gap-5 lg:gap-6 px-6 lg:px-0 custom-scrollbar relative ${!canScroll && 'justify-center mx-auto'}`}
                        >
                            {columns.map(col => (
                                <div 
                                    key={col.id} 
                                    className={`rounded-[2rem] p-6 lg:p-7 border-2 border-gray-100 bg-white/70 shadow-sm transition-all duration-300 flex flex-col relative shrink-0 ${
                                        canScroll ? 'flex-1 min-w-[85vw] md:min-w-[350px] lg:min-w-[320px] snap-start' : 'w-full md:w-[320px] lg:w-[280px] xl:w-[320px]'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-8 px-1 relative z-10">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-3.5 h-3.5 ${col.color} rounded-full`}></div>
                                            <h3 className="font-black uppercase tracking-[0.15em] text-[11px] md:text-[12px] text-gray-400">
                                                {col.title}
                                            </h3>
                                            <div className="px-3 py-0.5 rounded-full text-[10px] md:text-xs font-bold shadow-sm border bg-gray-100 text-gray-400 border-gray-100">
                                                {leads.filter(l => l.column === col.id).length}
                                            </div>
                                        </div>
                                        <MoreHorizontal className="w-5 h-5 text-gray-300" />
                                    </div>

                                    <div className="space-y-4 flex-1 relative z-10">
                                        {leads.filter(l => l.column === col.id).map(lead => (
                                            <motion.div
                                                key={lead.id}
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ 
                                                    layout: { type: "spring", stiffness: 500, damping: 40 },
                                                    opacity: { duration: 0.2 }
                                                }}
                                                className="bg-white p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-gray-100 group hover:border-primary/40 transition-all hover:shadow-xl relative"
                                            >
                                                <div className="flex items-start gap-3 md:gap-4 mb-5 md:mb-6">
                                                    <div className="w-12 h-12 md:w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-sm md:text-base font-black text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white shadow-inner">
                                                        {lead.avatar}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-[15px] md:text-[16px] text-gray-800 leading-tight mb-1">{lead.name}</h4>
                                                        <p className="text-[9px] md:text-[10px] text-gray-400 font-bold truncate uppercase tracking-[0.1em]">{lead.status}</p>
                                                    </div>
                                                    <div className={`text-[8px] md:text-[9px] font-black px-2 md:px-2.5 py-1 rounded-full uppercase tracking-tighter shadow-sm border h-fit ${
                                                        lead.priority === 'Alta' ? 'bg-red-50 text-red-500 border-red-100' : 
                                                        lead.priority === 'Média' ? 'bg-amber-50 text-amber-500 border-amber-100' : 
                                                        'bg-blue-50 text-blue-500 border-blue-100'
                                                    }`}>
                                                        {lead.priority}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between pt-5 md:pt-6 border-t border-gray-50">
                                                    <div className="flex items-center gap-4 md:gap-5">
                                                        <div className="flex items-center gap-1.5 md:gap-2 text-gray-400">
                                                            <Clock className="w-3.5 h-3.5 md:w-4 h-4 text-primary/40" />
                                                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] md:tracking-widest">{lead.time}</span>
                                                        </div>
                                                        <div className="flex -space-x-1 grayscale opacity-30">
                                                            <div className="w-6 h-6 md:w-7 h-7 bg-primary/10 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                                                                <img src="/img/fav.png" alt="Albert" className="w-4 h-4 md:w-5 h-5" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-7 h-7 md:w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1 shadow-sm">
                                                        <ChevronRight className="w-4 h-4 md:w-5 h-5" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}

                                        {leads.filter(l => l.column === col.id).length === 0 && (
                                            <div className="py-20 md:py-24 text-center border-2 border-dashed border-gray-100 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center gap-3 md:gap-4 bg-white/40 backdrop-blur-sm shadow-inner transition-all hover:bg-white/60">
                                                <div className="w-12 h-12 md:w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-50">
                                                    <MoreHorizontal className="w-6 h-6 md:w-7 h-7 text-gray-200" />
                                                </div>
                                                <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-300">
                                                    Etapa Vazia
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </LayoutGroup>
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
};

export default Kanban;
