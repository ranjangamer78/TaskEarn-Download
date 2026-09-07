import React from 'react';
import { DownloadCloud, Sparkles, Wallet, Check, ArrowRight } from 'lucide-react';
import { DIRECT_APK_DOWNLOAD_URL, APP_CONFIG } from '../config';

interface HowItWorksProps {
  onOpenDownload: (e?: React.MouseEvent) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload }) => {
  const steps = [
    {
      number: '01',
      title: 'Download & Register Free',
      description: `Grab the official ${APP_CONFIG.fileSize} TaskEarn APK directly with one tap. Create your free account in under 30 seconds with zero personal documentation required.`,
      icon: DownloadCloud,
      badge: '30-Second Setup',
      color: 'from-sky-500 to-blue-600',
    },
    {
      number: '02',
      title: 'Play Games & Finish Tasks',
      description: 'Collect your daily streak login bonus, spin the lucky wheel, scratch instant win tickets, roll dice, or watch quick promo videos to rack up thousands of coins.',
      icon: Sparkles,
      badge: '5+ Earning Modes',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      number: '03',
      title: 'Withdraw Real Cash & Rewards',
      description: 'Head to your wallet and cash out at transparent rates (1,000 Coins = ₹10). Direct transfers to eSewa, Free Fire Diamonds, Robux, or Amazon gift cards.',
      icon: Wallet,
      badge: 'Processed in Minutes',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold tracking-wide uppercase">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            How Earning with TaskEarn Works
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Start earning within 2 minutes of installing. No credit cards, no complex surveys, and zero hidden thresholds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-8 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1 shadow-xl"
              >
                {/* Step numbering & Icon */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black font-display text-slate-800">
                      {step.number}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                      {step.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white pt-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Verified Safe & Instant</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 text-center">
          <a
            href={DIRECT_APK_DOWNLOAD_URL}
            download={APP_CONFIG.apkFileName}
            onClick={onOpenDownload}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-fuchsia-600 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Start Step 1: Download Free APK ({APP_CONFIG.fileSize})</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
