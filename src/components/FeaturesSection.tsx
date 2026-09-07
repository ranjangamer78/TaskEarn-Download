import React from 'react';
import { 
  Gift, 
  Target, 
  Sparkles, 
  Ticket, 
  Gamepad2, 
  Wallet, 
  ArrowUpRight, 
  CheckCircle, 
  Flame, 
  Coins 
} from 'lucide-react';
import { DIRECT_APK_DOWNLOAD_URL, APP_CONFIG } from '../config';

interface FeaturesSectionProps {
  onOpenDownload: (e?: React.MouseEvent) => void;
  onSelectFeature?: (featureKey: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenDownload }) => {
  const features = [
    {
      id: 'daily-rewards',
      emoji: '🎁',
      title: 'Daily Rewards',
      subtitle: 'Consecutive Streak Multipliers',
      description: 'Check in every single day to accumulate progressive streak bonuses. Day 1 starts with 100 coins and scales up past 500+ coins with surprise weekly mystery crates.',
      perks: ['Progressive 5-day streak', 'Surprise loyalty crates', 'Never resets if you do 1 task'],
      badge: 'Up to 500+ Coins/Day',
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-500/50',
      badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      icon: Gift,
      iconColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
    },
    {
      id: 'easy-tasks',
      emoji: '🎯',
      title: 'Easy Tasks',
      subtitle: 'Quick 1-Minute Micro Activities',
      description: 'Earn on your terms with simple activities. Watch quick sponsored video clips, test fun games, answer short opinion polls, or discover new utilities with zero investment.',
      perks: ['Verified zero cost', '50+ tasks refreshed daily', 'Instant balance credit'],
      badge: '30 to 500 Coins/Task',
      gradient: 'from-indigo-500/20 via-sky-500/10 to-transparent',
      borderColor: 'group-hover:border-indigo-500/50',
      badgeColor: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
      icon: Target,
      iconColor: 'text-indigo-400 bg-indigo-500/15 border-indigo-500/30',
    },
    {
      id: 'daily-spin',
      emoji: '🎰',
      title: 'Daily Spin',
      subtitle: 'Guaranteed Fortune Wheel',
      description: 'Spin the high-win TaskEarn wheel every 24 hours. Enjoy guaranteed coin winnings, double-multiplier slices, and lucky jackpot tiers that yield massive balance boosts.',
      perks: ['100% Guaranteed payout', 'Free spins refreshed daily', 'Mega Jackpots up to 5,000 Coins'],
      badge: 'Free Daily Spins',
      gradient: 'from-fuchsia-500/20 via-pink-500/10 to-transparent',
      borderColor: 'group-hover:border-fuchsia-500/50',
      badgeColor: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30',
      icon: Sparkles,
      iconColor: 'text-fuchsia-400 bg-fuchsia-500/15 border-fuchsia-500/30',
    },
    {
      id: 'scratch-win',
      emoji: '🎟️',
      title: 'Scratch & Win',
      subtitle: 'Instant Foil Reveal Cards',
      description: 'Experience the rush of scratching digital scratch cards. Reveal matched symbols or direct numbers to instantly deposit 50 to 1,000 coins straight into your wallet.',
      perks: ['Tactile digital scratch card', 'Instant instant rewards', 'Unlimited tickets via tasks'],
      badge: 'Instant Surprise Prizes',
      gradient: 'from-rose-500/20 via-amber-500/10 to-transparent',
      borderColor: 'group-hover:border-rose-500/50',
      badgeColor: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
      icon: Ticket,
      iconColor: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
    },
    {
      id: 'dice-bones',
      emoji: '🎲',
      title: 'Dice/Bones',
      subtitle: 'Thrilling Roll & Win Mini-Game',
      description: 'Play the signature Bones game directly inside TaskEarn. Cast the 3D dice, hit lucky streaks, and watch your coin balance multiply with every consecutive winning roll.',
      perks: ['Fast-paced action', 'Combo streak bonuses', 'Compete on daily leaderboards'],
      badge: 'Multiply Your Coins',
      gradient: 'from-sky-500/20 via-cyan-500/10 to-transparent',
      borderColor: 'group-hover:border-sky-500/50',
      badgeColor: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
      icon: Gamepad2,
      iconColor: 'text-sky-400 bg-sky-500/15 border-sky-500/30',
    },
    {
      id: 'reward-wallet',
      emoji: '💰',
      title: 'Reward Wallet',
      subtitle: 'Transparent Rates & Fast Payouts',
      description: 'Fair, simple conversions: 1,000 Coins = ₹10 (100 Coins = ₹1). Cash out to eSewa, Free Fire Diamonds, Robux, Amazon Gift Cards, or bank transfer with zero withdrawal fees.',
      perks: ['Transparent 1000 Coins = ₹10', 'Direct eSewa & Game currency', 'Processed within minutes'],
      badge: 'Zero Withdrawal Fees',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
      badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      icon: Wallet,
      iconColor: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-wide uppercase">
            <Flame className="w-3.5 h-3.5" />
            Designed For Daily Earnings
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            6 Exciting Ways to Earn with{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              TaskEarn
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No boring waiting. Pick your favorite way to earn every day—from spinning lucky wheels to claiming streak bonuses and quick micro-tasks.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-950/80 border border-slate-800/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between overflow-hidden ${item.borderColor}`}
              >
                {/* Background ambient gradient */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl pointer-events-none -z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 space-y-4 sm:space-y-5">
                  {/* Top Bar with Emoji, Icon, and Badge */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-inner border border-slate-700 bg-slate-900">
                        {item.emoji}
                      </div>
                      <div className={`p-2 sm:p-2.5 rounded-xl border ${item.iconColor}`}>
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title and Subtitle */}
                  <div>
                    <h3 className="text-2xl font-black font-display text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet perks */}
                  <div className="pt-2 space-y-2 border-t border-slate-800/80">
                    {item.perks.map((perk, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA within card */}
                <div className="relative z-10 pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                    Available in v1.0
                  </span>
                  <a
                    href={DIRECT_APK_DOWNLOAD_URL}
                    download={APP_CONFIG.apkFileName}
                    onClick={onOpenDownload}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 group-hover:text-sky-300 transition cursor-pointer"
                  >
                    <span>Download & Earn</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Banner Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-900/40 via-indigo-900/40 to-fuchsia-900/40 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to claim your 200 welcome coins?
            </h4>
            <p className="text-sm text-slate-300">
              Download TaskEarn 1.0 APK, enter referral code <strong className="text-amber-400">CB8SIF</strong>, and start earning today.
            </p>
          </div>
          <a
            href={DIRECT_APK_DOWNLOAD_URL}
            download={APP_CONFIG.apkFileName}
            onClick={onOpenDownload}
            className="shrink-0 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:scale-105 cursor-pointer"
          >
            Download Free APK ({APP_CONFIG.fileSize})
          </a>
        </div>

      </div>
    </section>
  );
};
