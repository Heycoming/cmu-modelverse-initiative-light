import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-modelverse-bg">
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cmu-red/10 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-modelverse-accent/10 blur-[150px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-cmu-red">
            Intelligence Cubed × Carnegie Mellon University
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
            Modelverse Dev <br />
            <span className="text-gradient">Initiative</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-xl md:text-2xl leading-relaxed mb-12">
            A collaborative research ecosystem pioneering decentralized intelligence and cost-effective AGI development.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#vision" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cmu-red hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Explore Our Vision
            </a>
            <a href="#team" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all">
              Meet the Team
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
