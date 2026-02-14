
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ZoomIn } from 'lucide-react';

const CheatSheet: React.FC = () => {
  const imageUrl = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200";

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Java Collections Cheat Sheet</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Click here to download my Collections cheat sheet image. Keep it as your laptop wallpaper for quick reference.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="relative group max-w-3xl w-full">
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-slate-700 flex items-center gap-1.5 shadow-sm border border-slate-200">
              <ZoomIn className="w-3.5 h-3.5" />
              HOVER TO ZOOM
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-xl bg-slate-50 cursor-zoom-in">
              <motion.img
                src={imageUrl}
                alt="Collections Cheat Sheet"
                className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-125"
              />
            </div>
          </div>

          <a
            href={imageUrl}
            download="Collections_CheatSheet_PavanPrakash.jpg"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            <Download className="w-5 h-5" />
            Download Cheat Sheet
          </a>
        </div>
      </div>
    </section>
  );
};

export default CheatSheet;
