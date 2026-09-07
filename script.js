// TaskEarn Pure JavaScript Engine
const APP_CONFIG = {
  name: 'TaskEarn',
  version: '1.0',
  apkFileName: 'TaskEarn_1.0.apk',
  fileSize: '33.9 MB',
  androidRequirement: 'Android 7.0 (Nougat) or higher',
  referralCode: 'CB8SIF',
  welcomeBonus: '200 Coins',
  directDownloadUrl: './TaskEarn_1.0.apk',
  mediafireFallbackUrl: 'https://www.mediafire.com/file/qtyd2zkox2dejyz/TaskEarn_1.0.apk/file',
};

// State
let currentSliderTab = 0;
let userCoins = 850;
let toastTimeout = null;

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup event listeners
  setupDownloadButtons();
  setupPhoneSlider();
  setupFaqAccordion();
  setupModals();
  setupCopyButtons();
  setupMobileMenu();
  setupInteractivePhoneActions();
});

// Refresh Lucide icons helper
function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Setup all download buttons across page
function setupDownloadButtons() {
  const downloadTriggers = document.querySelectorAll('.trigger-download');
  downloadTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      triggerDirectDownload(e);
    });
  });

  const openModalTriggers = document.querySelectorAll('.trigger-download-modal');
  openModalTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDownloadModal();
    });
  });
}

