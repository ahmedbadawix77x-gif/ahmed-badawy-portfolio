import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Target, 
  CheckCircle2, 
  MessageSquare, 
  BarChart, 
  LifeBuoy, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const Leadership: React.FC = () => {
  const depiResponsibilities = [
    {
      title: "Team Follow-up & Alignment",
      desc: "Conducting regular check-ins with team members to ensure all deliverables stay on track with cohort milestones."
    },
    {
      title: "Task Coordination & Scheduling",
      desc: "Deconstructing complex technical assignments into structured sprint milestones and distributing tasks by individual strengths."
    },
    {
      title: "Performance Monitoring",
      desc: "Tracking technical submission quality, adherence to coding standards, and proactive blocker resolution."
    },
    {
      title: "Management Communication",
      desc: "Serving as the primary communication bridge between team members and initiative supervisors and mentors."
    },
    {
      title: "Problem Identification & Escalation",
      desc: "Identifying technical and operational roadblocks early and applying swift corrective measures."
    },
    {
      title: "Structured Reporting",
      desc: "Authoring comprehensive status reports summarizing sprint outcomes, velocity, and attendance."
    },
    {
      title: "Peer Support & Mentorship",
      desc: "Providing active assistance to peers navigating difficult programming concepts in Python and SQL."
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-[#F8FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200 mb-3">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Management & Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Leadership & Community
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Real leadership experience leading technical teams, coordinating initiatives, and supporting developer communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: DEPI Team Leader Full Breakdown */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-blue-100/90 shadow-sm space-y-6">
            
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                    Merit-Based Selection
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                    DEPI Team Leader
                  </h3>
                  <div className="text-xs font-semibold text-blue-800">
                    Digital Egypt Pioneers Initiative
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Selected as a <strong className="text-slate-900 font-semibold">Team Leader</strong> in the Digital Egypt Pioneers Initiative based on verified performance, technical dependability, and proven communication capabilities.
            </p>

            {/* Core Responsibilities Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Key Leadership Responsibilities:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {depiResponsibilities.map((resp, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F8FBFF] border border-blue-100 hover:border-blue-200 transition-colors"
                  >
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{resp.title}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 leading-relaxed pl-5">
                      {resp.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: GDG Benha Ahlia & People Ops */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* GDG Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-blue-100/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  Community & People
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  Google Developer Groups (GDG)
                </h3>
                <p className="text-xs font-semibold text-blue-700">
                  Benha Ahlia University – Computers & Information
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Selected to join the non-technical team as <strong className="text-slate-900 font-semibold">HR</strong>, supporting developer events, organizing volunteer logistics, and facilitating active community engagement.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                {[
                  "Team coordination & cross-functional liaison",
                  "Participant onboarding and community support",
                  "HR operations & event coordination",
                  "Fostering an inclusive environment for aspiring developers"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Philosophy */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-900 to-indigo-900 text-white shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-cyan-300" />
                <span>Collaborative Philosophy</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Empowering Teams Through Clarity & Empathy
              </h4>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                Effective leadership is grounded in listening, removing obstacles for peers, maintaining rigorous standards, and ensuring clear communication across every level of the organization.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
