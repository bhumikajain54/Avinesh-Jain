import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center space-y-4">
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold">AJ</div>
        <span className="font-poppins font-bold text-lg">AVINESH JAIN</span>
      </div>
      <p className="text-secondary-text">Graphic Designer & Visual Storyteller</p>
      <div className="pt-4 text-sm text-white/20">
        © {new Date().getFullYear()} Avinesh Jain. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
