'use client';

import React from 'react';
import { Database, ShieldAlert, Cpu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Vision = () => {
  const phases = [
    {
      id: "01",
      title: "Matchmaking Compute & Data",
      icon: <Database className="text-[#C41230]" size={32} />,
      description: "Intelligent matchmaking of compute and data providers. We optimize demand for both centralized and decentralized providers, empowering model creators with cost-effective resources even as traditional scaling laws hit their limits.",
      details: ["Infrastructure Layer Optimization", "Compute matchmaking margin", "Model-training data sales"]
    },
    {
      id: "02",
      title: "AI Bubble Risk Mitigation",
      icon: <ShieldAlert className="text-[#8b5cf6]" size={32} />,
      description: "As the AI landscape faces potential volatility, we provide risk-hedging solutions built on three core pillars: reducing inference costs, overcoming real-time processing limits, and addressing ecosystem constraints in long-tail domain expertise.",
      details: ["Economic Risk Hedging", "Real-time Processing Limits", "Niche-domain Expertise"]
    },
    {
      id: "03",
      title: "Decentralized Intelligence",
      icon: <Cpu className="text-white" size={32} />,
      description: "We believe Decentralized Intelligence is the definitive path to AGI. While centralized systems hit diminishing returns, a decentralized approach offers faster, cheaper, and more adaptive intelligence that covers niche areas previously overlooked.",
      details: ["Path to AGI", "Adaptive Performance", "Global Accessibility"]
    }
  ];

  return (
    <section id="vision" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">Our Three-Phase Vision</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From compute efficiency to the ultimate goal of Artificial General Intelligence, 
            the i³ × CMU Modelverse Dev Initiative is architecting the future of decentralized systems.
          </p>
        </div>

        <div className="space-y-12">
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-[#6d28d9]/40 transition-all duration-500"
            >
              <div className="bg-black rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                    {phase.icon}
                  </div>
                  <span className="block mt-4 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors tracking-tighter">
                    PHASE {phase.id}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors">{phase.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
                    {phase.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {phase.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-500">
                        <ArrowRight size={14} className="text-[#C41230]" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
