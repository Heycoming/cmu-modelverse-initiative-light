'use client';

import React from 'react';
import { BookOpen, Globe, Github } from 'lucide-react';

const Research = () => {
  const highlights = [
    {
      title: "Decentralized Model Alignment",
      description: "Researching secure watermarking and alignment protocols for models operating in decentralized physical infrastructure networks.",
      icon: <Globe size={24} className="text-blue-400" />
    },
    {
      title: "Hierarchical Bayesian Inference",
      description: "Biologically grounded computer-vision algorithms based on principles of biological vision and neural computation.",
      icon: <BookOpen size={24} className="text-emerald-400" />
    },
    {
      title: "Autonomous Mechanism Design",
      description: "Automating auction rules and blockchain incentives using large language models and advanced game theory.",
      icon: <Github size={24} className="text-orange-400" />
    }
  ];

  return (
    <section id="research" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Research Excellence</h2>
        <p className="text-gray-500 mb-16 max-w-xl mx-auto">
          Our fellows contribute to top-tier venues including NeurIPS, ICML, ICLR, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {highlights.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#121212]/50 backdrop-blur-md border border-white/10 rounded-2xl inline-block max-w-4xl mx-auto text-white">
          <p className="text-xl italic text-gray-300">
            "We are uncovering the principles by which biological vision informs intelligent machines and building the infrastructure for the next generation of decentralized AGI."
          </p>
          <p className="mt-6 font-bold text-[#C41230]">— Prof. Tai Sing Lee</p>
        </div>
      </div>
    </section>
  );
};

export default Research;
