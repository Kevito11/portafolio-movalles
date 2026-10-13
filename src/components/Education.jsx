import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const educationList = t.education.items;

  return (
    <Section id="education" className="max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center mb-2 sm:mb-4 w-full">
        <span className="text-[#d8c58f] font-mono text-lg sm:text-xl mr-2 sm:mr-3 shrink-0">{t.education.number}</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#f8fafc] shrink-0">
          {t.education.title}
        </h2>
        <div className="h-[1px] bg-[#25352e] w-full ml-4 sm:ml-6"></div>
      </div>
      <p className="text-[#84928b] text-xs sm:text-sm font-mono mb-8 sm:mb-12">
        {t.education.subtitle}
      </p>

      {/* Timeline */}
      <div className="border-l-2 border-[#25352e] pl-5 sm:pl-8 md:pl-10 ml-2.5 sm:ml-4 md:ml-6 space-y-6 sm:space-y-10">
        {educationList.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.45 }}
            className="relative bg-[#15201b]/90 p-4 sm:p-6 rounded-2xl border border-[#25352e] hover:border-[#d8c58f]/70 transition-all shadow-lg group"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[29px] sm:-left-[41px] md:-left-[51px] top-6 h-4 w-4 sm:h-5 sm:w-5 rounded-full border-2 border-[#d8c58f] bg-[#0d1310] group-hover:scale-125 transition-transform"></span>

            <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-[#0d1310] border border-[#25352e] text-[#d8c58f]">
                {item.institution}
              </span>
              <span className="flex items-center gap-1 text-[11px] sm:text-xs font-mono text-[#84928b]">
                <MapPin size={11} className="text-[#84a98c]" />
                {item.location}
              </span>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-[#f8fafc] mb-1.5 sm:mb-2 group-hover:text-[#d8c58f] transition-colors leading-snug">
              {item.degree}
            </h3>

            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              {item.details}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
