import React from 'react';
import { 
  X, 
  Download, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  GraduationCap, 
  ShieldCheck, 
  Layers, 
  Mail, 
  Phone, 
  MapPin, 
  Printer 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      id="resume-view-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-white rounded-3xl border border-blue-100 shadow-2xl overflow-hidden my-6 animate-in zoom-in-95 duration-200 relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Controls */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-sm tracking-wide">Ahmed Badawy — Professional Resume Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              id="resume-modal-download-btn"
              href="/assets/Ahmed-Badawy-CV.pdf"
              download="Ahmed-Badawy-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] bg-white">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ahmed Badawy Ramadan Hassanein
            </h1>
            <p className="text-base font-bold text-blue-600">
              Aspiring Data Engineer | AI & Software Development Enthusiast
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                Cairo, Egypt
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                ahmedbadawix77x@gmail.com
              </span>
              <span>•</span>
              <span>GitHub: github.com/ahmedbadawix77x-gif</span>
              <span>•</span>
              <span>LinkedIn: linkedin.com/in/ahmed-badawy-45060431b</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Third-year Computer student at Benha University specializing in Computer & Special Education. Building foundational and practical expertise in Data Engineering, Artificial Intelligence, SQL database optimization, Python data processing, and PowerShell system automation. Selected as DEPI Team Leader and recognized as Top Performer (#1) across tracks in previous season. Proven capability in rapid learning, technical problem solving, and AI-assisted workflow execution.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Benha University — Faculty of Education
                </h3>
                <p className="text-xs font-semibold text-slate-700">
                  Department: Computer – Special Education (Third Year)
                </p>
                <p className="text-xs text-slate-500">
                  Key Coursework: Advanced Computer Networks, Interface Programming, Computer Maintenance, Digital Montage, Educational Design, 3D Graphics
                </p>
              </div>
              <div className="text-xs font-bold text-blue-700 sm:text-right shrink-0">
                GPA: 3.0 / 4.0
              </div>
            </div>
          </div>

          {/* Leadership & Key Highlights */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
              Leadership & Honors
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Team Leader — Digital Egypt Pioneers Initiative (DEPI)</span>
                  <span className="text-slate-500 font-normal">Active</span>
                </div>
                <p className="text-slate-600 mt-0.5">
                  Selected on performance merit. Leading team follow-ups, task coordination, performance monitoring, milestone reporting, and mentor communications.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Top Performer (#1 Rank Across Tracks) — Previous Season</span>
                  <span className="text-slate-500 font-normal">Documented</span>
                </div>
                <p className="text-slate-600 mt-0.5">
                  Ranked first overall based on comprehensive technical evaluations and milestone submissions.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Graduation Project University Recognition (2025 Cohort)</span>
                  <span className="text-slate-500 font-normal">Benha University</span>
                </div>
                <p className="text-slate-600 mt-0.5">
                  Engineered graduation project system for 4th-year faculty students, rated "Excellent" by University President and 15+ Department Heads.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>HR Non-Technical Team Member — Google Developer Groups (GDG)</span>
                  <span className="text-slate-500 font-normal">GDG Benha Ahlia</span>
                </div>
                <p className="text-slate-600 mt-0.5">
                  Managing team coordination, event support, and community member relations for developer initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
              Selected Technical Projects
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-bold text-slate-900">
                  Benha Faculty Website | <span className="font-normal text-slate-600">React, TypeScript, Tailwind CSS</span>
                </div>
                <p className="text-slate-600">
                  Engineered a modern web portal organizing faculty departments, academic resources, and student guides with responsive design.
                </p>
              </div>
              <div>
                <div className="font-bold text-slate-900">
                  Nway AI Chatbot | <span className="font-normal text-slate-600">AI Assistant, Knowledge Base Retrieval, Prompt Engineering</span>
                </div>
                <p className="text-slate-600">
                  Developing an AI assistant answering student inquiries with structured faculty knowledge grounding.
                </p>
              </div>
              <div>
                <div className="font-bold text-slate-900">
                  PowerShell AI-Assisted Automation | <span className="font-normal text-slate-600">PowerShell, CMD, Task Automation</span>
                </div>
                <p className="text-slate-600">
                  Built modular automation scripts for application launching and system workflows using rapid AI-assisted learning.
                </p>
              </div>
              <div>
                <div className="font-bold text-slate-900">
                  Digital Egypt Data Engineering Repository | <span className="font-normal text-slate-600">Python, SQL, ETL Pipelines</span>
                </div>
                <p className="text-slate-600">
                  Ongoing repository implementing complex relational SQL queries, data transformations, and storage architectures.
                </p>
              </div>
              <div>
                <div className="font-bold text-slate-900">
                  Cafe Commercial Website | <span className="font-normal text-slate-600">HTML5, CSS3, JavaScript</span>
                </div>
                <p className="text-slate-600">
                  Delivered a high-performance digital menu showcase for an active local business.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
              Technical Stack & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-slate-900">Languages & DB:</strong> Python, SQL, JavaScript, TypeScript, HTML/CSS
              </div>
              <div>
                <strong className="text-slate-900">Web & Tools:</strong> React, Django, Tailwind CSS, Vite, Git, GitHub
              </div>
              <div>
                <strong className="text-slate-900">Systems & OS:</strong> Linux/Ubuntu, PowerShell, CMD, Windows Troubleshooting
              </div>
              <div>
                <strong className="text-slate-900">Certificates:</strong> Google Backend, IEEE React (Helwan), Google HR, DEPI Tracks
              </div>
              <div>
                <strong className="text-slate-900">English:</strong> B2 Upper Intermediate (Technical & Professional Communication)
              </div>
              <div>
                <strong className="text-slate-900">Current Track:</strong> Microsoft Data Engineer Learning Path (Expected ~Jan)
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            PDF File: <code className="text-slate-700 font-mono text-[11px]">/assets/Ahmed-Badawy-CV.pdf</code>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
