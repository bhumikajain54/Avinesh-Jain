import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const cases = [
    {
      title: "Zeecry Bathware Branding",
      goal: "Establish a premium identity in the bathware market through social media and visual storytelling.",
      process: "Product photography editing, luxury color palette (Gold/White/Black), consistent typography for high-end look.",
      tools: "Photoshop, Canva, Video Editor",
      result: "Professional brand presence and increased customer trust.",
      img: "/Work/Zeecry PICs/zeecry_bathware-20251229-0016.jpg",
      reverse: false
    },
    {
      title: "Adgloria Marketing Campaign",
      goal: "Create a dynamic, engaging social media campaign to drive brand awareness.",
      process: "Vibrant visual layout, animation-friendly designs, focus on ad conversion through visuals.",
      tools: "Canva, Photoshop, Video Editor",
      result: "Enhanced engagement rates across all digital channels.",
      img: "/Work/Adgloria PICs/adsgloria-20251229-0002.jpg",
      reverse: true
    },
    {
      title: "School Social Media Campaigns",
      goal: "Enhance institutional visibility and trust through engaging educational posters and promotional video content.",
      process: "Designed vibrant, student-centric academic posters and edited dynamic event videos tailored for local parent demographics.",
      tools: "Photoshop, Canva, Video Editor",
      result: "Increased community awareness and significantly higher engagement on school social pages.",
      img: "/Work/School Social/School Poster 1.png",
      reverse: false
    },
    {
      title: "Premium Branding & Mockups",
      goal: "Bridge the gap between flat design and real-world application for client presentations.",
      process: "Engineered photorealistic mockups by blending flat UI/branding into 3D environments with appropriate lighting and shadow maps.",
      tools: "Photoshop, Canva",
      result: "Drastically accelerated client approval rates by providing professional, tangible visualizations.",
      img: "/Work/Graphics/Mockup 3.png",
      reverse: true
    },
    {
      title: "Architectural & Real Estate Branding",
      goal: "Establish a premium visual identity for high-end property developments.",
      process: "Integrating architectural visualization with luxury design aesthetics, focusing on sophisticated typography and realistic lighting.",
      tools: "Photoshop, AI Visualization, Canva",
      result: "Created a sense of exclusivity and increased potential investor engagement.",
      img: "/Work/Graphics/Sample Building 1.png",
      reverse: false
    },
    {
      title: "Jewellery & Festive Marketing",
      goal: "Drive high-value engagement and sales during peak festive seasons through luxury brand storytelling.",
      process: "Crafting elegant visual narratives that highlight product craftsmanship and cultural significance using premium gold themes.",
      tools: "Photoshop, Canva, Graphics Design",
      result: "Achieved significant social reach and brand resonance during the Akshay Tritiya festival.",
      img: "/Work/Graphics/Akshay Tritiya.png",
      reverse: true
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Premium Case Studies</h2>
        </div>

        {cases.map((c, idx) => (
          <div key={idx} className={`grid md:grid-cols-2 gap-16 items-center ${c.reverse ? 'md:flex-row-reverse' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: c.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={c.reverse ? 'md:order-last' : ''}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src={c.img} alt={c.title} className="relative z-10 rounded-3xl shadow-2xl w-full border border-white/5" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: c.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-primary font-poppins">{c.title}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-white/90">Goal:</h4>
                  <p className="text-secondary-text leading-relaxed">{c.goal}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white/90">Process:</h4>
                  <p className="text-secondary-text leading-relaxed">{c.process}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white/90">Tools:</h4>
                  <p className="text-primary font-medium bg-primary/10 inline-block px-4 py-1.5 rounded-full mt-2 border border-primary/20">{c.tools}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white/90">Result:</h4>
                  <p className="text-secondary-text leading-relaxed">{c.result}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
