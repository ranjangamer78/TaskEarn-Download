import React from 'react';
import { TaskEarnLogo } from './TaskEarnLogo';
import { 
  Download, 
  Star, 
  Gift, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Trophy, 
  Coins, 
  Gamepad2, 
  Smartphone,
  ShieldCheck,
  Flame,
  ArrowRight
} from 'lucide-react';
import { DIRECT_APK_DOWNLOAD_URL, APP_CONFIG } from '../config';

interface HeroProps {
  onOpenDownload: (e?: React.MouseEvent) => void;
  onExploreSlider: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onExploreSlider }) => {

  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-sky-500/20 via-indigo-600/25 to-fuchsia-500/20 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Decorative floating golden stars and coin particles */}
      <div className="absolute top-32 left-[12%] text-amber-400/70 animate-float hidden lg:block select-none">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute top-44 right-[14%] text-amber-300/80 animate-float-delayed hidden lg:block select-none">
        <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7">
            
            {/* Prominent TaskEarn Brand Header */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-inner backdrop-blur-md">
              <TaskEarnLogo size="md" showText={true} />
              <div className="h-4 w-px bg-slate-700" />
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
                <span>#1 Earning App 2026</span>
              </div>
            </div>

            {/* Catchy Headline */}
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-6.5xl font-black font-display tracking-tight text-white leading-[1.08]">
                Complete Tasks.{' '}
                <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
                  Earn Rewards.
                </span>{' '}
                <br />
                <span className="text-slate-100">Repeat.</span>
              </h1>
              
              {/* Short description */}
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl font-normal">
                Turn your free time into real money. Complete simple daily activities, spin the wheel, scratch bonus cards, roll dice, and withdraw instant cash directly to your favorite wallet!
              </p>
            </div>

            {/* Large Highly Visible Download Button & CTA Actions */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3.5 pt-1">
              <a
                id="hero-download-button"
                href={DIRECT_APK_DOWNLOAD_URL}
                download={APP_CONFIG.apkFileName}
                onClick={onOpenDownload}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl font-bold text-base sm:text-lg text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 bg-gradient-to-r from-sky-500 via-indigo-600 to-fuchsia-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
                aria-label="Directly download TaskEarn APK"
              >
                {/* Subtle light sweep animation */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/20 skew-x-12 group-hover:animate-shimmer" />
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0 group-hover:translate-y-0.5 transition-transform duration-200" />
                <div className="flex flex-col items-start text-left leading-tight">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-indigo-100 opacity-90">Direct Instant Download</span>
                  <span className="font-extrabold text-base sm:text-lg">Download TaskEarn 1.0</span>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                id="hero-preview-button"
                onClick={onExploreSlider}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 hover:text-white transition-all shadow-md hover:border-slate-600 active:scale-[0.98]"
              >
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
                <span>View App Screens</span>
              </button>
            </div>

            {/* Social Proof Counter: 11K+ Users */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
                {/* User avatar bubbles */}
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-tr from-sky-400 to-indigo-600 text-[10px] font-bold text-white flex items-center justify-center">
                    AR
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-tr from-amber-400 to-orange-500 text-[10px] font-bold text-white flex items-center justify-center">
                    RK
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-tr from-fuchsia-400 to-pink-600 text-[10px] font-bold text-white flex items-center justify-center">
                    SN
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-emerald-600 text-[10px] font-bold text-white flex items-center justify-center">
                    +11K
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-100">4.9 / 5</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-300">
                    Trusted by <strong className="text-white font-extrabold">11K+ Users</strong>
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs text-slate-400 px-3 py-1.5 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Clean APK • Instant Cashout</span>
              </div>
            </div>

            {/* Smaller Stats: Daily Rewards, Multiple Tasks, Easy to Use */}
            <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 pt-2">
              <div className="flex flex-col items-center sm:items-start p-2.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center sm:text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-1">
                  <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="font-extrabold text-white text-xs xs:text-sm sm:text-base">Daily Rewards</div>
                <div className="text-[10px] sm:text-xs text-slate-400">Streaks bonus</div>
              </div>

              <div className="flex flex-col items-center sm:items-start p-2.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center sm:text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-1">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="font-extrabold text-white text-xs xs:text-sm sm:text-base">Multiple Tasks</div>
                <div className="text-[10px] sm:text-xs text-slate-400">Spin & scratch</div>
              </div>

              <div className="flex flex-col items-center sm:items-start p-2.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center sm:text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="font-extrabold text-white text-xs xs:text-sm sm:text-base">Easy to Use</div>
                <div className="text-[10px] sm:text-xs text-slate-400">100% Free app</div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual: Phone Mockup & Floating Glass Highlight Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center select-none w-full max-w-sm mx-auto lg:max-w-none">
            
            {/* Center Phone Display Frame */}
            <div className="relative z-10 w-full max-w-[270px] xs:max-w-[295px] sm:max-w-[320px] aspect-[9/19] rounded-[44px] sm:rounded-[48px] p-2.5 sm:p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.35)] ring-1 ring-white/20">
              
              {/* Outer phone metal edge */}
              <div className="relative w-full h-full rounded-[36px] sm:rounded-[38px] bg-slate-950 overflow-hidden border border-slate-800 flex flex-col">
                
                {/* Phone Top Notch / Speaker */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800/90" />
                  <div className="w-10 h-1 rounded-full bg-slate-800/60" />
                </div>

                {/* In-app preview screen */}
                <div className="w-full h-full pt-8 pb-4 px-3.5 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white overflow-hidden text-xs">
                  
                  {/* App Header */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-500 text-black font-extrabold flex items-center justify-center text-sm shadow">
                        A
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs flex items-center gap-1">
                          Hello, Earner 👋
                        </div>
                        <div className="text-[10px] text-slate-400">Welcome Back!</div>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center relative">
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500" />
                      <Gift className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                  </div>

                  {/* Balance Card (styled after user's uploaded screenshot) */}
                  <div className="relative p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 border border-indigo-500/30 shadow-lg shadow-indigo-950/50">
                    <div className="text-[10px] uppercase font-semibold tracking-wider text-indigo-300">Your Balance</div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 font-bold text-xs shadow-sm">
                          ★
                        </span>
                        <span className="text-2xl font-black font-display tracking-tight text-white">90,165</span>
                      </div>
                      <span className="text-[10px] px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold flex items-center gap-1 shadow">
                        Wallet &gt;
                      </span>
                    </div>
                    <div className="text-[10px] text-indigo-200/80 mt-1">
                      ≈ ₹901.65 (1,000 Coins = ₹10)
                    </div>
                  </div>

                  {/* Complete Tasks Banner */}
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                        <Trophy className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-[11px] text-white">Complete Tasks</div>
                        <div className="text-[9px] text-slate-400">Finish tasks & earn coins</div>
                      </div>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded-md bg-indigo-600 text-white font-bold">
                      Start Now
                    </span>
                  </div>

                  {/* Daily Streak Row */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-white flex items-center gap-1">
                        Daily Streak <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                      </span>
                      <span className="text-amber-400 font-bold">★ 1</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 text-center text-[9px]">
                      {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'].map((d, i) => (
                        <div
                          key={d}
                          className={`p-1.5 rounded-lg border ${
                            i === 1
                              ? 'bg-indigo-600/30 border-indigo-500 text-white font-bold'
                              : 'bg-slate-900/80 border-slate-800 text-slate-400'
                          }`}
                        >
                          <div>{d}</div>
                          <div className="text-amber-300 font-semibold mt-0.5">★ {(i + 1) * 100}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Access Action Grid */}
                  <div className="grid grid-cols-4 gap-1.5">
                    <div className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex flex-col items-center gap-1 text-center">
                      <Gift className="w-4 h-4 text-indigo-400" />
                      <span className="text-[8px] font-bold text-slate-200">Bonus</span>
                    </div>
                    <div className="p-2 rounded-xl bg-pink-600/20 border border-pink-500/40 flex flex-col items-center gap-1 text-center">
                      <Sparkles className="w-4 h-4 text-pink-400" />
                      <span className="text-[8px] font-bold text-slate-200">Spin</span>
                    </div>
                    <div className="p-2 rounded-xl bg-cyan-600/20 border border-cyan-500/40 flex flex-col items-center gap-1 text-center">
                      <Gamepad2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-[8px] font-bold text-slate-200">Dice</span>
                    </div>
                    <div className="p-2 rounded-xl bg-amber-600/20 border border-amber-500/40 flex flex-col items-center gap-1 text-center">
                      <Coins className="w-4 h-4 text-amber-400" />
                      <span className="text-[8px] font-bold text-slate-200">Scratch</span>
                    </div>
                  </div>

                  {/* Bottom Navigation Mock */}
                  <div className="pt-1.5 border-t border-slate-800 flex items-center justify-around text-[9px] text-slate-400">
                    <span className="text-fuchsia-400 font-bold">Home</span>
                    <span>Earn</span>
                    <span>Wallet</span>
                    <span>History</span>
                  </div>

                </div>

              </div>
            </div>

            {/* Floating Glassmorphism Badges (cleanly contained for tablets & desktops) */}
            
            {/* Top-Right: Scratch & Win */}
            <div className="absolute -top-3 -right-2 md:-right-6 lg:-right-8 z-20 p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 border border-fuchsia-500/40 backdrop-blur-xl shadow-xl shadow-fuchsia-950/40 animate-float hidden md:flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-md shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-fuchsia-300">Instant Win</div>
                <div className="text-xs sm:text-sm font-extrabold text-white">Scratch & Win</div>
                <div className="text-[11px] sm:text-xs font-bold text-amber-400">+50 Coins</div>
              </div>
            </div>

            {/* Top-Left: Daily Spin */}
            <div className="absolute top-10 -left-2 md:-left-8 lg:-left-12 z-20 p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 border border-sky-500/40 backdrop-blur-xl shadow-xl shadow-sky-950/40 animate-float-delayed hidden md:flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md shrink-0">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-sky-300">Lucky Wheel</div>
                <div className="text-xs sm:text-sm font-extrabold text-white">Daily Spin</div>
                <div className="text-[11px] sm:text-xs font-bold text-emerald-400">+25 to +500 Coins</div>
              </div>
            </div>

            {/* Bottom-Right: Wallet Withdrawal */}
            <div className="absolute bottom-10 -right-2 md:-right-6 lg:-right-10 z-20 p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 backdrop-blur-xl shadow-xl shadow-emerald-950/40 animate-float-delayed hidden md:flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-md shrink-0">
                <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-300">Fast Payout</div>
                <div className="text-xs sm:text-sm font-extrabold text-white">Cashout ₹901.65</div>
                <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium">eSewa • Bank • Vouchers</div>
              </div>
            </div>

            {/* Bottom-Left: Dice & Bones */}
            <div className="absolute -bottom-3 -left-2 md:-left-6 lg:-left-8 z-20 p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 border border-amber-500/40 backdrop-blur-xl shadow-xl shadow-amber-950/40 animate-float hidden md:flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-600 flex items-center justify-center text-white shadow-md shrink-0">
                <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-300">Dice & Bones</div>
                <div className="text-xs sm:text-sm font-extrabold text-white">Roll & Win!</div>
                <div className="text-[11px] sm:text-xs font-bold text-amber-400">+40 Coins</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
