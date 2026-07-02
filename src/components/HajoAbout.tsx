import { motion, type Variants } from "motion/react";
import { Target, Users, Landmark, Award } from 'lucide-react';
import { HAJO_MILESTONES } from '../data/hajoData';
import itemVariants from "../components/HajoHero"
interface HajoAboutProps {
  darkMode: boolean;
}

export default function HajoAbout({ darkMode }: HajoAboutProps) {
  const values = [
    {
      icon: <Target className="h-5 w-5 text-amber-500" />,
      title: 'Uzalendo (Patriotism)',
      description: 'We prioritize hiring, training, and sourcing locally in Tanzania, boosting national engineering capacity and local enterprise. Additionally We pursue new creative ideas that have the potential to our company'
    },
    {
      icon: <Award className="h-5 w-5 text-amber-500" />,
      title: 'Ubora (Supreme Quality)',
      description: 'We acknowledge and assume responsibility for actions, products, decisions, and policies. It can be applied to both individual employees and accountability of the company as a whole.'
    },
    {
      icon: <Users className="h-5 w-5 text-amber-500" />,
      title: 'Uadilifu (Integrity)',
      description: 'Uncompromising transparency. Every tender estimation, material spec, and progress update is mapped with clean accuracy.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:pt-15 relative z-10 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Bar */}
        <div className="mb-10 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full">
            Kuhusu Sisi • Our Heritage
          </span>
          <h2 className={`mt-4 font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Constructing with Tanzanian Pride &amp; Precision
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Narrative visual frame (African Engineers asset) */}
          <div className="lg:col-span-6 relative">
            <div className={`p-2 rounded-2xl border shadow-xl relative overflow-hidden transition-all duration-300 ${
              darkMode 
                ? 'bg-slate-900/40 border-slate-800 shadow-slate-950/40' 
                : 'bg-white border-slate-200 shadow-slate-100'
            }`}>

              <div className="absolute inset-0 bg-linear-to-b from-amber-400 via-transparent to-transparent pointer-events-none" />
              <div className="aspect-12/14 lg:aspect-12/10 overflow-hidden rounded-xl">
                <img 
                  src="assets/Mechanical-Engineer.webp" 
                  alt="Registered Tanzanian Mechanical engineer at work" 
                  className="object-cover scale-x-[-1] w-full h-full transform hover:scale-103 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />

              {/* Traditional patterns overlay (subtle bottom frame detail) */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />
            </div>

            {/* Overlapping small visual highlight box */}
            <motion.div 
              animate={{ x: [0, -6, 0] }}
              transition={{ duration: 5.5, delay: 5,  repeat: Infinity, ease: "easeInOut" }}
              className={`border-amber-700/60 border shadow-amber-950/70 absolute bottom-[8%] -left-6 p-4 rounded-xl shadow-md  bg-linear-to-r from-amber-950 via-amber-700/90 to-amber-500/50 text-slate-900 max-w-70 lg:max-w-90 ${
                  darkMode ? 'text-white/70' : 'text-white/90'
                }`}>

              <motion.p     
                className={`text-[11px] font-semibold mb-2 leading-tight italic tracking-wider ${
                  darkMode ? 'text-white/70' : 'text-white/90'
                }`}
              >
                &ldquo;Efficiency and provision of excellent services that exceed the expectations of our esteemed customers.&rdquo;
              </motion.p>
              <span className="absolute font-bold bottom-1 right-4 text-[1rem]  tracking-tighter">~ Our Vision</span>
            </motion.div>

            {/* Overlapping small visual highlight box */}
            <motion.div 
              animate={{ x: [0, -6, 0] }}
              transition={{ duration: 5.5, delay: 5,  repeat: Infinity, ease: "easeInOut" }}
              className={`absolute border-slate-400/60 border shadow-slate-800/60 top-[-5%]  -right-6 p-4 rounded-xl shadow-lg  bg-linear-to-r from-slate-800/90 via-slate-800 to-slate-950  max-w-80 lg:max-w-90 ${
                  darkMode ? 'text-white/70' : 'text-white/90'
                }`}>
              <motion.p     
                className= "text-[11px] font-semibold mb-3 leading-tight italic tracking-wider"
              >
                &ldquo;To continue being an efficient Contractor, we are committed to maintain excellence, respect, and integrity in all aspects of our operations and business conduct. reflecting the highest ethical standards in our relationships with members, providers, and shareholders.&rdquo;
              </motion.p>

              <span className="absolute font-bold bottom-1 right-4 text-[1rem]  tracking-tighter">~ Our Mission</span>
            </motion.div>
          </div>

          {/* Narrative text Column */}
          <div className="lg:col-span-6 ">
            <h3 className={`font-display font-black text-2xl text-slate-950 dark:text-white mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Building Infrastructure That Empowers Communities
            </h3>
            <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Based in the Lake Coast Region of United Republic of Tanzania with projects expanding dynamically to regions like Kahama, North Mara &amp; eita, Dar-es-Salaam, Dodoma, Mwanza amoung other Regions and Neighbouring Countries, HAJOKA ICL represents the apex of modern African contracting. Among other objectives HAJOKA ICL is mainly registered to undertake and executes Mechanical Engineering, Civil Engineering and Environment Control Contract Works.
            </p>
            <p className={`text-sm mb-8 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Whether widening trunk roads for regional logistics or pouring high tolerance foundation blocks for multi-level city towers, we tailor our services to the individual needs of our diverse clientele. 
By focusing specifically on your project, we make sure ourservices fit both your overall 
needs and long-term vision.
            </p>

            {/* Structured Value Deck */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <div 
                  key={i} 
                  className={`flex gap-4 p-4 rounded-xl border transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-900/20 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30' 
                      : 'bg-slate-50 border-slate-200/60 hover:border-slate-300 hover:bg-slate-100/40'
                  }`}
                >
                  <div className="p-2.5 rounded-lg bg-amber-500/10 h-fit">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className={`font-display font-bold text-sm text-slate-950 dark:text-white leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {v.title}
                    </h4>
                    <p className={`text-xs mt-1 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Milestone Timeline section */}
        <div className="border-t border-slate-200/50 dark:border-slate-800/40 pt-6">
          <div className="mb-12">
            <h3 className={`font-display font-black text-xl text-slate-950 dark:text-white ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Safar Yetu • Our Milestone Timeline
            </h3>
            <p className={`text-xs font-mono uppercase tracking-wider mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              From a singular municipal grader to iconic national builds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {HAJO_MILESTONES.map((m, i) => (
              <div 
                key={i}
                className={`p-5 rounded-xl border relative transition-all duration-300 ${
                  darkMode 
                    ? 'bg-slate-900/30 border-slate-800/60 hover:border-amber-500/30 hover:bg-slate-900/50' 
                    : 'bg-white border-slate-200 hover:border-amber-500/30 hover:shadow-md'
                }`}
              >
                {/* Year Marker Badge */}
                <span className="inline-block font-mono font-black text-sm text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded mb-3">
                  {m.year}
                </span>
                
                <h4 className={`font-display font-bold text-sm text-slate-950 dark:text-white leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {m.title}
                </h4>
                
                <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-500 lowercase mt-0.5">
                  {m.swahiliTitle}
                </span>

                <p className={`text-xs mt-2.5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {m.description}
                </p>
                

                {/* Fine structural timeline connector line for visual storytelling */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 border-t border-dashed border-slate-300 dark:border-slate-800 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
