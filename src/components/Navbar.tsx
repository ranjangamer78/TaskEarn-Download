import React, { useState, useEffect } from 'react';
import { TaskEarnLogo } from './TaskEarnLogo';
import { Download, Sparkles, Menu, X, ShieldCheck } from 'lucide-react';
import { DIRECT_APK_DOWNLOAD_URL, APP_CONFIG } from '../config';

interface NavbarProps {
  onOpenDownload: (e?: React.MouseEvent) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Rewards & Wallet', href: '#wallet' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleDownloadClick = (e: React.MouseEvent) => {
    onOpenDownload(e);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 transition hover:opacity-95" id="brand-home-link">
          <TaskEarnLogo size="md" />
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            v1.0 Active
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA - Direct APK Download */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="nav-download-button"
            href={DIRECT_APK_DOWNLOAD_URL}
            download={APP_CONFIG.apkFileName}
            onClick={handleDownloadClick}
            className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md shadow-indigo-600/25 hover:shadow-indigo-500/40 bg-gradient-to-r from-sky-500 via-indigo-600 to-fuchsia-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden select-none"
            aria-label="Directly download TaskEarn APK"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 group-hover:translate-y-0.5 transition-transform duration-200" />
            <span className="font-semibold">Download</span>
            <span className="hidden sm:inline-block font-semibold">APK</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/90 px-6 py-5 shadow-2xl space-y-4"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-indigo-400 py-1.5 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Virus-Free • Direct Fast APK Download</span>
            </div>
            <a
              href={DIRECT_APK_DOWNLOAD_URL}
              download={APP_CONFIG.apkFileName}
              onClick={(e) => {
                setMobileMenuOpen(false);
                onOpenDownload(e);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md"
            >
              <Download className="w-5 h-5" />
              Download {APP_CONFIG.apkFileName} ({APP_CONFIG.fileSize})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
