import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Download, 
  ShieldCheck, 
  Smartphone, 
  QrCode, 
  CheckCircle2, 
  Sparkles, 
  Info,
  Check
} from 'lucide-react';
import { TaskEarnLogo } from './TaskEarnLogo';
import { APP_CONFIG, DIRECT_APK_DOWNLOAD_URL } from '../config';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const [activeTab, setActiveTab] = useState<'apk' | 'qr' | 'install'>('apk');

  if (!isOpen) return null;

  const handleStartDownload = () => {
    setDownloadTriggered(true);
    try {
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch (e) {}
  };

  return (
    <div
      id="download-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-fadeIn"
    >
      {/* Modal Card */}
      <div
        id="download-modal-content"
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-700/80 p-5 sm:p-7 shadow-2xl shadow-indigo-950/70 text-white my-auto"
      >
        {/* Close button */}
        <button
          id="close-modal-button"
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition"
          aria-label="Close download dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Brand Header */}
        <div className="flex items-center gap-3 mb-5 pr-8">
          <TaskEarnLogo size="md" />
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold font-display text-white">Download TaskEarn APK</h3>
            <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Direct Instant Download • Safe & Verified
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 mb-5 text-xs font-bold text-center">
          <button
            onClick={() => setActiveTab('apk')}
            className={`py-2 px-1 rounded-lg transition ${
              activeTab === 'apk'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Direct APK
          </button>
          <button
            onClick={() => setActiveTab('install')}
            className={`py-2 px-1 rounded-lg transition ${
              activeTab === 'install'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Install Guide
          </button>
          <button
            onClick={() => setActiveTab('qr')}
            className={`py-2 px-1 rounded-lg transition ${
              activeTab === 'qr'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Scan QR
          </button>
        </div>

        {/* Tab 1: Direct APK */}
        {activeTab === 'apk' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">File Name:</span>
                <span className="font-mono text-emerald-300 font-bold">{APP_CONFIG.apkFileName}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">File Size:</span>
                <span className="text-slate-200 font-bold">{APP_CONFIG.fileSize}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Android Requirement:</span>
                <span className="text-sky-300 font-medium">{APP_CONFIG.androidRequirement}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Security Check:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Virus-Free & Verified
                </span>
              </div>
            </div>

            {/* Notification when download is triggered */}
            {downloadTriggered && (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Download started to your device!</span>
                </div>
                <a
                  href={DIRECT_APK_DOWNLOAD_URL}
                  download={APP_CONFIG.apkFileName}
                  className="font-bold underline text-emerald-300 hover:text-white"
                >
                  Download again
                </a>
              </div>
            )}

            {/* Direct APK Download Button */}
            <a
              id="modal-direct-download-button"
              href={DIRECT_APK_DOWNLOAD_URL}
              download={APP_CONFIG.apkFileName}
              onClick={handleStartDownload}
              className="w-full py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-fuchsia-600 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
            >
              <Download className="w-5 h-5 shrink-0" />
              <span>Download {APP_CONFIG.apkFileName} ({APP_CONFIG.fileSize})</span>
            </a>

            <div className="text-center">
              <a
                href={APP_CONFIG.mediafireFallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-slate-400 hover:text-sky-300 underline"
              >
                Having trouble? Try alternative mirror link (MediaFire)
              </a>
            </div>

            {/* Welcome bonus highlight */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Use referral code <strong className="text-amber-300 font-mono">CB8SIF</strong> during sign-up for <strong>200 Free Coins</strong>!</span>
            </div>
          </div>
        )}

        {/* Tab 2: Install Guide */}
        {activeTab === 'install' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-3">
              <div className="font-bold text-white flex items-center gap-1.5 text-sm">
                <Info className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Quick 3-Step Installation:</span>
              </div>
              <ol className="list-decimal list-inside space-y-2.5 text-slate-300 pl-1">
                <li>
                  <strong className="text-white">Download APK:</strong> Click the download button to directly save <span className="text-emerald-300 font-mono font-bold">TaskEarn_1.0.apk</span>.
                </li>
                <li>
                  <strong className="text-white">Allow Installation:</strong> Tap the downloaded file. If Android asks, tap <em>Settings</em> and toggle <em>"Allow from this source"</em>.
                </li>
                <li>
                  <strong className="text-white">Open & Earn:</strong> Tap Install, launch TaskEarn, and enter referral code <strong className="text-amber-300 font-mono">CB8SIF</strong> to claim 200 welcome coins!
                </li>
              </ol>
            </div>

            <a
              href={DIRECT_APK_DOWNLOAD_URL}
              download={APP_CONFIG.apkFileName}
              onClick={handleStartDownload}
              className="w-full py-3.5 rounded-2xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download APK Now ({APP_CONFIG.fileSize})</span>
            </a>
          </div>
        )}

        {/* Tab 3: QR Scanner */}
        {activeTab === 'qr' && (
          <div className="flex flex-col items-center justify-center text-center space-y-4 py-2">
            <div className="p-4 bg-white rounded-3xl shadow-xl border-4 border-indigo-500/30">
              <svg className="w-44 h-44" viewBox="0 0 100 100" fill="black">
                <rect x="10" y="10" width="24" height="24" rx="4" fill="#0f172a" />
                <rect x="14" y="14" width="16" height="16" rx="2" fill="white" />
                <rect x="18" y="18" width="8" height="8" rx="1" fill="#0f172a" />

                <rect x="66" y="10" width="24" height="24" rx="4" fill="#0f172a" />
                <rect x="70" y="14" width="16" height="16" rx="2" fill="white" />
                <rect x="74" y="18" width="8" height="8" rx="1" fill="#0f172a" />

                <rect x="10" y="66" width="24" height="24" rx="4" fill="#0f172a" />
                <rect x="14" y="70" width="16" height="16" rx="2" fill="white" />
                <rect x="18" y="74" width="8" height="8" rx="1" fill="#0f172a" />

                <rect x="42" y="14" width="6" height="6" fill="#0f172a" />
                <rect x="52" y="14" width="6" height="6" fill="#0f172a" />
                <rect x="46" y="24" width="8" height="6" fill="#0f172a" />
                <rect x="42" y="34" width="6" height="6" fill="#0f172a" />
                <rect x="52" y="34" width="6" height="6" fill="#0f172a" />
                <rect x="14" y="42" width="6" height="6" fill="#0f172a" />
                <rect x="24" y="46" width="6" height="6" fill="#0f172a" />
                <rect x="34" y="42" width="6" height="6" fill="#0f172a" />
                <rect x="42" y="48" width="6" height="6" fill="#0f172a" />
                <rect x="52" y="48" width="6" height="6" fill="#0f172a" />
                <rect x="66" y="42" width="6" height="6" fill="#0f172a" />
                <rect x="78" y="48" width="6" height="6" fill="#0f172a" />
                <rect x="42" y="66" width="6" height="6" fill="#0f172a" />
                <rect x="52" y="76" width="6" height="6" fill="#0f172a" />
                <rect x="66" y="66" width="6" height="6" fill="#0f172a" />
                <rect x="76" y="76" width="6" height="6" fill="#0f172a" />
                <rect x="84" y="66" width="6" height="6" fill="#0f172a" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Scan with Phone Camera</h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
                Scan this code on your mobile device to download <span className="font-mono text-emerald-300 font-bold">{APP_CONFIG.apkFileName}</span> directly.
              </p>
            </div>
            <a
              href={DIRECT_APK_DOWNLOAD_URL}
              download={APP_CONFIG.apkFileName}
              onClick={handleStartDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-sky-400 border border-slate-700 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Direct Download ({APP_CONFIG.fileSize})</span>
            </a>
          </div>
        )}

        {/* Security badge at bottom */}
        <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            SHA-256 Verified Safe APK
          </span>
          <span className="text-slate-500">v{APP_CONFIG.version} • {APP_CONFIG.fileSize}</span>
        </div>
      </div>
    </div>
  );
};
