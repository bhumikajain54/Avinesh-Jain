import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    { 
      text: "Avinesh's design sense for our bathware line was exceptional. He captured the premium feel of our brand perfectly through the catalogs and social media posters.", 
      author: "Management", 
      role: "Zeecry Bathware" 
    },
    { 
      text: "Working with Avinesh on our performance ads significantly boosted our conversion rates. His ability to create 'scroll-stopping' creatives is exactly what we needed.", 
      author: "Team Adgloria", 
      role: "Adgloria Solutions" 
    },
    { 
      text: "The posters and social media videos created for our school events were modern and engaging. He brought a fresh perspective to our institutional branding.", 
      author: "Principal", 
      role: "ST Mary's School Bankhedi" 
    },
    { 
      text: "Professional, creative, and very responsive. Avinesh helped us reach more parents with stunning school social media campaigns and digital posters.", 
      author: "Coordinater", 
      role: "MP Convent School, Bari" 
    },
    { 
      text: "Exceptional logo design and stationery work. He simplified our complex requirements into a clean, modern brand identity that we are proud of.", 
      author: "Bhumika Jain", 
      role: "Singhai Traders" 
    },
    { 
      text: "His video editing skills for our food reviews and restaurant ads are top-notch. The pacing and visuals were perfect for our social media growth.", 
      author: "Owner", 
      role: "The Foodie Point" 
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            What Clients Say
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-3xl border border-white/5 space-y-6 relative group hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary" fill="currentColor" />
                ))}
              </div>

              <p className="text-lg leading-relaxed text-secondary-text relative z-10">
                “{rev.text}”
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {rev.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors">{rev.author}</h4>
                  <p className="text-primary/70 text-sm font-medium">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
