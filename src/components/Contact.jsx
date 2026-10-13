import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, X, Copy, Check, FileText, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { t } = useLanguage();

  const email = 'michaelovalles1112@gmail.com';
  const phone = '829-278-1066';
  const phoneFormatted = '+1 (829) 278-1066';
  const whatsappUrl = 'https://wa.me/18292781066';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <Section id="contact" className="text-center max-w-3xl mx-auto relative pt-8 sm:pt-12 pb-16 sm:pb-20">
      <p className="text-[#d8c58f] font-mono text-xs sm:text-sm tracking-widest mb-2 sm:mb-3 font-semibold">
        {t.contact.subtitle}
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#f8fafc] mb-4 sm:mb-6 tracking-tight">
        {t.contact.title}
      </h2>

      <p className="text-[#cbd5e1] text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto px-2">
        {t.contact.text}
      </p>

      {/* Buttons: Full width on mobile, inline on desktop */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#d8c58f] text-[#0d1310] font-mono font-bold rounded-xl hover:bg-[#e7dab0] transition-all shadow-xl cursor-pointer text-sm sm:text-base"
        >
          <Mail size={17} />
          {t.contact.cta}
        </motion.button>

        <a
          href="/CV_Michael_Ovalles.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 border-2 border-[#d8c58f] text-[#d8c58f] hover:bg-[#d8c58f]/10 rounded-xl font-mono text-sm sm:text-base font-semibold transition-colors"
        >
          <FileText size={17} />
          {t.contact.modal.downloadCV}
        </a>
      </div>

      {/* Footer Info */}
      <div className="mt-20 sm:mt-28 pt-6 sm:pt-8 border-t border-[#25352e]">
        <p className="text-[#84928b] text-xs font-mono">
          {t.contact.footer}
        </p>
        <p className="text-[#84928b]/70 text-[10px] sm:text-[11px] font-mono mt-1">
          QA Tester Manual • Fizupay • Postman • SQL • Jira • Linear
        </p>
      </div>

      {/* Interactive Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#080d0b]/85 backdrop-blur-sm z-50 transition-opacity"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#15201b] p-5 sm:p-8 rounded-2xl shadow-2xl border border-[#d8c58f] z-50 w-[94%] max-w-md text-left max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-5 pb-3 border-b border-[#25352e]">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#d8c58f] uppercase">Michael Ovalles</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] mt-0.5">
                    {t.contact.modal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#84928b] hover:text-[#d8c58f] transition-colors p-2 -mr-2 rounded-lg cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3 sm:space-y-4">
                {/* Email Item */}
                <div className="p-3.5 sm:p-4 bg-[#0d1310] rounded-xl border border-[#25352e] flex items-center justify-between group gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
                    <div className="p-2 sm:p-2.5 bg-[#15201b] rounded-lg text-[#d8c58f] shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[10px] font-mono text-[#84928b]">
                        {t.contact.modal.email}
                      </span>
                      <a
                        href={`mailto:${email}`}
                        className="text-xs sm:text-sm font-semibold text-[#cbd5e1] hover:text-[#d8c58f] transition-colors break-all block"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(email, 'email')}
                    className="p-2 text-[#84928b] hover:text-[#d8c58f] rounded-lg transition-colors shrink-0 cursor-pointer"
                    title={t.contact.modal.copyEmail}
                    aria-label="Copiar correo"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone & WhatsApp Item */}
                <div className="p-3.5 sm:p-4 bg-[#0d1310] rounded-xl border border-[#25352e] flex items-center justify-between group gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
                    <div className="p-2 sm:p-2.5 bg-[#15201b] rounded-lg text-[#84a98c] shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-[#84928b]">
                        {t.contact.modal.phone}
                      </span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-[#cbd5e1] hover:text-[#84a98c] transition-colors flex items-center gap-1.5"
                      >
                        {phoneFormatted}
                        <MessageCircle size={13} className="text-emerald-400 shrink-0" />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(phone, 'phone')}
                    className="p-2 text-[#84928b] hover:text-[#84a98c] rounded-lg transition-colors shrink-0 cursor-pointer"
                    title={t.contact.modal.copyPhone}
                    aria-label="Copiar teléfono"
                  >
                    {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 sm:p-4 bg-[#0d1310] rounded-xl border border-[#25352e] flex items-center gap-2.5 sm:gap-3">
                  <div className="p-2 sm:p-2.5 bg-[#15201b] rounded-lg text-[#5eead4] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-[#84928b]">
                      {t.contact.modal.location}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#cbd5e1]">
                      Santo Domingo, República Dominicana
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="mt-5 sm:mt-6 flex flex-col gap-2.5">
                <a
                  href={`mailto:${email}?subject=Oportunidad%20QA%20Tester%20-%20Michael%20Ovalles`}
                  className="w-full py-3 bg-[#d8c58f] text-[#0d1310] rounded-xl font-mono text-xs font-bold text-center hover:bg-[#e7dab0] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  Enviar Correo Directo
                </a>

                <a
                  href="/CV_Michael_Ovalles.pdf"
                  download="CV_Michael_Ovalles.pdf"
                  className="w-full py-2.5 border border-[#25352e] hover:border-[#d8c58f] text-[#cbd5e1] hover:text-[#d8c58f] rounded-xl font-mono text-xs font-semibold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <FileText size={14} />
                  {t.contact.modal.downloadCV}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Contact;
