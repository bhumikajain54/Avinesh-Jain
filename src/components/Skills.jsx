import React from 'react';
import { Layout, Palette, PenTool, BarChart, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Canva', icon: <Layout size={24} /> },
    { name: 'Photoshop', icon: <PenTool size={24} /> },
    { name: 'Video Editing', icon: <BarChart size={24} /> },
    { name: 'Social Media Design', icon: <Camera size={24} /> },
  ];

  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold">Skills & expertise</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-card px-8 py-4 rounded-xl border border-white/5 flex items-center gap-3 shadow-lg hover:border-primary/50 transition-colors"
            >
              <div className="text-primary">{skill.icon}</div>
              <span className="font-bold text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
