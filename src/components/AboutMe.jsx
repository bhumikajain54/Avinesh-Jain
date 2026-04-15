import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-3xl -z-10 translate-x-8 translate-y-8"></div>
          <img src="/images/profile.png" alt="Avinesh Jain" className="rounded-3xl w-full shadow-2xl" />
        </motion.div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-secondary-text text-lg leading-relaxed">
              I’m a passionate graphic designer focused on creating visually appealing and impactful designs that help brands stand out in the digital landscape.
            </p>
            <p className="text-secondary-text text-lg leading-relaxed">
              With 2 years of experience, I specialize in identifying the core message of a brand and translating it into a visual language that resonates with the audience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-bold text-xl text-primary">I Specialize In</h3>
              <ul className="text-secondary-text space-y-1">
                <li>• Social Media Creatives</li>
                <li>• Poster Design</li>
                <li>• Brand Identity</li>
                <li>• Visual Content</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-xl text-primary">Tools Box</h3>
              <ul className="text-secondary-text space-y-1">
                <li>• Canva Expert</li>
                <li>• Photoshop</li>
                <li>• VN, Capcut, Filmora</li>
              </ul>
            </div>
          </div>
          <div className="pt-4">
            <a
              href="/Avi GD Resume.pdf"
              target="_blank"
              className="btn-primary inline-flex items-center gap-2"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
