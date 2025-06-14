import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'HTML',
    level: 'Advanced',
    description: 'Semantic markup, accessibility, and modern HTML5 features',
  },
  {
    name: 'CSS',
    level: 'Advanced',
    description: 'Responsive design, animations, and modern layouts with Flexbox & Grid',
  },
  {
    name: 'JavaScript',
    level: 'Advanced',
    description: 'ES6+, DOM manipulation, and asynchronous programming',
  },
  {
    name: 'Tailwind CSS',
    level: 'Advanced',
    description: 'Utility-first CSS framework, responsive design, and custom configurations',
  },
  {
    name: 'Python',
    level: 'Advanced',
    description: 'Data structures, algorithms, and automation',
  },
  {
    name: 'Java',
    level: 'Intermediate',
    description: 'Object-oriented programming and application development',
  },
  {
    name: 'C',
    level: 'Advanced',
    description: 'System programming and memory management',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{skill.name}</h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {skill.level}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}