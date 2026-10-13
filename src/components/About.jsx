import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const traits = [
    t.about.traits.detail,
    t.about.traits.methodical,
    t.about.traits.communication,
  ];

  // Helper to render text with <gold> tags as colored spans matching the photo champagne tone
  const renderText = (text) => {
    if (!text) return null;
    const parts = text.split(/<gold>(.*?)<\/gold>/g);
    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <span key={index} className="text-[#d8c58f] font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Section id="about" className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center mb-6 sm:mb-10 w-full">
        <span className="text-[#d8c58f] font-mono text-lg sm:text-xl mr-2 sm:mr-3 shrink-0">{t.about.number}</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#f8fafc] shrink-0">
          {t.about.title}
        </h2>
        <div className="h-[1px] bg-[#25352e] w-full ml-4 sm:ml-6"></div>
      </div>

      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Profile Image Column (Harmonized with jacket olive and champagne light) */}
        <div className="md:col-span-5 flex justify-center order-2 md:order-2 px-2">
          <div className="relative w-full max-w-[260px] sm:max-w-[300px] group">
            {/* Background offset card border using olive-sage & champagne gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#84a98c] via-[#52796f] to-[#d8c58f] rounded-2xl translate-x-2.5 translate-y-2.5 sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300 opacity-90 shadow-xl"></div>

            {/* Photo Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d8c58f] bg-[#15201b] aspect-[4/5] shadow-2xl">
              <img
                src="/michael-ovalles.jpeg"
                alt="Michael Ovalles - QA Tester Manual"
                className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0d1310]/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>

              {/* Bottom tag on photo */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#0d1310]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#25352e] flex items-center justify-between text-[11px] sm:text-xs font-mono">
                <span className="text-[#e2e8f0] font-semibold">Michael Ovalles</span>
                <span className="text-[#d8c58f]">QA Manual</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Text Column */}
        <div className="md:col-span-7 order-1 md:order-1">
          <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed mb-4">
            {renderText(t.about.p1)}
          </p>
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-4">
            {renderText(t.about.p2)}
          </p>
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            {renderText(t.about.p3)}
          </p>

          {/* Quick Highlights Grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8 p-3.5 sm:p-4 rounded-xl bg-[#15201b]/90 border border-[#25352e]">
            {t.about.highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#84928b] uppercase tracking-wider">{item.label}</span>
                <span className="text-xs sm:text-sm font-semibold text-[#e2e8f0] truncate">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Core QA Traits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="border border-[#25352e] bg-[#15201b]/60 p-3.5 sm:p-4 rounded-xl hover:border-[#d8c58f]/70 transition-all group"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 size={15} className="text-[#84a98c] shrink-0 group-hover:scale-110 group-hover:text-[#d8c58f] transition-all" />
                  <h4 className="text-[#d8c58f] font-sans font-bold text-xs sm:text-sm">
                    {trait.title}
                  </h4>
                </div>
                <p className="text-[#94a3b8] text-[11px] sm:text-xs leading-relaxed">
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
