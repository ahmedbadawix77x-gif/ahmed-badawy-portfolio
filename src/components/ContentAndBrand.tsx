import React from 'react';
import { 
  Sparkles, 
  Video, 
  Linkedin, 
  Youtube, 
  Share2, 
  Compass, 
  Layers,
  ArrowRight
} from 'lucide-react';

export const ContentAndBrand: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Beyond Code Card */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white shadow-xl shadow-blue-950/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-700/60">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Professional Philosophy</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Beyond Code
              </h2>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl">
                "I am interested not only in writing code, but in understanding real problems, learning unfamiliar tools quickly, coordinating with people, and delivering working, practical solutions that create genuine impact."
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-blue-700/50 flex flex-wrap items-center gap-4 text-xs font-semibold text-cyan-200 relative z-10">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Problem-First Mindset
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Disciplined Collaboration
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Continuous Improvement
              </span>
            </div>
          </div>

          {/* Content & Digital Media Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-blue-100/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200">
                <Video className="w-3.5 h-3.5 text-blue-600" />
                <span>Creative Expression</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Content & Digital Media
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Exploring technical storytelling, educational media, and short-form video creation to explain complex technological topics simply.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="font-bold text-slate-900">Technical Content</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Tutorials & tech insights</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="font-bold text-slate-900">Video Editing</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Montage & digital media</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="font-bold text-slate-900">Educational Media</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Special ed digital visuals</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="font-bold text-slate-900">Short-Form Video</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Concise tech walkthroughs</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium">Platforms: YouTube • LinkedIn • Facebook</span>
              <Share2 className="w-4 h-4 text-blue-600" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
