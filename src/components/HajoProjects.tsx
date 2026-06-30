import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, ClipboardList, TrendingUp, Sliders, Info, HardHat } from 'lucide-react';
import { HAJO_PROJECTS } from '../data/hajoData';

interface HajoProjectsProps {
  darkMode: boolean;
}

export default function HajoProjects({ darkMode }: HajoProjectsProps) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProj, setSelectedProj] = useState<string | null>(null);

  // Simple simulator state
  const [simSector, setSimSector] = useState<'roads' | 'building' | 'water'>('roads');
  const [simScope, setSimScope] = useState<number>(10); // km or stories

  // Filter projects
  const filteredProjects = filter === 'all' 
    ? HAJO_PROJECTS 
    : HAJO_PROJECTS.filter(p => p.category === filter);

  // Simulator logic (completely client-side and immediate)
  const calculateEstimate = () => {
    if (simSector === 'roads') {
      const duration = Math.ceil(simScope * 1.5); // 1.5 weeks per km
      const cement = simScope * 45; // tons of asphalt/subgrade material
      const operators = Math.ceil(simScope * 1.2 + 8);
      return { duration, cement, operators, unit: 'km', swahiliUnit: 'kilomita' };
    } else if (simSector === 'building') {
      const duration = Math.ceil(simScope * 4); // 4 weeks per floor
      const cement = simScope * 180; // bags of structural grade aggregate
      const operators = Math.ceil(simScope * 3.5 + 12);
      return { duration, cement, operators, unit: 'floors', swahiliUnit: 'gorofa' };
    } else {
      const duration = Math.ceil(simScope * 0.8); // 0.8 weeks per km pipelines
      const cement = simScope * 20; // pipeline modules
      const operators = Math.ceil(simScope * 0.6 + 5);
      return { duration, cement, operators, unit: 'km mains', swahiliUnit: 'kilomita za mabomba' };
    }
  };

  const simResult = calculateEstimate();

  return (
    <section className="py-20 lg:pt-15 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-[10px] font-mono uppercase tracking-widest bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full">
            Miradi Yetu • Case Portfolios
          </span>
          <h2 className={`mt-4 font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Engineering Landmarks Across Tanzania
          </h2>
          <p className={`text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Explore our curated portfolio of public works and private commercial builds, each executed under strict quality safety checks.
          </p>
          <div className="h-1 w-12 bg-amber-500 mt-4 rounded-full" />
        </div>

        {/* Categories Sorter tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-slate-200/50 dark:border-slate-800/40 pb-5">
          {[
            { id: 'all', label: 'All Projects', swahili: 'Miradi Yote' },
            { id: 'roads', label: 'Roadways & Highways', swahili: 'Barabara' },
            { id: 'building', label: 'Infrastructure', swahili: 'Majengo' },
            { id: 'water', label: 'Water Networks', swahili: 'Mifumo ya Maji' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl font-sans text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? 'bg-amber-500 text-slate-950'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-200/75'
              }`}
            >
              <span>{tab.label}</span>
              <span className="block text-[8px] font-mono lowercase opacity-60 font-medium -mt-0.5">{tab.swahili}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-2 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => {
              const isExpanded = selectedProj === p.id;

              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-2xl border overflow-hidden flex flex-col h-full transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-900/40 border-slate-800 hover:border-amber-500/20' 
                      : 'bg-white border-slate-200 hover:shadow-lg'
                  }`}
                >
                  {/* Card Image Stage */}
                  <div className="aspect-14/10 overflow-hidden relative">
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="object-cover w-full h-full transform hover:scale-104 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />

                    {/* Left Tag: Project status badge */}
                    <div className="absolute top-4 left-4 flex gap-2">
                          
                      <span className="px-2.5 bg-amber-900/80 border-amber-300/90 text-amber-400 py-1 text-[9px] font-bold uppercase tracking-wider  rounded-lg border " >
                        {p.status}
                      </span>
                    </div>

                    {/* Right Tag: Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-0.5 rounded-md bg-slate-950/80 text-white font-mono text-[9px] uppercase tracking-wider border border-white/10">
                        {p.category}
                      </span>
                    </div>

                    {/* Inside image bottom caption */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[10px]">
                        <MapPin className="h-3 w-3" />
                        <span>{p.location}</span>
                      </div>
                    </div>

                  </div>

                  {/* Card Content Stage */}
                  <div className="p-5 flex-1 flex flex-col justify-between ">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> Year: {p.year}
                        </span>
                        <span>Contractor Registered</span>
                      </div>
                      
                      <h3 className={`font-display font-bold text-base text-slate-950 p-2 dark:text-white  leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {p.title}
                      </h3>
                    </div>

                    {/* Dynamic Accordion list for scope */}
                    <div className="mt-4">
                      <button
                        onClick={() => setSelectedProj(isExpanded ? null : p.id)}
                        className={`w-full py-2.5 px-3 rounded-lg border text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all cursor-pointer ${
                          isExpanded
                            ? 'bg-amber-500 text-slate-950 border-amber-500'
                            : darkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                        id={`scope-btn-${p.id}`}
                      >
                        <span className="flex items-center gap-1.5">
                          <ClipboardList className="h-3.5 w-3.5" />
                          {isExpanded ? 'Hide Scope / Funga' : 'Show Build Scope'}
                        </span>
                        <span className="text-[10px]">{isExpanded ? '−' : '+'}</span>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden mt-3"
                          >
                            <ul className={`text-xs space-y-2 p-3 rounded-xl border font-medium ${
                              darkMode ? 'bg-slate-950/60 border-slate-850/80 text-slate-300' : 'bg-slate-50 border-slate-150/80 text-slate-600'
                            }`}>
                              {p.scope.map((s, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <span className="text-amber-500 font-bold shrink-0">✓</span>
                                  <span>{s}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Interactive Bid Estimator / Schedule Simulator Widget (Tanzanian Construction specs) */}
        <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
          darkMode 
            ? 'bg-slate-900/60 border-slate-800 shadow-xl' 
            : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <TrendingUp className="h-40 w-40 text-amber-500" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Config Column */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded-md mb-4">
                <Sliders className="h-3 w-3" />
                Planning Assistant • Kisafirishaji Kikadirio
              </span>
              
              <h3 className={`font-display font-black text-xl text-slate-950 dark:text-white leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Simulate Your Project Schedule &amp; Resources
              </h3>
              
              <p className={`text-xs mt-1.5 mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Adjust the sliders below to get a highly reliable, empirical duration and material projection based on HAJOKA ICL&apos;s Class-5 mobilization metrics in East Africa.
              </p>

              {/* Selector */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 font-bold">
                    Select Build Category / Chagua Aina ya Ujenzi
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'roads', label: 'Road paving', swahili: 'Barabara' },
                      { id: 'building', label: 'Commercial build', swahili: 'Ghorofa' },
                      { id: 'water', label: 'Water mains', swahili: 'Maji' },
                    ].map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => {
                          setSimSector(sec.id as any);
                          setSimScope(sec.id === 'building' ? 5 : 15);
                        }}
                        className={`p-3 rounded-xl border text-center font-sans text-xs font-bold transition-all cursor-pointer ${
                          simSector === sec.id
                            ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-sm'
                            : darkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900/50'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                        }`}
                      >
                        <span>{sec.label}</span>
                        <span className="block text-[8px] font-mono uppercase opacity-65 tracking-normal font-medium mt-0.5">{sec.swahili}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-slate-400">Project Scope Size:</span>
                    <span className="text-amber-500 dark:text-amber-400 font-extrabold">
                      {simScope} {simResult.unit} ({simResult.swahiliUnit})
                    </span>
                  </div>
                  
                  <input 
                    type="range" 
                    min={simSector === 'building' ? 1 : 2}
                    max={simSector === 'building' ? 25 : 80}
                    value={simScope}
                    onChange={(e) => setSimScope(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    id="sim-scope-slider"
                  />
                  
                  <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 mt-1">
                    <span>Min: {simSector === 'building' ? '1' : '2'}</span>
                    <span>Max: {simSector === 'building' ? '25' : '80'}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Output Display Column */}
            <div className="lg:col-span-6">
              <div className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-slate-950 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
              }`}>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-200/50 dark:border-slate-800/50">
                  <HardHat className="h-4 w-4 text-amber-500" />
                  <span>Mobilization Projection Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Stat 1 */}
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-center">
                    <span className="block font-display font-black text-2xl text-amber-500 dark:text-amber-400">
                      {simResult.duration}
                    </span>
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold mt-1">
                      Est. Weeks
                    </span>
                    <span className="block text-[8px] font-mono text-slate-500">Muda (Wiki)</span>
                  </div>

                  {/* Stat 2 */}
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-center">
                    <span className="block font-display font-black text-2xl text-amber-500 dark:text-amber-400">
                      {simResult.cement}
                    </span>
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold mt-1">
                      {simSector === 'roads' ? 'Tons Asphalt' : simSector === 'building' ? 'Bags Cement' : 'Pipe Modules'}
                    </span>
                    <span className="block text-[8px] font-mono text-slate-500">Mali Malighafi</span>
                  </div>

                  {/* Stat 3 */}
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-center">
                    <span className="block font-display font-black text-2xl text-amber-500 dark:text-amber-400">
                      {simResult.operators}
                    </span>
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold mt-1">
                      Site Crew
                    </span>
                    <span className="block text-[8px] font-mono text-slate-500">Mafundi &amp; Wahandisi</span>
                  </div>
                </div>

                {/* Estimation Note */}
                <div className="mt-5 flex items-start gap-2 text-[10px] leading-relaxed text-slate-400">
                  <Info className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <p>
                    This simulator provides a standardized estimation based on optimal weather and ground conditions in regions like Coastal Dar es Salaam or Central Dodoma. Submit a formal tender bid request below to receive a high-fidelity geotechnical valuation report.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
