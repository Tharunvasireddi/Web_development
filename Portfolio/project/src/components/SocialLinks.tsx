import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="flex justify-center space-x-8 mt-12"
    >
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="mailto:tharunvasireddy73@gmail.com"
        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <Mail className="w-6 h-6" />
        <span>Email</span>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://github.com/Tharunvasireddi"
        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-6 h-6" />
        <span>GitHub</span>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.linkedin.com/in/tarun-vasireddi-152310319/"
        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-6 h-6" />
        <span>LinkedIn</span>
      </motion.a>
    </motion.div>
  );
}