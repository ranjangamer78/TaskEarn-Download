/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhoneSlider } from './components/PhoneSlider';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorks } from './components/HowItWorks';
import { LivePayoutTicker } from './components/LivePayoutTicker';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { DownloadToast } from './components/DownloadToast';
import { LegalModals, LegalModalType } from './components/LegalModals';
import { triggerDirectDownload } from './utils/downloadHelper';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [showDownloadToast, setShowDownloadToast] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  // Direct download handler: starts download immediately without blocking modal!
  const handleDirectDownload = (e?: React.MouseEvent) => {
    triggerDirectDownload(e);
    setShowDownloadToast(true);
  };

  const handleOpenInstallGuide = () => {
    setDownloadModalOpen(true);
  };

  const handleCloseDownload = () => {
    setDownloadModalOpen(false);
  };

  const handleScrollToSlider = () => {
    const el = document.getElementById('screenshots');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-slate-100 flex flex-col relative selection:bg-indigo-500 selection:text-white">
      {/* 1. Global Navbar with Direct Download Button */}
      <Navbar onOpenDownload={handleDirectDownload} />

      {/* 2. Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenDownload={handleDirectDownload}
          onExploreSlider={handleScrollToSlider}
        />

        {/* 3. Live Payouts Activity Feed & Rate Transparency */}
        <LivePayoutTicker onOpenDownload={handleDirectDownload} />

        {/* 4. App Screenshot Slider (Center Phone Mockup, Touch Swipe, Download Now Button) */}
        <PhoneSlider onOpenDownload={handleDirectDownload} />

        {/* 5. Features Section (6 Cards: Daily Rewards, Easy Tasks, Daily Spin, Scratch & Win, Dice/Bones, Reward Wallet) */}
        <FeaturesSection onOpenDownload={handleDirectDownload} />

        {/* 6. How It Works (3 Steps to Start Earning) */}
        <HowItWorks onOpenDownload={handleDirectDownload} />

        {/* 7. FAQ Section with Installation Guide link */}
        <FaqSection onOpenGuide={handleOpenInstallGuide} />
      </main>

      {/* 8. Footer */}
      <Footer
        onOpenDownload={handleDirectDownload}
        onOpenLegalModal={(type) => setActiveLegalModal(type)}
      />

      {/* Non-intrusive Direct Download Toast */}
      <DownloadToast
        isVisible={showDownloadToast}
        onClose={() => setShowDownloadToast(false)}
        onOpenGuide={handleOpenInstallGuide}
      />

      {/* Optional Installation Guide & APK Details Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={handleCloseDownload}
      />

      {/* Legal & Informational Modals */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
