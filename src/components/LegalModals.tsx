import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Send, CheckCircle2 } from 'lucide-react';
import { TaskEarnLogo } from './TaskEarnLogo';

export type LegalModalType = 'about' | 'privacy' | 'terms' | 'contact' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  const [contactSent, setContactSent] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  if (!activeModal) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-700/80 p-5 sm:p-8 shadow-2xl text-white my-auto max-h-[88vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
          <TaskEarnLogo size="sm" />
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Official TaskEarn Documentation
          </span>
        </div>

        {/* 1. ABOUT MODAL */}
        {activeModal === 'about' && (
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <h3 className="text-2xl font-black font-display text-white">About TaskEarn</h3>
            <p>
              <strong>TaskEarn</strong> is a premier mobile reward and engagement platform empowering everyday smartphone users to turn their spare minutes into genuine digital rewards and cash earnings.
            </p>
            <p>
              Founded with the belief that user attention and engagement have real-world value, TaskEarn partners with leading digital brands, indie game publishers, and market research firms. Through our curated ecosystem of micro-activities, daily spins, scratch cards, and casual dice games, we redistribute brand advertising revenue directly back to our active members.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xl font-bold text-white font-display">11,000+</div>
                <div className="text-xs text-slate-400">Active Daily Earners</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xl font-bold text-emerald-400 font-display">₹1,80,000+</div>
                <div className="text-xs text-slate-400">Total Rewards Distributed</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 pt-2">
              Our core values are transparency, zero user-investment requirements, and lightning-fast withdrawal processing.
            </p>
          </div>
        )}

        {/* 2. PRIVACY POLICY */}
        {activeModal === 'privacy' && (
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <h3 className="text-2xl font-black font-display text-white">Privacy Policy</h3>
            <p className="text-xs text-slate-400">Last updated: September 2026</p>
            <p>
              At TaskEarn, we take user privacy and security seriously. This privacy policy describes the limited categories of information we collect and how we safeguard your personal data.
            </p>
            <h4 className="text-base font-bold text-white">1. Information We Collect</h4>
            <p>
              We collect minimal information necessary to deliver rewards, including your chosen username, email address or phone number for wallet payouts, and anonymous device identifiers to prevent referral fraud. We do not collect credit card credentials, contacts, or location history.
            </p>
            <h4 className="text-base font-bold text-white">2. Use of Information</h4>
            <p>
              Your information is solely used to credit earned reward coins, process requested payouts (e.g. eSewa, Free Fire Diamonds, Robux, Gift Cards), and ensure platform integrity. We never sell your personal data to third-party brokers.
            </p>
            <h4 className="text-base font-bold text-white">3. Security Standards</h4>
            <p>
              All communication between the TaskEarn app and our payout servers is encrypted via TLS 1.3 / SSL standards.
            </p>
          </div>
        )}

        {/* 3. TERMS & CONDITIONS */}
        {activeModal === 'terms' && (
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <h3 className="text-2xl font-black font-display text-white">Terms & Conditions</h3>
            <p className="text-xs text-slate-400">Effective as of September 2026</p>
            <p>
              By downloading and using the TaskEarn application or website, you agree to comply with and be bound by the following terms of service.
            </p>
            <h4 className="text-base font-bold text-white">1. Eligibility & Free Participation</h4>
            <p>
              TaskEarn is strictly free-to-play. Users are never required to pay or deposit funds to participate or earn coins. Users must be at least 13 years old.
            </p>
            <h4 className="text-base font-bold text-white">2. Coin System & Conversion Rates</h4>
            <p>
              Coins accumulated in TaskEarn represent loyalty points. The standard redemption benchmark is 1,000 Coins = ₹10 (or 100 Coins = ₹1). Redemptions are subject to minimum balance limits stated within the Wallet screen.
            </p>
            <h4 className="text-base font-bold text-white">3. Fair Play Policy</h4>
            <p>
              The use of emulators, automated bots, click injection tools, or synthetic VPN networks to bypass referral checks is strictly prohibited and results in immediate forfeiture of coins and permanent account termination.
            </p>
          </div>
        )}

        {/* 4. CONTACT MODAL */}
        {activeModal === 'contact' && (
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <h3 className="text-2xl font-black font-display text-white">Contact TaskEarn Support</h3>
            <p>
              Need assistance with your wallet withdrawal, task verification, or business inquiries? Our support team responds within 24 hours.
            </p>

            {contactSent ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300">
                  Thank you, {contactName || 'Earner'}. A member of our support team will reply to {contactEmail || 'your email'} shortly.
                </p>
                <button
                  onClick={() => setContactSent(false)}
                  className="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message or Query</label>
                  <textarea
                    required
                    rows={3}
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    placeholder="Describe your inquiry or withdrawal status..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Support</span>
                </button>
              </form>
            )}

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Official Email: support@taskearn.app</span>
              <span>Telegram: @TaskEarnOfficial</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
