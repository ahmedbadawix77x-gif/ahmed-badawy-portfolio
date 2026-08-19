import React, { useState } from 'react';
import { Award, X, ZoomIn, CheckCircle2, Calendar, Building2, ExternalLink } from 'lucide-react';
import { certificatesData } from '../data/certificates';
import { Certificate } from '../types';

const categoryColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  'Technical':               { bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200',   dot: 'bg-blue-500' },
  'AI & Data':               { bg: 'bg-violet-50',  text: 'text-violet-700',  border: 'border-violet-200', dot: 'bg-violet-500' },
  'Professional & Leadership':{ bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200',dot: 'bg-emerald-500' },
};

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const openCert = (cert: Certificate) => {
    setImgLoaded(false);
    setSelectedCert(cert);
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fbff 0%, #ffffff 60%, #f0f7ff 100%)' }}>

      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-blue-700 bg-blue-100/80 border border-blue-200 mb-4">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Credentials & Verified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A5F] tracking-tight">
            Certificates &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1]">
              Achievements
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-500 max-w-xl mx-auto">
            Official certifications from IEEE, Google Developer Groups, and HP Foundation — click any to view full certificate.
          </p>

          {/* Stats row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {[
              { label: 'Certificates', value: `${certificatesData.length}` },
              { label: 'Organizations', value: '3' },
              { label: 'Year', value: '2025–2026' },
            ].map(stat => (
              <div key={stat.label} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-bold text-[#0F2A5F]">{stat.value}</span>
                <span className="text-xs text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CERTIFICATES GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => {
            const colors = categoryColors[cert.category] ?? categoryColors['Technical'];
            return (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                onClick={() => openCert(cert)}
                className="group rounded-2xl bg-white border border-[#DCEEFF] shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Certificate image preview */}
                <div className="relative overflow-hidden bg-slate-50 border-b border-slate-100"
                  style={{ aspectRatio: '16/9' }}>
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                      <Award className="w-12 h-12 text-blue-300" />
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0F2A5F]/0 group-hover:bg-[#0F2A5F]/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-[#0F2A5F] text-xs font-bold shadow-lg">
                        <ZoomIn className="w-3.5 h-3.5" />
                        View Certificate
                      </div>
                    </div>
                  </div>

                  {/* Category badge on image */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border} shadow-sm backdrop-blur`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {cert.category}
                    </span>
                  </div>

                  {/* Completed badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-500 text-white shadow-sm">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {cert.status}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-bold text-[#0F2A5F] group-hover:text-[#2563EB] transition-colors leading-snug line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Building2 className="w-3 h-3 shrink-0" />
                    <span className="font-semibold text-blue-700 line-clamp-1">{cert.issuer || cert.organization}</span>
                  </div>

                  {cert.date && (
                    <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3 shrink-0" />
                      <span>{cert.date}</span>
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="mt-3 flex flex-wrap gap-1 flex-1 content-start">
                    {cert.focus.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F8FBFF] text-slate-600 border border-[#DCEEFF]">
                        {item}
                      </span>
                    ))}
                    {cert.focus.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-600">
                        +{cert.focus.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-3 pt-3 border-t border-[#EEF7FF] flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                      Click to view full certificate
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== FULL CERTIFICATE MODAL ===== */}
      {selectedCert && (
        <div
          id="cert-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ background: 'rgba(15, 42, 95, 0.75)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-3xl flex flex-col gap-4 animate-in zoom-in-95 fade-in duration-200"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white text-slate-700 hover:text-slate-900 shadow-lg flex items-center justify-center hover:scale-110 transition-all"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Certificate image (full size) */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white">
              {selectedCert.image ? (
                <>
                  {!imgLoaded && (
                    <div className="w-full h-64 flex items-center justify-center bg-slate-100">
                      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className={`w-full h-auto ${imgLoaded ? 'block' : 'hidden'}`}
                    onLoad={() => setImgLoaded(true)}
                  />
                </>
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <Award className="w-20 h-20 text-blue-400" />
                </div>
              )}
            </div>

            {/* Info card below image */}
            <div className="rounded-2xl bg-white border border-white/30 shadow-xl p-5 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0F2A5F] truncate">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                  <Building2 className="w-3 h-3" />
                  {selectedCert.organization}
                  {selectedCert.date && (
                    <>
                      <span className="text-slate-300">•</span>
                      <Calendar className="w-3 h-3" />
                      {selectedCert.date}
                    </>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
