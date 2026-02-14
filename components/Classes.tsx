
import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { Calendar, Download, Play, Youtube, ClipboardList, Target } from 'lucide-react';

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Beginner DSA Plan</h2>
            <p className="text-slate-600 max-w-xl text-lg">
              Watch the sessions in the given order. Consistent practice is the key to mastery.
            </p>
          </div>
          <a 
            href={DATA.instructor.youtubeChannel}
            target="_blank"
            className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-2 transition-colors"
          >
            View all on YouTube <Youtube className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA.classes.map((cls, idx) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    {cls.date}
                  </div>
                  <span className="px-2 py-1 bg-slate-100 rounded text-[10px] uppercase font-bold text-slate-500 tracking-wider border border-slate-200">
                    Day {cls.id}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-4 text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                  {cls.topic}
                </h3>

                <div className="space-y-3 mb-2">
                  {cls.homework && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit">
                      <ClipboardList className="w-3.5 h-3.5" />
                      Homework Assigned
                    </div>
                  )}
                  {cls.practice && (
                    <div className="space-y-1">
                      {cls.practice.map((p, pIdx) => (
                        <a key={pIdx} href={p.url} className="flex items-center gap-2 text-xs font-semibold text-green-600 hover:underline transition-colors">
                          <Target className="w-3.5 h-3.5" />
                          {p.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <div className="flex items-center gap-2">
                  <a
                    href={cls.youtubeLink}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Live Class
                  </a>
                  <a
                    href={cls.notesLink}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-3 py-2.5 rounded-lg text-xs font-bold border border-slate-200 transition-all shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Document
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
