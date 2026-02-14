
import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { ArrowRight, Code, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-200/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-6">
            <Code className="w-4 h-4" />
            Learn DSA Step-by-Step
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-slate-900">
            pavanprakashdsa
          </h1>
          <p className="text-xl md:text-3xl font-bold mb-4 gradient-text">
            {DATA.instructor.tagline}
          </p>
          <p className="text-slate-500 font-medium italic mb-10 text-lg">
            "Remember the guy who gave up? No one does Either!"
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#classes"
              className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-200 transition-all transform hover:scale-105 active:scale-95"
            >
              View Classes
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={DATA.instructor.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-semibold border border-slate-200 shadow-sm transition-all transform hover:scale-105"
            >
              <PlayCircle className="w-5 h-5 text-red-600" />
              YouTube Channel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