// Direct Download Action
function triggerDirectDownload(e) {
  // Fire Confetti
  try {
    if (window.confetti) {
      window.confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  } catch (err) {}

  // Show Toast
  showDownloadToast();

  // If the target element isn't an anchor with download, trigger download programmatically
  const isDirectAnchor = e && e.currentTarget && e.currentTarget.tagName === 'A' && e.currentTarget.getAttribute('download');
  if (!isDirectAnchor) {
    const link = document.createElement('a');
    link.href = APP_CONFIG.directDownloadUrl;
    link.download = APP_CONFIG.apkFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Download Toast
function showDownloadToast() {
  const toast = document.getElementById('download-toast');
  if (!toast) return;

  toast.classList.remove('hidden');
  toast.classList.add('flex');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    closeDownloadToast();
  }, 8000);
}

function closeDownloadToast() {
  const toast = document.getElementById('download-toast');
  if (!toast) return;
  toast.classList.add('hidden');
  toast.classList.remove('flex');
}

// Phone Slider Data & Interaction
const sliderScreens = [
  {
    title: 'Daily Check-in',
    subtitle: 'Earn free bonus coins every single day',
    badge: 'Day 5 Streak',
    render: () => `
      <div class="space-y-3 animate-fadeIn">
        <div class="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-900/60 to-purple-900/40 border border-indigo-500/30">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-indigo-300">Daily Streak: 5 Days</span>
            <span class="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold">+50 Bonus</span>
          </div>
          <div class="grid grid-cols-7 gap-1 text-center my-2.5">
            ${[1, 2, 3, 4, 5, 6, 7]
              .map(
                (day) => `
              <div class="p-1.5 rounded-xl ${
                day < 5
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : day === 5
                  ? 'bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-400'
                  : 'bg-slate-800/80 text-slate-400'
              }">
                <div class="text-[9px] font-medium">D${day}</div>
                <div class="text-[11px] font-bold mt-0.5">${day * 10}</div>
              </div>
            `
              )
              .join('')}
          </div>
          <button id="claim-streak-btn" class="w-full mt-2 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 hover:brightness-110 active:scale-95 transition shadow">
            Claim Today's 50 Coins
          </button>
        </div>
        <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between">
          <span class="text-slate-300">Tomorrow's Reward</span>
          <span class="font-bold text-amber-400">+60 Coins</span>
        </div>
      </div>
    `,
  },
  {
    title: 'Lucky Spin Wheel',
    subtitle: 'Spin daily to win up to 500 Coins',
    badge: '3 Spins Left',
    render: () => `
      <div class="flex flex-col items-center justify-center space-y-3 animate-fadeIn">
        <div class="relative w-36 h-36 flex items-center justify-center">
          <div id="spin-wheel-disc" class="w-36 h-36 rounded-full border-4 border-amber-400/80 bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-900 shadow-xl flex items-center justify-center transition-transform duration-[3000ms] ease-out">
            <div class="grid grid-cols-2 grid-rows-2 w-full h-full text-center text-[10px] font-extrabold text-amber-200">
              <div class="flex items-center justify-center border-r border-b border-white/20">50</div>
              <div class="flex items-center justify-center border-b border-white/20">200</div>
              <div class="flex items-center justify-center border-r border-white/20">100</div>
              <div class="flex items-center justify-center">500</div>
            </div>
            <div class="absolute w-8 h-8 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center text-amber-400 font-black text-xs">★</div>
          </div>
          <div class="absolute -top-1 w-3 h-4 bg-amber-400 [clip-path:polygon(50%_100%,0_0,100%_0)] z-10"></div>
        </div>
        <button id="spin-wheel-btn" class="w-full py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500 text-white hover:brightness-110 active:scale-95 transition shadow-lg">
          Spin Wheel Now!
        </button>
      </div>
    `,
  },
  {
    title: 'Scratch & Win',
    subtitle: 'Golden cards with instant payouts',
    badge: '5 Cards Ready',
    render: () => `
      <div class="space-y-3 animate-fadeIn">
        <div id="scratch-card-box" class="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-2 border-dashed border-amber-400/40 text-center cursor-pointer hover:border-amber-400 transition group">
          <div id="scratch-hidden-content" class="hidden">
            <div class="text-3xl">🎉</div>
            <div class="text-sm font-black text-amber-300 mt-1">You Won +120 Coins!</div>
            <div class="text-[10px] text-slate-400 mt-0.5">Credited to your TaskEarn wallet</div>
          </div>
          <div id="scratch-placeholder">
            <div class="text-2xl mb-1 group-hover:scale-110 transition-transform">✨</div>
            <div class="text-xs font-bold text-amber-200">Tap to Scratch Gold Card</div>
            <div class="text-[10px] text-slate-400 mt-0.5">Win between 20 to 500 Coins</div>
          </div>
        </div>
        <button id="scratch-btn" class="w-full py-2 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 transition">
          Scratch Card
        </button>
      </div>
    `,
  },
  {
    title: 'Refer & Earn',
    subtitle: 'Earn ₹50 per friend + 10% commission',
    badge: 'Code: CB8SIF',
    render: () => `
      <div class="space-y-2.5 animate-fadeIn">
        <div class="p-3 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 text-center">
          <div class="text-[10px] text-indigo-300 font-semibold uppercase tracking-wider">Your Referral Code</div>
          <div class="flex items-center justify-center gap-2 mt-1">
            <span class="text-lg font-mono font-black text-amber-300 tracking-wider">CB8SIF</span>
            <button class="copy-code-btn px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-[10px] font-bold text-white transition">
              Copy
            </button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 text-center text-xs">
          <div class="p-2 rounded-xl bg-slate-900 border border-slate-800">
            <div class="text-slate-400 text-[10px]">Friends Joined</div>
            <div class="text-sm font-bold text-white mt-0.5">28</div>
          </div>
          <div class="p-2 rounded-xl bg-slate-900 border border-slate-800">
            <div class="text-slate-400 text-[10px]">Total Earned</div>
            <div class="text-sm font-bold text-emerald-400 mt-0.5">₹1,400</div>
          </div>
        </div>
      </div>
    `,
  },
  {
    title: 'Easy Tasks',
    subtitle: 'Surveys, apps & videos updated hourly',
    badge: '18 Tasks Live',
    render: () => `
      <div class="space-y-2 animate-fadeIn text-xs">
        <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
          <div>
            <div class="font-bold text-slate-200">Play Quick Game (1 Min)</div>
            <div class="text-[10px] text-slate-400">Easy • Instant Credit</div>
          </div>
          <span class="px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-[11px]">+80 Coins</span>
        </div>
        <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
          <div>
            <div class="font-bold text-slate-200">Complete 2-Min Survey</div>
            <div class="text-[10px] text-slate-400">High Reward</div>
          </div>
          <span class="px-2 py-1 rounded-lg bg-amber-500/20 text-amber-400 font-bold text-[11px]">+250 Coins</span>
        </div>
        <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
          <div>
            <div class="font-bold text-slate-200">Watch Video Ad</div>
            <div class="text-[10px] text-slate-400">Unlimited Daily</div>
          </div>
          <span class="px-2 py-1 rounded-lg bg-sky-500/20 text-sky-400 font-bold text-[11px]">+30 Coins</span>
        </div>
      </div>
    `,
  },
];

function setupPhoneSlider() {
  const tabButtons = document.querySelectorAll('.slider-tab-btn');
  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      selectSliderTab(index);
    });
  });

  renderSliderScreen(0);
}

function selectSliderTab(index) {
  currentSliderTab = index;
  const tabButtons = document.querySelectorAll('.slider-tab-btn');
  tabButtons.forEach((btn, idx) => {
    if (idx === index) {
      btn.className =
        'slider-tab-btn px-3 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md transition-all scale-105';
    } else {
      btn.className =
        'slider-tab-btn px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all';
    }
  });

  renderSliderScreen(index);
}

function renderSliderScreen(index) {
  const screen = sliderScreens[index];
  const container = document.getElementById('phone-screen-body');
  const titleEl = document.getElementById('slider-feature-title');
  const subtitleEl = document.getElementById('slider-feature-subtitle');
  const badgeEl = document.getElementById('slider-feature-badge');

  if (titleEl) titleEl.textContent = screen.title;
  if (subtitleEl) subtitleEl.textContent = screen.subtitle;
  if (badgeEl) badgeEl.textContent = screen.badge;

  if (container) {
    container.innerHTML = screen.render();
    setupInteractivePhoneActions();
    refreshIcons();
  }
}

