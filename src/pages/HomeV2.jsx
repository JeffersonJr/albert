import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, TrendingUp, MessageSquare, Globe, Cpu, Bot, Settings, Smartphone } from 'lucide-react';
import BentoGrid from '../components/BentoGrid';
import FeatureCard from '../components/FeatureCard';
import DataChart from '../components/DataChart';
import InteractiveBadges from '../components/InteractiveBadges';
import HandoffSection from '../components/HandoffSection';
import SmartAutomationBanner from '../components/SmartAutomationBanner';
import NeonIcon from '../components/NeonIcon';

const HomeV2 = () => {
  const badges = [
    "Consultoria especializada",
    "Suporte contínuo",
    "Relatórios de performance",
    "Desenvolvimento ágil",
    "Modelos personalizados",
    "Segurança de dados",
    "Treinamento de IA"
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-accent-neon selection:text-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Top Feature Grid */}
        <BentoGrid className="mb-20">
          {/* Card 1: Costs */}
          <FeatureCard 
            title="Redução drástica de custos"
            description="As automações substituem trabalhos repetitivos, permitindo resultados de alta qualidade por uma fração do custo tradicional."
          >
            <DataChart type="bar" data={[20, 35, 55, 45, 60, 75, 85]} />
          </FeatureCard>

          {/* Card 2: Custom Dev */}
          <FeatureCard 
            title="Desenvolvimento sob medida"
            description="Temos a expertise corporativa para transformar necessidades complexas em fluxos de automação hiper personalizadas."
          >
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
              <NeonIcon icon={Zap} />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-accent-neon font-bold">Atualizado</span>
                <span className="text-sm">Fluxo sob medida</span>
              </div>
            </div>
          </FeatureCard>

          {/* Card 3: Scalable */}
          <FeatureCard 
            title="Escalável com o seu crescimento"
            description="Nossas infraestruturas de IA e bancos de dados estão prontos para suportar desde 10 até 100.000 interações diárias."
          >
            <DataChart type="line" data={[25, 35, 60, 50, 75, 90]} />
          </FeatureCard>

          {/* Card 4: Integrations (Wider) */}
          <FeatureCard 
            className="md:col-span-2"
            title="Integração nativa de sistemas"
            description="Conecte perfeitamente todos os seus aplicativos existentes. Da leitura do banco de dados ao disparo de mensagens no WhatsApp."
          >
            <div className="flex gap-8 items-center py-6">
               <NeonIcon icon={MessageSquare} size={40} />
               <NeonIcon icon={Smartphone} size={40} />
               <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10">
                 <span className="text-2xl font-bold">sla</span>
                 <span className="text-[8px] text-blue-400">from Salesforce</span>
               </div>
            </div>
          </FeatureCard>

          {/* Card 5: Handoff */}
          <FeatureCard 
            title="Handoff em tempo real"
            description="Transfira a conversa para um operador humano instantaneamente quando a IA detectar a necessidade."
          >
            <HandoffSection />
          </FeatureCard>
        </BentoGrid>

        {/* Section Title / Badges */}
        <InteractiveBadges badges={badges} />

        {/* Second Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          
          {/* Card 6: Multilingual (Orbit) */}
          <div className="md:col-span-7">
            <FeatureCard 
              className="h-full"
              title="Agentes Multilíngues"
              description="Implante atendimento de ponta que conversa fluentemente em dezenas de idiomas com perfis super customizados."
            >
              <div className="relative h-64 flex items-center justify-center overflow-hidden">
                {/* Simplified Orbit for demo */}
                <div className="absolute inset-0 grid place-items-center opacity-20">
                   <div className="w-48 h-48 rounded-full border border-dashed border-white/20" />
                   <div className="absolute w-64 h-64 rounded-full border border-dashed border-white/10" />
                </div>
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                    <Globe size={14} className="text-accent-neon" />
                    <span className="text-xs">Español</span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 self-end">
                    <Globe size={14} className="text-accent-neon" />
                    <span className="text-xs">English</span>
                  </div>
                </div>
              </div>
            </FeatureCard>
          </div>

          {/* Card 7: Advanced Analysis */}
          <div className="md:col-span-5">
            <FeatureCard 
              className="h-full"
              title="Análise Avançada"
              description="Obtenha insights profundos sobre o desempenho da automação e comportamento do usuário para tomar decisões melhores."
            >
              <div className="flex items-end justify-center gap-3 h-40">
                <div className="w-6 h-20 bg-white/5 rounded-full" />
                <div className="w-10 h-32 bg-accent-neon/30 blur-[2px] rounded-full relative">
                  <div className="absolute inset-x-0 bottom-0 bg-accent-neon h-full rounded-full" />
                </div>
                <div className="w-6 h-24 bg-white/5 rounded-full" />
              </div>
            </FeatureCard>
          </div>

          {/* Card 8: Integrated Tools */}
          <div className="md:col-span-5">
            <FeatureCard 
              className="h-full"
              title="Ferramentas Integradas"
              description="Gerencie todos os aspectos do atendimento, desde a triagem de leads até os agendamentos, tudo em um só lugar."
            >
              <div className="flex flex-col items-center justify-center p-8">
                 <NeonIcon icon={Settings} size={60} />
              </div>
            </FeatureCard>
          </div>

          {/* Card 9: Ultra-fast (Lightning) */}
          <div className="md:col-span-7">
            <FeatureCard 
              className="h-full"
              title="Resolução Ultrarrápida"
              description="Sem mais gargalos. Responda instantaneamente simultaneamente para milhares de usuários com inteligência de verdade."
            >
              <div className="relative h-48 flex items-center justify-center">
                 <NeonIcon icon={Zap} size={80} className="scale-150" />
                 <div className="absolute left-0 bottom-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                    <Cpu size={14} />
                    <span className="text-xs">Backend</span>
                 </div>
                 <div className="absolute right-0 bottom-10 px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                    <Globe size={14} />
                    <span className="text-xs">Cloud</span>
                 </div>
              </div>
            </FeatureCard>
          </div>
        </div>

        {/* Banner */}
        <SmartAutomationBanner 
          title="Experimente a automação inteligente da MaIA"
          description="Mais de 15.000 horas economizadas para nossos parceiros. Implante fluxos de atendimento em dias, não meses."
        />

      </div>
    </div>
  );
};

export default HomeV2;
