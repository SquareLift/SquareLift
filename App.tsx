import React from 'react';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full selection:bg-bright-accent selection:text-white">
      {/* Immersive Background */}
      <StarBackground />
      
      {/* Main Content Content */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col gap-24 md:gap-32 pb-24">
          <Hero />
          <Services />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default App;