import React from 'react';
import { Mail, MessageSquare, Camera } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Let’s Work Together 🚀</h2>
          <p className="text-secondary-text text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let’s create something amazing that brings your vision to life.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:hello@avinesh.com" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3">
            <Mail size={22} /> Email Me
          </a>
          <a href="https://wa.me/" className="btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-3">
            <MessageSquare size={22} /> WhatsApp
          </a>
          <a href="https://instagram.com/" className="btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-3">
            <Camera size={22} /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
