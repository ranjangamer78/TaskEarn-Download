export interface ScreenshotSlide {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  coins: string;
  featureKey: 'home' | 'spin' | 'scratch' | 'dice' | 'tasks' | 'wallet' | 'refer';
  description: string;
  bulletPoints: string[];
}

export interface FeatureCardItem {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  colorScheme: {
    badgeBg: string;
    badgeText: string;
    border: string;
    glow: string;
    iconBg: string;
  };
  metrics: string;
}

export interface PayoutEvent {
  id: string;
  name: string;
  amount: string;
  method: string;
  timeAgo: string;
  coins: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
