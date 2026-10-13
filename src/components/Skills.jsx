import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { CheckSquare, Network, Bug, Database, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'CheckSquare':
      return <CheckSquare size={18} className="text-[#d8c58f]" />;
    case 'Network':
      return <Network size={18} className="text-[#5eead4]" />;
    case 'Bug':
      return <Bug size={18} className="text-[#e7dab0]" />;
    case 'Database':
      return <Database size={18} className="text-[#84a98c]" />;
    default:
      return <Layers size={18} className="text-[#d8c58f]" />;
  }
};

const Skills = () => {
  const { t } = useLanguage();
  const categories = t.skills.categories;

  return (
    <Section id="skills" className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center mb-2 sm:mb-4 w-full">
        <span className="text-[#d8c58f] font-mono text-lg sm:text-xl mr-2 sm:mr-3 shrink-0">{t.skills.number}</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#f8fafc] shrink-0">
          {t.skills.title}
        </h2>
        <div className="h-[1px] bg-[#25352e] w-full ml-4 sm:ml-6"></div>
      </div>
      <p className="text-[#84928b] text-xs sm:text-sm font-mono mb-8 sm:mb-12">
        {t.skills.subtitle}
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7">
        {categories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="bg-[#15201b] rounded-2xl border border-[#25352e] p-4 sm:p-6 hover:border-[#d8c58f]/60 transition-all duration-300 shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 pb-2.5 border-b border-[#25352e]">
              <div className="p-2 rounded-xl bg-[#0d1310] border border-[#25352e]">
                {getCategoryIcon(category.icon)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#f8fafc]">
                {category.name}
              </h3>
            </div>

            {/* Skill Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {category.items.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#0d1310]/70 border border-[#25352e] hover:border-[#d8c58f]/50 transition-colors group"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-[#d8c58f] font-mono text-xs shrink-0">▹</span>
                    <span className="text-xs font-semibold text-[#cbd5e1] group-hover:text-[#f8fafc] transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#15201b] text-[#84928b] group-hover:text-[#d8c58f] transition-colors shrink-0 ml-1">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
