import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState(0);

  const items = t.experience.items;
  const currentJob = items[selectedIdx] || items[0];

  return (
    <Section id="experience" className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center mb-2 sm:mb-4 w-full">
        <span className="text-[#d8c58f] font-mono text-lg sm:text-xl mr-2 sm:mr-3 shrink-0">{t.experience.number}</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#f8fafc] shrink-0">
          {t.experience.title}
        </h2>
        <div className="h-[1px] bg-[#25352e] w-full ml-4 sm:ml-6"></div>
      </div>
      <p className="text-[#84928b] text-xs sm:text-sm font-mono mb-6 sm:mb-10">
        {t.experience.subtitle}
      </p>

      {/* Experience Layout: Tabs on Top on Mobile, Left on Desktop */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Company Selector Tab Buttons */}
        <div className="md:col-span-4 flex md:flex-col overflow-x-auto pb-2 md:pb-0 gap-1.5 border-b md:border-b-0 md:border-l-2 border-[#25352e] scrollbar-none">
          {items.map((job, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`text-left px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl md:rounded-none md:-ml-[2px] transition-all whitespace-nowrap font-mono text-xs sm:text-sm flex items-center justify-between cursor-pointer border md:border-t-0 md:border-r-0 md:border-b-0 md:border-l-2 shrink-0 ${
                  isSelected
                    ? 'border-[#d8c58f] text-[#d8c58f] bg-[#15201b] font-semibold shadow-sm'
                    : 'border-[#25352e]/60 md:border-transparent text-[#94a3b8] hover:text-[#e2e8f0] bg-[#0d1310] md:bg-transparent'
                }`}
              >
                <span>{job.company}</span>
                {job.badge && (
                  <span className="ml-2 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] bg-[#d8c58f]/20 text-[#d8c58f] font-mono">
                    {job.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Job Details Card */}
        <div className="md:col-span-8 bg-[#15201b]/90 p-5 sm:p-6 md:p-8 rounded-2xl border border-[#25352e] shadow-xl relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Job Title & Company */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#f8fafc] leading-snug">
                  {currentJob.role}{' '}
                  <span className="text-[#d8c58f]">@ {currentJob.company}</span>
                </h3>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-[11px] sm:text-xs font-mono text-[#84928b]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#d8c58f]" />
                    {currentJob.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#84a98c]" />
                    {currentJob.location}
                  </span>
                </div>
              </div>

              {/* Brief Overview */}
              {currentJob.description && (
                <p className="text-xs sm:text-sm text-[#cbd5e1] italic border-l-2 border-[#d8c58f]/60 pl-3">
                  {currentJob.description}
                </p>
              )}

              {/* Responsibilities list */}
              <ul className="space-y-2.5 sm:space-y-3">
                {currentJob.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    <span className="text-[#d8c58f] font-mono text-sm shrink-0 mt-0.5">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="pt-3 sm:pt-4 border-t border-[#25352e]">
                <span className="block text-[10px] sm:text-[11px] font-mono text-[#84928b] mb-2 uppercase tracking-wider">
                  Herramientas & Competencias
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {currentJob.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-[#0d1310] border border-[#25352e] text-[#cbd5e1] text-[10px] sm:text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
