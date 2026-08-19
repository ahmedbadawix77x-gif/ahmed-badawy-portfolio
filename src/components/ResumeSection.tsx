import React from 'react';
import { FileText, Download, Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-xl shadow-blue-950/15 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-700/60">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full Curriculum Vitae</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Want the Complete Professional Profile?
            </h2>
            
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Explore Ahmed Badawy's verified academic records, leadership timeline, technical skill matrix, and project references in a structured format.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-cyan-200 pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Updated for 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Verified University & DEPI Data
              </span>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 relative z-10 shrink-0">
            <button
              id="resume-section-view-btn"
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-blue-50 shadow-lg transition-all active:scale-95"
            >
              <Eye className="w-4 h-4 text-blue-600" />
              <span>View Resume</span>
            </button>

            <a
              id="resume-section-download-btn"
              href="/assets/Ahmed-Badawy-CV.pdf"
              download="Ahmed-Badawy-CV.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/40 shadow-lg shadow-blue-600/30 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
