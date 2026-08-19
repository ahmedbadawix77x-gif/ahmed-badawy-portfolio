import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home',         path: '/' },
    { name: 'About',        path: '/about' },
    { name: 'Projects',     path: '/projects' },
    { name: 'Skills',       path: '/skills' },
    { name: 'Journey',      path: '/journey' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Leadership',   path: '/leadership' },
    { name: 'Contact',      path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <header
      id="main-navbar"
      className={`h-14 px-4 sm:px-6 flex items-center justify-between backdrop-blur-md border-b border-[#DCEEFF] shrink-0 sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white/95 shadow-sm' : 'bg-white/85'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          id="nav-logo"
          to="/"
          className="flex items-center gap-2.5 group"
        >
          {/* Photo avatar with gradient ring */}
          <div className="relative w-9 h-9 shrink-0">
            <div
              className="absolute inset-0 rounded-full group-hover:scale-105 transition-transform duration-200"
              style={{
                background: 'conic-gradient(from 0deg, #3B82F6, #6366F1, #06B6D4, #3B82F6)',
                borderRadius: '50%',
              }}
            />
            <div className="absolute inset-[2px] rounded-full bg-white" />
            <img
              src="/ahmed-photo.jpg"
              alt="Ahmed Badawy"
              className="absolute inset-[2.5px] rounded-full object-cover object-top"
              style={{ width: 'calc(100% - 5px)', height: 'calc(100% - 5px)' }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[#0F2A5F]">
              Ahmed <span className="text-[#3B82F6]">Badawy</span>
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-500">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              to={link.path}
              className={`transition-all duration-150 py-1 ${
                isActive(link.path)
                  ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                  : 'hover:text-[#3B82F6]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ── CTA Buttons (Desktop) ── */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            id="nav-resume-btn"
            href="/Ahmed_Badawy_CV.pdf"
            download="Ahmed_Badawy_CV.pdf"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-all duration-150 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
          <Link
            id="nav-contact-cta"
            to="/contact"
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0F2A5F] bg-[#EEF7FF] hover:bg-[#DCEEFF] border border-[#DCEEFF] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* ── Mobile Controls ── */}
        <div className="flex md:hidden items-center gap-2">
          <a
            id="nav-mobile-resume"
            href="/Ahmed_Badawy_CV.pdf"
            download="Ahmed_Badawy_CV.pdf"
            className="px-3 py-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-[11px] font-bold shadow-xs flex items-center gap-1"
            aria-label="Download CV"
          >
            <FileText className="w-3 h-3" />
            <span>CV</span>
          </a>
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-700 bg-white border border-[#DCEEFF] hover:bg-[#F8FBFF] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="md:hidden absolute top-14 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[#DCEEFF] shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-150"
        >
          <div className="grid grid-cols-2 gap-1 pb-3 border-b border-[#EEF7FF]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#2563EB] text-white font-bold'
                    : 'text-[#0F2A5F] hover:bg-[#EEF7FF] hover:text-[#2563EB]'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className={`w-3.5 h-3.5 ${isActive(link.path) ? 'text-white' : 'text-slate-400'}`} />
              </Link>
            ))}
          </div>

          <div className="pt-2 flex gap-2">
            <a
              href="/Ahmed_Badawy_CV.pdf"
              download="Ahmed_Badawy_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#2563EB]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-[#0F2A5F] bg-[#EEF7FF] border border-[#DCEEFF]"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
