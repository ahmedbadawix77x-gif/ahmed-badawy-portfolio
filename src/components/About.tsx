import React from 'react';
import { 
  Zap, 
  BrainCircuit, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  Workflow, 
  Layers,
  Code2,
  Users
} from 'lucide-react';

export const About: React.FC = () => {
  const coursework = [
    { name: "Advanced Computer Networks", focus: "Protocols, routing, TCP/IP & network topology" },
    { name: "Interface Programming", focus: "UI/UX structures, interaction models & frontend design" },
    { name: "Computer Maintenance", focus: "Hardware diagnostics, component repair & troubleshooting" },
    { name: "Digital Montage & Media", focus: "Multimedia assembly, digital layout & video processing" },
    { name: "Educational Design", focus: "Pedagogical structuring, instructional flows & accessibility" },
    { name: "3D Graphics", focus: "Spatial modeling, rendering pipelines & visual representations" }
  ];

  return (
    <section id="about" className="py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] bg-[#EEF7FF] border border-[#DCEEFF] mb-2">
            <GraduationCap className="w-3 h-3 text-[#2563EB]" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A5F] tracking-tight">
            About Ahmed Badawy
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            A pragmatic technologist combining computer science foundations, rapid learning agility, and real-world project execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left: Detailed Story & Paragraphs */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DCEEFF] shadow-xs space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
              <p>
                I am a third-year Computer student at <strong className="text-[#0F2A5F] font-bold">Faculty of Specific Education, Benha University</strong>, specializing in the <strong className="text-[#0F2A5F] font-bold">Computer Department</strong>. I am building my career around <strong className="text-[#2563EB] font-bold">Data Engineering</strong>, <strong className="text-[#2563EB] font-bold">Artificial Intelligence</strong>, software development, automation, and practical technology solutions.
              </p>
              <p>
                I enjoy turning problems into working solutions, learning new technologies quickly, and using <strong className="text-[#0F2A5F] font-semibold">AI-assisted development</strong> to build projects even when working with technologies that are completely new to me.
              </p>
              <p>
                Currently, I am developing my skills in <strong className="text-[#0F2A5F] font-semibold">Python, SQL, Data Engineering, AI, web development, Linux</strong>, and technical problem solving.
              </p>
              <p className="pt-2 border-t border-[#EEF7FF]">
                I also have proven experience working in teams, leading team members as a <strong className="text-[#2563EB] font-semibold">DEPI Team Leader</strong>, coordinating tasks, communicating effectively with management, and delivering high quality under pressure.
              </p>
            </div>

            {/* Personal Strength Highlight Card (Deep Blue High Density) */}
            <div className="p-5 rounded-2xl bg-[#0F2A5F] text-white shadow-md border border-[#DCEEFF]/20 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-yellow-300 shrink-0">
                  <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
                </div>
                <div className="space-y-1.5">
                  <div className="inline-block px-2 py-0.5 rounded bg-blue-500/30 text-cyan-200 text-[9px] font-bold tracking-wider uppercase border border-blue-400/30">
                    Core Capability
                  </div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
                    Fast Learner. Strong Problem Solver.
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                    One of my strongest abilities is learning unfamiliar technologies quickly and turning what I learn into practical, tested projects — using disciplined research and AI-assisted workflows as productivity accelerators.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Philosophy Callout */}
            <div className="p-4 rounded-xl bg-[#EEF7FF] border border-[#DCEEFF] flex items-start gap-3">
              <BrainCircuit className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0F2A5F] mb-0.5">
                  AI as an Engineering Multiplier
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "AI is a productivity and problem-solving tool, not a replacement for technical thinking. I harness AI to navigate unfamiliar APIs, debug runtime exceptions, author automation scripts, and accelerate development velocity."
                </p>
              </div>
            </div>

          </div>

          {/* Right: Formal Education & Academic Coursework */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DCEEFF] shadow-xs space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider text-[#2563EB] uppercase">
                  Academic Foundation
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#EEF7FF] text-[#2563EB] border border-[#DCEEFF]">
                  GPA: 3.0 / 4.0
                </span>
              </div>

              <div className="space-y-0.5">
                <h3 className="text-lg font-extrabold text-[#0F2A5F]">
                  Benha University
                </h3>
                <p className="text-xs font-semibold text-[#2563EB]">
                  Faculty of Education
                </p>
                <p className="text-xs text-slate-600">
                  Department: <strong className="text-slate-800 font-semibold">Computer – Special Education</strong>
                </p>
                <p className="text-[11px] text-slate-500">
                  Status: <strong className="text-slate-700">Third Year Undergraduate</strong>
                </p>
              </div>

              <div className="pt-3 border-t border-[#EEF7FF]">
                <div className="flex items-center gap-1.5 mb-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">
                    Relevant Specialized Coursework
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {coursework.map((course, idx) => (
                    <div 
                      key={idx}
                      className="p-2 rounded-lg bg-[#F8FBFF] border border-[#DCEEFF] hover:border-blue-300 transition-colors"
                    >
                      <div className="text-[11px] font-bold text-[#0F2A5F]">
                        {course.name}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                        {course.focus}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* University Unique Specialization Advantage */}
            <div className="p-4 rounded-xl bg-white border border-[#DCEEFF] shadow-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#2563EB] font-bold text-[11px] uppercase tracking-wide">
                <Workflow className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Special Education & Tech Intersection</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Combining computational software skills with special education pedagogical training enables designing user interfaces and digital tools with high accessibility and clear structural hierarchy.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

