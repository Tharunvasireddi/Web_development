import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, XCircle } from 'lucide-react';

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');
    
    try {
      await emailjs.sendForm(
        'service_u1fgkf5',
        'template_48fk5p2',
        form.current,
        'W-JwubgxYhhlhW-D9'
      );
      setStatus('success');
      form.current.reset();
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
    }
  };

  return (
    <motion.form
      ref={form}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your Email
        </label>
        <input
          type="email"
          name="from_email"
          id="from_email"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-2 px-4 rounded-md text-white font-medium flex items-center justify-center gap-2 ${
          status === 'sending'
            ? 'bg-gray-400 dark:bg-gray-600'
            : status === 'success'
            ? 'bg-green-500 dark:bg-green-600'
            : status === 'error'
            ? 'bg-red-500 dark:bg-red-600'
            : 'bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800'
        }`}
      >
        {status === 'sending' ? (
          'Sending...'
        ) : status === 'success' ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Sent Successfully
          </>
        ) : status === 'error' ? (
          <>
            <XCircle className="w-5 h-5" />
            Error Sending
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}