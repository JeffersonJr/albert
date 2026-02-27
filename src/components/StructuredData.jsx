import { useEffect } from 'react';

const StructuredData = () => {
    useEffect(() => {
        // Organization structured data
        const organizationData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Albert IA",
            "url": "https://albert-self.vercel.app",
            "logo": "https://albert-self.vercel.app/img/logo-green.png",
            "description": "IA especializada em imobiliárias que oferece chatbot de atendimento 24/7, qualificação de leads e automação de vendas",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-13-99759-1781",
                "contactType": "customer service",
                "availableLanguage": ["Portuguese"],
                "hoursAvailable": "24/7"
            },
            "sameAs": [
                "https://wa.me/5513997591781"
            ],
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressRegion": "SP"
            },
            "foundingDate": "2024",
            "areaServed": {
                "@type": "Country",
                "name": "Brazil"
            }
        };

        // Website structured data
        const websiteData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Albert IA",
            "url": "https://albert-self.vercel.app",
            "description": "Chatbot de IA especializado para imobiliárias com atendimento 24/7",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://albert-self.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Albert IA",
                "url": "https://albert-self.vercel.app"
            }
        };

        // Service structured data
        const serviceData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Albert IA - Chatbot para Imobiliárias",
            "description": "IA especializada que oferece atendimento automatizado 24/7 para imobiliárias",
            "provider": {
                "@type": "Organization",
                "name": "Albert IA",
                "url": "https://albert-self.vercel.app"
            },
            "serviceType": "Customer Service",
            "areaServed": {
                "@type": "Country",
                "name": "Brazil"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Planos Albert IA",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Plano Básico",
                            "description": "Chatbot básico para pequenas imobiliárias"
                        },
                        "price": "197",
                        "priceCurrency": "BRL",
                        "availability": "https://schema.org/InStock"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Plano Profissional",
                            "description": "Chatbot avançado com integrações completas"
                        },
                        "price": "397",
                        "priceCurrency": "BRL",
                        "availability": "https://schema.org/InStock"
                    }
                ]
            }
        };

        // LocalBusiness structured data
        const localBusinessData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Albert IA",
            "description": "IA especializada em imobiliárias com chatbot de atendimento 24/7",
            "url": "https://albert-self.vercel.app",
            "telephone": "+55-13-99759-1781",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressRegion": "SP"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.5505",
                "longitude": "-46.6333"
            },
            "openingHours": "24/7",
            "priceRange": "$$",
            "servesCuisine": "Technology Services"
        };

        // Create and append scripts with safe DOM manipulation
        const scripts = [
            { data: organizationData, id: 'organization-structured-data' },
            { data: websiteData, id: 'website-structured-data' },
            { data: serviceData, id: 'service-structured-data' },
            { data: localBusinessData, id: 'localbusiness-structured-data' }
        ];

        scripts.forEach(({ data, id }) => {
            // Remove existing script if present
            const existingScript = document.getElementById(id);
            if (existingScript) {
                existingScript.remove();
            }
            
            // Create and append new script with error handling
            try {
                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.id = id;
                script.textContent = JSON.stringify(data, null, 2);
                document.head.appendChild(script);
            } catch (error) {
                console.warn(`Failed to append structured data script ${id}:`, error);
            }
        });

        return () => {
            // Safe cleanup
            scripts.forEach(({ id }) => {
                try {
                    const scriptToRemove = document.getElementById(id);
                    if (scriptToRemove && document.head.contains(scriptToRemove)) {
                        document.head.removeChild(scriptToRemove);
                    }
                } catch (error) {
                    console.warn(`Failed to remove structured data script ${id}:`, error);
                }
            });
        };
    }, []);

    return null;
};

export default StructuredData;
