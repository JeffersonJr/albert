import { useState, useEffect, useRef } from 'react';
import { Cookie, X, Settings, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Criar um ref global para expor a função
const cookieAlertRef = { openSettings: null };

const CookieAlert = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [cookieSettings, setCookieSettings] = useState({
        essential: true,
        performance: true,
        marketing: false,
        analytics: true
    });

    useEffect(() => {
        // Expor a função globalmente
        cookieAlertRef.openSettings = () => {
            setShowSettings(true);
        };

        // Verificar se o usuário já aceitou cookies
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Mostrar alerta após 1 segundo para melhor UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        const settings = {
            essential: true,
            performance: true,
            marketing: true,
            analytics: true
        };
        setCookieSettings(settings);
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieSettings', JSON.stringify(settings));
        setIsVisible(false);
        applyCookieSettings(settings);
    };

    const handleAcceptNecessary = () => {
        const settings = {
            essential: true,
            performance: false,
            marketing: false,
            analytics: false
        };
        setCookieSettings(settings);
        localStorage.setItem('cookieConsent', 'necessary');
        localStorage.setItem('cookieSettings', JSON.stringify(settings));
        setIsVisible(false);
        applyCookieSettings(settings);
    };

    const handleSaveSettings = () => {
        localStorage.setItem('cookieConsent', 'custom');
        localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
        setIsVisible(false);
        setShowSettings(false);
        applyCookieSettings(cookieSettings);
    };

    const applyCookieSettings = (settings) => {
        // Lógica para aplicar configurações de cookies
        if (!settings.marketing) {
            // Desativar cookies de marketing
            console.log('Cookies de marketing desativados');
        }
        if (!settings.analytics) {
            // Desativar cookies de analytics
            console.log('Cookies de analytics desativados');
        }
        if (!settings.performance) {
            // Desativar cookies de performance
            console.log('Cookies de performance desativados');
        }
    };

    const handleCookieChange = (category, value) => {
        if (category !== 'essential') {
            setCookieSettings(prev => ({
                ...prev,
                [category]: value
            }));
        }
    };

    // Exportar a função para uso externo
    useEffect(() => {
        window.openCookieSettings = () => {
            setShowSettings(true);
        };
        return () => {
            delete window.openCookieSettings;
        };
    }, []);

    if (!isVisible && !showSettings) return null;

    return (
        <>
            {/* Backdrop para configurações */}
            {showSettings && (
                <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Cookie className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Configurações de Cookies</h3>
                                </div>
                                <button
                                    onClick={() => setShowSettings(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <p className="text-gray-600 mb-6">
                                Usamos cookies para melhorar sua experiência em nosso site. Alguns são essenciais para o funcionamento, 
 enquanto outros nos ajudam a personalizar conteúdo e analisar o tráfego.
                            </p>

                            <div className="space-y-4">
                                {/* Cookies Essenciais */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <Shield className="w-5 h-5 text-primary" />
                                            <h4 className="font-semibold text-gray-900">Cookies Essenciais</h4>
                                        </div>
                                        <div className="w-12 h-6 bg-primary rounded-full relative">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Necessários para o funcionamento básico do site. Não podem ser desativados.
                                    </p>
                                </div>

                                {/* Cookies de Performance */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-accent" />
                                            <h4 className="font-semibold text-gray-900">Cookies de Performance</h4>
                                        </div>
                                        <button
                                            onClick={() => handleCookieChange('performance', !cookieSettings.performance)}
                                            className={`w-12 h-6 rounded-full relative transition-colors ${
                                                cookieSettings.performance ? 'bg-primary' : 'bg-gray-300'
                                            }`}
                                        >
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                                cookieSettings.performance ? 'right-1' : 'left-1'
                                            }`}></div>
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Ajudam a melhorar o desempenho e velocidade do site.
                                    </p>
                                </div>

                                {/* Cookies de Analytics */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <Settings className="w-5 h-5 text-accent" />
                                            <h4 className="font-semibold text-gray-900">Cookies de Analytics</h4>
                                        </div>
                                        <button
                                            onClick={() => handleCookieChange('analytics', !cookieSettings.analytics)}
                                            className={`w-12 h-6 rounded-full relative transition-colors ${
                                                cookieSettings.analytics ? 'bg-primary' : 'bg-gray-300'
                                            }`}
                                        >
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                                cookieSettings.analytics ? 'right-1' : 'left-1'
                                            }`}></div>
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Nos ajudam a entender como você usa nosso site para melhorá-lo.
                                    </p>
                                </div>

                                {/* Cookies de Marketing */}
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <Cookie className="w-5 h-5 text-accent" />
                                            <h4 className="font-semibold text-gray-900">Cookies de Marketing</h4>
                                        </div>
                                        <button
                                            onClick={() => handleCookieChange('marketing', !cookieSettings.marketing)}
                                            className={`w-12 h-6 rounded-full relative transition-colors ${
                                                cookieSettings.marketing ? 'bg-primary' : 'bg-gray-300'
                                            }`}
                                        >
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                                cookieSettings.marketing ? 'right-1' : 'left-1'
                                            }`}></div>
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Usados para personalizar anúncios e conteúdo relevante para você.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                <button
                                    onClick={handleSaveSettings}
                                    className="flex-1 bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                                >
                                    Salvar Configurações
                                </button>
                                <button
                                    onClick={() => setShowSettings(false)}
                                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Alerta Principal */}
            {isVisible && (
                <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-[9998] transform transition-all duration-300">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Cookie className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 mb-2">Usamos cookies 🍪</h4>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                Usamos cookies para melhorar sua experiência, personalizar conteúdo e analisar nosso tráfego. 
                                Ao continuar, você concorda com nossa{' '}
                                <Link to="/politica-privacidade" className="text-primary hover:text-primary-dark font-medium underline">
                                    Política de Privacidade
                                </Link>.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-2">
                                <button
                                    onClick={handleAcceptAll}
                                    className="flex-1 bg-primary text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
                                >
                                    Aceitar Todos
                                </button>
                                <button
                                    onClick={handleAcceptNecessary}
                                    className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-300 transition-colors"
                                >
                                    Apenas Essenciais
                                </button>
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="flex-1 bg-transparent text-primary py-2 px-4 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors border border-primary"
                                >
                                    Configurar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieAlert;
