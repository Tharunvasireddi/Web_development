import React from 'react';
import { Code2, Terminal, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header id="home" className="pt-16 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-950 dark:to-blue-800 text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              Tarun
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl mb-6"
            >
              Web Developer Student at GMR IT College
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center md:justify-start gap-4 mb-8"
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Code2 className="w-8 h-8" />
              </motion.div>
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Terminal className="w-8 h-8" />
              </motion.div>
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Coffee className="w-8 h-8" />
              </motion.div>
            </motion.div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-900 dark:bg-gray-800 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Coding Workspace"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto transform -rotate-6 hover:rotate-0 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}