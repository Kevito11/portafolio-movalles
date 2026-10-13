import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Terminal, Database, Bug, CheckCircle2, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const getProjectIcon = (category) => {
  if (category.toLowerCase().includes('api')) return <Terminal size={20} className="text-[#5eead4]" />;
  if (category.toLowerCase().includes('sql') || category.toLowerCase().includes('base')) return <Database size={20} className="text-[#84a98c]" />;
  if (category.toLowerCase().includes('bug') || category.toLowerCase().includes('defecto')) return <Bug size={20} className="text-[#e7dab0]" />;
  return <ShieldCheck size={20} className="text-[#d8c58f]" />;
};

const Projects = () => {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState(null);

  const projects = t.projects.items;

  return (
    <Section id="projects" className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center mb-2 sm:mb-4 w-full">
        <span className="text-[#d8c58f] font-mono text-lg sm:text-xl mr-2 sm:mr-3 shrink-0">{t.projects.number}</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#f8fafc] shrink-0">
          {t.projects.title}
        </h2>
        <div className="h-[1px] bg-[#25352e] w-full ml-4 sm:ml-6"></div>
      </div>
      <p className="text-[#84928b] text-xs sm:text-sm font-mono mb-8 sm:mb-12">
        {t.projects.subtitle}
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-[#15201b] rounded-2xl border border-[#25352e] hover:border-[#d8c58f]/70 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group relative overflow-hidden"
          >
            {/* Top gradient glow on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d8c58f] via-[#84a98c] to-[#5eead4] opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div>
              {/* Card Header with category badge and icon */}
              <div className="flex items-center justify-between mb-3.5">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0d1310] border border-[#25352e] text-[#d8c58f]">
                  {project.tag}
                </span>
                <div className="p-2 rounded-xl bg-[#0d1310] border border-[#25352e]">
                  {getProjectIcon(project.category)}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] mb-2 sm:mb-3 group-hover:text-[#d8c58f] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Key Deliverables */}
              <div className="mb-5 space-y-1.5 sm:space-y-2">
                <span className="block text-[11px] font-mono text-[#cbd5e1] uppercase tracking-wider">
                  Resultados & Entregables:
                </span>
                {project.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
                    <CheckCircle2 size={13} className="text-[#84a98c] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tools & Action */}
            <div className="pt-3.5 border-t border-[#25352e] flex flex-col gap-2.5">
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-mono bg-[#0d1310] text-[#84928b] border border-[#25352e]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveProject(project)}
                className="mt-1 text-left font-mono text-xs text-[#d8c58f] hover:text-[#e7dab0] flex items-center gap-1.5 cursor-pointer py-1.5 group/btn active:opacity-75"
              >
                <span>Ver Detalle del Caso</span>
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-[#080d0b]/85 backdrop-blur-sm z-50 transition-opacity"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#15201b] p-5 sm:p-8 rounded-2xl shadow-2xl border border-[#d8c58f] z-50 w-[94%] max-w-2xl max-h-[88vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6 pb-3 border-b border-[#25352e]">
                <div className="pr-2">
                  <span className="text-[11px] font-mono text-[#d8c58f] uppercase">{activeProject.category}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] mt-0.5">{activeProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-[#94a3b8] hover:text-[#d8c58f] p-2 -mr-1 rounded-lg transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-[11px] font-mono text-[#cbd5e1] uppercase tracking-wider mb-1.5">Alcance & Objetivo</h4>
                  <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">{activeProject.description}</p>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono text-[#cbd5e1] uppercase tracking-wider mb-2">Métricas de Calidad Clave</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                    {activeProject.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-2.5 sm:p-3 bg-[#0d1310] rounded-xl border border-[#25352e] text-xs font-mono text-[#84a98c] flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#d8c58f] shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono text-[#cbd5e1] uppercase tracking-wider mb-2">Entregables y Metodología</h4>
                  <ul className="space-y-1.5">
                    {activeProject.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#cbd5e1]">
                        <span className="text-[#d8c58f] font-mono mt-0.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#25352e] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-[#0d1310] border border-[#25352e] text-[11px] font-mono text-[#d8c58f]">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#d8c58f] text-[#0d1310] rounded-xl font-mono text-xs font-bold hover:bg-[#e7dab0] transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
