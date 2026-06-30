import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

interface HajoContactProps {
  darkMode: boolean;
}

export default function HajoContact({ darkMode }: HajoContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'roads',
    message: '',
    budget: '50m-200m'
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
  };

  const contactCards = [
    {
      icon: <MapPin className="h-4 w-4 text-amber-500" />,
      title: 'Our Location / Ofisi Yetu',
      detail1: 'P.O Box 1013 Mwendakulima, D4N Building',
      detail2: 'Kahama, Tanzania'
    },
    {
      icon: <Phone className="h-4 w-4 text-amber-500" />,
      title: 'Call Direct / Piga Simu',
      detail1: '+255 (0) 763 778 863',
    },
    {
      icon: <Mail className="h-4 w-4 text-amber-500" />,
      title: 'Email Queries / Barua Pepe',
      detail1: 'info@hajokaicl.co.tz',
      detail2: 'tenders@hajokaicl.co.tz'
    },
    {
      icon: <Clock className="h-4 w-4 text-amber-500" />,
      title: 'Working Hours / Saa za Kazi',
      detail1: 'Monday – Friday: 8:00 AM – 5:00 PM',
      detail2: 'Saturday: 9:00 AM – 1:00 PM'
    }
  ];

  return (
    <section className="py-20 lg:pt-15 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="mb-10 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full">
            Mawasiliano • Secure a Bid
          </span>
          <h2 className={`mt-4 font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Connect with Our Tendering Wing
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & Swahili Hospitality */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className={`font-display font-black text-xl text-slate-950 dark:text-white mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Let&apos;s Build Together
              </h3>
              
              <p className={`text-xs sm:text-sm mb-8 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Have an upcoming infrastructure tender, earthmoving bulk hire request, or commercial block development query? Contact our mobilization team today. We provide transparent, responsive engineering reviews for both public municipal and private developers in Tanzania.
              </p>

              {/* Grid of contact coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {contactCards.map((card, i) => (
                  <div 
                    key={i} 
                    className={`p-4 rounded-xl border transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700' 
                        : 'bg-slate-50 border-slate-200/60 hover:border-slate-300'
                    }`}
                  >
                    <div className="p-2 bg-amber-500/10 rounded-lg w-fit mb-3">
                      {card.icon}
                    </div>
                    <h4 className={`font-display font-bold text-sm text-slate-950 dark:text-white leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {card.title}
                    </h4>
                    <p className={`text-[11px] mt-1.5 leading-snug font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {card.detail1}
                    </p>
                    <p className={`text-[10px] leading-snug font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      {card.detail2}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Compliance footer disclaimer */}
            <div className={`mt-8 lg:mt-0 p-4 rounded-xl border flex gap-3 text-[10px] leading-relaxed ${
              darkMode 
                ? 'bg-slate-950 border-slate-800/60 text-slate-500' 
                : 'bg-slate-50 border-slate-200/60 text-slate-400'
            }`}>
              <ShieldAlert className="h-4 w-4 relative -bottom-2/6 text-amber-500 shrink-0" />
              <p>
                <strong>Tender Notification:</strong> All proprietary data, soil reports, and CAD drawings submitted via this portal are strictly secured and confidential under Tanzanian Procurement and Copyright Acts.
              </p>
            </div>
          </div>

          {/* Right Column: Contact/Tender Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden h-full ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800 shadow-xl' 
                : 'bg-white border-slate-200 shadow-md'
            }`}>
              
              {submitted ? (
                /* Success Slate Greeting */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full py-12"
                >
                  <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20 mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  
                  <h3 className={`font-display font-black text-xl text-slate-950 dark:text-white leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Ahsante Sana!
                  </h3>
                  
                  <span className="block text-xs font-mono font-semibold text-amber-500 mt-1 uppercase tracking-widest">
                    Submission Received • Barua Imetumwa
                  </span>

                  <p className={`text-xs mt-4 max-w-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Thank you, <strong>{formData.name}</strong>. Your bid inquiry for the <strong>{formData.sector}</strong> sector has been cataloged. Our Chief Estimator will review your specifications and connect within 24 working hours.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', sector: 'roads', message: '', budget: '50m-200m' });
                    }}
                    className="mt-8 px-5 py-2.5 bg-slate-950 hover:bg-slate-900 dark:bg-white dark:hover:bg-slate-50 text-white dark:text-slate-950 font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                  >
                    Send Another message
                  </button>
                </motion.div>
              ) : (
                /* Standard Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-200 font-mono mb-4 pb-3 border-b border-slate-200/50 dark:border-slate-800/50">
                    <span>Submit Tendering Specifications / Jaza Fomu Hapa</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-bold">
                        Full Name / Jina Kamili *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Juma Rashidi"
                        className={`w-full px-4 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-1 transition-all ${
                          darkMode 
                            ? 'bg-slate-950 border-slate-800 text-white focus:ring-amber-500 focus:border-amber-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-950 focus:ring-amber-500 focus:border-amber-500'
                        }`}
                        id="contact-name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-bold">
                        Email Address / Barua Pepe *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g., juma@domain.co.tz"
                        className={`w-full px-4 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-1 transition-all ${
                          darkMode 
                            ? 'bg-slate-950 border-slate-800 text-white focus:ring-amber-500 focus:border-amber-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-950 focus:ring-amber-500 focus:border-amber-500'
                        }`}
                        id="contact-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-bold">
                        Phone Number / Simu
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g., +255 754 XXXXXX"
                        className={`w-full px-4 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-1 transition-all ${
                          darkMode 
                            ? 'bg-slate-950 border-slate-800 text-white focus:ring-amber-500 focus:border-amber-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-950 focus:ring-amber-500 focus:border-amber-500'
                        }`}
                        id="contact-phone"
                      />
                    </div>

                    {/* Category Sector */}
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-bold">
                        Build Sector / Sekta
                      </label>
                      <select 
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-1 transition-all cursor-pointer ${
                          darkMode 
                            ? 'bg-slate-950 border-slate-800 text-white focus:ring-amber-500 focus:border-amber-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-950 focus:ring-amber-500 focus:border-amber-500'
                        }`}
                        id="contact-sector"
                      >
                        <option value="roads">Roadways &amp; Civil Earthworks</option>
                        <option value="building">Commercial Office/Ghorofa</option>
                        <option value="water">Water Mains &amp; Reservoirs</option>
                        <option value="machinery">Machinery Bulk Hire</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Ranges */}
                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-bold">
                      Estimated Project Value / Makadirio ya Thamani ya Mradi (TZS)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'under-50m', label: 'Under 50M' },
                        { id: '50m-200m', label: '50M – 200M' },
                        { id: 'over-200m', label: 'Over 200M TZS' },
                      ].map((range) => (
                        <button
                          key={range.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: range.id })}
                          className={`py-2 rounded-lg border text-center text-[10px] font-bold transition-all cursor-pointer ${
                            formData.budget === range.id
                              ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-sm'
                              : darkMode
                              ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900/50'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scope description */}
                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-bold">
                      Tender Description &amp; Requirements / Maelezo ya Mahitaji *
                    </label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please details the location, length of road, number of building floors, or specifications of water reservoir, and expected mobilization timelines..."
                      className={`w-full px-4 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-1 transition-all ${
                        darkMode 
                          ? 'bg-slate-950 border-slate-800 text-white focus:ring-amber-500 focus:border-amber-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-950 focus:ring-amber-500 focus:border-amber-500'
                      }`}
                      id="contact-message"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md shadow-amber-500/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    id="contact-submit-btn"
                  >
                    <span>Transmit Tender Specifications</span>
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
