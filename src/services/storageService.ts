import { DailyReflection, HabitTemplate, UserChallengeProgress, ReminderPreferences } from '../types';

const STORAGE_KEYS = {
  HABIT_COMPLETIONS: 'marwah_habit_completions',
  CUSTOM_HABITS: 'marwah_custom_habits',
  REFLECTIONS: 'marwah_reflections',
  USER_CHALLENGE: 'marwah_user_challenge',
  REMINDER_PREFS: 'marwah_reminder_prefs',
  BOOKMARK_AYAH: 'marwah_bookmark_ayah',
};

// Helper function to get today's date in YYYY-MM-DD
export const getTodayKey = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const storageService = {
  // Habit completions
  getHabitCompletions(dateKey: string = getTodayKey()): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HABIT_COMPLETIONS);
      if (!data) return [];
      const records: Record<string, string[]> = JSON.parse(data);
      return records[dateKey] || [];
    } catch {
      return [];
    }
  },

  toggleHabitCompletion(habitId: string, dateKey: string = getTodayKey()): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HABIT_COMPLETIONS);
      const records: Record<string, string[]> = data ? JSON.parse(data) : {};
      const currentList = records[dateKey] || [];
      
      let updatedList: string[];
      if (currentList.includes(habitId)) {
        updatedList = currentList.filter(id => id !== habitId);
      } else {
        updatedList = [...currentList, habitId];
      }
      
      records[dateKey] = updatedList;
      localStorage.setItem(STORAGE_KEYS.HABIT_COMPLETIONS, JSON.stringify(records));
      return updatedList;
    } catch {
      return [];
    }
  },

  getHabitHistoryWeek(): { dateKey: string; count: number }[] {
    const history: { dateKey: string; count: number }[] = [];
    const now = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const key = `${year}-${month}-${day}`;
      
      const completions = this.getHabitCompletions(key);
      history.push({ dateKey: key, count: completions.length });
    }
    
    return history;
  },

  // Custom Habits
  getCustomHabits(): HabitTemplate[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_HABITS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  addCustomHabit(title: string, category: 'wajib' | 'sunnah' | 'sedekah' | 'sosial' | 'dzikir'): HabitTemplate[] {
    const current = this.getCustomHabits();
    const newHabit: HabitTemplate = {
      id: `custom-${Date.now()}`,
      title,
      category,
      description: 'Kebiasaan pribadi pilihanmu.',
      iconName: 'Sparkles',
      isDefault: false
    };
    const updated = [...current, newHabit];
    localStorage.setItem(STORAGE_KEYS.CUSTOM_HABITS, JSON.stringify(updated));
    return updated;
  },

  deleteCustomHabit(id: string): HabitTemplate[] {
    const current = this.getCustomHabits();
    const updated = current.filter(h => h.id !== id);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_HABITS, JSON.stringify(updated));
    return updated;
  },

  // Reflections
  getReflection(dateKey: string = getTodayKey()): DailyReflection | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.REFLECTIONS);
      if (!data) return null;
      const records: Record<string, DailyReflection> = JSON.parse(data);
      return records[dateKey] || null;
    } catch {
      return null;
    }
  },

  saveReflection(dateKey: string, prompt: string, note: string): DailyReflection {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.REFLECTIONS);
      const records: Record<string, DailyReflection> = data ? JSON.parse(data) : {};
      
      const reflection: DailyReflection = {
        dateKey,
        prompt,
        note,
        updatedAt: new Date().toISOString()
      };
      
      records[dateKey] = reflection;
      localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(records));
      return reflection;
    } catch {
      return { dateKey, prompt, note, updatedAt: new Date().toISOString() };
    }
  },

  deleteReflection(dateKey: string = getTodayKey()): void {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.REFLECTIONS);
      if (!data) return;
      const records: Record<string, DailyReflection> = JSON.parse(data);
      delete records[dateKey];
      localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(records));
    } catch {}
  },

  // Challenge Progress
  getUserChallenge(): UserChallengeProgress | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USER_CHALLENGE);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  startChallenge(challengeId: string): UserChallengeProgress {
    const progress: UserChallengeProgress = {
      challengeId,
      startedAt: new Date().toISOString(),
      completedDays: [],
      isFinished: false
    };
    localStorage.setItem(STORAGE_KEYS.USER_CHALLENGE, JSON.stringify(progress));
    return progress;
  },

  toggleChallengeDay(dayNumber: number): UserChallengeProgress | null {
    const current = this.getUserChallenge();
    if (!current) return null;

    const alreadyDone = current.completedDays.includes(dayNumber);
    let updatedDays: number[];
    if (alreadyDone) {
      updatedDays = current.completedDays.filter(d => d !== dayNumber);
    } else {
      updatedDays = [...current.completedDays, dayNumber].sort((a, b) => a - b);
    }

    const maxDays = current.challengeId.includes('30') ? 30 : 7;
    const isFinished = updatedDays.length >= maxDays;

    const updated: UserChallengeProgress = {
      ...current,
      completedDays: updatedDays,
      isFinished
    };

    localStorage.setItem(STORAGE_KEYS.USER_CHALLENGE, JSON.stringify(updated));
    return updated;
  },

  leaveChallenge(): void {
    localStorage.removeItem(STORAGE_KEYS.USER_CHALLENGE);
  },

  // Bookmarked Ayah
  getBookmarkAyah(): { surahNumber: number; ayahNumber: number; surahName: string } | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARK_AYAH);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveBookmarkAyah(bookmark: { surahNumber: number; ayahNumber: number; surahName: string }): void {
    localStorage.setItem(STORAGE_KEYS.BOOKMARK_AYAH, JSON.stringify(bookmark));
  },

  // Full Privacy Reset
  clearAllUserData(): void {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
};