// In-mockup Interactive Buttons
function setupInteractivePhoneActions() {
  // Balance updater
  const balanceEl = document.getElementById('mockup-user-coins');
  if (balanceEl) balanceEl.textContent = userCoins.toLocaleString();

  // Streak button
  const streakBtn = document.getElementById('claim-streak-btn');
  if (streakBtn) {
    streakBtn.addEventListener('click', () => {
      userCoins += 50;
      if (balanceEl) balanceEl.textContent = userCoins.toLocaleString();
      streakBtn.textContent = 'Claimed (+50 Coins)!';
      streakBtn.classList.remove('from-amber-400', 'to-orange-500');
      streakBtn.classList.add('bg-emerald-600', 'text-white');
      streakBtn.disabled = true;
      try {
        if (window.confetti) {
          window.confetti({ particleCount: 30, spread: 50, origin: { y: 0.5 } });
        }
      } catch (e) {}
    });
  }

  // Spin wheel button
  const spinBtn = document.getElementById('spin-wheel-btn');
  const wheelDisc = document.getElementById('spin-wheel-disc');
  if (spinBtn && wheelDisc) {
    spinBtn.addEventListener('click', () => {
      spinBtn.disabled = true;
      spinBtn.textContent = 'Spinning...';
      const randomDeg = 1440 + Math.floor(Math.random() * 360);
      wheelDisc.style.transform = `rotate(${randomDeg}deg)`;

      setTimeout(() => {
        userCoins += 200;
        if (balanceEl) balanceEl.textContent = userCoins.toLocaleString();
        spinBtn.textContent = 'You Won 200 Coins! 🎉';
        spinBtn.classList.add('bg-emerald-600');
        try {
          if (window.confetti) {
            window.confetti({ particleCount: 45, spread: 60, origin: { y: 0.5 } });
          }
        } catch (e) {}
      }, 3100);
    });
  }

  // Scratch card
  const scratchBox = document.getElementById('scratch-card-box');
  const scratchBtn = document.getElementById('scratch-btn');
  const hiddenContent = document.getElementById('scratch-hidden-content');
  const placeholder = document.getElementById('scratch-placeholder');

  const doScratch = () => {
    if (hiddenContent && placeholder) {
      placeholder.classList.add('hidden');
      hiddenContent.classList.remove('hidden');
      userCoins += 120;
      if (balanceEl) balanceEl.textContent = userCoins.toLocaleString();
      if (scratchBtn) {
        scratchBtn.textContent = 'Card Scratched!';
        scratchBtn.disabled = true;
      }
      try {
        if (window.confetti) {
          window.confetti({ particleCount: 35, spread: 60, origin: { y: 0.5 } });
        }
      } catch (e) {}
    }
  };

  if (scratchBox) scratchBox.addEventListener('click', doScratch);
  if (scratchBtn) scratchBtn.addEventListener('click', doScratch);

  // Copy code inside slider
  const copyButtons = document.querySelectorAll('.copy-code-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      copyReferralCode(btn);
    });
  });
}

// Copy Referral Code
function copyReferralCode(btn) {
  navigator.clipboard.writeText(APP_CONFIG.referralCode).then(() => {
    const originalText = btn.textContent;
    btn.textContent = 'Copied! ✓';
    btn.classList.add('bg-emerald-600');
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('bg-emerald-600');
    }, 2000);
  });
}

function setupCopyButtons() {
  const btns = document.querySelectorAll('.trigger-copy-code');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      copyReferralCode(btn);
    });
  });
}

// FAQ Accordion
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const chevron = item.querySelector('.faq-chevron');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isHidden = content.classList.contains('hidden');

        // Close all
        faqItems.forEach((other) => {
          const c = other.querySelector('.faq-content');
          const ch = other.querySelector('.faq-chevron');
          if (c) c.classList.add('hidden');
          if (ch) ch.style.transform = 'rotate(0deg)';
        });

        if (isHidden) {
          content.classList.remove('hidden');
          if (chevron) chevron.style.transform = 'rotate(180deg)';
        }
      });
    }
  });
}

