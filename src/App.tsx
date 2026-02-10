import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Team from './components/Team';
import Research from './components/Research';
import Partners from './components/Partners';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Team />
        <Research />
        <Partners />
      </main>
      
      <footer className="py-12 bg-black text-center text-gray-600 text-sm border-t border-white/5">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} i³ × CMU Modelverse Dev Initiative. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://intelligencecubed.io/" className="hover:text-white transition-colors">Intelligence Cubed</a>
            <a href="https://www.cs.cmu.edu/research/" className="hover:text-white transition-colors">CMU Research</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
