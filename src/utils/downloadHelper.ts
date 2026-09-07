import React from 'react';
import confetti from 'canvas-confetti';
import { DIRECT_APK_DOWNLOAD_URL, APP_CONFIG } from '../config';

export const triggerDirectDownload = (e?: React.MouseEvent) => {
  // Fire celebratory confetti effect
  try {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
    });
  } catch (err) {
    // Ignore confetti errors
  }

  // If the user clicked an <a> element that already has href="/TaskEarn_1.0.apk" and download attribute,
  // the browser will natively trigger file download.
  // If called programmatically or from a button, trigger direct file download:
  if (!e || (e.currentTarget && (e.currentTarget as HTMLElement).tagName !== 'A')) {
    const link = document.createElement('a');
    link.href = DIRECT_APK_DOWNLOAD_URL;
    link.download = APP_CONFIG.apkFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
