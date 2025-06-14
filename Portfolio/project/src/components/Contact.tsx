import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 dark:text-white"
        >
          Get in Touch
        </motion.h2>
        
        <ContactForm />
        <SocialLinks />
      </div>
    </section>
  );
}