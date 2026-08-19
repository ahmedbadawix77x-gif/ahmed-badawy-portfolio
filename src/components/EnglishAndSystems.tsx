import React from 'react';
import { 
  Languages, 
  Terminal, 
  Cpu, 
  HardDrive, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Network, 
  MonitorCheck,
  Zap
} from 'lucide-react';

export const EnglishAndSystems: React.FC = () => {
  const troubleshootingTools = [
    { name: "PowerShell & CMD", desc: "Automated diagnostic scripts, process handling & system config" },
    { name: "SFC & CHKDSK", desc: "System file integrity checks & storage sector repairs" },
    { name: "Disk Management", desc: "Partitioning, disk health checks, volume recovery & SSD/HDD optimization" },
    { name: "Hardware Diagnostics", desc: "CPU, GPU, RAM, thermal analysis & bottleneck isolation" },
    { name: "Linux / Ubuntu CLI", desc: "Essential shell navigation, package management & service status" },
    { name: "AI-Assisted Troubleshooting", desc: "Deconstructing obscure stack traces & error codes swiftly" }
  ];

  return (
    <section className="py-20 bg-white border-y border-blue-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Systems & Hardware Troubleshooting */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200 mb-3">
                <Terminal className="w-3.5 h-3.5 text-blue-600" />
                <span>Hands-On Diagnostics</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Systems & Troubleshooting
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Practical, low-level problem solving across hardware components, Windows diagnostics, PowerShell scripting, and Linux environments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {troubleshootingTools.map((tool, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8FBFF] border border-blue-100/90 hover:border-blue-300 hover:bg-white transition-all flex flex-col justify-between"
                >
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-2 mb-1.5">
                    <Wrench className="w-3.5 h-3.5 text-blue-600" />
                    <span>{tool.name}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* AI-Assisted Diagnostic Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-md space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>AI-Assisted Investigation</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Able to investigate and solve complex technical issues using PowerShell, CMD, system tools, documentation, and structured AI-assisted problem solving to resolve root-cause faults rapidly.
              </p>
            </div>
          </div>

          {/* Right: English Proficiency & Networking Foundations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* English Proficiency Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FBFF] border border-blue-100/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                  <Languages className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  B2 – Upper Intermediate
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  English Language Proficiency
                </h3>
                <p className="text-xs font-semibold text-blue-700 mt-0.5">
                  Fluent in Technical & Professional Communication
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Comfortable with technical English, professional communication, presentations, reading and authoring documentation, and learning directly from global English technical resources.
              </p>

              <div className="space-y-2 pt-2 border-t border-blue-100/70 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Language school education background</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Daily technical reading & documentation writing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Comfortable presenting technical solutions in English</span>
                </div>
              </div>
            </div>

            {/* Computer Networking Card */}
            <div className="p-6 rounded-3xl bg-white border border-blue-100/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
                <Network className="w-5 h-5 text-blue-600" />
                <span>Computer Networking Foundations</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Good foundational knowledge of computer networking, protocols (TCP/IP, HTTP/S, DNS), routing principles, client-server models, and network architectures backed by university coursework.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
