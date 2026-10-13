import { ReminderPreferences } from '../types';

const REMINDER_KEY = 'marwah_reminder_preferences';

export const DEFAULT_REMINDER_PREFS: ReminderPreferences = {
  enabled: false,
  timeSlot: 'subuh',
  frequency: 'daily'
};

export const reminderService = {
  getPreferences(): ReminderPreferences {
    try {
      const data = localStorage.getItem(REMINDER_KEY);
      return data ? JSON.parse(data) : DEFAULT_REMINDER_PREFS;
    } catch {
      return DEFAULT_REMINDER_PREFS;
    }
  },

  savePreferences(prefs: ReminderPreferences): void {
    localStorage.setItem(REMINDER_KEY, JSON.stringify(prefs));
  },

  async requestNotificationPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      return false;
    }
    if (Notification.permission === 'granted') {
      return true;
    }
    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    return false;
  },

  showTestNotification(): boolean {
    if (!('Notification' in window) || Notification.permission !== 'granted') {
      return false;
    }
    new Notification('Marwah Muslim Daily', {
      body: 'Pengingat Sedekah: "Awali pagimu dengan senyum dan sedikit kebaikan untuk sesama."',
      icon: '/favicon.ico'
    });
    return true;
  }
};
