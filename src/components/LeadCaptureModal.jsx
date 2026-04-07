import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadCaptureModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Escape listener to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Bloqueia rolagem da tela inteira
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Auto mask phone (BR)
        let maskedValue = value;
        if (name === 'phone') {
            maskedValue = value.replace(/\D/g, '').slice(0, 11);
            if (maskedValue.length > 2) {
                maskedValue = `(${maskedValue.slice(0, 2)}) ${maskedValue.slice(2)}`;
            }
            if (maskedValue.length > 9) {
                maskedValue = `${maskedValue.slice(0, 10)}-${maskedValue.slice(10)}`;
            }
        }

        setFormData(prev => ({ ...prev, [name]: maskedValue }));

        // Real-time validation clearance
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (formData.name.length < 3) newErrors.name = 'Insira um nome válido';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'E-mail corporativo inválido';
        if (formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = 'Telefone incompleto';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        
        // Simular um Delay de API para o Lead
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            
            // Redireciona pro whats pós preenchimento de funil (Fallback atual)
            setTimeout(() => {
                window.open(`https://wa.me/5513997591781?text=Ol%C3%A1,%20meu%20nome%20%C3%A9%20${formData.name}%20e%20gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20da%20Albert%20IA.%20Empresa:%20${formData.company}`, '_blank');
                onClose();
                // Reset form state for next time
                setTimeout(() => {
                    setIsSuccess(false);
                    setFormData({name: '', email: '', phone: '', company: ''});
                }, 500);
            }, 1500);
            
        }, 1200);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-primary-dark/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-primary px-8 py-6 text-white shrink-0 relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2"
                                aria-label="Fechar Formulário"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <h3 className="text-2xl font-bold mb-2">Falar com Consultor</h3>
                            <p className="text-white/80 text-sm">
                                Preencha rapidamente seus dados e te direcionaremos para o WhatsApp do nosso especialista.
                            </p>
                        </div>

                        {/* Body Container (handles scroll if extremely short screens) */}
                        <div className="max-h-[calc(100vh-200px)] overflow-y-auto px-8 py-8 custom-scrollbar">
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                    <div>
                                        <label htmlFor="lead-name" className="block text-sm font-bold text-secondary mb-1">
                                            Nome Completo
                                        </label>
                                        <input
                                            type="text"
                                            id="lead-name"
                                            name="name"
                                            autoComplete="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Seu nome"
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 bg-red-50/30 text-red-900 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20'} outline-none focus:ring-4 transition-all`}
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? "name-error" : undefined}
                                        />
                                        {errors.name && <p id="name-error" className="text-red-500 text-xs font-medium mt-1.5 flex items-center gap-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="lead-email" className="block text-sm font-bold text-secondary mb-1">
                                            E-mail Profissional
                                        </label>
                                        <input
                                            type="email"
                                            id="lead-email"
                                            name="email"
                                            autoComplete="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="seu@email.com.br"
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50/30 text-red-900 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20'} outline-none focus:ring-4 transition-all`}
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                        />
                                        {errors.email && <p id="email-error" className="text-red-500 text-xs font-medium mt-1.5 flex items-center gap-1">{errors.email}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="lead-phone" className="block text-sm font-bold text-secondary mb-1">
                                                WhatsApp
                                            </label>
                                            <input
                                                type="tel"
                                                id="lead-phone"
                                                name="phone"
                                                autoComplete="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="(11) 90000-0000"
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50/30 text-red-900 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20'} outline-none focus:ring-4 transition-all`}
                                                aria-invalid={!!errors.phone}
                                                aria-describedby={errors.phone ? "phone-error" : undefined}
                                            />
                                            {errors.phone && <p id="phone-error" className="text-red-500 text-xs font-medium mt-1.5 flex items-center gap-1">{errors.phone}</p>}
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="lead-company" className="block text-sm font-bold text-secondary mb-1">
                                                Imobiliária / Empresa <span className="text-gray-400 font-normal">(Opcional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="lead-company"
                                                name="company"
                                                autoComplete="organization"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Nome da empresa"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        aria-label="Concluir envio dos dados para Especialista"
                                        className="w-full mt-6 bg-primary text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed group"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Continuar para o WhatsApp
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                    
                                    <p className="text-center text-xs text-gray-400 mt-4">
                                        Seus dados estão protegidos sob as diretrizes da LGPD.<br/> Odíamos Spam.
                                    </p>
                                </form>
                            ) : (
                                <div className="py-12 flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold text-secondary mb-2">Tudo Certo!</h4>
                                    <p className="text-gray-500 max-w-sm">
                                        Seu perfil foi registrado. Verifique as abas do seu navegador, <br/><b className="text-gray-700">estamos iniciando seu WhatsApp...</b>
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadCaptureModal;
