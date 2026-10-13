import { HabitTemplate } from '../types';

export const DEFAULT_HABITS: HabitTemplate[] = [
  {
    id: 'habit-sholat-wajib',
    title: 'Sholat 5 Waktu di Awal Waktu',
    category: 'wajib',
    description: 'Menjaga sholat fardhu tepat waktu dengan khusyuk.',
    virtue: 'Amalan yang pertama kali dihisab dan pembersih dosa harian.',
    iconName: 'Clock',
    isDefault: true
  },
  {
    id: 'habit-tilawah',
    title: 'Tilawah Al-Qur\'an (Min. 1 Halaman/Ayat)',
    category: 'sunnah',
    description: 'Membaca dan merenungi kalamullah setiap hari.',
    virtue: 'Setiap satu huruf Al-Qur\'an berbuah sepuluh kebaikan.',
    iconName: 'BookOpen',
    isDefault: true
  },
  {
    id: 'habit-sedekah-subuh',
    title: 'Sedekah Subuh / Berbagi Kebaikan',
    category: 'sedekah',
    description: 'Menyisihkan rezeki atau berbuat baik di pagi hari.',
    virtue: 'Didoakan khusus oleh para malaikat agar diganti berlipat ganda.',
    iconName: 'HeartHandshake',
    isDefault: true
  },
  {
    id: 'habit-dhuha',
    title: 'Sholat Sunnah Dhuha (2 Rakaat)',
    category: 'sunnah',
    description: 'Menyempatkan sholat sunnah di pagi hari sebelum beraktivitas.',
    virtue: 'Pengganti sedekah bagi seluruh 360 persendian tubuh.',
    iconName: 'Sun',
    isDefault: true
  },
  {
    id: 'habit-dzikir',
    title: 'Dzikir Pagi / Petang & Istighfar',
    category: 'dzikir',
    description: 'Mengingat Allah dan memohon ampunan minimal 100 kali.',
    virtue: 'Menentramkan hati dan menjadi benteng dari keburukan.',
    iconName: 'Sparkles',
    isDefault: true
  },
  {
    id: 'habit-tahajud',
    title: 'Qiyamul Lail / Sholat Tahajud',
    category: 'sunnah',
    description: 'Bangun di sepertiga malam terakhir untuk bermunajat.',
    virtue: 'Mendapat tempat terpuji di sisi Allah (Maqamam Mahmuda).',
    iconName: 'Moon',
    isDefault: false
  },
  {
    id: 'habit-silaturahmi',
    title: 'Sapa Orang Tua & Keluarga',
    category: 'sosial',
    description: 'Mengirim kabar atau mendoakan keluarga dan kerabat.',
    virtue: 'Menyambung silaturahmi melapangkan rezeki dan umur.',
    iconName: 'Smile',
    isDefault: false
  }
];

export const DAILY_REFLECTION_PROMPTS = [
  'Kebaikan sederhana apa yang kamu syukuri hari ini?',
  'Adakah amalan yang membuat hatimu merasa tenang dan lapang hari ini?',
  'Satu hal baik apa yang ingin kamu lakukan atau perbaiki esok hari?',
  'Siapa orang yang ingin kamu doakan kebaikan hari ini?',
  'Hikmah apa yang Allah berikan melalui peristiwa yang kamu alami hari ini?'
];
