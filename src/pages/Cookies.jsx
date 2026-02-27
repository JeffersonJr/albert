import { useState, useEffect } from 'react';
import { Zap, Cookie, Settings, Eye, EyeOff, X, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const Cookies = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [cookieSettings, setCookieSettings] = useState({
        essential: true,
        performance: true,
        marketing: false,
        analytics: true
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCookieChange = (category, value) => {
        setCookieSettings(prev => ({
            ...prev,
            [category]: value
        }));
    };

    const saveSettings = () => {
        // Salvar preferências do usuário
        localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
        // Aplicar configurações de cookies
        applyCookieSettings();
        // Mostrar notificação de sucesso
        alert('Configurações de cookies salvasas com sucesso!');
    };

    const applyCookieSettings = () => {
        // Lógica para aplicar configurações de cookies
        if (!cookieSettings.marketing) {
            // Remover cookies de marketing
            document.querySelectorAll('[data-cookie-category="marketing"]').forEach(el => {
                el.remove();
            });
        }
        if (!cookieSettings.analytics) {
            // Remover cookies de analytics
            document.querySelectorAll('[data-cookie-category="analytics"]').forEach(el => {
                el.remove();
            });
        }
        if (!cookieSettings.performance) {
            // Remover cookies de performance
            document.querySelectorAll('[data-cookie-category="performance"]').forEach(el => {
                el.remove();
            });
        }
    };

    const acceptAllCookies = () => {
        setCookieSettings({
            essential: true,
            performance: true,
            marketing: true,
            analytics: true
        });
        saveSettings();
    };

    const rejectNonEssentialCookies = () => {
        setCookieSettings({
            essential: true,
            performance: false,
            marketing: false,
            analytics: false
        });
        saveSettings();
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            <Cookie className="w-4 h-4" />
                            Política de Cookies
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-dark leading-tight">
                            Gerencie suas preferências de <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">cookies</span>
                        </h1>
                        
                        <p className="text-xl text-[#666666] mb-12 leading-relaxed">
                            Entenda como usamos cookies para melhorar sua experiência e proteger sua privacidade
                        </p>
                    </div>
                </div>
            </section>

            {/* Cookie Banner */}
            <section className="py-8 bg-yellow-50 border-y border-yellow-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <Cookie className="w-6 h-6 text-yellow-600" />
                                    <h3 className="text-lg font-semibold text-primary-dark">
                                        Usamos cookies para melhorar sua experiência
                                    </h3>
                                </div>
                                <p className="text-[#666666] text-sm">
                                    Utilizamos cookies essenciais para o funcionamento do site, cookies de performance 
                                    para otimizar a velocidade e cookies de marketing/analytics para personalizar conteúdo e anúncios.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={rejectNonEssentialCookies}
                                    className="px-6 py-3 border border-gray-300 rounded-full text-[#666666] hover:bg-gray-50 transition-colors"
                                >
                                    Rejeitar Não Essenciais
                                </button>
                                <button
                                    onClick={acceptAllCookies}
                                    className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                                >
                                    Aceitar Todos
                                </button>
                                <button
                                    onClick={() => document.getElementById('cookie-settings').scrollIntoView({ behavior: 'smooth' })}
                                    className="px-6 py-3 border border-gray-300 rounded-full text-[#666666] hover:bg-gray-50 transition-colors"
                                >
                                    Personalizar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section id="cookie-settings" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-primary-dark">
                            Configurações de Cookies
                        </h2>

                        <div className="space-y-8">
                            {/* Essential Cookies */}
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <Cookie className="w-6 h-6 text-primary" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-primary-dark">
                                                Cookies Essenciais
                                            </h3>
                                            <p className="text-[#666666] text-sm">
                                                Necessários para o funcionamento básico do site
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-green-600 font-medium">Sempre ativos</span>
                                        <Eye className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                                <p className="text-[#666666]">
                                    Estes cookies são essenciais para o funcionamento do nosso site. Eles permitem que você navegue 
                                    pelo site e use recursos básicos como login, carrinho de compras e áreas seguras.
                                </p>
                                <div className="bg-white rounded-lg p-4 mt-4">
                                    <h4 className="font-semibold text-primary-dark mb-2">Cookies essenciais incluem:</h4>
                                    <ul className="text-sm text-[#666666] space-y-1">
                                        <li>• Autenticação e login</li>
                                        <li>• Carrinho de compras e processamento de pagamentos</li>
                                        <li>• Preferências de idioma e região</li>
                                        <li>• Segurança e prevenção de fraudes</li>
                                        <li>• Funcionalidades básicas do site</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Performance Cookies */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <Settings className="w-6 h-6 text-primary" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-primary-dark">
                                                Cookies de Performance
                                            </h3>
                                            <p className="text-[#666666] text-sm">
                                                Para otimizar a velocidade do site
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={cookieSettings.performance}
                                                onChange={(e) => handleCookieChange('performance', e.target.checked)}
                                                className="sr-only"
                                                disabled={false}
                                            />
                                            <div className={`w-12 h-6 rounded-full transition-colors ${
                                                cookieSettings.performance ? 'bg-primary' : 'bg-gray-200'
                                            }`}>
                                                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                                    cookieSettings.performance ? 'translate-x-6' : 'translate-x-1'
                                                }`} />
                                            </div>
                                        </label>
                                        <span className="text-sm text-[#666666]">
                                            {cookieSettings.performance ? 'Ativado' : 'Desativado'}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-[#666666]">
                                    Estes cookies ajudam a melhorar a performance do nosso site, armazenando 
                                    informações sobre suas visitas e preferências para otimizar a experiência.
                                </p>
                                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                                    <h4 className="font-semibold text-primary-dark mb-2">Cookies de performance incluem:</h4>
                                    <ul className="text-sm text-[#666666] space-y-1">
                                        <li>• Cache de conteúdo para carregamento rápido</li>
                                        <li>• Otimização de imagens e recursos</li>
                                        <li>• Análise de padrões de uso</li>
                                        <li>• Balanceamento de carga do servidor</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-6 h-6 text-primary" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-primary-dark">
                                                Cookies de Marketing
                                            </h3>
                                            <p className="text-[#666666] text-sm">
                                                Para personalizar anúncios e conteúdo
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={cookieSettings.marketing}
                                                onChange={(e) => handleCookieChange('marketing', e.target.checked)}
                                                className="sr-only"
                                                disabled={false}
                                            />
                                            <div className={`w-12 h-6 rounded-full transition-colors ${
                                                cookieSettings.marketing ? 'bg-primary' : 'bg-gray-200'
                                            }`}>
                                                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                                    cookieSettings.marketing ? 'translate-x-6' : 'translate-x-1'
                                                }`} />
                                            </div>
                                        </label>
                                        <span className="text-sm text-[#666666]">
                                            {cookieSettings.marketing ? 'Ativado' : 'Desativado'}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-[#666666]">
                                    Estes cookies nos permitem personalizar o conteúdo e anúncios com base em seus 
                                    interesses e comportamento. Eles também ajudam a medir a eficácia de nossas 
                                    campanhas de marketing.
                                </p>
                                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                                    <h4 className="font-semibold text-primary-dark mb-2">Cookies de marketing incluem:</h4>
                                    <ul className="text-sm text-[#666666] space-y-1">
                                        <li>• Pixels de rastreamento de redes sociais</li>
                                        <li>• Cookies de afiliados e parceiros</li>
                                        <li>• Personalização de anúncios</li>
                                        <li>• Remarketing e retargeting</li>
                                        <li>• Análise de campanhas</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <Eye className="w-6 h-6 text-primary" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-primary-dark">
                                                Cookies de Analytics
                                            </h3>
                                            <p className="text-[#666666] text-sm">
                                                Para analisar o uso do site
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={cookieSettings.analytics}
                                                onChange={(e) => handleCookieChange('analytics', e.target.checked)}
                                                className="sr-only"
                                                disabled={false}
                                            />
                                            <div className={`w-12 h-6 rounded-full transition-colors ${
                                                cookieSettings.analytics ? 'bg-primary' : 'bg-gray-200'
                                            }`}>
                                                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                                    cookieSettings.analytics ? 'translate-x-6' : 'translate-x-1'
                                                }`} />
                                            </div>
                                        </label>
                                        <span className="text-sm text-[#666666]">
                                            {cookieSettings.analytics ? 'Ativado' : 'Desativado'}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-[#666666]">
                                    Estes cookies nos ajudam a entender como você usa nosso site, quais páginas visita 
                                    e como você chegou até aqui. As informações são agregadas e anônimas.
                                </p>
                                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                                    <h4 className="font-semibold text-primary-dark mb-2">Cookies de analytics incluem:</h4>
                                    <ul className="text-sm text-[#666666] space-y-1">
                                        <li>• Google Analytics</li>
                                        <li>• Hotjar e ferramentas de heatmaps</li>
                                        <li>• Análise de comportamento</li>
                                        <li>• Métricas de engajamento</li>
                                        <li>• Testes A/B</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                            <button
                                onClick={rejectNonEssentialCookies}
                                className="px-8 py-4 border border-gray-300 rounded-full text-[#666666] hover:bg-gray-50 transition-colors"
                            >
                                Rejeitar Não Essenciais
                            </button>
                            <button
                                onClick={saveSettings}
                                className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                            >
                                Salvar Preferências
                            </button>
                        </div>

                        {/* Additional Information */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-xl font-semibold text-primary-dark mb-4">
                                Informações Adicionais
                            </h3>
                            <div className="space-y-4 text-[#666666]">
                                <p>
                                    <strong>Como gerenciar cookies:</strong> Você pode alterar suas preferências de cookies a qualquer 
                                    momento através das configurações do seu navegador. A maioria dos navegadores permite 
                                    bloquear ou remover cookies existentes.
                                </p>
                                <p>
                                    <strong>Impacto na experiência:</strong> Desativar cookies não essenciais pode afetar 
                                    algumas funcionalidades do site. Cookies essenciais são necessários para o 
                                    funcionamento básico.
                                </p>
                                <p>
                                    <strong>Retenção de dados:</strong> Os cookies têm diferentes períodos de retenção. 
                                    Cookies de sessão expiram quando você fecha o navegador, enquanto cookies persistentes 
                                    permanecem por um período mais longo.
                                </p>
                                <p>
                                    <strong>Terceiros:</strong> Compartilhamos informações com terceiros apenas quando 
                                    necessário para fornecer nossos serviços e sempre com sua autorização.
                                </p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-xl font-semibold text-primary-dark mb-4">
                                Dúvidas sobre Cookies?
                            </h3>
                            <p className="text-[#666666] mb-4">
                                Se você tiver alguma dúvida sobre nossa política de cookies ou como gerenciá-los, 
                                entre em contato conosco:
                            </p>
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <p className="text-[#666666] mb-2">
                                    <strong>Email:</strong> cookies@albertia.com.br
                                </p>
                                <p className="text-[#666666] mb-2">
                                    <strong>WhatsApp:</strong> (13) 99759-1781
                                </p>
                                <p className="text-[#666666]">
                                    <strong>DPO:</strong> dpo@albertia.com.br
                                </p>
                            </div>
                        </div>

                        {/* Last Updated */}
                        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                            <p className="text-sm text-[#666666]">
                                Última atualização: 15 de Janeiro de 2024
                            </p>
                            <p className="text-sm text-[#666666]">
                                Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                        Controle sua experiência online
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Gerencie suas preferências de cookies e tenha controle total sobre sua privacidade
                    </p>
                    <a
                        href="#cookie-settings"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                    >
                        <Settings className="w-5 h-5" />
                        Configurar Cookies Agora
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Cookies;
