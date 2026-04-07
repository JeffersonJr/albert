import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { motion, useScroll, useMotionValue, useMotionValueEvent, useSpring } from 'framer-motion';
import { Zap, Clock, ChevronRight, MoreHorizontal } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialLeadsData = {
    qualificando: [
        { id: "0", name: 'David Bowie', status: 'Starman em busca...', column: 'qualificando', avatar: 'DB', priority: 'Alta', time: '2h' },
        { id: "1", name: 'Marilyn Monroe', status: 'Diamantes e Jardins', column: 'qualificando', avatar: 'MM', priority: 'Média', time: '5h' }
    ],
    conhecendo: [
        { id: "2", name: 'Freddie Mercury', status: 'We want it all!', column: 'conhecendo', avatar: 'FM', priority: 'Alta', time: '1d' },
        { id: "3", name: 'Madonna', status: 'Vogue! Loft Moema', column: 'conhecendo', avatar: 'M', priority: 'Baixa', time: '2d' }
    ],
    agendado: [
        { id: "4", name: 'Elvis Presley', status: 'Blue Suede Home', column: 'agendado', avatar: 'EP', priority: 'Alta', time: '3d' }
    ],
    negociando: [
        { id: "5", name: 'Prince', status: 'Purple Rain Estate', column: 'negociando', avatar: 'P', priority: 'Média', time: '4d' },
        { id: "6", name: 'Audrey Hepburn', status: 'Breakfast at T.', column: 'negociando', avatar: 'AH', priority: 'Alta', time: '1w' }
    ]
};

const columns = [
    { id: 'qualificando', title: 'Qualificando', color: 'bg-blue-500' },
    { id: 'conhecendo', title: 'Conhecendo', color: 'bg-purple-500' },
    { id: 'agendado', title: 'Agendado', color: 'bg-amber-500' },
    { id: 'negociando', title: 'Negociando', color: 'bg-emerald-500' },
];

const Kanban = () => {
    // Handlers do Sistema Jira
    const onDragStartCard = () => {
        setIsDraggingCard(true); // Cancela o scroll da tela enquanto arrastamos
    };

    const onDragEndCard = (result) => {
        setIsDraggingCard(false);
        const { source, destination } = result;

        // Se soltar fora de um Droppable válido (fora das colunas)
        if (!destination) return;
        
        // Se soltar no mesmíssimo lugar que começou
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        const newLeads = { ...leads };
        const sourceCol = [...newLeads[source.droppableId]];
        const destCol = source.droppableId === destination.droppableId ? sourceCol : [...newLeads[destination.droppableId]];

        // Removemos o alvo do array de origem
        const [movedCard] = sourceCol.splice(source.index, 1);
        movedCard.column = destination.droppableId; // Sincroniza metadados

        // Inserimos na posição exata do array de destino
        destCol.splice(destination.index, 0, movedCard);

        // Commita as atualizações finais de volta pro state matrix
        newLeads[source.droppableId] = sourceCol;
        if (source.droppableId !== destination.droppableId) {
            newLeads[destination.droppableId] = destCol;
        }

        setLeads(newLeads);
    };

    if (!isMounted) return null;

    return (
        <section className={`relative bg-[#F8FAFB] transition-all duration-500 py-20 pb-12`}>
            <DragDropContext onDragStart={onDragStartCard} onDragEnd={onDragEndCard}>
                <div className={`relative`}>
                    <div className="container mx-auto">
                        <div className="text-center mb-16 px-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary-dark rounded-full text-sm font-semibold mb-6">
                                <Zap className="w-4 h-4" />
                                Controle Visual do Funil
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
                                Domine cada etapa da negociação e feche mais negócios
                            </h2>
                            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                                Arraste, classifique e avance seus leads em uma esteira intuitiva desenhada nos mais altos padrões de design. Elimine o caos operacional, não perca o *timing* de nenhum cliente e veja seu faturamento acelerar.
                            </p>
                        </div>

                        <div 
                            className={`flex flex-row gap-5 lg:gap-6 px-6 lg:px-0 w-full overflow-x-auto pb-8 snap-x snap-mandatory`}
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {columns.map(col => (
                                <div 
                                    key={col.id} 
                                    className={`rounded-[2rem] p-6 lg:p-7 border-2 border-gray-100 bg-white/70 shadow-sm transition-all duration-300 flex flex-col relative shrink-0 snap-center w-[85vw] md:w-[320px] lg:w-[280px] xl:w-[320px]`}
                                >
                                    <div className="flex items-center justify-between mb-8 px-1 relative z-10 select-none">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-3.5 h-3.5 ${col.color} rounded-full`}></div>
                                            <h3 className="font-black uppercase tracking-[0.15em] text-[11px] md:text-[12px] text-gray-400 pointer-events-none">
                                                {col.title}
                                            </h3>
                                            <div className="px-3 py-0.5 rounded-full text-[10px] md:text-xs font-bold shadow-sm border bg-gray-100 text-gray-400 border-gray-100">
                                                {leads[col.id].length}
                                            </div>
                                        </div>
                                        <MoreHorizontal className="w-5 h-5 text-gray-300" />
                                    </div>

                                    <Droppable droppableId={col.id}>
                                        {(provided, snapshot) => (
                                            <div 
                                                className={`flex-1 relative z-10 transition-colors p-2 -mx-2 rounded-2xl min-h-[150px] ${
                                                    snapshot.isDraggingOver ? 'bg-primary/5 border-dashed border-2 border-primary/20' : 'border-2 border-transparent'
                                                }`}
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                <div className="space-y-4">
                                                    {leads[col.id].map((lead, index) => (
                                                        <Draggable key={lead.id} draggableId={lead.id} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        ...provided.draggableProps.style
                                                                    }}
                                                                    className={`bg-white p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border transition-all ${
                                                                        snapshot.isDragging 
                                                                            ? 'border-primary shadow-2xl ring-4 ring-primary/20 opacity-95 rotate-3 z-50 cursor-grabbing' 
                                                                            : 'shadow-sm border-gray-100 hover:border-primary/40 hover:shadow-xl cursor-grab'
                                                                    }`}
                                                                >
                                                                    <div className="flex items-start gap-3 md:gap-4 mb-5 md:mb-6">
                                                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/5 flex items-center justify-center text-sm md:text-base font-black text-primary shrink-0 transition-all shadow-inner">
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
                                                                                <div className="w-6 h-6 md:w-7 md:h-7 bg-primary/10 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                                                                                    <img src="/img/fav.png" alt="Albert" className="w-4 h-4 md:w-5 md:h-5" width="24" height="24" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all shadow-sm ${
                                                                            snapshot.isDragging ? 'bg-primary text-white' : 'bg-gray-50 text-gray-300'
                                                                        }`}>
                                                                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                    
                                                    {/* Trata visualmente a coluna vazia enquanto não estiverem arrastando NADA para ela */}
                                                    {leads[col.id].length === 0 && !snapshot.isDraggingOver && (
                                                        <div className="py-20 md:py-24 text-center border-2 border-dashed border-gray-100 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center gap-3 md:gap-4 bg-white/40 backdrop-blur-sm shadow-inner transition-all hover:bg-white/60">
                                                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-50">
                                                                <MoreHorizontal className="w-6 h-6 md:w-7 md:h-7 text-gray-200" />
                                                            </div>
                                                            <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-300">
                                                                Arraste Cartões
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DragDropContext>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
};

export default Kanban;
