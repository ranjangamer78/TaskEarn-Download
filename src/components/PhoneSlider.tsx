import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Sparkles, 
  Gift, 
  Trophy, 
  Coins, 
  Flame, 
  Copy, 
  Check, 
  Play, 
  Pause, 
  RotateCcw,
  CheckCircle2,
  Gamepad2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { DIRECT_APK_DOWNLOAD_URL, APP_CONFIG } from '../config';

interface PhoneSliderProps {
  onOpenDownload: (e?: React.MouseEvent) => void;
}

export const PhoneSlider: React.FC<PhoneSliderProps> = ({ onOpenDownload }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copiedRef, setCopiedRef] = useState(false);

  // Interactive Mini-Demo States
  const [wheelRotation, setWheelRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<string | null>(null);

  const [isScratched, setIsScratched] = useState(false);
  const [scratchReward, setScratchReward] = useState('250');

  const [diceValues, setDiceValues] = useState<[number, number]>([5, 6]);
  const [isRolling, setIsRolling] = useState(false);
  const [diceReward, setDiceReward] = useState<number | null>(null);

  const [claimedStreakDay, setClaimedStreakDay] = useState(2);
  const [taskCoins, setTaskCoins] = useState(90165);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides = [
    {
      id: 'spin',
      name: 'Daily Spin',
      shortTitle: 'Daily Spin',
      emoji: '🎰',
      headline: 'Spin the Wheel Every Day for Free Coins',
      description: 'Test your luck on the TaskEarn Lucky Wheel. Every player gets free daily spins with guaranteed multipliers and mystery jackpots up to 5,000 coins!',
      badge: 'Guaranteed Win',
      accentColor: 'from-fuchsia-500 to-pink-600',
    },
    {
      id: 'scratch',
      name: 'Scratch & Win',
      shortTitle: 'Scratch Cards',
      emoji: '🎟️',
      headline: 'Instant Reveal Digital Scratch Cards',
      description: 'Scratch silver foil cards to reveal instant prizes. Every card has a hidden reward from 50 to 1,000 coins that credit directly to your active balance.',
      badge: 'Instant Cashout',
      accentColor: 'from-amber-400 to-orange-500',
    },
    {
      id: 'dice',
      name: 'Dice & Bones',
      shortTitle: 'Dice Game',
      emoji: '🎲',
      headline: 'Roll the Dice and Double Your Earnings',
      description: 'The fan-favorite Bones & Dice board game. Roll double numbers, climb the multiplier ladder, and claim extra win streaks on every round.',
      badge: 'High Multiplier',
      accentColor: 'from-sky-400 to-blue-600',
    },
    {
      id: 'tasks',
      name: 'Daily Tasks',
      shortTitle: 'Daily Tasks',
      emoji: '🎯',
      headline: 'Complete Micro-Activities & Daily Streaks',
      description: 'Pick from dozens of easy 1-minute tasks: check in daily, watch video promos, complete short opinion polls, or explore trending apps.',
      badge: 'Daily Streak 🔥',
      accentColor: 'from-indigo-500 to-purple-600',
    },
    {
      id: 'wallet',
      name: 'Wallet & Withdraw',
      shortTitle: 'Fast Wallet',
      emoji: '💰',
      headline: 'Real Cash Payouts with 1,000 Coins = ₹10',
      description: 'Transparent, reliable conversion rates with zero hidden fees. Withdraw directly to eSewa, Free Fire Diamonds, Robux, and Amazon vouchers.',
      badge: 'Instant Transfer',
      accentColor: 'from-emerald-400 to-teal-600',
    },
    {
      id: 'refer',
      name: 'Refer & Earn',
      shortTitle: 'Refer & Earn',
      emoji: '👥',
      headline: 'Earn 500 Coins for Every Invited Friend',
      description: 'Share your unique referral code with friends. You earn 500 coins and your friend gets 200 welcome coins the moment they sign up.',
      badge: 'Unlimited Earnings',
      accentColor: 'from-cyan-400 to-indigo-500',
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length]);

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe Handlers for mobile & tablet all-device friendliness
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 35;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Interactive Spin Handler
  const handleSpinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSpinResult(null);

    const randomDegrees = 1440 + Math.floor(Math.random() * 360);
    const newRotation = wheelRotation + randomDegrees;
    setWheelRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const prizes = ['+50 Coins', '+100 Coins', '+25 Coins', '+250 Coins', '★ JACKPOT ★', '+150 Coins'];
      const won = prizes[Math.floor(Math.random() * prizes.length)];
      setSpinResult(won);
      setTaskCoins((c) => c + 150);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Fallback gracefully
      }
    }, 3000);
  };

  // Interactive Scratch Handler
  const handleScratch = () => {
    if (isScratched) return;
    setIsScratched(true);
    setTaskCoins((c) => c + 250);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {}
  };

  // Interactive Dice Roll Handler
  const handleRollDice = () => {
    if (isRolling) return;
    setIsRolling(true);
    setDiceReward(null);

    let rolls = 0;
    const interval = setInterval(() => {
      setDiceValues([
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ]);
      rolls++;
      if (rolls > 8) {
        clearInterval(interval);
        const finalVal1 = Math.floor(Math.random() * 6) + 1;
        const finalVal2 = Math.floor(Math.random() * 6) + 1;
        setDiceValues([finalVal1, finalVal2]);
        setIsRolling(false);
        const win = (finalVal1 + finalVal2) * 10;
        setDiceReward(win);
        setTaskCoins((c) => c + win);
        try {
          confetti({
            particleCount: 40,
            spread: 50,
            origin: { y: 0.6 },
          });
        } catch (e) {}
      }
    }, 100);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('CB8SIF');
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const current = slides[currentSlide];

  return (
    <section
      id="screenshots"
      className="relative py-24 bg-slate-950 text-white overflow-hidden border-t border-slate-800/80"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-r from-indigo-600/15 via-purple-600/15 to-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            App Experience & Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            Explore Every Corner of{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              TaskEarn
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Slide through real app screenshots and test the interactive games right here on the phone screen!
          </p>

          {/* Feature category pills selector - Horizontally scrollable on mobile */}
          <div className="flex items-center gap-2 pt-4 overflow-x-auto no-scrollbar max-w-full px-2 py-1 justify-start sm:justify-center">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentSlide(idx);
                }}
                className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 ${
                  currentSlide === idx
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105 ring-1 ring-white/30'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{s.emoji}</span>
                <span>{s.shortTitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Phone Slider Container */}
        <div className="relative flex flex-col items-center justify-center w-full">
          
          {/* Navigation Arrows (Desktop & Large Screens) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Screenshot"
            className="hidden md:flex absolute left-4 lg:left-12 xl:left-24 top-1/2 -translate-y-1/2 z-30 p-3.5 sm:p-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 shadow-2xl transition hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Screenshot"
            className="hidden md:flex absolute right-4 lg:right-12 xl:right-24 top-1/2 -translate-y-1/2 z-30 p-3.5 sm:p-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 shadow-2xl transition hover:scale-110 active:scale-95 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Central Responsive Phone Mockup with Touch Gesture Support */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full max-w-[275px] xs:max-w-[305px] sm:max-w-[340px] md:max-w-[370px] aspect-[9/19] rounded-[44px] sm:rounded-[52px] p-3 sm:p-3.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_30px_90px_-20px_rgba(79,70,229,0.45)] ring-1 ring-white/20 transition-transform duration-300 touch-pan-y"
          >
            
            {/* Phone Bezel */}
            <div className="relative w-full h-full rounded-[36px] sm:rounded-[42px] bg-slate-950 overflow-hidden border border-slate-800 flex flex-col shadow-inner select-none">
              
              {/* Dynamic Island / Speaker */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800/90 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-indigo-900" />
                </div>
                <div className="w-10 h-1 rounded-full bg-slate-800/70" />
                <div className="w-2 h-2 rounded-full bg-slate-900" />
              </div>

              {/* In-App Screen Content (dynamically switches based on current slide) */}
              <div className="relative w-full h-full pt-9 pb-3 px-3.5 flex flex-col justify-between bg-slate-950 text-white overflow-y-auto">
                
                {/* 1. Top Phone App Bar */}
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                      A
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white flex items-center gap-1">
                        TaskEarn App
                      </div>
                      <div className="text-[9px] text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                        Online
                      </div>
                    </div>
                  </div>

                  {/* Coins Counter */}
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold">
                    <span>★</span>
                    <span>{taskCoins.toLocaleString()}</span>
                  </div>
                </div>

                {/* 2. Slide Screen Body */}
                <div className="flex-1 py-3 flex flex-col justify-between">
                  
                  {/* SLIDE: DAILY SPIN */}
                  {currentSlide === 0 && (
                    <div className="flex-1 flex flex-col items-center justify-between text-center py-1">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-400 bg-fuchsia-500/10 px-2 py-0.5 rounded-md border border-fuchsia-500/20">
                          Daily Free Spin
                        </span>
                        <h4 className="text-base font-extrabold text-white">TaskEarn Fortune Wheel</h4>
                        <p className="text-[10px] text-slate-400">Tap spin to test live demo!</p>
                      </div>

                      {/* Wheel Graphic */}
                      <div className="relative w-48 h-48 my-2 flex items-center justify-center">
                        {/* Wheel Pointer */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-30 w-4 h-5 bg-amber-400 clip-triangle shadow-md" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }} />

                        {/* Rotating Wheel */}
                        <div
                          className="w-44 h-44 rounded-full border-4 border-slate-800 shadow-2xl relative transition-transform duration-[3000ms] ease-out flex items-center justify-center"
                          style={{
                            transform: `rotate(${wheelRotation}deg)`,
                            background: 'conic-gradient(#6366f1 0deg 60deg, #ec4899 60deg 120deg, #f59e0b 120deg 180deg, #10b981 180deg 240deg, #06b6d4 240deg 300deg, #8b5cf6 300deg 360deg)',
                          }}
                        >
                          {/* Inner segments labels */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center text-xs font-extrabold text-amber-400 shadow-lg z-20">
                              SPIN
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Spin Result Alert */}
                      {spinResult && (
                        <div className="text-xs font-bold text-emerald-400 animate-bounce bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                          🎉 You Won: {spinResult}!
                        </div>
                      )}

                      {/* Spin Button */}
                      <button
                        onClick={handleSpinWheel}
                        disabled={isSpinning}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs text-white shadow-lg transition-all ${
                          isSpinning
                            ? 'bg-slate-700 cursor-not-allowed opacity-75'
                            : 'bg-gradient-to-r from-pink-500 to-indigo-600 hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                      >
                        {isSpinning ? 'Wheel Spinning...' : '🎡 TAP TO SPIN WHEEL'}
                      </button>
                    </div>
                  )}

                  {/* SLIDE: SCRATCH & WIN */}
                  {currentSlide === 1 && (
                    <div className="flex-1 flex flex-col items-center justify-between text-center py-1">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                          Instant Silver Ticket
                        </span>
                        <h4 className="text-base font-extrabold text-white">Scratch & Win Coins</h4>
                        <p className="text-[10px] text-slate-400">Click or scratch the silver area to reveal</p>
                      </div>

                      {/* Scratch Card Frame */}
                      <div
                        onClick={handleScratch}
                        className="relative w-full h-36 rounded-2xl p-4 bg-gradient-to-br from-amber-500 via-orange-600 to-purple-800 border-2 border-amber-400/60 shadow-xl flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
                      >
                        {/* Hidden Prize underneath */}
                        <div className="flex flex-col items-center justify-center space-y-1 text-white">
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-200">Lucky Mystery Prize</span>
                          <div className="text-3xl font-black font-display text-amber-300 drop-shadow">
                            +{scratchReward} COINS
                          </div>
                          <span className="text-[10px] text-emerald-300 font-semibold">Credited Instantly!</span>
                        </div>

                        {/* Scratch Foil Cover */}
                        {!isScratched && (
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 flex flex-col items-center justify-center transition-opacity duration-300">
                            <div className="w-10 h-10 rounded-full bg-slate-600 text-white flex items-center justify-center mb-1 shadow">
                              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
                            </div>
                            <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                              TAP TO SCRATCH!
                            </span>
                            <span className="text-[9px] text-slate-600">Hidden bonus inside</span>
                          </div>
                        )}
                      </div>

                      <div className="w-full flex gap-2">
                        <button
                          onClick={handleScratch}
                          className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md"
                        >
                          {isScratched ? '🎉 Scratched!' : 'Scratch Now'}
                        </button>
                        {isScratched && (
                          <button
                            onClick={() => {
                              setIsScratched(false);
                              setScratchReward(String(Math.floor(Math.random() * 400) + 100));
                            }}
                            className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700"
                            title="New Scratch Card"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* SLIDE: DICE / BONES GAME */}
                  {currentSlide === 2 && (
                    <div className="flex-1 flex flex-col items-center justify-between text-center py-1">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-md border border-sky-500/20">
                          Bones & Multipliers
                        </span>
                        <h4 className="text-base font-extrabold text-white">Dice Roll Challenge</h4>
                        <p className="text-[10px] text-slate-400">Roll 3D dice for instant multiplier cash!</p>
                      </div>

                      {/* Dice Pair Display */}
                      <div className="flex items-center justify-center gap-5 my-2">
                        {diceValues.map((val, idx) => (
                          <div
                            key={idx}
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-b from-white to-slate-200 text-slate-900 shadow-xl border-2 border-slate-300 flex items-center justify-center text-3xl font-black transition-all duration-200 ${
                              isRolling ? 'rotate-12 scale-110' : ''
                            }`}
                          >
                            {val === 1 && '⚀'}
                            {val === 2 && '⚁'}
                            {val === 3 && '⚂'}
                            {val === 4 && '⚃'}
                            {val === 5 && '⚄'}
                            {val === 6 && '⚅'}
                          </div>
                        ))}
                      </div>

                      {/* Roll Outcome */}
                      <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center w-full">
                        <div className="text-[10px] text-slate-400 font-semibold">Total Rolled Score</div>
                        <div className="text-lg font-black text-sky-400">
                          {diceValues[0] + diceValues[1]} POINTS
                        </div>
                        {diceReward && (
                          <div className="text-[10px] font-bold text-emerald-400">
                            + {diceReward} Coins Won!
                          </div>
                        )}
                      </div>

                      {/* Roll Dice Button */}
                      <button
                        onClick={handleRollDice}
                        disabled={isRolling}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs text-white shadow-lg ${
                          isRolling
                            ? 'bg-slate-700 cursor-not-allowed'
                            : 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:scale-[1.02]'
                        }`}
                      >
                        {isRolling ? 'Rolling Dice...' : '🎲 ROLL THE DICE'}
                      </button>
                    </div>
                  )}

                  {/* SLIDE: DAILY TASKS */}
                  {currentSlide === 3 && (
                    <div className="flex-1 flex flex-col justify-between py-1 text-left space-y-2">
                      <div className="space-y-0.5 text-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                          Micro-Activities
                        </span>
                        <h4 className="text-base font-extrabold text-white">Daily Tasks & Streaks</h4>
                      </div>

                      {/* Streak Claim Matrix (matching screenshot 1) */}
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-bold text-white flex items-center gap-1">
                            Daily Streak <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                          </span>
                          <span className="text-amber-400 font-bold">Claimed Day {claimedStreakDay}</span>
                        </div>
                        <div className="grid grid-cols-5 gap-1 text-center text-[9px]">
                          {[1, 2, 3, 4, 5].map((day) => (
                            <button
                              key={day}
                              onClick={() => {
                                setClaimedStreakDay(day);
                                setTaskCoins((c) => c + day * 100);
                              }}
                              className={`p-1 rounded-lg border text-center transition ${
                                day <= claimedStreakDay
                                  ? 'bg-indigo-600/30 border-indigo-500 text-white font-bold'
                                  : 'bg-slate-950 border-slate-800 text-slate-400'
                              }`}
                            >
                              <div>Day {day}</div>
                              <div className="text-amber-300 font-bold mt-0.5">★ {day * 100}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Tasks List */}
                      <div className="space-y-1.5">
                        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs">
                              ▶
                            </div>
                            <div>
                              <div className="text-[10px] font-bold text-white">Watch Short Video</div>
                              <div className="text-[8px] text-slate-400">+30 Coins • 15 sec</div>
                            </div>
                          </div>
                          <span className="text-[9px] px-2 py-0.5 rounded-md bg-indigo-600 text-white font-bold">
                            Watch
                          </span>
                        </div>

                        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                              ✓
                            </div>
                            <div>
                              <div className="text-[10px] font-bold text-white">Quick Opinion Poll</div>
                              <div className="text-[8px] text-slate-400">+150 Coins • 1 min</div>
                            </div>
                          </div>
                          <span className="text-[9px] px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold">
                            Earn
                          </span>
                        </div>

                        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">
                              ★
                            </div>
                            <div>
                              <div className="text-[10px] font-bold text-white">Install Partner Game</div>
                              <div className="text-[8px] text-slate-400">+500 Coins • Instant</div>
                            </div>
                          </div>
                          <span className="text-[9px] px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-bold">
                            Claim
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE: WALLET & WITHDRAWAL (matching uploaded screenshot 3) */}
                  {currentSlide === 4 && (
                    <div className="flex-1 flex flex-col justify-between py-1 text-left space-y-2">
                      <div className="space-y-0.5 text-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                          Instant Cashout
                        </span>
                        <h4 className="text-base font-extrabold text-white">Wallet & Withdraw</h4>
                      </div>

                      {/* Total Balance Card */}
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 border border-indigo-500/40 shadow-lg">
                        <div className="text-[9px] uppercase tracking-wider text-indigo-200 font-semibold">TOTAL BALANCE</div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold flex items-center justify-center">
                              ★
                            </span>
                            <span className="text-xl font-black font-display text-white">90,165</span>
                          </div>
                          <span className="text-xs font-bold text-emerald-400">≈ ₹901.65</span>
                        </div>
                        <div className="text-[8px] text-indigo-300/90 mt-1 font-medium bg-black/25 px-2 py-0.5 rounded">
                          ⚡ Conversion Rate: 1,000 Coins = ₹10 (100 Coins = ₹1)
                        </div>
                      </div>

                      {/* Withdrawal Categories */}
                      <div className="space-y-1">
                        <div className="text-[9px] font-bold text-slate-300">Select Withdrawal Category</div>
                        <div className="grid grid-cols-3 gap-1 text-[8px] font-bold text-center">
                          <div className="p-1 rounded-lg bg-emerald-600/30 border border-emerald-500 text-emerald-300">
                            eSewa (3)
                          </div>
                          <div className="p-1 rounded-lg bg-sky-600/20 border border-sky-500/30 text-sky-300">
                            FF Diamond (3)
                          </div>
                          <div className="p-1 rounded-lg bg-amber-600/20 border border-amber-500/30 text-amber-300">
                            Robux (0)
                          </div>
                        </div>
                      </div>

                      {/* Options */}
                      <div className="space-y-1">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-bold text-white">200 rupees</div>
                            <div className="text-[8px] text-slate-400">eSewa FIXED • 20,000 Coins</div>
                          </div>
                          <span className="text-[9px] px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold">
                            Withdraw
                          </span>
                        </div>

                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-bold text-white">300 rupees</div>
                            <div className="text-[8px] text-slate-400">eSewa Instant • 30,000 Coins</div>
                          </div>
                          <span className="text-[9px] px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold">
                            Withdraw
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE: REFER & EARN (matching uploaded screenshot 4) */}
                  {currentSlide === 5 && (
                    <div className="flex-1 flex flex-col justify-between py-1 text-center space-y-2">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                          Viral Rewards
                        </span>
                        <h4 className="text-base font-extrabold text-white">Invite Friends & Earn</h4>
                        <p className="text-[10px] text-slate-400">Unlimited coins for each friend invited!</p>
                      </div>

                      {/* Referral Code Box */}
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                        <div className="text-[9px] text-slate-400 font-semibold">Your Referral Code</div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl font-black font-display tracking-widest text-white">
                            CB8SIF
                          </span>
                          <button
                            onClick={handleCopyCode}
                            className="p-1.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition"
                            title="Copy Code"
                          >
                            {copiedRef ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* How It Works 3 Steps */}
                      <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left space-y-1 text-[9px]">
                        <div className="font-bold text-slate-200 mb-1">How it Works:</div>
                        <div className="text-slate-300">1. Share your referral code</div>
                        <div className="text-slate-300">2. Your friend joins and completes tasks</div>
                        <div className="text-emerald-400 font-bold">3. You earn 500 coins, and they earn 200 coins</div>
                      </div>

                      <button
                        onClick={handleCopyCode}
                        className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md"
                      >
                        {copiedRef ? '✓ Referral Code Copied!' : '🚀 Invite Friends Now'}
                      </button>
                    </div>
                  )}

                </div>

                {/* Bottom App Navigation Bar (Always rendered to match real app UI) */}
                <div className="pt-2 border-t border-slate-800/80 grid grid-cols-4 gap-1 text-[9px] text-center shrink-0">
                  <div className={`flex flex-col items-center gap-0.5 ${currentSlide === 3 ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>
                    <span>🏠</span>
                    <span>Home</span>
                  </div>
                  <div className={`flex flex-col items-center gap-0.5 ${currentSlide === 0 || currentSlide === 1 || currentSlide === 2 ? 'text-pink-400 font-bold' : 'text-slate-400'}`}>
                    <span>💎</span>
                    <span>Earn</span>
                  </div>
                  <div className={`flex flex-col items-center gap-0.5 ${currentSlide === 4 ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
                    <span>💳</span>
                    <span>Wallet</span>
                  </div>
                  <div className={`flex flex-col items-center gap-0.5 ${currentSlide === 5 ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>
                    <span>👥</span>
                    <span>Refer</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Slider Controls Bar (Device-Friendly Prev, Dots, Play/Pause, Next) */}
          <div className="flex items-center justify-between w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[360px] mt-6 px-1">
            {/* Prev Arrow for Touch/Mobile */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="p-2 sm:p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition active:scale-90 shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Play/Pause & Indicators */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 sm:p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
                title={isPlaying ? 'Pause Auto-slide' : 'Play Auto-slide'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsPlaying(false);
                      setCurrentSlide(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? 'w-6 sm:w-8 bg-gradient-to-r from-sky-400 to-indigo-500'
                        : 'w-2 sm:w-2.5 bg-slate-800 hover:bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Next Arrow for Touch/Mobile */}
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="p-2 sm:p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition active:scale-90 shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Description Panel */}
          <div className="mt-6 text-center max-w-xl px-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              {current.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-display text-white mt-1">
              {current.headline}
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Required CTA Button directly below slider: “Download Now” */}
          <div className="mt-8 flex flex-col items-center gap-3 w-full px-4 max-w-md mx-auto">
            <a
              id="slider-download-now-button"
              href={DIRECT_APK_DOWNLOAD_URL}
              download={APP_CONFIG.apkFileName}
              onClick={onOpenDownload}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-2xl font-bold text-base sm:text-lg text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 bg-gradient-to-r from-sky-500 via-indigo-600 to-fuchsia-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              aria-label="Directly download TaskEarn APK"
            >
              <Download className="w-5 h-5 shrink-0 group-hover:translate-y-0.5 transition-transform" />
              <span>Download TaskEarn 1.0 APK</span>
              <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-2 text-xs text-slate-400 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Version 1.0 ({APP_CONFIG.apkFileName}) • {APP_CONFIG.fileSize} • Direct Fast Download</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