// Modals Management
function setupModals() {
  // Download Modal
  const closeDlModal = document.getElementById('close-download-modal');
  if (closeDlModal) {
    closeDlModal.addEventListener('click', closeDownloadModal);
  }

  const modalTabs = document.querySelectorAll('.modal-tab-btn');
  modalTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      switchModalTab(targetTab);
    });
  });

  // Legal Modals
  const legalTriggers = document.querySelectorAll('[data-legal-target]');
  legalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const type = trigger.getAttribute('data-legal-target');
      openLegalModal(type);
    });
  });

  const closeLegalModalBtn = document.getElementById('close-legal-modal');
  if (closeLegalModalBtn) {
    closeLegalModalBtn.addEventListener('click', closeLegalModal);
  }

  // Close modals on background click
  window.addEventListener('click', (e) => {
    const dlModal = document.getElementById('download-modal');
    if (e.target === dlModal) closeDownloadModal();

    const legalModal = document.getElementById('legal-modal');
    if (e.target === legalModal) closeLegalModal();
  });
}

function openDownloadModal() {
  const modal = document.getElementById('download-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    switchModalTab('apk');
  }
}

function closeDownloadModal() {
  const modal = document.getElementById('download-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function switchModalTab(tabId) {
  const tabs = document.querySelectorAll('.modal-tab-btn');
  tabs.forEach((tab) => {
    if (tab.getAttribute('data-tab') === tabId) {
      tab.className =
        'modal-tab-btn py-2 px-1 rounded-lg transition bg-indigo-600 text-white shadow font-bold text-xs';
    } else {
      tab.className =
        'modal-tab-btn py-2 px-1 rounded-lg transition text-slate-400 hover:text-white font-bold text-xs';
    }
  });

  const contents = document.querySelectorAll('.modal-tab-content');
  contents.forEach((content) => {
    if (content.id === `modal-tab-${tabId}`) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });
}

// Legal Modal Content Data
const legalData = {
  privacy: {
    title: 'Privacy Policy',
    content: `
      <p class="mb-3"><strong>Effective Date:</strong> January 2026</p>
      <p class="mb-3">TaskEarn ("we", "us", or "our") respects your privacy. We only collect the minimal information necessary to deliver rewards and manage your account.</p>
      <h4 class="font-bold text-white mt-4 mb-2">1. Information We Collect</h4>
      <p class="mb-3">We collect basic account identifiers (email/username), referral source code, and transaction logs for payment disbursement (such as UPI ID or wallet mobile number). We never sell your personal data.</p>
      <h4 class="font-bold text-white mt-4 mb-2">2. How Rewards Are Processed</h4>
      <p class="mb-3">Payouts are sent to your verified payment method. Financial data is securely encrypted in transit.</p>
      <h4 class="font-bold text-white mt-4 mb-2">3. Contact Us</h4>
      <p>Questions regarding privacy can be directed to support@taskearn.app.</p>
    `,
  },
  terms: {
    title: 'Terms of Service',
    content: `
      <p class="mb-3"><strong>Effective Date:</strong> January 2026</p>
      <p class="mb-3">By downloading, installing, or using TaskEarn, you agree to these Terms of Service.</p>
      <h4 class="font-bold text-white mt-4 mb-2">1. Eligibility</h4>
      <p class="mb-3">You must be at least 18 years old or have legal guardian consent to participate in reward programs.</p>
      <h4 class="font-bold text-white mt-4 mb-2">2. Prohibited Conduct</h4>
      <p class="mb-3">Strictly prohibited activities include: using emulators, VPNs to manipulate tasks, multi-accounting, automated scripts, or fraudulent referrals. Accounts found engaging in fraud will be permanently suspended with forfeit of pending coins.</p>
      <h4 class="font-bold text-white mt-4 mb-2">3. Coin Redemption</h4>
      <p>Coins hold no cash value outside the TaskEarn platform until successfully redeemed through official payout channels.</p>
    `,
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `
      <p class="mb-3">TaskEarn is a rewards entertainment platform. All earnings depend strictly upon user participation, task completion accuracy, and offer availability from verified partners.</p>
      <p class="mb-3">TaskEarn does not guarantee fixed income or employment. Google Pay, PhonePe, and Paytm are registered trademarks of their respective owners and are not affiliated with TaskEarn.</p>
    `,
  },
};

function openLegalModal(type) {
  const data = legalData[type] || legalData.privacy;
  const titleEl = document.getElementById('legal-modal-title');
  const bodyEl = document.getElementById('legal-modal-body');
  const modal = document.getElementById('legal-modal');

  if (titleEl) titleEl.textContent = data.title;
  if (bodyEl) bodyEl.innerHTML = data.content;
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeLegalModal() {
  const modal = document.getElementById('legal-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Mobile Menu
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    const links = menu.querySelectorAll('a');
    links.forEach((l) => {
      l.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

// Global exposure for inline calls if needed
window.triggerDirectDownload = triggerDirectDownload;
window.openDownloadModal = openDownloadModal;
window.closeDownloadModal = closeDownloadModal;
window.closeDownloadToast = closeDownloadToast;
window.openLegalModal = openLegalModal;
window.closeLegalModal = closeLegalModal;
window.selectSliderTab = selectSliderTab;
