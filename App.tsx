import React, { useState } from 'react';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type PageType = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigation = (page: PageType, sectionId?: string) => {
    setCurrentPage(page);
    
    if (page === 'home') {
      // Small timeout to allow DOM to update if switching from another page
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <div className="relative min-h-screen w-full selection:bg-bright-accent selection:text-white">
      {/* Immersive Background */}
      <StarBackground />
      
      {/* Main Content Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onNavigate={handleNavigation} />
        
        <main className="flex-grow flex flex-col">
          {currentPage === 'home' && (
            <div className="flex flex-col gap-24 md:gap-32 pb-24">
              <div id="hero"><Hero /></div>
              <div id="services"><Services /></div>
              <div id="faq"><FAQ /></div>
              <div id="contact"><Contact /></div>
            </div>
          )}
          
          {currentPage === 'privacy' && (
            <PrivacyPolicy onBack={() => handleNavigation('home')} />
          )}

          {currentPage === 'terms' && (
            <TermsOfService onBack={() => handleNavigation('home')} />
          )}
        </main>
        
        <Footer onNavigate={handleNavigation} />
        <BackToTop />
      </div>
    </div>
  );
};

export default App;