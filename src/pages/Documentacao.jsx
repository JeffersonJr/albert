import { useState, useEffect } from 'react';
import { Zap, BookOpen, Download, Search, FileText, Video, Play, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Documentacao = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('todos');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { id: 'todos', name: 'Todos' },
        { id: 'guia-rapido', name: 'Guia Rápido' },
        { id: 'api', name: 'API' },
        { id: 'integracoes', name: 'Integrações' },
        { id: 'tutoriais', name: 'Tutoriais' },
        { id: 'faq', name: 'FAQ' }
    ];

    const documentation = [
        {
            id: 1,
            title: 'Guia Rápido: Começando com Albert IA',
            category: 'guia-rapido',
            type: 'guide',
            readTime: '5 min',
            description: 'Aprenda a configurar o Albert IA em menos de 5 minutos e comece a atender seus leads imediatamente.',
            icon: BookOpen,
            content: `
# Guia Rápido: Começando com Albert IA

## Bem-vindo ao Albert IA!

O Albert IA é sua inteligência artificial especializada no mercado imobiliário. Este guia rápido vai ajudar você a começar a usar nossa plataforma em minutos.

## Passo 1: Acesse sua Conta

1. Visite [app.albertia.com.br](https://app.albertia.com.br)
2. Faça login com seu email e senha
3. Você será redirecionado para o painel de controle

## Passo 2: Configure seu WhatsApp

1. No painel, vá para **Configurações > WhatsApp**
2. Conecte sua conta WhatsApp Business
3. Configure o número que receberá os leads
4. Teste a conexão enviando uma mensagem

## Passo 3: Personalize o Atendimento

1. Vá para **Configurações > Personalização**
2. Defina o tom de voz da sua IA
3. Configure as respostas automáticas
4. Adicione informações sobre seus imóveis

## Passo 4: Integre com seu CRM

1. Vá para **Integrações > CRM**
2. Escolha seu CRM (ou use o nosso)
3. Configure os campos de mapeamento
4. Teste a sincronização

## Passo 5: Ative o Atendimento

1. Vá para **Atendimento > Status**
2. Ative o atendimento automático
3. Defina o horário de funcionamento
4. Pronto! O Albert IA está atendendo seus leads

## Dicas Importantes

- **Teste sempre**: Envie mensagens de teste para garantir que tudo funciona
- **Monitore o desempenho**: Acompanhe as métricas no painel
- **Ajuste conforme necessário**: Personalize as respostas com base no feedback

## Suporte

Se precisar de ajuda, estamos disponíveis:
- WhatsApp: (13) 99759-1781
- Email: suporte@albertia.com.br
- Chat no painel de controle

Comece agora e transforme seu atendimento imobiliário!
            `,
            lastUpdated: '2024-01-15'
        },
        {
            id: 2,
            title: 'API Reference: Documentação Completa',
            category: 'api',
            type: 'api',
            readTime: '15 min',
            description: 'Documentação completa da API REST do Albert IA para desenvolvedores.',
            icon: FileText,
            content: `
# API Reference: Albert IA

## Visão Geral

A API do Albert IA permite que você integre nossa inteligência artificial em suas aplicações personalizadas.

## Autenticação

### Obtendo sua API Key

1. Faça login no painel Albert IA
2. Vá para **Configurações > API**
3. Copie sua API key
4. Inclua no header: \`X-API-Key: sua-api-key\`

### Base URL

\`\`\`
https://api.albertia.com.br/v1
\`\`

## Endpoints Principais

### Leads

#### Listar Leads
\`\`\`
GET /leads
\`\`

#### Criar Lead
\`\`\`
POST /leads
Content-Type: application/json

{
  "name": "João Silva",
  "phone": "+5513997591781",
  "email": "joao@email.com",
  "message": "Tenho interesse no imóvel na Rua das Flores, 123",
  "property_id": "prop_123"
}
\`\`

#### Qualificar Lead
\`\`\`
POST /leads/{id}/qualify
Content-Type: application/json

{
  "qualification_level": "high",
  "interest_type": "compra",
  "budget_range": "500000-800000"
}
\`\`

### Conversações

#### Listar Conversações
\`\`\`
GET /conversations
\`\`

#### Enviar Mensagem
\`\`\`
POST /conversations/{id}/messages
Content-Type: application/json

{
  "message": "Olá! Tenho um imóvel perfeito para você.",
  "type": "text"
}
\`\`

### Análise

#### Métricas de Desempenho
\`\`\`
GET /analytics/performance
\`\`

#### Relatório de Conversão
\`\`\`
GET /analytics/conversions?start_date=2024-01-01&end_date=2024-01-31
\`\`

## Webhooks

Configure webhooks para receber notificações em tempo real:

### Eventos Disponíveis

- \`lead.created\`: Novo lead criado
- \`lead.qualified\`: Lead qualificado
- \`conversation.started\`: Conversação iniciada
- \`appointment.scheduled\`: Visita agendada

### Configuração

\`\`\`
POST /webhooks
Content-Type: application/json

{
  "url": "https://sua-api.com/webhook",
  "events": ["lead.created", "lead.qualified"],
  "secret": "seu-secret"
}
\`\`

## Limites da API

- **Rate Limit**: 1000 requisições/hora
- **Tamanho máximo do payload**: 10MB
- **Timeout**: 30 segundos

## Exemplos de Código

### JavaScript/Node.js
\`\`\javascript
const axios = require('axios');

const albertAPI = axios.create({
  baseURL: 'https://api.albertia.com.br/v1',
  headers: {
    'X-API-Key': 'sua-api-key'
  }
});

// Criar lead
const createLead = async (leadData) => {
  try {
    const response = await albertAPI.post('/leads', leadData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar lead:', error);
  }
};
\`\`

### Python
\`\`\python
import requests

headers = {
    'X-API-Key': 'sua-api-key',
    'Content-Type': 'application/json'
}

# Criar lead
def create_lead(lead_data):
    response = requests.post(
        'https://api.albertia.com.br/v1/leads',
        json=lead_data,
        headers=headers
    )
    return response.json()
\`\`

## Erros Comuns

### 401 Unauthorized
Verifique se sua API key está correta e ativa.

### 429 Too Many Requests
Você atingiu o limite de requisições. Aguarde e tente novamente.

### 500 Internal Server Error
Problema temporário em nossos servidores. Tente novamente em alguns minutos.

## Suporte

Para dúvidas técnicas, contate nosso time de desenvolvedores:
- Email: dev@albertia.com.br
- WhatsApp: (13) 99759-1781
- Discord: [Albert IA Developers](https://discord.gg/albertia)

Explore a documentação completa em [docs.albertia.com.br](https://docs.albertia.com.br)
            `,
            lastUpdated: '2024-01-15'
        },
        {
            id: 3,
            title: 'Guia de Integrações',
            category: 'integracoes',
            type: 'guide',
            readTime: '10 min',
            description: 'Como integrar o Albert IA com as principais ferramentas do mercado.',
            icon: ArrowRight,
            content: `
# Guia de Integrações

## Integrações Disponíveis

O Albert IA se integra com as principais ferramentas do mercado imobiliário:

### CRMs Populares

#### RD Station
1. Vá para **Integrações > CRM**
2. Selecione "RD Station"
3. Conecte sua conta
4. Configure os campos de mapeamento
5. Sincronize seus contatos

#### Imobiweb
1. Vá para **Integrações > CRM**
2. Selecione "Imobiweb"
3. Use suas credenciais
4. Configure o fluxo de dados
5. Teste a conexão

#### Zap Imóveis
1. Vá para **Integrações > CRM**
2. Selecione "Zap Imóveis"
3. Conecte sua conta
4. Configure o mapeamento
5. Importe seus imóveis

### Plataformas de Automação

#### Zapier
1. Crie uma conta Zapier
2. Configure o trigger (ex: novo lead)
3. Configure a ação (ex: criar lead no Albert)
4. Teste a automação
5. Ative o zap

#### Make.com
1. Crie um novo Make scenario
2. Configure o trigger
3. Adicione a ação da API Albert IA
4. Teste e publique
5. Monitore o desempenho

### Comunicação

#### Twilio
1. Vá para **Integrações > Comunicação**
2. Selecione "Twilio"
3. Configure suas credenciais
4. Teste o envio de mensagens
5. Configure os templates

#### Email Marketing
1. Vá para **Integrações > Email**
2. Conecte seu serviço de email
3. Configure os templates
4. Automatize notificações
5. Personalize o conteúdo

## Passo a Passo: Integração Manual

### 1. Preparação
- Tenha suas credenciais de acesso
- Verifique os pré-requisitos da ferramenta
- Backup seus dados atuais

### 2. Configuração
- Acesse o painel Albert IA
- Vá para "Integrações"
- Selecione a ferramenta desejada
- Siga as instruções específicas

### 3. Mapeamento de Dados
- Configure os campos correspondentes
- Defina as regras de sincronização
- Teste o mapeamento
- Valide os dados transferidos

### 4. Teste e Valide
- Envie dados de teste
- Verifique a sincronização
- Monitore os logs
- Ajuste conforme necessário

### 5. Ativação
- Ative a integração
- Configure as regras de negócio
- Monitore o desempenho
- Documente o processo

## Melhores Práticas

### Segurança
- Use chaves de API seguras
- Limite permissões de acesso
- Monitore atividades suspeitas
- Mantenha backups atualizados

### Performance
- Use webhooks para tempo real
- Configure sincronizações periódicas
- Monitore os limites da API
- Otimize o volume de dados

### Monitoramento
- Configure alertas de erro
- Monitore as métricas
- Analise os logs
- Ajuste conforme necessário

## Suporte

Para ajuda com integrações:
- Email: integracoes@albertia.com.br
- WhatsApp: (13) 99759-1781
- Documentação: docs.albertia.com.br

Comece a integrar hoje mesmo!
            `,
            lastUpdated: '2024-01-15'
        },
        {
            id: 4,
            title: 'Tutoriais em Vídeo',
            category: 'tutoriais',
            type: 'video',
            readTime: '8 min',
            description: 'Aprenda com nossos tutoriais em vídeo sobre configuração e uso avançado.',
            icon: Video,
            content: `
# Tutoriais em Vídeo

## Tutoriais Disponíveis

### Configuração Inicial
- [Configurando sua conta Albert IA](https://youtu.be/dQw4w9WgXcQ) - 5 min
- [Conectando WhatsApp Business](https://youtu.be/dQw4w9WgXcQ) - 3 min
- [Primeira configuração](https://youtu.be/dQw4w9WgXcQ) - 7 min

### Funcionalidades Avançadas
- [Personalização da IA](https://youtu.be/dQw4w9WgXcQ) - 10 min
- [Automação de qualificação](https://youtu.be/dQw4w9WgXcQ) - 8 min
- [Análise de métricas](https://youtu.be/dQw4w9WgXcQ) - 6 min

### Integrações
- [Integração com RD Station](https://youtu.be/dQw4w9WgXcQ) - 12 min
- [Conectando com Zapier](https://youtu.be/dQw4w9WgXcQ) - 9 min
- [API REST completa](https://youtu.be/dQw4w9WgXcQ) - 15 min

### Casos de Uso
- [Imobiliária de pequeno porte](https://youtu.be/dQw4w9WgXcQ) - 8 min
- [Imobiliária de médio porte](https://youtu.be/dQw4w9WgXcQ) - 10 min
- [Imobiliária grande porte](https://youtu.be/dQw4w9WgXcQ) - 12 min

## Como Acessar

1. Acesse nosso canal no YouTube: [Albert IA Oficial](https://youtube.com/@albertia)
2. Inscreva-se para receber notificações de novos vídeos
3. Deixe seu comentário com dúvidas ou sugestões
4. Compartilhe com sua equipe

## Playlists Organizadas

### Para Iniciantes
- [Primeiros Passos](https://youtube.com/playlist?list=PLxxx)
- [Configuração Básica](https://youtube.com/playlist?list=PLxxx)
- [Dicas Rápidas](https://youtube.com/playlist?list=PLxxx)

### Para Desenvolvedores
- [API Reference](https://youtube.com/playlist?list=PLxxx)
- [Integrações](https://youtube.com/playlist?list=PLxxx)
- [Webhooks](https://youtube.com/playlist?list=PLxxx)

### Para Gerentes
- [Métricas e KPIs](https://youtube.com/playlist?list=PLxxx)
- [Casos de Sucesso](https://youtube.com/playlist?list=PLxxx)
- [Otimização](https://youtube.com/playlist?list=PLxxx)

### Conteúdo Premium

Membros do nosso plano Enterprise têm acesso a:
- Tutoriais exclusivos
- Sessões de Q&A ao vivo
- Certificação Albert IA
- Suporte prioritário

## Transmissões Ao Vivo

Temos transmissões semanais:
- **Quartas-feiras**: Q&A com a equipe
- **Webinars**: Tópicos especiais
- **Lançamentos**: Novas funcionalidades

## Sugestões de Vídeos

Tem alguma ideia para tutorial? Deixe sua sugestão:
- Email: youtube@albertia.com.br
- WhatsApp: (13) 99759-1781
- Comentários nos vídeos

Assista nossos vídeos e transforme seu atendimento!
            `,
            lastUpdated: '2024-01-15'
        },
        {
            'id': 5,
            'title': 'FAQ - Perguntas Frequentes',
            'category': 'faq',
            'type': 'faq',
            'readTime': '5 min',
            'description': 'Respostas para as dúvidas mais comuns sobre o Albert IA.',
            'icon': BookOpen,
            'content': `
# FAQ - Perguntas Frequentes

## Geral

### O que é o Albert IA?
O Albert IA é uma inteligência artificial especializada no mercado imobiliário que atende, qualifica e converte leads 24/7, permitindo que imobiliárias nunca percam uma oportunidade de venda.

### Como funciona?
O Albert IA utiliza tecnologia de processamento de linguagem natural para entender as mensagens dos clientes, identificar suas intenções e responder de forma humanizada, como se fosse um corretor experiente.

### É seguro?
Sim! Utilizamos criptografia de ponta a ponta, seguindo todas as normas de segurança de dados, incluindo LGPD.

### Quanto tempo demora para configurar?
A configuração inicial leva cerca de 5 minutos. Integrações mais complexas podem levar de 30 minutos a 2 horas.

### Posso personalizar as respostas?
Sim! Você pode personalizar o tom de voz, as respostas automáticas e as informações sobre seus imóveis.

### Funciona com qualquer CRM?
Sim, temos integrações nativas com os principais CRMs do mercado e API para conectar com qualquer sistema.

### Preciso de conhecimento técnico?
Não! A interface é amigável e não requer conhecimento técnico. Para integrações avançadas, oferecemos suporte completo.

## Funcionalidades

### O Albert IA faz agendamentos?
Sim! Ele pode agendar visitas automaticamente na agenda do corretor disponível.

### Ele entende português brasileiro?
Sim! Foi treinado especificamente para o português brasileiro e o mercado imobiliário nacional.

### Quantos leads posso atender?
Depende do seu plano: de 500 a 2000+ leads por mês, com planos customizados para volumes maiores.

### O Albert IA substitui meu time?
Não! Ele complementa sua equipe, permitindo que eles foquem em atividades de maior valor enquanto a IA cuida do atendimento inicial.

## Preços e Planos

### Qual o preço?
Nossos planos começam em R$ 497/mês e vão até R$ 1.997/mês, com planos customizados disponíveis.

### Tem trial gratuito?
Sim! Oferecemos 14 dias de teste gratuito, sem necessidade de cartão de crédito.

### Como cancelar?
Você pode cancelar a qualquer momento sem multas. Basta acessar sua conta e solicitar o cancelamento.

### Tem suporte técnico?
Sim! Oferecemos suporte por email, WhatsApp e chat 24/7 para todos os planos.

## Integrações

### Quais CRMs são compatíveis?
RD Station, Imobiweb, Zap Imóveis, Quinto Andar, Viva Real, entre outros. Também oferecemos API para integrações personalizadas.

### Como funciona a integração?
A integração é feita através de nossa interface ou API REST. O processo geralmente leva menos de 30 minutos.

### Posso usar minha API própria?
Sim! Nossa API REST permite que você construa soluções personalizadas.

### Tem webhook?
Sim! Oferecemos webhooks para notificações em tempo real de eventos importantes.

## Suporte

### Como entrar em contato?
- WhatsApp: (13) 99759-1781
- Email: suporte@albertia.com.br
- Chat: Disponível no painel de controle

### Qual o horário de atendimento?
Estamos disponíveis 24/7 para suporte crítico e 8h-18h para dúvidas gerais.

### Tem treinamento?
Sim! Oferecemos treinamento personalizado para todos os clientes.

### Tem documentação completa?
Sim! Acesse [docs.albertia.com.br](https://docs.albertia.com.br) para documentação completa.

## Dúvidas Técnicas

### Qual a tecnologia utilizada?
Utilizamos as mais avançadas tecnologias de IA, incluindo GPT-4, processamento de linguagem natural e machine learning.

### Meus dados estão seguros?
Sim! Utilizamos criptografia AES-256, backups diários e seguimos todas as normas de segurança.

### Onde estão os servidores?
Nossos servidores estão localizados no Brasil, garantindo baixa latência e conformidade com a LGPD.

### Tem backup automático?
Sim! Fazemos backups automáticos diários com retenção de 30 dias.

## Comece Agora!

Pronto para transformar seu atendimento? [Fale conosco](https://wa.me/5513997591781) e comece a usar o Albert IA hoje mesmo!
            `,
            lastUpdated: '2024-01-15'
        }
    ];

    const filteredDocs = selectedCategory === 'todos' 
        ? documentation 
        : documentation.filter(doc => doc.category === selectedCategory);

    const filteredSearch = filteredDocs.filter(doc => 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getIcon = (type) => {
        switch (type) {
            case 'guide':
                return <BookOpen className="w-5 h-5" />;
            case 'api':
                return <FileText className="w-5 h-5" />;
            case 'video':
                return <Video className="w-5 h-5" />;
            case 'faq':
                return <BookOpen className="w-5 h-5" />;
            default:
                return <FileText className="w-5 h-5" />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F8FAFA] to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            <BookOpen className="w-4 h-4" />
                            Documentação
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-dark leading-tight">
                            Tudo que você precisa saber sobre o <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Albert IA</span>
                        </h1>
                        
                        <p className="text-xl text-[#666666] mb-12 leading-relaxed">
                            Guias completos, documentação técnica e tutoriais para dominar o Albert IA
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
                                <input
                                    type="text"
                                    placeholder="Buscar documentação..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:border-primary focus:outline-none bg-white"
                                />
                            </div>
                        </div>
                        
                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-3 justify-center mb-8">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                        selectedCategory === category.id
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'bg-white border border-gray-300 text-[#666666] hover:border-primary hover:text-primary'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Documentation Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredSearch.map((doc) => (
                                <article
                                    key={doc.id}
                                    className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            {getIcon(doc.type)}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-primary-dark mb-2">
                                                {doc.title}
                                            </h3>
                                            <p className="text-sm text-[#666666]">
                                                {doc.category} • {doc.readTime}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-[#666666] mb-4 line-clamp-2">
                                        {doc.description}
                                    </p>
                                    
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[#666666]">
                                            Atualizado em {doc.lastUpdated}
                                        </span>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                                        >
                                            Ler mais
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                        
                        {filteredSearch.length === 0 && (
                            <div className="text-center py-12">
                                <BookOpen className="w-16 h-16 text-[#666666] mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                                    Nenhuma documentação encontrada
                                </h3>
                                <p className="text-[#666666]">
                                    Tente ajustar sua busca ou categoria
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                        Não encontrou o que procurava?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Nossa equipe de especialistas está pronta para ajudar você a dominar o Albert IA
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5513997591781?text=Ol%C3%A1,%20preciso%20de%20ajuda%20com%20a%20documenta%C3%A7%C3%A3o"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                        >
                            <Zap className="w-5 h-5" />
                            Falar com Especialista
                        </a>
                        <a
                            href="https://docs.albertia.com.br"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                        >
                            <BookOpen className="w-5 h-5" />
                            Ver Documentação Completa
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Documentacao;
