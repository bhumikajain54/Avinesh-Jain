import React from 'react';
import { Layout, Palette, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const DesignCategories = () => {
  const categories = [
    { title: 'Branding', desc: 'Logos, identity, brand kits', icon: <Palette className="text-primary" size={32} /> },
    { title: 'Social Media', desc: 'Instagram, ads, posts', icon: <Smartphone className="text-primary" size={32} /> },
    { title: 'Posters', desc: 'Event posters, banners', icon: <Layout className="text-primary" size={32} /> },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-card p-10 rounded-2xl border border-white/5 space-y-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
              {cat.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{cat.title}</h3>
              <p className="text-secondary-text leading-relaxed">{cat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DesignCategories;
