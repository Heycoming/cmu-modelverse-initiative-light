'use client';

import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: "Fernando Jia",
      role: "CEO",
      bio: "A seasoned professional with a rich background in tech and business. Guest lecturer at Carnegie Mellon University and University of Michigan. Ex-investor & fellow at Y Combinator, ex-McKinsey consultant, ex-IBD analyst at CITIC Securities. Alumnus of UC Berkeley's Center for Responsible Decentralized Intelligence.",
      links: { linkedin: "https://www.linkedin.com/in/fernando-j/" }
    },
    {
      name: "Tianqin Li",
      role: "Chief Scientist",
      bio: "PhD in CMU CS Department under Zico Kolter and Tai Sing Lee. Collaborated with Ruslan Salakhutdinov. Fellow at Y Combinator. Research focuses on AI models and human intelligence. NeurIPS 2023 Oral presentation. Guest lecturer in multiple CMU AI courses.",
      links: { linkedin: "https://www.linkedin.com/in/tianqin-li-b16299170/", website: "http://crazy-jack.github.io/works.html" }
    },
    {
      name: "Florence Li",
      role: "Executive Team",
      bio: "Creative Technology Executive and Stanford CS master specializing in Machine Learning & Blockchain. Scaled MetaY's GPU DePIN platform. Introduced $10M+ in AI and Web3 investments. Frequent speaker at tech summits.",
      links: { linkedin: "https://www.linkedin.com/in/florence-li-18b657206/" }
    }
  ];

  const advisors = [
    {
      name: "Prof. Tai Sing Lee",
      role: "Director, Lee Lab for Biological & Machine Intelligence, CMU",
      bio: "Full Professor of Computer Science and Neuroscience at CMU. Dual PhDs from Harvard and MIT. AI Mentor to Andrew Ng (Co-Founder of Google Brain/DeepMind). Trained leaders at DeepMind, OpenAI, Google, and Berkeley. Recipient of McDonnell-Pew Young Investigator Award, NSF CAREER Award, and ICCV Helmholtz Prize.",
      links: { website: "https://csd.cmu.edu/people/faculty/taising-lee" }
    },
    {
      name: "Orion Parrott",
      role: "Co-Founder & General Partner at Orange DAO",
      bio: "Bay Area entrepreneur and venture investor focused on early-stage Web3 and fintech. Y Combinator Summer '16 alumnus. Executive MBA from UC Berkeley's Haas School of Business.",
      links: { linkedin: "https://www.linkedin.com/in/orionparrott/" }
    },
    {
      name: "Prof. Xi Chen",
      role: "Professor & André Meyer Faculty Fellow, NYU Stern",
      bio: "Dual expert in machine learning and blockchain. 230+ papers and 18k+ citations. PhD & MS from CMU. Principal Scientist at Amazon Ads. Forbes 30 Under 30 (Science).",
      links: { website: "https://people.stern.nyu.edu/xchen3/" }
    }
  ];

  const fellows = [
    { name: "Xuandong Zhao", institution: "UC Berkeley RDI" },
    { name: "Yuejiang Liu", institution: "Stanford AI Lab" },
    { name: "Yaqi Xie", institution: "CMU Robotics Institute" },
    { name: "Shiyi Du", institution: "CMU Computational Biology" },
    { name: "Jiayuan Liu", institution: "CMU Computer Science" },
    { name: "Yitong Li", institution: "Stanford Computational Science" },
    { name: "Chengfeng Mao", institution: "MIT" },
    { name: "Jason Xiaotian Dou", institution: "Harvard Medical School" },
    { name: "Jiayun Peter Wang", institution: "Caltech" },
    { name: "Shi Feng", institution: "Harvard CS" },
    { name: "Xueying Ding", institution: "CMU Machine Learning & Public Policy" },
    { name: "Shang Gao", institution: "Caltech" }
  ];

  return (
    <section id="team" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6d28d9]/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Leadership</h2>
          <div className="h-1 w-20 bg-[#C41230]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {leadership.map((member, i) => (
            <div key={i} className="bg-[#121212]/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 group hover:border-[#6d28d9]/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-1 group-hover:text-[#8b5cf6] transition-colors text-white">{member.name}</h3>
              <p className="text-[#C41230] font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
              <div className="flex gap-4">
                {member.links.linkedin && (
                  <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.links.website && (
                  <a href={member.links.website} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Advisory Board</h2>
          <div className="h-1 w-20 bg-[#C41230]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {advisors.map((member, i) => (
            <div key={i} className="bg-[#121212]/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 group hover:border-[#6d28d9]/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-1 group-hover:text-[#8b5cf6] transition-colors text-white">{member.name}</h3>
              <p className="text-[#C41230] font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
              <div className="flex gap-4">
                {member.links.linkedin && (
                  <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.links.website && (
                  <a href={member.links.website} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Research Fellows</h2>
          <div className="h-1 w-20 bg-[#C41230]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fellows.map((fellow, i) => (
            <div key={i} className="flex items-center p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[#C41230] mr-4"></div>
              <div>
                <p className="font-semibold text-gray-200">{fellow.name}</p>
                <p className="text-xs text-gray-500">{fellow.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
