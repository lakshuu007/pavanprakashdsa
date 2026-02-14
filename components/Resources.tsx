
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from '../data';
import { ExternalLink, BookOpen, Video, Target, FileText } from 'lucide-react';

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'java' | 'python'>('java');

  const getIcon = (type: string) => {
    switch (type) {
      case 'article': return <FileText className="w-5 h-5 text-blue-600" />;
      case 'video': return <Video className="w-5 h-5 text-red-600" />;
      case 'practice': return <Target className="w-5 h-5 text-green-600" />;
      default: return <BookOpen className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="resources" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Learning Resources</h2>
          <p className="text-slate-600 text-lg">
            Curated list of materials to deepen your understanding of DSA.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-200 rounded-xl border border-slate-300">
            <button
              onClick={() => setActiveTab('java')}
              className={`px-8 py-3 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'java' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Java Resources
            </button>
            <button
              onClick={() => setActiveTab('python')}
              className={`px-8 py-3 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'python' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Python Resources
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'java' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'java' ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4"
            >
              {DATA.resources[activeTab].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  className="flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-indigo-300 rounded-xl shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-indigo-50 transition-colors">
                      {getIcon(item.type)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">
                        {item.type}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Resources;
