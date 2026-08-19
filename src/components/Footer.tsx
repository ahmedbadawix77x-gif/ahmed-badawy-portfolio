import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white font-bold text-base shadow-md">
              AB
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base tracking-tight">
                Ahmed Badawy
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Aspiring Data Engineer | AI & Data Science
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github"
              href="https://github.com/ahmedbadawix77x-gif"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin"
              href="https://www.linkedin.com/in/ahmed-badawy-45060431b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-email"
              href="mailto:ahmedbadawix77x@gmail.com"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
              aria-label="Email Ahmed"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="footer-scroll-top"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-sm ml-2 transition-colors active:scale-95"
              aria-label="Scroll back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Ahmed Badawy. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Benha University • Computer & Special Education</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
