import { useState } from 'react';
import { MessageCircle, X, Phone, MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const phoneNumber = '5513997591781';
    const message = 'Olá, gostaria de mais informações sobre o Albert IA';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const quickMessages = [
        { 
            icon: MessageSquare, 
            text: 'Solicitar Demonstração', 
            message: 'Olá, gostaria de agendar uma demonstração do Albert IA'
        },
        { 
            icon: Phone, 
            text: 'Falar com Especialista', 
            message: 'Olá, gostaria de falar com um especialista do Albert IA'
        },
        { 
            icon: MessageCircle, 
            text: 'Dúvidas sobre Planos', 
            message: 'Olá, tenho dúvidas sobre os planos do Albert IA'
        }
    ];

    const handleQuickMessage = (msg) => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end gap-3">
            {/* Quick Messages */}
            {isOpen && (
                <div className="flex flex-col gap-2 mb-2">
                    {quickMessages.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-3 flex items-center gap-3 min-w-[200px] transform transition-all duration-300 animate-fadeIn"
                                style={{ 
                                    animationDelay: `${index * 100}ms`,
                                    opacity: 0,
                                    animation: 'fadeIn 0.3s ease-out forwards'
                                }}
                            >
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <button
                                    onClick={() => handleQuickMessage(item.message)}
                                    className="text-sm text-gray-700 hover:text-primary font-medium text-left transition-colors"
                                >
                                    {item.text}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Main WhatsApp Button */}
            <div className="relative">
                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
                
                {/* Button */}
                <button
                    onClick={() => window.open(whatsappUrl, '_blank')}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center group"
                >
                    {/* Main Icon */}
                    <MessageCircle 
                        className={`w-6 h-6 transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : isHovered ? 'scale-110' : ''
                        }`} 
                    />
                    
                    {/* Hover Icon */}
                    <MessageCircle 
                        className="absolute w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Notification Dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
                </button>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                >
                    <X 
                        className={`w-3 h-3 text-gray-600 transition-transform duration-300 ${
                            isOpen ? 'rotate-0' : 'rotate-180'
                        }`} 
                    />
                </button>
            </div>

            {/* Tooltip */}
            {!isOpen && (
                <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Fale conosco no WhatsApp
                    <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
            )}
        </div>
    );
};

export default WhatsAppButton;
