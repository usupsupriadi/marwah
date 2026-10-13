// Types for Marwah - Muslim Daily (MVP v2.0)

export type TabType = 'home' | 'quran' | 'habit' | 'challenge' | 'campaign' | 'settings';

export interface Ayah {
  number: number;
  arabic: string;
  transliteration?: string;
  translation: string;
}

export interface Surah {
  id: number;
  name: string; // e.g. "Al-Fatihah"
  arabicName: string; // e.g. "الفاتحة"
  meaning: string; // e.g. "Pembukaan"
  ayahCount: number;
  revelationType: 'Makkah' | 'Madinah';
  surahNumber: number;
  description?: string;
  ayahs: Ayah[];
  audioUrl?: string;
}

export interface Dua {
  id: string;
  title: string;
  arabic: string;
  transliteration?: string;
  translation: string;
  source: string;
  category: 'pagi-petang' | 'sholat' | 'harian' | 'penenang-hati';
  context?: string;
}

export interface Hadith {
  id: string;
  title: string;
  arabic?: string;
  translation: string;
  narrator: string; // e.g. "HR. Bukhari no. 6011"
  theme: string;
  significance?: string;
}

export interface HabitTemplate {
  id: string;
  title: string;
  category: 'wajib' | 'sunnah' | 'sedekah' | 'sosial' | 'dzikir';
  description: string;
  virtue?: string;
  iconName: string;
  isDefault: boolean;
}

export interface HabitCompletionRecord {
  dateKey: string; // Format YYYY-MM-DD
  completedHabitIds: string[];
}

export interface ChallengeDay {
  dayNumber: number;
  title: string;
  description: string;
  actionText: string;
  category: 'ibadah' | 'sosial' | 'keluarga' | 'sedekah';
  quranOrHadithRef?: string;
}

export interface Challenge {
  id: string;
  title: string;
  durationDays: 7 | 30;
  tagline: string;
  description: string;
  days: ChallengeDay[];
}

export interface UserChallengeProgress {
  challengeId: string;
  startedAt: string; // ISO date
  completedDays: number[]; // array of day numbers completed e.g. [1, 2]
  isFinished: boolean;
}

export interface Campaign {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: 'wakaf' | 'infak' | 'sedekah' | 'kemanusiaan';
  imageUrl: string;
  targetAmount?: number;
  collectedAmount?: number;
  donorCount?: number;
  isFeatured?: boolean;
  status: 'published' | 'draft' | 'archived';
  beneficiaryInfo?: string;
  location?: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  bankLogo?: string;
}

export interface DonationMethod {
  bankAccounts: BankAccount[];
  qrisImageUrl: string;
  qrisMerchantName: string;
  instructions: string[];
  disclaimer: string;
}

export interface DailyReflection {
  dateKey: string; // YYYY-MM-DD
  prompt: string;
  note: string;
  updatedAt: string;
}

export interface ReminderPreferences {
  enabled: boolean;
  timeSlot: 'subuh' | 'dhuha' | 'ashar' | 'maghrib';
  customTime?: string; // e.g. "05:30"
  frequency: 'daily' | 'friday';
}
