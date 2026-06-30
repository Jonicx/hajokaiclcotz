import { HardHat, ArrowUp, ArrowRight, ShieldCheck } from 'lucide-react';
import logo from '../../assets/hajoka-logo-transparent.png';
import { motion, AnimatePresence } from 'motion/react';

interface HajoFooterProps {
  darkMode: boolean;
  setActiveSection: (sec: string) => void;
}

export default function HajoFooter({ darkMode, setActiveSection }: HajoFooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  return (
    <footer className={`border-t relative z-10 transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-950 border-slate-900 text-slate-400' 
        : 'bg-slate-50 border-slate-200 text-slate-500'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-200/50 dark:border-slate-900/80">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-6">
            {/* Logo Brand Frame */}
            <div 
              className="flex items-start gap-4 cursor-pointer group mb-8" 
              onClick={() => setActiveSection('home')}
            >
              {/* Abstract HK Construction Truss Logo Mark */}
              <div
                className={`shrink-0 p-2.5 rounded-xl border transition-all duration-500 relative overflow-hidden ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 group-hover:border-amber-400'
                    : 'bg-white border-slate-200 group-hover:border-amber-500'
                } shadow-lg`}
              >
                <div className="absolute inset-0 bg-linear-to-tr from-amber-500/5 to-transparent pointer-events-none" />

                {/* Logo */}
                <div className="h-9 w-9 relative flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <p className={`text-xs leading-relaxed  sm:mt-0 mt-1 ${
                darkMode ? 'text-slate-300' : 'text-slate-900'
              }`}>
                Registered Class-5 Contractor under the Tanzania Contractors Registration Board (CRB). Pioneers in regional asphalt paving, bulk structural excavations, and water sanitation reservoirs.
              </p>
            </div>


            <div className={`p-4 rounded-xl border flex items-center gap-3 text-[11px] max-w-sm ${
              darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <HardHat className="h-5 w-5 text-amber-500 shrink-0" />
              <div>
                <span className={`block font-bold text-slate-900 dark:text-slate-100 text-[10px] uppercase ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Usalama Kwanza • Safety First
                </span>
                <span className="block text-slate-400 dark:text-slate-500">
                  Zero LTI (Lost Time Injury) compliant site operations.
                </span>
                <span className="block text-slate-400 dark:text-slate-500 text-[8px]">We ensure the health and safety of employees and going beyond the legal requirements to provide an accident-free workplace.</span>
              </div>
            </div>
          </div>

        

          {/* Contacts & Regulatory footprints */}
          <div className="md:col-span-6">
            <h4 className={`font-display font-bold text-xs uppercase tracking-wider text-slate-950 dark:text-white mb-4 ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}>
              Tanzanian Footprints
            </h4>
            
            <ul className="space-y-3 text-xs font-mono">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">📍 </span>
                <span> P.O Box 1013 Mwendakulima, D4N Building, KAHAMA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">📞</span>
                <span>+255 763 778 863</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">✉</span>
                <span>info@hajokaicl.co.tz</span>
              </li>
              <li className="flex items-start gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-900">
                <span className="text-amber-500">✓</span>
                <span className="text-[10px] text-slate-400">CRB Reg Nº:  C5/823/10/2015 &amp; M5/37/10/2015</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Closing Coordinates */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400 dark:text-slate-500">
          <div>
            <p>© {currentYear} Hajokaicl.Co.Ltd. All rights reserved.</p>
            
          </div>

          <div className="flex items-center gap-4">
            {/* Hosting Note as requested (No Hosting configuration available directly but we answer clearly and gracefully in the chat) */}
            <span className="flex items-center gap-1 text-[10px]">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>SSL Secure</span>
            </span>

            {/* Back to top button */}
            <button
              onClick={handleScrollToTop}
              className={`p-2.5 rounded-xl border cursor-pointer transition-colors ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-300' 
                  : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-600'
              }`}
              title="Scroll to Top"
              id="footer-back-to-top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
