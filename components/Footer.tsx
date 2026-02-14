
import React from 'react';
import { DATA } from '../data';
import { Mail, Youtube, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xs text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">pavanprakashdsa</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Empowering developers with core fundamental knowledge of Data Structures and Algorithms.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href={DATA.instructor.youtubeChannel} className="text-slate-400 hover:text-red-600 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-700 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <h4 className="text-lg font-bold text-slate-500 uppercase tracking-widest text-xs">Reach Out</h4>
            <a 
              href={`mailto:${DATA.instructor.email}`}
              className="flex items-center gap-3 text-2xl font-semibold text-indigo-600 hover:text-indigo-800 transition-colors underline decoration-2 underline-offset-8"
            >
              <Mail className="w-6 h-6" />
              {DATA.instructor.email}
            </a>
            <p className="text-slate-500 text-sm">
              Available for career guidance and technical mentorship.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} pavanprakashdsa. All rights reserved.</p>
          <p>Remember the guy who gave up? No one does Either!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
