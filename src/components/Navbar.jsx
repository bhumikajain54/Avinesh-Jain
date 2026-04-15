import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-xl">AJ</div>
          <span className="font-poppins font-bold text-xl tracking-tight hidden sm:block">AVINESH JAIN</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary-text hover:text-white transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href="/Avi GD Resume.pdf"
              target="_blank"
              className="text-secondary-text hover:text-white flex items-center gap-2 transition-colors border border-white/10 px-4 py-2 rounded-full"
            >
              CV <FileText size={18} />
            </a>
            <a href="#contact" className="btn-primary py-2.5 px-6">Hire Me</a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-white/5 px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-secondary-text hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="/Avi GD Resume .pdf" target="_blank" className="text-xl font-medium text-secondary-text hover:text-white transition-colors">Download Resume</a>
            <a href="#contact" className="btn-primary text-center">Hire Me</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
