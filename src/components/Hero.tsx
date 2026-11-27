import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Layers,
  GitBranch,
  BarChart3,
  Zap,
  Trophy,
  GraduationCap,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import { projectsData } from '../data/projects';

interface HeroProps {
  onOpenResume: () => void;
}

/** Adds the `in` class to .reveal elements once they scroll into view. */
function useReveal() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = root.current?.querySelectorAll<HTMLElement>('.reveal') ?? [];
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        requestAnimationFrame(() => el.classList.add('in'));
      } else {
        io.observe(el);
      }
    });
    // safety net: never leave content hidden
    const t = window.setTimeout(() => els.forEach((el) => el.classList.add('in')), 4000);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, []);
  return root;
}

const stats = [
  { value: '#1', label: 'Ranked performer', sub: 'Across all tracks' },
  { value: '100%', label: 'Test coverage', sub: 'On the EFIDP platform' },
  { value: '3.0', label: 'GPA', sub: 'Benha University' },
  { value: '7+', label: 'Shipped projects', sub: 'Data, web & AI' },
];

const pillars = [
  {
    icon: Layers,
    title: 'Lakehouse & modeling',
    text: 'Medallion layers on S3, Kimball star schemas in PostgreSQL.',
    tone: 'from-violet-500 to-indigo-500',
  },
  {
    icon: GitBranch,
    title: 'Pipelines & orchestration',
    text: 'Airflow DAGs and Kafka streams with strict data contracts.',
    tone: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics-ready output',
    text: 'Clean Gold tables, Pandas EDA and KPI-ready models.',
    tone: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Reliable by default',
    text: 'Docker, CI/CD, typed Python and full test coverage.',
    tone: 'from-amber-500 to-orange-500',
  },
];

