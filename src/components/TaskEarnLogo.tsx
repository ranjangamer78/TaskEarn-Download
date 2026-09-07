import React from 'react';

interface TaskEarnLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const TaskEarnLogo: React.FC<TaskEarnLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Stylized Gradient App Icon */}
      <div className={`relative ${iconSizes[size]} rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20 group`}>
        {/* Animated ambient glow behind logo */}
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 rounded-2xl opacity-75 blur-xs group-hover:opacity-100 transition duration-300" />
        
        <svg
          viewBox="0 0 48 48"
          className="relative w-full h-full rounded-2xl overflow-hidden"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background subtle mesh */}
          <rect width="48" height="48" rx="14" fill="#0b0f19" />
          <path
            d="M0 0H48V48H0z"
            fill="url(#logo-grad-bg)"
            fillOpacity="0.85"
          />

          {/* Letter 'T' and 'E' combined monogram */}
          <path
            d="M12 16C12 14.8954 12.8954 14 14 14H34C35.1046 14 36 14.8954 36 16C36 17.1046 35.1046 18 34 18H26.5V33C26.5 34.1046 25.6046 35 24.5 35H23.5C22.3954 35 21.5 34.1046 21.5 33V18H14C12.8954 18 12 17.1046 12 16Z"
            fill="white"
          />
          <path
            d="M18 23.5H30C30.8284 23.5 31.5 24.1716 31.5 25C31.5 25.8284 30.8284 26.5 30 26.5H18C17.1716 26.5 16.5 25.8284 16.5 25C16.5 24.1716 17.1716 23.5 18 23.5Z"
            fill="url(#logo-grad-e)"
          />

          {/* Glowing Golden Sparkle / Star */}
          <path
            d="M34 10L35.2 13.8L39 15L35.2 16.2L34 20L32.8 16.2L29 15L32.8 13.8L34 10Z"
            fill="#FACC15"
          />

          <defs>
            <linearGradient id="logo-grad-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="0.5" stopColor="#6366f1" />
              <stop offset="1" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="logo-grad-e" x1="16" y1="25" x2="32" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="1" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-display font-extrabold tracking-tight text-white ${textSizes[size]}`}>
            Task<span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Earn</span>
          </span>
          {size === 'xl' && (
            <span className="text-xs tracking-wider uppercase text-slate-400 font-semibold mt-1">
              Complete Tasks • Earn Real Rewards
            </span>
          )}
        </div>
      )}
    </div>
  );
};
