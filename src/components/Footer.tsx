import React from 'react';
import { TaskEarnLogo } from './TaskEarnLogo';
import { Download, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { LegalModalType } from './LegalModals';
import { DIRECT_APK_DOWNLOAD_URL, APP_CONFIG } from '../config';

interface FooterProps {
  onOpenDownload: (e?: React.MouseEvent) => void;
  onOpenLegalModal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload, onOpenLegalModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-slate-950 border-t border-slate-800 text-slate-400">
      
      {/* High-Impact Pre-Footer Download CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-sky-950 via-indigo-950 to-purple-950 border border-indigo-500/30 shadow-2xl">
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                Start Earning Today
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
                Download TaskEarn & Get 200 Free Welcome Coins!
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Join 11,000+ satisfied earners. No investment required, verified payouts, and fun casual games.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href={DIRECT_APK_DOWNLOAD_URL}
                download={APP_CONFIG.apkFileName}
                onClick={onOpenDownload}
                className="group w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl font-bold text-base sm:text-lg text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-fuchsia-600 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download TaskEarn 1.0 APK ({APP_CONFIG.fileSize})</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Metadata */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-6 space-y-3 text-center md:text-left">
            <TaskEarnLogo size="md" />
            <p className="text-slate-300 text-sm font-medium">
              <strong className="text-white">TaskEarn — Complete tasks and enjoy daily rewards.</strong>
            </p>
            <p className="text-xs text-slate-500 max-w-md">
              The premier free-to-play mobile rewards ecosystem. Complete quick surveys, watch short promos, test new games, and earn real money daily.
            </p>
          </div>

          {/* Links for About, Privacy Policy, Terms & Conditions, Contact */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm font-semibold">
            <button
              onClick={() => onOpenLegalModal('about')}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onOpenLegalModal('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

        </div>

        {/* Bottom Bar with Security & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>© {new Date().getFullYear()} TaskEarn. All rights reserved. 100% Free & Verified.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Referral Code: <strong className="text-amber-400">CB8SIF</strong></span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
