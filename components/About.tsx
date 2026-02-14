
import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Intuitive problem-solving approach",
    "Comprehensive Java & Python implementations",
    "Real-world complexity analysis",
    "Weekly doubt clearing sessions"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-200">
               <img 
                 src="https://picsum.photos/800/800?grayscale" 
                 alt="Instructor" 
                 className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 p-6 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-indigo-100 text-sm">Years Exp.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">About the Instructor</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {DATA.instructor.about}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
