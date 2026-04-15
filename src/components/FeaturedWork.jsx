import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const FeaturedWork = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const works = [
    { title: "Zeecry Bathware Campaign", img: "/Work/Zeecry PICs/zeecry_bathware-20251229-0013.jpg", category: "Zeecry Vids", video: "/Work/Zeecry Vids/Zeecry Ad1.mp4" },
    { title: "Adgloria Brand Identity", img: "/Work/Adgloria PICs/adsgloria-20251229-0001.jpg", category: "Adgloria Vids", video: "/Work/Adgloria Vids/Adgloria.mp4" },
    { title: "School Promo Campaign", img: "/Work/School Social/School Poster 1.png", category: "School Social", video: "/Work/School Social/MP convent School Bari.mp4" },
    { title: "Zeecry Premium Showcase", img: "/Work/Zeecry PICs/Zeecry Ad 2.jpg", category: "Zeecry Vids", video: "/Work/Zeecry Vids/Zeecry3.mp4" },
  ];

  return (
    <section id="work" className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins">Featured Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {works.map((work, idx) => (
            <WorkCard key={idx} work={work} idx={idx} onSelect={setSelectedItem} />
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-[110] text-white"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full h-[80vh] flex flex-col items-center justify-center relative p-4 bg-[#111] rounded-3xl border border-white/5 shadow-2xl"
            >
              <div className="w-full h-full relative overflow-hidden rounded-2xl flex items-center justify-center">
                {selectedItem.video ? (
                  <video src={selectedItem.video} className="max-w-full max-h-full rounded-xl z-20" controls autoPlay playsInline />
                ) : (
                  <img src={selectedItem.img} alt={selectedItem.title} className="max-w-full max-h-full object-contain rounded-xl z-20 shadow-2xl" />
                )}
                {selectedItem.img && <img src={selectedItem.img} className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 scale-125" alt="" />}
              </div>
              <div className="mt-8 text-center space-y-2 pb-6">
                <span className="text-primary font-bold text-sm tracking-widest uppercase">{selectedItem.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold font-poppins">{selectedItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const WorkCard = ({ work, idx, onSelect }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video play blocked", err));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(work)}
      className="group cursor-pointer relative"
    >
      {/* Background Glow */}
      <div className="absolute -inset-2 bg-primary/20 blur-2xl rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#151515] h-[450px] shadow-2xl">
        {/* Shadow Overlay for Top (Fix for 'Chaturthi' text visibility) */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none"></div>
        
        {work.video ? (
          <div className="w-full h-full">
            <video 
              ref={videoRef}
              src={work.video} 
              className="w-full h-full object-contain relative z-20"
              muted
              loop
              playsInline
              poster={work.img}
            />
            {/* Blurred background for contain mode */}
            <img src={work.img} className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-30" alt="" />
            
            <div className="absolute top-6 right-6 z-30">
               <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                 <Play size={20} fill="white" className="text-white translate-x-0.5" />
               </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <img 
              src={work.img} 
              alt={work.title} 
              className="w-full h-full object-contain relative z-20 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Blurred background for contain mode */}
            <img src={work.img} className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-30" alt="" />
          </div>
        )}
        
        {/* Bottom Details */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-8 z-30">
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">{work.category}</span>
          <h3 className="text-2xl md:text-3xl font-bold font-poppins">{work.title}</h3>
          <div className="w-12 h-1 bg-primary mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedWork;