const stack = [
  'Python', 'SQL', 'PostgreSQL', 'Apache Kafka', 'Apache Airflow', 'PySpark',
  'Docker', 'MinIO / S3', 'Pandas', 'Pydantic', 'GitHub Actions', 'Grafana',
  'React', 'TypeScript', 'Redis', 'Linux',
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const ref = useReveal();
  const featured = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div ref={ref} id="home">
      {/* ================= HERO ================= */}
      <section className="relative pt-10 sm:pt-16 pb-14 sm:pb-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-60"
          style={{ background: 'radial-gradient(closest-side, rgba(124,58,237,0.10), transparent)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* copy */}
          <div className="lg:col-span-7 reveal">
            <span className="lp-chip" style={{ padding: '.4rem .85rem', fontSize: '.78rem' }}>
              <span className="lp-dot w-2 h-2 rounded-full bg-emerald-500" />
              Open to data engineering roles
              <span className="text-slate-300">|</span>
              <MapPin className="w-3 h-3" /> Cairo, Egypt
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.7rem] leading-[1.05] font-extrabold text-[#0b1b3b]">
              I build data platforms
              <br />
              that <span className="lp-grad">run themselves.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Hi, I'm <strong className="text-[#0b1b3b]">Ahmed Badawy</strong>, a data engineer
              designing Lakehouse platforms, ETL/ELT pipelines and event streams that are tested,
              typed and containerized from day one.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link id="hero-view-projects-btn" to="/projects" className="lp-btn lp-btn-primary">
                View my work <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                id="hero-resume-btn"
                href="/Ahmed_Badawy_CV.pdf"
                download="Ahmed_Badawy_CV.pdf"
                className="lp-btn lp-btn-ghost"
              >
                <FileText className="w-4 h-4 text-[#3b5bfd]" /> Download CV
              </a>
              <div className="flex items-center gap-2 sm:ml-2">
                <a aria-label="GitHub" href="https://github.com/ahmedbadawix77x-gif" target="_blank" rel="noreferrer" className="lp-btn lp-btn-ghost !p-3"><Github className="w-4 h-4" /></a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/ahmed-badawy-45060431b" target="_blank" rel="noreferrer" className="lp-btn lp-btn-ghost !p-3"><Linkedin className="w-4 h-4" /></a>
                <Link aria-label="Contact" to="/contact" className="lp-btn lp-btn-ghost !p-3"><Mail className="w-4 h-4" /></Link>
              </div>
            </div>

            {/* proof row */}
            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-[#dbe4ff] pl-3">
                  <dt className="text-2xl font-extrabold text-[#0b1b3b] tracking-tight">{s.value}</dt>
                  <dd className="text-xs font-semibold text-slate-700">{s.label}</dd>
                  <dd className="text-[11px] text-slate-500">{s.sub}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* portrait + floating cards */}
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: '.12s' }}>
            <div className="relative mx-auto w-full max-w-[420px]">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2.2rem] blur-2xl opacity-70"
                style={{ background: 'linear-gradient(135deg, rgba(59,91,253,.28), rgba(6,182,212,.22), rgba(124,58,237,.24))' }}
              />
              <div className="relative rounded-[2rem] p-2 bg-white border border-[#e3ebf8] shadow-[0_30px_70px_-30px_rgba(59,91,253,0.45)]">
                <img
                  src="/ahmed-photo.jpg"
                  alt="Ahmed Badawy"
                  className="w-full aspect-[4/5] object-cover rounded-[1.6rem]"
                  style={{ objectPosition: '50% 18%' }}
                />
              </div>

              <div className="lp-float absolute -left-4 sm:-left-10 top-10 flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur px-3.5 py-2.5 border border-[#e3ebf8] shadow-[0_14px_34px_-14px_rgba(11,27,59,0.35)]">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white"><Trophy className="w-4 h-4" /></span>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-[#0b1b3b]">Top performer #1</div>
                  <div className="text-[11px] text-slate-500">DEPI data track</div>
                </div>
              </div>

              <div className="lp-float-2 absolute -right-3 sm:-right-8 bottom-24 flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur px-3.5 py-2.5 border border-[#e3ebf8] shadow-[0_14px_34px_-14px_rgba(11,27,59,0.35)]">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#3b5bfd] to-[#7c3aed] text-white"><ShieldCheck className="w-4 h-4" /></span>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-[#0b1b3b]">DEPI team leader</div>
                  <div className="text-[11px] text-slate-500">Digital Egypt Pioneers</div>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 flex items-center gap-2 whitespace-nowrap rounded-full bg-[#0b1b3b] text-white px-4 py-2 text-xs font-semibold shadow-xl">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-300" /> Benha University, 3rd year
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STACK MARQUEE ================= */}
      <section aria-label="Tech stack" className="py-6 border-y border-[#e3ebf8] bg-white/70 backdrop-blur">
        <div
          className="overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="lp-marq gap-3">
            {[...stack, ...stack].map((t, i) => (
              <span key={i} className="lp-chip mr-3 !text-[.8rem] !px-4 !py-1.5 text-[#0b1b3b]">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#3b5bfd] to-[#06b6d4]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-bold tracking-[.18em] uppercase text-[#3b5bfd]">What I do</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0b1b3b]">
              End-to-end data engineering, from raw feeds to decisions
            </h2>
            <p className="mt-3 text-slate-600">
              Four things I care about on every project.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div key={p.title} className="lp-card p-6 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className={`grid place-items-center w-11 h-11 rounded-2xl text-white bg-gradient-to-br ${p.tone} shadow-lg`}>
                  <p.icon className="w-5 h-5" />
                </span>
                <h3 className="mt-5 font-bold text-[#0b1b3b]">{p.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 reveal">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[.18em] uppercase text-[#3b5bfd]">Selected work</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0b1b3b]">Projects I'm proud of</h2>
            </div>
            <Link to="/projects" className="lp-btn lp-btn-ghost">
              All projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {featured.map((p, i) => (
              <a
                key={p.id}
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className={`lp-card group overflow-hidden reveal block ${i === 0 ? 'md:row-span-1' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-2" style={{ background: p.imageAccent }} />
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="lp-chip">{p.category}</span>
                    <span className="grid place-items-center w-9 h-9 rounded-full border border-[#e3ebf8] text-slate-500 group-hover:bg-[#3b5bfd] group-hover:text-white group-hover:border-[#3b5bfd] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#0b1b3b] leading-snug">{p.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[#3b5bfd]">{p.subtitle}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 5).map((t) => (
                      <span key={t} className="lp-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="reveal relative overflow-hidden rounded-[2rem] px-6 sm:px-14 py-12 sm:py-16 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #1e2fb8 0%, #4b3df0 50%, #0891b2 100%)' }}
          >
            <div aria-hidden className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
            <div aria-hidden className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-cyan-300/20 blur-2xl" />
            <h2 className="relative text-3xl sm:text-4xl font-extrabold !text-white">Let's build something reliable.</h2>
            <p className="relative mt-3 text-white/80 max-w-xl mx-auto">
              I'm looking for a data engineering role or internship. If you have a pipeline problem, I'd like to hear it.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:ahmedbadawix77x@gmail.com" className="lp-btn bg-white text-[#1e2fb8] shadow-xl">
                <Mail className="w-4 h-4" /> Email me
              </a>
              <button type="button" onClick={onOpenResume} className="lp-btn border border-white/40 text-white hover:bg-white/10">
                <FileText className="w-4 h-4" /> View resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
