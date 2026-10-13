import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-24 relative scroll-mt-20 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
