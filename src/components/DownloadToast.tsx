import React, { useEffect } from 'react';
import { Download, CheckCircle2, X, BookOpen, ShieldCheck } from 'lucide-react';
import { APP_CONFIG, DIRECT_APK_DOWNLOAD_URL } from '../config';

interface DownloadToastProps {
  isVisible: boolean;
  onClose: () => void;
  onOpenGuide: () => void;
}

export const DownloadToast: React.FC<DownloadToastProps> = ({
  isVisible,
  onClose,
  onOpenGuide,
}) => {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      onClose();
    }, 8000);
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      id="direct-download-toast"
      className="fixed bottom-5 right-3 sm:right-6 z-50 max-w-md w-[calc(100%-1.5rem)] sm:w-auto bg-slate-900/95 border border-emerald-500/40 rounded-2xl p-4 shadow-2xl shadow-black/80 backdrop-blur-xl text-white animate-slideUp"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
          <Download className="w-5 h-5 animate-bounce" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
              <span>Direct Download Started!</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </h4>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Downloading <span className="font-mono text-emerald-300 font-bold">{APP_CONFIG.apkFileName}</span> ({APP_CONFIG.fileSize}) directly to your device.
          </p>

          <div className="mt-3 flex items-center flex-wrap gap-2 pt-2 border-t border-slate-800/80 text-xs">
            <a
              href={DIRECT_APK_DOWNLOAD_URL}
              download={APP_CONFIG.apkFileName}
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 underline"
            >
              <span>Download again</span>
            </a>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => {
                onClose();
                onOpenGuide();
              }}
              className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white font-medium"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>How to Install</span>
            </button>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Safe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
