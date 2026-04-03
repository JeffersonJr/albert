import { useState } from 'react';
import { 
    MessageSquare, Users, Zap, Shield, Search, MoreHorizontal, 
    Phone, Mail, Calendar, Mic, Paperclip, Smile, Send, 
    MoreVertical, Check, CheckCheck, User, AtSign, Clock, Tag, ChevronRight, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturesDashboard = () => {
    const [activeTab, setActiveTab] = useState('responder');
    const [selectedContact, setSelectedContact] = useState(0);

    const contacts = [
        { id: 0, name: 'David Bowie', status: 'Área pet para o seu Starman! 👨‍🎤', time: '1d 3h', unread: 1, avatar: 'DB' },
        { id: 1, name: 'Marilyn Monroe', status: 'Iluminação natural espetacular 💎', time: '24h 24h', unread: 1, avatar: 'MM' },
        { id: 2, name: 'Freddie Mercury', status: 'Espaço de sobra para os campeões! 👑', time: '3d 2d', unread: 9, avatar: 'FM' },
        { id: 3, name: 'Madonna', status: 'Loft industrial na Vila Madalena 💃', time: '3d 3d', unread: 6, avatar: 'M' },
        { id: 4, name: 'Elvis Presley', status: 'Condomínio discreto e seguro 🎸', time: '6d 6d', unread: 1, avatar: 'EP' },
        { id: 5, name: 'Prince', status: 'Mármore Carrara legítimo 💜', time: '6d 6d', unread: 0, avatar: 'P' },
        { id: 6, name: 'Audrey Hepburn', status: 'Cobertura neoclássica no Ibirapuera 🕶️', time: '6d 6d', unread: 1, avatar: 'AH' },
    ];

    const conversationData = {
        0: [ // David Bowie
            { id: 1, type: 'lead', text: 'Gostaria de saber se o condomínio aceita pets? Tenho um Starman em casa que não pode ficar de fora! 👨‍🎤', time: 'Ontem, 2:15 PM' },
            { id: 2, type: 'agent', text: 'Olá David! Aceitamos sim. Temos inclusive uma área pet no térreo, perfeita para o seu Starman espacial!', time: 'Ontem, 2:16 PM', status: 'read' },
            { id: 3, type: 'lead', text: 'Genial! E o estúdio? Tem isolamento acústico?', time: 'Ontem, 2:30 PM' },
            { id: 4, type: 'agent', text: 'O terceiro quarto é preparado com tratamento acústico de série. Área pet para o seu Starman! 👨‍🎤', time: 'Ontem, 2:31 PM', status: 'sent' },
        ],
        1: [ // Marilyn Monroe
            { id: 1, type: 'lead', text: 'Qual a iluminação natural desse loft pela manhã? Gosto de luz para começar o dia. 💎', time: 'Apr 1, 6:03 PM' },
            { id: 2, type: 'agent', text: 'Marilyn, a iluminação é espetacular! O loft é voltado para o sol nascente, perfeito para te ver brilhar!', time: 'Apr 1, 6:04 PM', status: 'read' },
            { id: 3, type: 'agent', text: 'Iluminação natural espetacular 💎. Quer que eu te envie um vídeo do nascer do sol naquela varanda?', time: 'Apr 1, 6:05 PM', status: 'sent' },
        ],
        2: [ // Freddie Mercury
            { id: 1, type: 'lead', text: 'O terraço é grande o suficiente para uma festa real? We want it all! 👑', time: '3 dias atrás' },
            { id: 2, type: 'agent', text: 'Freddie, o terraço gourmet tem 45m²! Espaço de sobra para você e todos os campeões comemorarem!', time: '3 dias atrás', status: 'read' },
            { id: 3, type: 'lead', text: 'Don\'t stop me now! Tem vista para o parque?', time: '3 dias atrás' },
            { id: 4, type: 'agent', text: 'Vista panorâmica definitiva para o parque. Espaço de sobra para os campeões! 👑', time: '3 dias atrás', status: 'sent' },
        ],
        3: [ // Madonna
            { id: 1, type: 'lead', text: 'Procuro um loft industrial moderno que seja expressivo. Just like a prayer! 💃', time: 'Hoje, 10:00 AM' },
            { id: 2, type: 'agent', text: 'Olá Madonna! Temos um loft incrível na Vila Madalena com pé direito duplo e concreto aparente. Super expressivo!', time: 'Hoje, 10:01 AM', status: 'read' },
            { id: 3, type: 'lead', text: 'Vogue! Aceita proposta à vista?', time: 'Hoje, 10:05 AM' },
            { id: 4, type: 'agent', text: 'Recebemos sim! Loft industrial na Vila Madalena 💃. Gostaria de agendar uma visita hoje?', time: 'Hoje, 10:06 AM', status: 'sent' },
        ],
        4: [ // Elvis Presley
            { id: 1, type: 'lead', text: 'Tem residências em bairros tranquilos longe de Graceland? O Rei precisa de paz. 🎸', time: '6 dias atrás' },
            { id: 2, type: 'agent', text: 'Elvis, temos opções em condomínios fechados super discretos e seguros. Tranquilidade total para o Rei!', time: '6 dias atrás', status: 'read' },
            { id: 3, type: 'agent', text: 'Condomínio discreto e seguro 🎸. Ninguém vai te incomodar em um Blue Suede Home.', time: '6 dias atrás', status: 'sent' },
        ],
        5: [ // Prince
            { id: 1, type: 'lead', text: 'Este imóvel tem detalhes em roxo ou mármore de Carrara? Purple rain style. 💜', time: '6 dias atrás' },
            { id: 2, type: 'agent', text: 'O acabamento é em mármore Carrara legítimo em todos os banheiros. O roxo podemos personalizar na pintura!', time: '6 dias atrás', status: 'read' },
            { id: 3, type: 'agent', text: 'Mármore Carrara legítimo 💜. A suíte master é digna da realeza.', time: '6 dias atrás', status: 'sent' },
        ],
        6: [ // Audrey Hepburn
            { id: 1, type: 'lead', text: 'Procuro algo clássico e elegante perto de parques. Breakfast at Tiffany\'s vibes. 🕶️', time: '6 dias atrás' },
            { id: 2, type: 'agent', text: 'Audrey, temos uma cobertura neoclássica de frente para o Parque do Ibirapuera. Elegância pura para você!', time: '6 dias atrás', status: 'read' },
            { id: 3, type: 'agent', text: 'Cobertura neoclássica no Ibirapuera 🕶️. O prédio é uma verdadeira joia arquitetônica.', time: '6 dias atrás', status: 'sent' },
        ],
    };

    const messages = conversationData[selectedContact] || [];

    return (
        <div className="w-full max-w-6xl mx-auto h-[650px] bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden flex flex-col">
            {/* Top Bar */}
            <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 z-20">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center p-1.5">
                            <img src="/img/fav-white.png" alt="Albert" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                    <div className="relative hidden md:block">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input 
                            type="text" 
                            placeholder="Pesquisar mensagens" 
                            className="pl-10 pr-4 py-2 bg-gray-100 rounded-full text-xs w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors">
                        <Check className="w-4 h-4" />
                        Resolver
                    </button>
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-gray-100">
                        <User className="w-full h-full p-2 text-gray-500" />
                    </div>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Left Mini Sidebar */}
                <aside className="w-16 bg-white border-r border-gray-100 flex flex-col items-center py-4 gap-6 z-10">
                    <div className="bg-blue-50 text-primary p-3 rounded-xl">
                        <MessageSquare className="w-6 h-6" />
                    </div>
                    <AtSign className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    <Clock className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    <Tag className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    <div className="mt-auto">
                        <Users className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    </div>
                </aside>

                {/* Contacts List */}
                <aside className="w-72 bg-white border-r border-gray-100 flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-gray-50 flex items-center justify-between">
                        <h4 className="font-bold text-gray-800">Conversas</h4>
                        <div className="flex gap-2">
                           <div className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500 font-bold uppercase">Todos</div>
                           <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                        </div>
                    </div>
                    
                    <div className="flex bg-gray-50/50 p-2 border-b border-gray-100">
                        <div className="flex-1 text-center py-1.5 text-xs font-bold text-primary border-b-2 border-primary">Minhas <span className="text-gray-400 font-medium">8</span></div>
                        <div className="flex-1 text-center py-1.5 text-xs font-bold text-gray-400 grayscale">Não atribuídas <span className="opacity-50">194</span></div>
                    </div>

                    <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
                        {contacts.map((contact) => (
                            <motion.div 
                                key={contact.id}
                                whileHover={{ x: 4, backgroundColor: 'rgba(243, 244, 246, 0.5)' }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedContact(contact.id)}
                                className={`flex items-start gap-3 p-4 cursor-pointer transition-all border-b border-gray-50 relative group ${selectedContact === contact.id ? 'bg-blue-50/50' : 'hover:bg-gray-50/50'}`}
                            >
                                    <div className="relative">
                                        <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center text-sm font-bold ${selectedContact === contact.id ? 'bg-[#2D8783] text-white' : 'bg-primary/10 text-primary'}`}>
                                            {contact.avatar}
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                    </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1 mb-1">
                                        <p className="font-bold text-gray-800 truncate text-sm">{contact.name}</p>
                                        <span className="text-[10px] text-gray-400 whitespace-nowrap">{contact.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 truncate italic">
                                        {conversationData[contact.id]?.[conversationData[contact.id].length - 1]?.text || contact.status}
                                    </p>
                                </div>
                                {contact.unread > 0 && (
                                    <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm">
                                        {contact.unread}
                                    </div>
                                )}
                                {selectedContact === contact.id && (
                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary rounded-l-full"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </aside>

                {/* Chat Area */}
                <main className="flex-1 flex flex-col bg-[#F8FAFB] relative overflow-hidden">
                    {/* Chat Header */}
                    <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0 z-10">
                        <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                    {contacts.find(c => c.id === selectedContact).avatar}
                                </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-800">{contacts[selectedContact].name}</h4>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Online</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                            <MoreHorizontal className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                        </div>
                    </header>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                        <AnimatePresence mode="popLayout">
                            {messages.map((msg) => (
                                <motion.div 
                                    key={msg.id} 
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex flex-col ${msg.type === 'agent' ? 'items-end' : 'items-start'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl relative shadow-sm ${
                                        msg.type === 'agent' 
                                        ? 'bg-primary text-white rounded-tr-none' 
                                        : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                                    }`}>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                        <div className="flex items-center justify-end gap-1 mt-2">
                                            <span className={`text-[9px] ${msg.type === 'agent' ? 'text-white/60' : 'text-gray-400'}`}>
                                                {msg.time}
                                            </span>
                                            {msg.type === 'agent' && (
                                                msg.status === 'read' ? <CheckCheck className="w-3 h-3 text-white/80" /> : <Check className="w-3 h-3 text-white/80" />
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Input Area */}
                    <footer className="p-4 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex gap-4 mb-4">
                            <button 
                                onClick={() => setActiveTab('responder')}
                                className={`text-xs font-bold pb-2 transition-all relative ${activeTab === 'responder' ? 'text-primary' : 'text-gray-400'}`}
                            >
                                Responder
                                {activeTab === 'responder' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                            </button>
                            <button 
                                onClick={() => setActiveTab('nota')}
                                className={`text-xs font-bold pb-2 transition-all relative ${activeTab === 'nota' ? 'text-[#EAB308]' : 'text-gray-400'}`}
                            >
                                Nota Privada
                                {activeTab === 'nota' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EAB308] rounded-full" />}
                            </button>
                        </div>
                        <div className="relative">
                            <textarea 
                                placeholder={activeTab === 'responder' ? "Digite sua mensagem... (Shift + Enter para nova linha)" : "Digite uma nota interna..."}
                                className={`w-full min-h-[80px] p-4 rounded-xl text-sm focus:outline-none transition-all border ${activeTab === 'responder' ? 'bg-gray-50 border-gray-100 focus:bg-white focus:border-primary/30' : 'bg-yellow-50/30 border-yellow-101 focus:bg-yellow-50/50 focus:border-yellow-200'}`}
                            />
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                                        <Smile className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                                        <Paperclip className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                                        <Mic className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                                <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </footer>
                </main>

                {/* Right Sidebar - Contact Details */}
                <aside className="w-64 bg-white border-l border-gray-100 overflow-y-auto hidden lg:block custom-scrollbar">
                    <div className="p-6 text-center border-b border-gray-50">
                                <div className="w-32 h-32 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary mb-4 border-4 border-white shadow-lg mx-auto">
                                    {contacts.find(c => c.id === selectedContact).image ? (
                                        <img src={contacts.find(c => c.id === selectedContact).image} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        contacts.find(c => c.id === selectedContact).avatar
                                    )}
                                </div>
                        <h4 className="font-bold text-gray-800 text-lg">{contacts[selectedContact].name}</h4>
                        <div className="flex items-center justify-center gap-2 mt-2">
                             <Mail className="w-3 h-3 text-gray-400" />
                             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Não disponível</span>
                        </div>
                    </div>

                    <div className="p-6 space-y-8">
                        <div>
                            <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Ações da Conversa</h5>
                            <div className="space-y-4">
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">Agente Atribuído</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                                <img src="/img/fav-white.png" alt="Albert" className="w-4 h-4 invert" />
                                            </div>
                                            <span className="text-xs font-bold text-gray-700">Albert</span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 group cursor-pointer hover:border-primary/30 transition-colors">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">Prioridade</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-gray-700">Alta</span>
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Macros</h5>
                                <button className="text-[10px] font-bold text-primary">Gerenciar</button>
                            </div>
                            <div className="p-4 border-2 border-dashed border-gray-100 rounded-2xl text-center group hover:border-primary/20 transition-colors cursor-pointer">
                                <p className="text-[10px] text-gray-400 font-bold">Nenhuma macro encontrada</p>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Atributos do Contato</h5>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-500">Origem</span>
                                    <span className="font-bold text-primary">WhatsApp</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-500">ID</span>
                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] font-mono">#9421</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #E5E7EB;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #D1D5DB;
                }
            `}} />
        </div>
    );
};

export default FeaturesDashboard;
