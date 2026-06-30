import { motion, type Variants } from "motion/react";
import { ArrowRight, ShieldCheck } from 'lucide-react';
import sewageControl from "../../assets/Process-Plant-North.png";
import { relative } from "path";

interface HajoHeroProps {
  darkMode: boolean;
  setActiveSection: (sec: string) => void;
}

export default function HajoHero({ darkMode, setActiveSection }: HajoHeroProps) {
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

  return (
    <section id="home" className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center pt-8 pb-16 lg:py-20 transition-colors duration-300">
      
      {/* Decorative side accent reflecting Swahili heritage stripe (colors: Green, Yellow, Blue of Tanzania flag, but in modern thin vector line styles) */}
      <div className="absolute top-0 left-0 w-1.5 h-full flex flex-col pointer-events-none opacity-40">
        <div className="flex-1 bg-emerald-600" />
        <div className="h-20 bg-amber-400" />
        <div className="h-6 bg-slate-950" />
        <div className="flex-1 bg-blue-600" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Messaging Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center"
          >
            {/* Swahili Warm Greeting Tagline */}
            <motion.div 
              variants={itemVariants} 
              className={`inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold uppercase tracking-wider mb-6 transition-colors duration-300 ${
                darkMode 
                  ? 'bg-amber-500/5 text-amber-400 border-amber-500/20' 
                  : 'bg-amber-500/10 text-amber-800 border-amber-500/30'
              }`}
            >
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              Karibu HAJOKA ICL • Welcome to Tanzanian Quality
            </motion.div>

            {/* Main Bold Heading with uniform typography & color coordination */}
            <motion.h1 
              variants={itemVariants}
              className={`font-display font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}
            >
              Building Tanzania&apos;s <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-amber-400 to-amber-600">
                Next Infrastructure Era
              </span>
            </motion.h1>

            {/* Bilingual descriptions that are highly welcoming */}
            <motion.p 
              variants={itemVariants}
              className={`text-base sm:text-lg mb-4 leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              HAJOKA International Company Limited (HIC LTD) is an integrative international company registered to undertake and execute Mechanical, Civil Engineering and Environment Control Contract Works plus Structural Building contractors operating across East Africa. We lay down high tolerance highway lanes, massive water supply canals, and modern commercial landmarks.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className={`text-xs font-mono mb-8 leading-relaxed italic ${
                darkMode ? 'text-amber-500/70' : 'text-amber-800/80'
              }`}
            >
              &ldquo;Tunajenga kwa uzalendo, maarifa ya kisasa, na ubora thabiti unaodumu kwa vizazi vijavyo.&rdquo;
              <span className="block not-italic text-[10px] uppercase font-bold tracking-wider mt-1">— HAJOKA ICL</span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={() => setActiveSection('projects')}
                className="px-6 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-sans font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-md shadow-amber-500/10 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
              >
                Our Projects / Miradi Yetu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => setActiveSection('about')}
                className={`px-6 py-4 font-sans font-extrabold uppercase tracking-wider text-xs rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                  darkMode 
                    ? 'bg-slate-900/40 hover:bg-slate-900 border-slate-800 text-slate-200 hover:text-white' 
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                Company Story
              </button>
            </motion.div>

            {/* Verified Trust stats from CRB registry and operation footprint */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 border-t pt-6 border-slate-200/50 dark:border-slate-800/40">
              <div>
                <p className="block font-display font-black text-xl lg:text-2xl text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-amber-700 to-amber-800">Class
                  <span style={{
                    verticalAlign: "super", 
                    fontSize: '80%',
                  }}>5</span>
                </p>
                <span className={`block text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  CRB Rating
                </span>
              </div>
              <div>
                <span className="block font-display font-black text-xl lg:text-2xl text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-amber-700 to-amber-800">Decade
                  <span style={{
                    verticalAlign: "super", 
                    fontSize: '80%',
                  }}>+</span>
                </span>
                <span className={`block text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  Engineering
                </span>
              </div>
              <div>
                <span className="block font-display font-black text-xl lg:text-2xl text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-amber-700 to-amber-800">100
                  <span style={{
                    verticalAlign: "super", 
                    fontSize: '80%',
                  }}>%</span>
                </span>
                <span className={`block text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  Tanzanian Rooted
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium AI-Generated Excavator Sunrise Asset Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="lg:col-span-6 xl:col-span-5 relative"
          >
            {/* Visual Glassmorphic Frame with custom shadows */}
            <div className={`p-2 rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 relative ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800/80 shadow-slate-950/60' 
                : 'bg-white border-slate-200/60 shadow-slate-200/60'
            }`}>
              
              {/* Construction Equipment Status Bar decoration */}
              <div className={`flex items-center justify-between px-4 py-2.5 border-b font-mono text-[10px] uppercase tracking-wider ${
                darkMode ? 'border-slate-800/80 text-slate-500' : 'border-slate-100 text-slate-400'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>Plant Structural Refurbishment</span>
                </div>
                <span>Reg: CRB #C5/823/10/2015</span>
              </div>

              {/* Main Image Stage */}
              <div className="aspect-4/3 w-full overflow-hidden relative rounded-xl">
                <img 
                  src={sewageControl} 
                  alt="HAJOKA ICL processing Plant Structural Refurbishment, Bulyanhulu Gold Mine (Acacia), picture taken on site in Tanzania" 
                  className="object-cover w-full h-full transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

                {/* Floating Swahili project caption over the image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-xs border border-amber-500/20 text-white flex justify-between items-center">
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-amber-400">Bulyanhulu Gold Mine </span>
                    <h3 className="font-display font-extrabold text-sm tracking-tight text-white">Plant Structural Refurbishment</h3>
                  </div>
                  <span className="text-[10px] font-mono bg-amber-500/25 text-amber-400 border border-amber-500/35 px-2 py-0.5 rounded uppercase font-bold">
                    Acacia
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Floating Accreditation Badge */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 p-4 rounded-xl border shadow-xl bg-slate-950 border-amber-500/30 text-white font-mono text-xs flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="block font-bold text-[10px] uppercase text-amber-400">Accredited by</span>
                <span className="block font-display font-extrabold text-white text-[11px]">Contractors Registration Board</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
