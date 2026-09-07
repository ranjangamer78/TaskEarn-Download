import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, Zap, ArrowUpRight } from 'lucide-react';

interface LivePayoutTickerProps {
  onOpenDownload: (e?: React.MouseEvent) => void;
}

export const LivePayoutTicker: React.FC<LivePayoutTickerProps> = ({ onOpenDownload }) => {
  const initialPayouts = [
    { id: '1', user: 'Rahul S.', amount: '₹300.00', method: 'eSewa Fixed', time: 'Just now', icon: '🇳🇵' },
    { id: '2', user: 'Bibek T.', amount: '100 FF Diamonds', method: 'Free Fire', time: '1m ago', icon: '💎' },
    { id: '3', user: 'Priya K.', amount: '₹200.00', method: 'eSewa Fixed', time: '2m ago', icon: '🇳🇵' },
    { id: '4', user: 'Aman V.', amount: '80 Robux', method: 'Roblox ID', time: '3m ago', icon: '🪙' },
    { id: '5', user: 'Kiran M.', amount: '₹500.00', method: 'Bank Transfer', time: '5m ago', icon: '🏦' },
    { id: '6', user: 'Sunil G.', amount: '$10.00 Card', method: 'Amazon Gift Card', time: '7m ago', icon: '🎁' },
  ];

  const [payouts, setPayouts] = useState(initialPayouts);

  useEffect(() => {
    const interval = setInterval(() => {
      const names = ['Ranjit B.', 'Anil P.', 'Dipak C.', 'Rohan J.', 'Sushant M.', 'Nabin K.'];
      const methods = [
        { method: 'eSewa Fixed', amount: '₹200.00', icon: '🇳🇵' },
        { method: 'eSewa Instant', amount: '₹300.00', icon: '🇳🇵' },
        { method: 'Free Fire', amount: '210 FF Diamonds', icon: '💎' },
        { method: 'Google Play', amount: '₹100 Code', icon: '🎟️' },
      ];
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomReward = methods[Math.floor(Math.random() * methods.length)];

      const newPayout = {
        id: String(Date.now()),
        user: randomName,
        amount: randomReward.amount,
        method: randomReward.method,
        time: 'Just now',
        icon: randomReward.icon,
      };

      setPayouts((prev) => [newPayout, ...prev.slice(0, 5)]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="wallet" className="py-16 bg-slate-900/90 border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Conversion Highlight */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-800">
          <div className="text-center lg:text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Live Activity Feed
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              Recent Verified Community Withdrawals
            </h3>
            <p className="text-slate-400 text-sm">
              Over ₹1,80,000+ in rewards paid out to 11K+ active members.
            </p>
          </div>

          {/* Transparent Conversion Rate Pill */}
          <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-slate-950 border border-emerald-500/30 shadow-lg shadow-emerald-950/40">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
              ⚡
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Transparent Rate
              </div>
              <div className="text-base sm:text-lg font-black font-display text-emerald-300">
                1,000 Coins = ₹10 <span className="text-xs font-normal text-slate-400">(100 Coins = ₹1)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Stream Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
          {payouts.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex items-center justify-between shadow-md hover:border-slate-700 transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    {item.user}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
                  </div>
                  <div className="text-xs text-slate-400">{item.method}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-black text-emerald-400 font-display">
                  {item.amount}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
