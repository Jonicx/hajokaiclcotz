import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

interface HajoBackgroundProps {
  darkMode: boolean;
  activeSection: string;
}

export default function HajoBackground({ darkMode, activeSection }: HajoBackgroundProps) {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll position into different rotation rates and scale shifts
  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const driftValue = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, -50]);

  // Adjust blur blob positions and colors based on active section
  const [blobConfigs, setBlobConfigs] = useState({
    blob1: 'bg-amber-500/10 dark:bg-amber-500/15',
    blob2: 'bg-emerald-500/10 dark:bg-emerald-500/10',
    blob3: 'bg-amber-600/5 dark:bg-amber-600/10',
    lineStyle: 'border-slate-200/40 dark:border-slate-800/20'
  });

  useEffect(() => {
    switch (activeSection) {
      case 'home':
        setBlobConfigs({
          blob1: 'bg-yellow-500/15 dark:bg-yellow-500/20', // High golden-sun intensity
          blob2: 'bg-orange-600/5 dark:bg-orange-600/10',
          blob3: 'bg-blue-500/5 dark:bg-blue-500/10', // Cool Dar es Salaam sky
          lineStyle: 'border-slate-200/50 dark:border-slate-900/30'
        });
        break;
      case 'about':
        setBlobConfigs({
          blob1: 'bg-amber-600/10 dark:bg-amber-600/15', // Soil / Earthy
          blob2: 'bg-emerald-600/10 dark:bg-emerald-600/10', // Savannah grasslands
          blob3: 'bg-yellow-500/5 dark:bg-yellow-500/10',
          lineStyle: 'border-emerald-500/5 dark:border-emerald-500/5'
        });
        break;
      case 'services':
        setBlobConfigs({
          blob1: 'bg-yellow-500/10 dark:bg-yellow-500/15', // Machinery sparks
          blob2: 'bg-blue-500/10 dark:bg-blue-500/10', // Deep water systems
          blob3: 'bg-slate-500/5 dark:bg-slate-500/10', // Solid steel / concrete
          lineStyle: 'border-slate-200/70 dark:border-slate-800/40' // Structured blueprint grid lines
        });
        break;
      case 'projects':
        setBlobConfigs({
          blob1: 'bg-orange-500/10 dark:bg-orange-500/15', // African sunset
          blob2: 'bg-emerald-500/5 dark:bg-emerald-500/5',
          blob3: 'bg-yellow-600/10 dark:bg-yellow-600/15', // Completed Gold
          lineStyle: 'border-dashed border-slate-300 dark:border-slate-800/40' // Grid of structural drafts
        });
        break;
      case 'contact':
        setBlobConfigs({
          blob1: 'bg-yellow-500/15 dark:bg-yellow-500/20', // Energetic yellow
          blob2: 'bg-blue-500/10 dark:bg-blue-500/10',
          blob3: 'bg-amber-500/10 dark:bg-amber-500/15',
          lineStyle: 'border-slate-200/40 dark:border-slate-800/20'
        });
        break;
      default:
        break;
    }
  }, [activeSection]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      
      {/* 1. Slow Organic Blurring Blobs representing Savannah Sky and earth colors */}
      <motion.div 
        style={{ rotate: rotateValue, x: driftValue }}
        className={`absolute top-[10%] left-[10%] w-[50%] h-[50%] rounded-full blur-3xl transition-colors duration-1000 ${blobConfigs.blob1}`}
      />
      <motion.div 
        style={{ y: driftValue, rotate: rotateValue }}
        className={`absolute top-[40%] right-[10%] w-[60%] h-[60%] rounded-full blur-3xl transition-colors duration-1000 ${blobConfigs.blob2}`}
      />
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        className={`absolute bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full blur-3xl transition-colors duration-1000 ${blobConfigs.blob3}`}
      />

      {/* 2. Structured Line Grids (Engineering Blueprint Overlay) */}
      <div className="absolute inset-0 opacity-[0.22] dark:opacity-[0.14] transition-all duration-1000">
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:32px_32px]`} />
        
        {/* Giant architectural diagonal guidelines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.line 
            x1="0" y1="0" x2="100%" y2="100%" 
            stroke={darkMode ? "rgba(251, 191, 36, 0.2)" : "rgba(245, 158, 11, 0.9)"} 
            strokeWidth="3"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            strokeDasharray="10 15"
          />
          <motion.line 
            x1= "50%" y1="0" x2="100%" y2="50%" 
            stroke={darkMode ? "rgba(251, 191, 36, 0.2)" : "rgba(245, 158, 11, 0.9)"} 
            strokeWidth="4"
            animate={{ strokeDashoffset: [100, 0] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            strokeDasharray="10 20"
          />

          <motion.line 
            x1="50%" y1="50%" x2="0" y2="100%" 
            stroke={darkMode ? "rgba(251, 191, 36, 0.2)" : "rgba(245, 158, 11, 0.9)"} 
            strokeWidth="2"
            animate={{ strokeDashoffset: [100, 0] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            strokeDasharray="8 20"
          />

          <motion.line 
            x1="0" y1="50%" x2="50%" y2="50%" 
            stroke={darkMode ? "rgba(251, 191, 36, 0.2)" : "rgba(245, 158, 11, 0.9)"} 
            strokeWidth="4"
            animate={{ strokeDashoffset: [100, 0] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            strokeDasharray="8 20"
          />

        </svg>
      </div>

      {/* 3. Subtle floating dust motes or sparkles representing sparks from steel cutting & dust from construction */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-amber-400 dark:bg-amber-400"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + (i * 23) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 25 : -15), 0],
              opacity: [0.2, 0.7, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 4. Fine contour map patterns (subtle Swahili woven baskets texture tribute in margins) */}
      <div className="absolute right-0 top-0 bottom-0 w-24 lg:opacity-[0.4] opacity-[0.1] dark:opacity-[0.05] pointer-events-none block">
        <svg className="w-full h-full" viewBox="0 0 100 1000" fill="none" stroke="orange" >
          {[...Array(20)].map((_, idx) => (
            <path
              key={idx}
              d={`M 200 ${idx * 50} Q ${50 - (idx % 2) * 0} ${idx * 50 + 25} 70 ${idx * 50 + 50}`}
              strokeWidth="4"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
