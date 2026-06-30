import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Landmark, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../assets/hajoka-logo-transparent.png';


interface HajoHeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function HajoHeader({ darkMode, setDarkMode, activeSection, setActiveSection }: HajoHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', swahili: 'Mwanzo' },
    { id: 'about', label: 'About Us', swahili: 'Kuhusu Sisi' },
    { id: 'services', label: 'Services', swahili: 'Huduma' },
    { id: 'projects', label: 'Projects', swahili: 'Miradi' },
    { id: 'contact', label: 'Contact', swahili: 'Mawasiliano' },
  ];

const handleNavSelect = (sectionId: string) => {
  setActiveSection(sectionId);

  requestAnimationFrame(() => {
    setMobileMenuOpen(false);
  });
};

  return (
     <header className={`sticky top-5 z-50 transition-all duration-300 ${
      isScrolled 
        ? darkMode 
          ? 'bg-slate-950/80 border-b border-slate-900/80 backdrop-blur-md shadow-lg shadow-slate-950/20' 
          : 'bg-white/80 border-b border-slate-200/50 backdrop-blur-md shadow-sm shadow-slate-100/30'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border border-[#e89c4b] rounded-[50px] px-6 bg-transparent">
          
          {/* Logo Brand Frame */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleNavSelect('home')}
          >
            <div className={`p-2.5 rounded-xl border transition-all duration-500 relative overflow-hidden ${
              darkMode ? 'bg-slate-900 border-amber-500/20 group-hover:border-amber-400' : 'bg-amber-100/20 border-amber-500/30 group-hover:border-amber-500'
            } shadow-lg shadow-amber-500/10`}>
              <div className="h-9 w-9 relative flex items-center justify-center overflow-hidden rounded-lg">
                <img src={logo} alt="Logo" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>

          {/* DESKTOP: Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavSelect(item.id)}
                className={`relative px-4 py-2 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSection === item.id ? 'text-amber-500 dark:text-amber-400' : darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-900/40' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                <span className="block text-center">{item.label}</span>
                <span className="block text-[8px] font-medium lowercase font-mono tracking-normal opacity-50 -mt-0.5">{item.swahili}</span>
                {activeSection === item.id && (
                  <motion.div layoutId="headerIndicator" className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 dark:bg-amber-400" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                )}
              </button>
            ))}
          </nav>

          {/* DESKTOP: Action Controls */}
          <div className="hidden md:flex items-center gap-4">
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-mono font-medium ${darkMode ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>KAHAMA</span>
            </div>

            <button onClick={() => setDarkMode(!darkMode)} className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800/80' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`} aria-label="Toggle Theme">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button type="button" onClick={() => handleNavSelect('contact')} className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95 cursor-pointer">
              Request Bid
            </button>
          </div>

          {/* MOBILE: Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg border ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-50 border-slate-200 text-slate-600'}`} aria-label="Toggle Theme">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className={`p-2 rounded-lg border transition-all ${darkMode ? 'border-slate-800 text-slate-400 bg-slate-900' : 'border-slate-200 text-slate-600 bg-slate-50'}`}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE: Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl border shadow-xl md:hidden flex flex-col gap-2 z-50 ${
              darkMode ? 'bg-slate-950 border-slate-900 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavSelect(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all font-sans text-xs font-semibold uppercase tracking-wider ${
                  activeSection === item.id 
                    ? 'bg-amber-500/10 text-amber-500' 
                    : darkMode ? 'hover:bg-slate-900 text-slate-400' : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[9px] font-mono lowercase opacity-60 tracking-normal">{item.swahili}</span>
              </button>
            ))}
            <div className="h-px my-2 bg-linear-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-mono font-medium ${darkMode ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>KAHAMA</span>
            </div>
            <button 
              type="button" 
              onClick={() => handleNavSelect('contact')} 
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-sans text-xs font-bold uppercase tracking-wider rounded-xl text-center transition-all"
            >
              Request Bid
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}