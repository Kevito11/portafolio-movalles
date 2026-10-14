import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowUp, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 40);
      setShowBackToTop(offset > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-[#0d1310]/95 backdrop-blur-md shadow-xl border-b border-[#25352e]/80 py-3 sm:py-3.5'
            : 'bg-[#0d1310]/60 backdrop-blur-sm sm:bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border-2 border-[#d8c58f] flex items-center justify-center font-mono font-bold text-base sm:text-lg text-[#d8c58f] bg-[#15201b] group-hover:bg-[#d8c58f] group-hover:text-[#0d1310] transition-all duration-300 shadow-md">
                MO
              </span>
              <span className="font-mono text-xs sm:text-sm text-[#e2e8f0] tracking-wider group-hover:text-[#d8c58f] transition-colors">
                Michael Ovalles
              </span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="font-mono text-xs tracking-wider text-[#cbd5e1] hover:text-[#d8c58f] transition-colors py-1 relative group"
              >
                <span className="text-[#d8c58f] mr-1">0{index + 1}.</span>
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d8c58f] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

            {/* Language Switcher */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#25352e] text-xs font-mono text-[#cbd5e1] hover:border-[#d8c58f] hover:text-[#d8c58f] bg-[#15201b]/80 transition-all cursor-pointer"
              title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              aria-label={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            >
              <Globe size={14} className="text-[#84a98c]" />
              <span className="font-semibold uppercase">{language === 'en' ? 'ES' : 'EN'}</span>
            </motion.button>

            {/* Resume Button */}
            <motion.a
              href="/CV_Michael_Ovalles.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-center gap-1.5 px-4 py-2 border-2 border-[#d8c58f] text-[#d8c58f] hover:bg-[#d8c58f]/10 rounded-lg font-mono text-xs tracking-wider font-semibold transition-all shadow-sm hover:shadow-[#d8c58f]/20"
            >
              <FileText size={14} />
              {t.nav.resume}
            </motion.a>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#25352e] text-xs font-mono text-[#cbd5e1] active:bg-[#15201b] bg-[#15201b]/90"
              aria-label="Toggle language"
            >
              <Globe size={14} className="text-[#84a98c]" />
              <span className="font-bold text-[#d8c58f]">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#d8c58f] bg-[#15201b] border border-[#25352e] active:scale-95 transition-transform focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Slide-Down Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Dimmed backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="md:hidden fixed inset-0 top-[60px] bg-[#080d0b]/85 backdrop-blur-sm z-40"
              />

              {/* Drawer Content */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="md:hidden relative z-50 bg-[#111a16] border-b border-[#25352e] px-6 py-6 shadow-2xl"
              >
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between font-mono text-sm text-[#cbd5e1] active:text-[#d8c58f] hover:text-[#d8c58f] py-3 border-b border-[#25352e]/50"
                    >
                      <span className="flex items-center">
                        <span className="text-[#d8c58f] text-xs mr-2.5 font-bold">0{index + 1}.</span>
                        <span>{link.name}</span>
                      </span>
                      <span className="text-[#d8c58f]/70 text-xs">→</span>
                    </a>
                  ))}

                  <button
                    onClick={toggleLanguage}
                    className="flex items-center justify-between font-mono text-sm text-[#cbd5e1] active:text-[#d8c58f] hover:text-[#d8c58f] py-3 border-b border-[#25352e]/50 cursor-pointer text-left w-full"
                    aria-label="Toggle language"
                  >
                    <span className="flex items-center gap-2">
                      <Globe size={16} className="text-[#84a98c]" />
                      <span>{language === 'en' ? 'Idioma' : 'Language'}</span>
                    </span>
                    <span className="font-bold text-xs px-2.5 py-1 rounded-md border border-[#25352e] text-[#d8c58f] bg-[#15201b]">
                      {language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                    </span>
                  </button>

                  <a
                    href="/CV_Michael_Ovalles.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 flex items-center justify-center gap-2 py-3.5 bg-[#d8c58f] text-[#0d1310] rounded-xl font-mono text-sm font-bold shadow-lg"
                  >
                    <FileText size={16} />
                    {t.nav.resume}
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Back to top floating button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 rounded-full bg-[#15201b] border-2 border-[#d8c58f] text-[#d8c58f] active:bg-[#d8c58f] active:text-[#0d1310] flex items-center justify-center shadow-xl cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
