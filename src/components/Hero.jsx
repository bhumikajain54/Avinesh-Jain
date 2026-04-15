import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm md:text-base">Hi, I'm Avinesh Jain</h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Graphic Designer & <br />
              <span className="text-primary italic">Visual Storyteller</span>
            </h1>
            <p className="text-secondary-text text-lg md:text-xl max-w-lg leading-relaxed">
              I create modern, eye-catching designs for brands, social media, and businesses that leave a lasting impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="btn-primary inline-flex items-center gap-2">
              View My Work <ChevronRight size={20} />
            </a>
            <a href="#contact" className="btn-outline">Hire Me</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
          <img
            src="/images/hero.png"
            alt="Design Showcase Collage"
            className="relative z-10 w-full rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
