import { useState, useEffect } from 'react';
import HajoHeader from './components/HajoHeader';
import HajoHero from './components/HajoHero';
import HajoAbout from './components/HajoAbout';
import HajoServices from './components/HajoServices';
import HajoProjects from './components/HajoProjects';
import HajoContact from './components/HajoContact';
import HajoFooter from './components/HajoFooter';
import HajoBackground from './components/HajoBackground';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Sync dark class on html root element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Smooth scroll handler helper
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Listen to scrolling to highlight correct nav link
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // offset for sticky header
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-500 overflow-x-hidden ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#FAF9F6] text-slate-900'
    }`}>
      
      {/* Dynamic African Savannah / Blueprint Mesh Background Animations */}
      <HajoBackground darkMode={darkMode} activeSection={activeSection} />

      {/* Main Structural Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Header */}
        <HajoHeader 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          activeSection={activeSection}
          setActiveSection={handleNavigate}
        />

        {/* Content Stages */}
        <main className="flex-grow">
          
          {/* Section 1: Home / Hero */}
          <div id="home" className="scroll-mt-20">
            <HajoHero darkMode={darkMode} setActiveSection={handleNavigate} />
          </div>

          {/* Section 2: About Us */}
          <div id="about" className="scroll-mt-20 border-t border-slate-200/20 dark:border-slate-900/40">
            <HajoAbout darkMode={darkMode} />
          </div>

          {/* Section 3: Services / Expertise */}
          <div id="services" className="scroll-mt-20 border-t border-slate-200/20 dark:border-slate-900/40">
            <HajoServices darkMode={darkMode} />
          </div>

          {/* Section 4: Projects Showcase */}
          <div id="projects" className="scroll-mt-20 border-t border-slate-200/20 dark:border-slate-900/40">
            <HajoProjects darkMode={darkMode} />
          </div>

          {/* Section 5: Contact & Tenders */}
          <div id="contact" className="scroll-mt-20 border-t border-slate-200/20 dark:border-slate-900/40">
            <HajoContact darkMode={darkMode} />
          </div>

        </main>

        {/* Footer Signature */}
        <HajoFooter darkMode={darkMode} setActiveSection={handleNavigate} />

      </div>
    </div>
  );
}
