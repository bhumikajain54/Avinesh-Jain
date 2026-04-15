import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Maximize2 } from 'lucide-react';
import { portfolioItems } from '../workItems';

const categories = [...new Set(portfolioItems.map(item => item.category))];

const PortfolioGallery = () => {
  const [filter, setFilter] = useState(categories[0] || 'All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = portfolioItems.filter(item => item.category === filter);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins">Explore My Full Portfolio</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full transition-all duration-300 font-medium border ${filter === cat ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-transparent text-secondary-text border-white/10 hover:border-primary/50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <GalleryItem key={item.title + idx} item={item} onSelect={setSelectedItem} />
            ))}
          </AnimatePresence>
        </motion.div>
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

const GalleryItem = ({ item, onSelect }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video fail", err));
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
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      onClick={() => onSelect(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group aspect-square relative rounded-2xl overflow-hidden cursor-pointer bg-[#151515] border border-white/5 hover:border-primary/40 shadow-xl transition-all duration-300"
    >
      {item.img && <img src={item.img} className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-30 pointer-events-none" alt="" />}

      {item.video ? (
        <video
          ref={videoRef}
          src={item.video}
          className="w-full h-full object-contain relative z-20 scale-[0.95] group-hover:scale-100 transition-transform duration-500"
          muted
          loop
          playsInline
          poster={item.img}
        />
      ) : (
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-contain relative z-20 scale-[0.95] group-hover:scale-100 transition-transform duration-500"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-30 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
        <div className="flex items-center justify-between">
          <div className="max-w-[70%]">
            <span className="text-primary font-bold text-[10px] tracking-widest uppercase mb-1 block">{item.category}</span>
            <h4 className="text-lg font-bold truncate text-white">{item.title}</h4>
          </div>
          <div className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-primary/30 transform group-hover:scale-110 transition-transform">
            {item.video ? <Play size={20} fill="white" className="text-white" /> : <Maximize2 size={20} className="text-white" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioGallery;
