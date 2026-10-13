import { Challenge } from '../types';

export const CHALLENGES: Challenge[] = [
  {
    id: 'challenge-7-days',
    title: 'Tantangan 7 Hari: Pemula Kebaikan',
    durationDays: 7,
    tagline: 'Langkah Awal Membiasakan Hati Menemukan Ketenangan',
    description: 'Program pengantar 7 hari dengan aksi kebaikan realistis dan ringan untuk membentuk ritme ibadah dan sosial.',
    days: [
      {
        dayNumber: 1,
        title: 'Niat Bersih & Istighfar',
        description: 'Awali pekan dengan memperbarui niat karena Allah dan membaca istighfar 100 kali dengan penuh penghayatan.',
        actionText: 'Baca Istighfar 100x dan niatkan hari ini untuk kebaikan.',
        category: 'ibadah',
        quranOrHadithRef: 'HR. Muslim: "Sesungguhnya amalan itu tergantung pada niatnya."'
      },
      {
        dayNumber: 2,
        title: 'Senyuman & Sapaan Hangat',
        description: 'Tebarkan senyum tulus dan sapa setidaknya 3 orang (keluarga, rekan, atau tetangga) hari ini.',
        actionText: 'Tersenyum dan sapa 3 orang di sekitarmu.',
        category: 'sosial',
        quranOrHadithRef: 'HR. Tirmidzi: "Senyummu di hadapan saudaramu adalah sedekah."'
      },
      {
        dayNumber: 3,
        title: 'Menyapa Orang Tua / Kerabat',
        description: 'Hubungi orang tua atau kirimkan doa tulus untuk mereka jika telah tiada.',
        actionText: 'Telepon atau kirim pesan hangat kepada orang tua/keluarga.',
        category: 'keluarga',
        quranOrHadithRef: 'QS. Al-Isra: 23-24'
      },
      {
        dayNumber: 4,
        title: 'Tilawah 1 Halaman Berarti',
        description: 'Buka Al-Qur\'an, baca minimal 1 halaman perlahan, dan baca terjemahannya untuk diresapi.',
        actionText: 'Baca 1 halaman Al-Qur\'an beserta artinya.',
        category: 'ibadah',
        quranOrHadithRef: 'HR. At-Tirmidzi: "Satu huruf berlipat sepuluh kebaikan."'
      },
      {
        dayNumber: 5,
        title: 'Sedekah Subuh Penuh Doa',
        description: 'Sisihkan sedikit rezeki di pagi hari, sertakan doa untuk hajatmu dan umat muslim.',
        actionText: 'Salurkan sedekah subuh atau bantu orang yang membutuhkan.',
        category: 'sedekah',
        quranOrHadithRef: 'HR. Bukhari: "Doa malaikat bagi orang yang berinfak di pagi hari."'
      },
      {
        dayNumber: 6,
        title: 'Memaafkan & Melepaskan Beban',
        description: 'Pilihlah untuk memaafkan kesalahan orang lain sebelum kamu beranjak tidur malam ini.',
        actionText: 'Ikhlaskan dan maafkan kekhilafan orang lain hari ini.',
        category: 'ibadah',
        quranOrHadithRef: 'QS. Ali \'Imran: 134: "...dan orang-orang yang memaafkan orang lain."'
      },
      {
        dayNumber: 7,
        title: 'Refleksi Sepekan Kebaikan',
        description: 'Tuliskan satu rasa syukur terbesar yang kamu rasakan selama menjalani pekan ini.',
        actionText: 'Tulis refleksi syukur di jurnal refleksimu.',
        category: 'ibadah',
        quranOrHadithRef: 'QS. Ibrahim: 7: "Jika kamu bersyukur, pasti Kami akan menambah (nikmat) kepadamu."'
      }
    ]
  },
  {
    id: 'challenge-30-days',
    title: 'Tantangan 30 Hari: Istiqomah Muslim',
    durationDays: 30,
    tagline: 'Membangun Karakter Muslim yang Tenang, Peduli & Bertumbuh',
    description: 'Perjalanan 30 hari memperdalam hubungan dengan Allah, memperluas kepedulian sosial, dan melatih konsistensi hati.',
    days: Array.from({ length: 30 }, (_, i) => {
      const day = i + 1;
      const themes = [
        { title: 'Tadabbur Al-Fatihah', action: 'Baca Al-Fatihah dengan jeda per ayat sambil merenungi artinya.', cat: 'ibadah' as const },
        { title: 'Sholat Dhuha Pagi', action: 'Lakukan sholat dhuha 2 rakaat di sela kesibukan pagimu.', cat: 'ibadah' as const },
        { title: 'Sedekah Makanan / Air', action: 'Bagi air minum atau makanan kecil kepada orang di sekitarmu.', cat: 'sedekah' as const },
        { title: 'Mendoakan Diam-Diam', action: 'Doakan kebaikan seorang sahabat tanpa sepengetahuannya.', cat: 'sosial' as const },
        { title: 'Zikir Pagi Petang', action: 'Luangkan 5 menit melafalkan tasbih, tahmid, dan tahlil.', cat: 'ibadah' as const },
        { title: 'Menjaga Lisan', action: 'Hindari perkataan sia-sia, perbanyak diam atau berkata baik.', cat: 'sosial' as const }
      ];
      const theme = themes[(day - 1) % themes.length];
      return {
        dayNumber: day,
        title: `Hari ke-${day}: ${theme.title}`,
        description: `Tugas istiqomah hari ke-${day}. Jalani dengan tenang dan hadirkan rasa syukur di dalam dada.`,
        actionText: theme.action,
        category: theme.cat,
        quranOrHadithRef: 'Amalan yang dicintai Allah adalah yang paling konsisten.'
      };
    })
  }
];
