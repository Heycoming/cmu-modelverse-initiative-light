'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: "Box-constrained LLM Watermarking: Towards Scalable and Reliable Authentication",
      authors: "Zhao, Xuandong, et al.",
      venue: "arXiv preprint",
      year: "2024",
      category: "AI Security"
    },
    {
      title: "Human-AI Synergy in Decentralized Intelligence Systems",
      authors: "Li, Tianqin, et al.",
      venue: "NeurIPS (Oral Presentation)",
      year: "2023",
      category: "Decentralized AGI"
    },
    {
      title: "Conflict-Averse Gradient Descent for Multi-task Learning in Robotics",
      authors: "Liu, Yuejiang, et al.",
      venue: "NeurIPS",
      year: "2021",
      category: "Robust Learning"
    },
    {
      title: "Prompting Is All You Need: Training-Free Text-to-Video Generation with Sparse Causal Attention",
      authors: "Zhao, Xuandong, et al.",
      venue: "CVPR",
      year: "2023",
      category: "Generative AI"
    },
    {
      title: "Decentralized Training of Domain-Specific Large Language Models",
      authors: "Xie, Yaqi, et al.",
      venue: "ICML",
      year: "2022",
      category: "Distributed Systems"
    },
    {
      title: "Deep Learning for Genomic Prediction and Computational Biology",
      authors: "Du, Shiyi, et al.",
      venue: "Nature Communications",
      year: "2022",
      category: "Computational Biology"
    },
    {
      title: "Neuro-Symbolic Reasoning in Visual Question Answering",
      authors: "Liu, Jiayuan, et al.",
      venue: "ICCV",
      year: "2023",
      category: "Neuro-Symbolic AI"
    },
    {
      title: "Scaling Laws for Neural Operators in Climate Modeling",
      authors: "Gao, Shang, et al.",
      venue: "ICLR",
      year: "2024",
      category: "Scientific ML"
    },
    {
      title: "Geometric Deep Learning for Molecular Property Prediction",
      authors: "Li, Yitong, et al.",
      venue: "Nature Machine Intelligence",
      year: "2023",
      category: "Drug Discovery"
    },
    {
      title: "Robust Feature Representation in Multi-Agent Swarms",
      authors: "Wang, Peter, et al.",
      venue: "IEEE Robotics and Automation Letters",
      year: "2022",
      category: "Robotics"
    },
    {
      title: "Algorithmic Fairness in Public Policy Machine Learning",
      authors: "Ding, Xueying, et al.",
      venue: "Journal of ML & Public Policy",
      year: "2021",
      category: "AI Ethics"
    }
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <section id="research" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-zinc-900">Recent Research</h2>
          <div className="h-1 w-20 bg-[#C41230] mb-8"></div>
          <p className="text-zinc-600 max-w-2xl">
            A chronological list of recent contributions from our Research Fellows and Committee members, formatted in MLA style.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
          {publications.map((pub, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-[#C41230]/30 transition-all group shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C41230] bg-[#C41230]/5 px-2 py-0.5 rounded">
                      {pub.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 leading-snug group-hover:text-[#C41230] transition-colors">
                    "{pub.title}"
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {pub.authors}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {pub.venue}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 font-mono text-sm whitespace-nowrap">
                  <Calendar size={14} />
                  {pub.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
