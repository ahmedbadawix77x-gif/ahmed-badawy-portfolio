import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { JourneyPage } from './pages/JourneyPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppContent() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />
      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenResume={() => setIsResumeModalOpen(true)} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback — go home */}
          <Route path="*" element={<HomePage onOpenResume={() => setIsResumeModalOpen(true)} />} />
        </Routes>
      </main>

      <Footer />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
