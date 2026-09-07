import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FaqSectionProps {
  onOpenGuide?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenGuide }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is TaskEarn 100% free to download and use?',
      a: 'Yes! TaskEarn is completely free to download and use. You never have to deposit or invest any money. All tasks, spins, scratch cards, and dice games are completely free and pay out real earnings.',
    },
    {
      q: 'What is the coin conversion rate for real money?',
      a: 'TaskEarn offers simple, transparent conversion rates: 1,000 Coins = ₹10 (or 100 Coins = ₹1). When you reach the minimum threshold, you can request an instant withdrawal in your local currency.',
    },
    {
      q: 'Which withdrawal and cashout methods are supported?',
      a: 'We support fast payouts through eSewa (Nepal), Free Fire (FF) Diamonds direct player ID top-up, Roblox Robux credits, Google Play redeem codes, Amazon gift cards, and direct bank transfers.',
    },
    {
      q: 'How do Daily Spin, Scratch & Win, and Dice games work?',
      a: 'Every 24 hours, users receive free tokens to spin the lucky wheel and scratch foil cards. You can also play the Bones & Dice game to multiply your points. Additional free game tickets are rewarded upon completing daily micro-tasks.',
    },
    {
      q: 'How does the Referral Program work?',
      a: 'When you share your unique referral code (such as CB8SIF) with a friend, your friend gets 200 welcome bonus coins immediately upon registration, and you earn 500 bonus coins once they complete their first daily activity. There is no limit on how many friends you can invite!',
    },
    {
      q: 'Is the TaskEarn APK safe to install on Android devices?',
      a: 'Absolutely. The TaskEarn APK is cryptographically signed, scanned for malware, 100% virus-free, and verified with Google Play Protect standards. It only requires basic internet permissions and does not access sensitive personal data.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Everything You Need to Know About{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              TaskEarn
            </span>
          </h2>
          <p className="text-slate-300 text-base">
            Have questions about rewards, withdrawals, or security? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-indigo-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-indigo-600 text-white' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 space-y-2.5">
                    <p>{faq.a}</p>
                    {index === 5 && onOpenGuide && (
                      <div className="pt-2">
                        <button
                          onClick={onOpenGuide}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-900/40 border border-indigo-500/30 text-xs font-semibold text-indigo-300 hover:text-white hover:bg-indigo-800/50 transition"
                        >
                          <span>View Step-by-Step Android Installation Guide</span>
                          <span className="text-amber-300">→</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
