import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = '5513997591781';
    const message = 'Olá, gostaria de mais informações sobre o Albert IA';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-[1000]">
            {/* Main WhatsApp Button */}
            <div className="relative group">
                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>

                {/* Button */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
                >
                    <MessageCircle className="w-8 h-8" />

                    {/* Notification Dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
                </a>

                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
                    Falar no WhatsApp
                    <div className="absolute top-full right-5 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
            </div>
        </div>
    );
};

export default WhatsAppButton;
