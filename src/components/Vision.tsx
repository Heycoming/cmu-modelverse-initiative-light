'use client';

import React from 'react';
import { Database, ShieldAlert, Cpu, CheckCircle2, Mic2, Video, Image, Music, Code2, Terminal, Layers, Globe, Zap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, subtitle, icons }: { title: string, price: string, subtitle: string, icons?: React.ElementType[] }) => (
  <div className="w-full max-w-3xl mx-auto mb-6 bg-zinc-50 border border-zinc-200 rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-between hover:bg-zinc-100 transition-all duration-300 group shadow-sm">
    <div className="flex items-center gap-6 text-center md:text-left mb-4 md:mb-0">
      <div className="w-12 h-12 bg-zinc-200 rounded-xl flex items-center justify-center border border-zinc-300 group-hover:border-[#C41230]/50 transition-colors">
        <div className="w-6 h-6 bg-zinc-400 rounded-sm"></div>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-zinc-900 mb-1">{title}</h4>
        <p className="text-sm text-zinc-500 font-normal">{subtitle}</p>
        {icons && (
          <div className="flex gap-2 mt-2 justify-center md:justify-start">
            {icons.map((Icon, i) => (
              <div key={i} className="w-6 h-6 bg-zinc-100 rounded-md flex items-center justify-center border border-zinc-200 group-hover:bg-zinc-200 transition-colors">
                <Icon size={12} className="text-zinc-500 group-hover:text-zinc-900" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className="text-right">
      <span className="text-3xl font-bold text-zinc-900">{price}</span>
      <span className="text-zinc-500 ml-1">/ month</span>
    </div>
  </div>
);

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl font-bold mb-6 text-zinc-900 tracking-tight">Our Evolution Roadmap</h2>
          <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl">
            From compute efficiency to the ultimate goal of Artificial General Intelligence, 
            the i³ × CMU Modelverse Dev Initiative is architecting the future of decentralized systems.
          </p>
        </div>

        {/* Phase 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#C41230]/5 flex items-center justify-center">
                <Database className="text-[#C41230]" size={24} />
              </div>
              <span className="text-sm font-bold tracking-widest text-[#C41230] uppercase">Phase 01</span>
            </div>
            <h3 className="text-4xl font-bold mb-6 text-zinc-900 leading-tight">Compute × Data Matchmaking for AI Training</h3>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              We match compute and data—connecting data providers and compute providers (both centralized cloud and decentralized DePIN nodes) to help increase demand and give model creators cheaper compute + datasets, especially as scaling laws weaken.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Infrastructure Layer", desc: "Compute matchmaking margin across central cloud + DePIN nodes." },
                { title: "Data Sales", desc: "Sell model-training datasets to model creators." },
                { title: "Outcome", desc: "Higher provider demand + lower training cost for model builders." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-[#C41230] mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="text-zinc-900 font-bold mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img src="/media/phase1-matchmaking.png" alt="Phase 1 Concept" className="w-full rounded-3xl border border-zinc-100 shadow-2xl" />
          </div>
        </motion.div>

        {/* Phase 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <ShieldAlert className="text-purple-600" size={24} />
              </div>
              <span className="text-sm font-bold tracking-widest text-purple-600 uppercase">Phase 02</span>
            </div>
            <h3 className="text-4xl font-bold mb-6 text-zinc-900 leading-tight">The AI Bubble: LLMs Are Hitting Their Hard Limits</h3>
            <p className="text-zinc-600 text-lg">
              A risk-hedging solution to the AI bubble crisis, driving cost reduction and efficiency through three core pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Economic Limits",
                items: [
                  "Inference costs 100–1000x higher than small models",
                  "Users pay $150–300/month—not scalable",
                  "GPU monopolies keep costs inflated"
                ]
              },
              {
                title: "Real Time Limits",
                items: [
                  "Too slow for real-time agents, trading, robotics",
                  "Hallucinates on specialized tasks",
                  "Scaling law returns are collapsing"
                ]
              },
              {
                title: "Ecosystem Limits",
                items: [
                  "One model cannot serve science & technology simultaneously",
                  "LLMs fail on long-tail, domain-specific knowledge",
                  "Centralized training misses 'niche-domain' expertise"
                ]
              }
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-purple-500/30 transition-all">
                <h4 className="text-xl font-bold mb-6 text-zinc-900 flex items-center gap-3">
                  <span className="text-purple-600 text-sm font-mono">{i + 1}.</span>
                  {pillar.title}
                </h4>
                <ul className="space-y-4">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="text-zinc-600 text-sm flex gap-3">
                      <div className="w-1 h-1 rounded-full bg-purple-600 mt-2 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="py-12 bg-zinc-50 rounded-[40px] border border-zinc-200">
            <h3 className="text-2xl md:text-3xl font-medium text-zinc-900 text-center mb-12">AI pricing is already segmented by user type</h3>
            <PricingCard 
              title="Media Creators" 
              price="$150+" 
              subtitle="(voice · video · image tools)" 
              icons={[Mic2, Video, Image, Music]} 
            />
            <PricingCard 
              title="Engineers" 
              price="$100+" 
              subtitle="(dev + infra stack)" 
              icons={[Code2, Terminal, Layers, Cpu]} 
            />
            <PricingCard 
              title="Common Users" 
              price="~$200+" 
              subtitle="Multimodal bundles → high switching cost" 
              icons={[Globe, Zap, Smartphone]}
            />
          </div>
        </motion.div>

        {/* Phase 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Cpu className="text-blue-600" size={24} />
              </div>
              <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">Phase 03</span>
            </div>
            <h3 className="text-4xl font-bold mb-6 text-zinc-900 leading-tight">Decentralization is the Only Path to AGI</h3>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Decentralized Intelligence is the ultimate frontier. As centralized systems hit the limits of marginal utility, a decentralized ecosystem provides a faster, more cost-effective, and highly specialized path to achieving true AGI across niche domains.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-100 italic text-blue-800">
              "Centralized scaling laws are reaching their peak; decentralized intelligence offers the performance and scalability required for the next leap in AGI."
            </div>
          </div>
          <div>
            <img src="/media/phase3-agi.png" alt="Decentralized AGI" className="w-full rounded-3xl shadow-2xl shadow-blue-500/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
