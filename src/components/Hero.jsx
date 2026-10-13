import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, ShieldCheck, Database, CheckSquare, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <Section id="hero" className="min-h-[92vh] flex flex-col justify-center items-start pt-20 sm:pt-28 md:pt-32 pb-10">
      {/* Top Status & Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-[#15201b] border border-[#25352e] text-[#d8c58f]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {t.hero.badge}
        </span>
        <span className="text-[11px] sm:text-xs font-mono text-[#84928b]">
          • {t.hero.status}
        </span>
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="text-[#d8c58f] font-mono text-xs sm:text-sm md:text-base tracking-wider mb-2 sm:mb-3 font-semibold"
      >
        {t.hero.greeting}
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-[#f8fafc] tracking-tight mb-1 sm:mb-2"
      >
        {t.hero.name}
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28 }}
        className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-[#84928b] tracking-tight mb-4 sm:mb-6"
      >
        {t.hero.role}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.36 }}
        className="text-[#cbd5e1] text-sm sm:text-base md:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed"
      >
        {t.hero.description}
      </motion.p>

      {/* Quick Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.44 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-2xl mb-8 sm:mb-10"
      >
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#15201b]/90 border border-[#25352e]">
          <CheckSquare size={15} className="text-[#d8c58f] shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono text-[#e2e8f0] truncate">Manual Testing</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#15201b]/90 border border-[#25352e]">
          <Terminal size={15} className="text-[#5eead4] shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono text-[#e2e8f0] truncate">Postman APIs</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#15201b]/90 border border-[#25352e]">
          <Database size={15} className="text-[#84a98c] shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono text-[#e2e8f0] truncate">SQL Queries</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#15201b]/90 border border-[#25352e]">
          <ShieldCheck size={15} className="text-[#e7dab0] shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono text-[#e2e8f0] truncate">Jira & Linear</span>
        </div>
      </motion.div>

      {/* Action Buttons - Stacked on Mobile, Inline on Desktop */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.52 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-[#d8c58f] text-[#0d1310] font-mono text-xs sm:text-sm font-bold rounded-xl hover:bg-[#e7dab0] active:scale-[0.98] transition-all shadow-lg hover:shadow-[#d8c58f]/20 group"
        >
          {t.hero.ctaProjects}
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href="/CV_Michael_Ovalles.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 border-2 border-[#d8c58f] text-[#d8c58f] hover:bg-[#d8c58f]/10 active:bg-[#d8c58f]/20 font-mono text-xs sm:text-sm font-semibold rounded-xl transition-colors"
        >
          <FileText size={15} />
          {t.hero.downloadCV}
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 border border-[#25352e] text-[#cbd5e1] hover:text-[#d8c58f] hover:border-[#d8c58f] bg-[#15201b]/80 active:bg-[#15201b] font-mono text-xs sm:text-sm rounded-xl transition-all"
        >
          {t.hero.ctaContact}
        </a>
      </motion.div>
    </Section>
  );
};

export default Hero;
