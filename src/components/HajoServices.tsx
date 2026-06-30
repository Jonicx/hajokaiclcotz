import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wrench, TrendingUp, Building2, Droplet, ArrowRight, ShieldCheck } from 'lucide-react';
import { HAJO_SERVICES } from '../data/hajoData';

interface HajoServicesProps {
  darkMode: boolean;
}

// Icon mapper helper
const IconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Wrench: Wrench,
  TrendingUp: TrendingUp,
  Building2: Building2,
  Droplet: Droplet,
};

export default function HajoServices({ darkMode }: HajoServicesProps) {
  const [selectedService, setSelectedService] = useState<string>(HAJO_SERVICES[0].id);

  const activeServiceData = HAJO_SERVICES.find(s => s.id === selectedService) || HAJO_SERVICES[0];
  const ActiveIconComponent = IconMap[activeServiceData.iconName] || Wrench;

  return (
    <section className="py-20 lg:pt-15 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="mb-10">
          <span className="text-[10px] font-mono uppercase tracking-widest bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full">
            Kazi Zetu • Core Expertise
          </span>
          <h2 className={`mt-4 font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Comprehensive Contracting for Modern Infrastructure
          </h2>
          <p className={`text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Equipped with state-of-the-art heavy machinery and standard materials laboratories, we deliver Class-5 certified structural accuracy.
          </p>
          <div className="h-1 w-12 bg-amber-500 mt-4 rounded-full" />
        </div>

        {/* Dynamic Service Grid (Visual Cards & Info panels combined) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: List of Services (Cards with clean amber hover) */}
          <div className="lg:col-span-5 space-y-3 w-full">
            {HAJO_SERVICES.map((service) => {
              const IconComp = IconMap[service.iconName] || Wrench;
              const isSelected = selectedService === service.id;

              return (
                <div key={service.id}>
                  <button
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer relative overflow-hidden group ${
                      isSelected
                        ? darkMode
                          ? 'bg-slate-900/80 border-amber-500/40 shadow-lg shadow-slate-950/40 text-white'
                          : 'bg-white border-amber-500/40 shadow-md shadow-slate-100 text-slate-950'
                        : darkMode
                        ? 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800 hover:bg-slate-900/20 hover:text-slate-200'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                    id={`service-tab-${service.id}`}
                  >
                    {/* Subtle active background glow card */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent pointer-events-none" />
                    )}

                    {/* Icon stage */}
                    <div className={`p-3 rounded-xl border transition-all duration-300 ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 border-amber-500'
                        : darkMode
                        ? 'bg-slate-900 border-slate-800 text-slate-400 group-hover:text-amber-400'
                        : 'bg-slate-100 border-slate-200 text-slate-500 group-hover:text-amber-500'
                    }`}>
                      <IconComp className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-display font-black text-sm uppercase tracking-wide ${isSelected ? (darkMode ? 'text-white' : 'text-slate-950') : (darkMode ? 'text-slate-400' : 'text-slate-600')}`}>
                          {service.title}
                        </h3>
                        <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${
                          isSelected ? 'text-amber-500 dark:text-amber-400 translate-x-1' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                        }`} />
                      </div>
                      <span className="block text-[9px] font-mono lowercase text-slate-400 dark:text-slate-500 mt-0.5">
                        {service.swahiliTitle}
                      </span>
                      <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                        isSelected 
                          ? darkMode ? 'text-slate-300' : 'text-slate-600'
                          : darkMode ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </button>

                  {isSelected && (
                    <div className="mt-3 lg:hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className={`p-5 rounded-2xl border relative overflow-hidden transition-all duration-300 ${
                            darkMode 
                              ? 'bg-slate-900/60 border-slate-800 shadow-xl' 
                              : 'bg-white border-slate-200 shadow-md'
                          }`}
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.3)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(148,163,184,0.9)_1px,transparent_1px)] bg-size-[16px_16px] opacity-80 pointer-events-none" />

                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                                <IconComp className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className={`font-display font-black text-lg uppercase tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                  {service.title}
                                </h4>
                                <span className="block text-[11px] font-mono font-medium text-amber-500 dark:text-amber-400 italic">
                                  Swahili: {service.swahiliTitle}
                                </span>
                              </div>
                            </div>

                            <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                              {service.longDescription}
                            </p>

                            <div className="border-t pt-4 border-slate-200/50 dark:border-slate-800/40">
                              <h5 className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-3 font-bold">
                                Technical Capabilities / Ufanisi wa Kazi
                              </h5>
                              
                              <div className="grid grid-cols-1 gap-2">
                                {service.features.map((feat, index) => (
                                  <div 
                                    key={index}
                                    className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-medium ${
                                      darkMode 
                                        ? 'bg-slate-950 border-slate-800/60 text-slate-200' 
                                        : 'bg-slate-50 border-slate-200/60 text-slate-700'
                                    }`}
                                  >
                                    <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                                    <span>{feat}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Blueprint Showcase Stage */}
          <div className="hidden lg:block lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden transition-all duration-300 ${
                  darkMode 
                    ? 'bg-slate-900/60 border-slate-800 shadow-xl' 
                    : 'bg-white border-slate-200 shadow-md'
                }`}
              >
                {/* Background blueprint vector grid overlay decoration inside card */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.3)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(148,163,184,0.9)_1px,transparent_1px)] bg-size-[16px_16px] opacity-80 pointer-events-none" />

                <div className="relative z-10">
                  {/* Service Badge Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <ActiveIconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className={`font-display font-black text-xl text-slate-950 dark:text-white uppercase tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {activeServiceData.title}
                      </h4>
                      <span className="block text-xs font-mono font-medium text-amber-500 dark:text-amber-400 italic">
                        Service Category: {activeServiceData.swahiliTitle}
                      </span>
                    </div>
                  </div>

                  {/* Sizable detailed description */}
                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {activeServiceData.longDescription}
                  </p>

                  {/* Core engineering sub-capabilities list */}
                  <div className="border-t pt-6 border-slate-200/50 dark:border-slate-800/40">
                    <h5 className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-4 font-bold">
                      Technical Capabilities / Ufanisi wa Kazi
                    </h5>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeServiceData.features.map((feat, index) => (
                        <div 
                          key={index}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-medium ${
                            darkMode 
                              ? 'bg-slate-950 border-slate-800/60 text-slate-200' 
                              : 'bg-slate-50 border-slate-200/60 text-slate-700'
                          }`}
                        >
                          <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trust Banner inside Service Stage */}
                  <div className={`mt-8 p-4 rounded-xl border flex items-center gap-3 text-xs ${
                    darkMode 
                      ? 'bg-amber-500/5 border-amber-500/10 text-slate-300' 
                      : 'bg-amber-500/10 border-amber-500/25 text-slate-800'
                  }`}>
                    <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0" />
                    <p className="leading-relaxed">
                      All deliverables follow specific British Standard Specifications (BS) and Tanzania National Road Agency (TANROADS) compliance manuals.
                    </p>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
