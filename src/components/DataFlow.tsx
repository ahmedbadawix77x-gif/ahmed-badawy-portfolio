import React from 'react';
import { BrandIcon } from './BrandIcon';

const Link: React.FC<{ a: string }> = ({ a }) => (
  <div className="flow-link" style={{ ['--a' as string]: a }} aria-hidden>
    {[0, 0.8, 1.6].map((d) => (
      <span key={d} className="flow-dot" style={{ ['--d' as string]: `${d}s` }} />
    ))}
  </div>
);

const Node: React.FC<{ stage: string; title: string; sub: string; a: string; pd: string; icons: string[]; children?: React.ReactNode }> = ({ stage, title, sub, a, pd, icons, children }) => (
  <div className="flow-node pulse" style={{ ['--a' as string]: a, ['--pd' as string]: pd }}>
    <div className="flow-stage">{stage}</div>
    <div className="flow-title">{title}</div>
    <div className="flow-sub">{sub}</div>
    <div className="flex flex-wrap gap-2 mt-3">
      {icons.map((i) => (
        <span key={i} className="flow-chip" title={i}>
          <BrandIcon name={i} size={18} />
        </span>
      ))}
    </div>
    {children}
  </div>
);

export const DataFlow: React.FC = () => (
  <section className="relative py-12 sm:py-14">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-[#2563EB] bg-white border border-[#DCEEFF]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Pipeline
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#0F2A5F] tracking-tight">How data moves through my platforms</h2>
        <p className="mt-2 text-sm text-slate-600">Extract from sources, transform with orchestrated jobs, load into a layered lakehouse.</p>
      </div>
      <div className="density-card p-5 sm:p-7">
        <div className="flow">
          <Node stage="1 · Extract" title="Sources" sub="Streams, databases and files" a="#2563EB" pd="0s" icons={['apachekafka', 'postgresql', 'minio']} />
          <Link a="#2563EB" />
          <Node stage="2 · Transform" title="Orchestrate & clean" sub="Airflow DAGs, Spark and Pandas jobs" a="#F59E0B" pd="1.6s" icons={['apacheairflow', 'apachespark', 'pandas', 'python']} />
          <Link a="#F59E0B" />
          <Node stage="3 · Load" title="Lakehouse & warehouse" sub="Medallion layers, star schema" a="#10B981" pd="3.2s" icons={['postgresql', 'docker']}>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="medal" style={{ ['--m' as string]: '#B45309' }}><i />Bronze</span>
              <span className="medal" style={{ ['--m' as string]: '#94A3B8' }}><i />Silver</span>
              <span className="medal" style={{ ['--m' as string]: '#EAB308' }}><i />Gold</span>
            </div>
          </Node>
        </div>
      </div>
    </div>
  </section>
);
