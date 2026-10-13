import { Surah } from '../types';

export const SURAH_METADATA_LIST = [
  { id: 1, name: 'Al-Fatihah', arabicName: 'الفاتحة', meaning: 'Pembukaan', ayahCount: 7, revelationType: 'Makkah' as const },
  { id: 2, name: 'Al-Baqarah', arabicName: 'البقرة', meaning: 'Sapi Betina', ayahCount: 286, revelationType: 'Madinah' as const },
  { id: 3, name: 'Ali \'Imran', arabicName: 'آل عمران', meaning: 'Keluarga Imran', ayahCount: 200, revelationType: 'Madinah' as const },
  { id: 18, name: 'Al-Kahf', arabicName: 'الكهف', meaning: 'Gua', ayahCount: 110, revelationType: 'Makkah' as const },
  { id: 36, name: 'Yasin', arabicName: 'يس', meaning: 'Ya Sin', ayahCount: 83, revelationType: 'Makkah' as const },
  { id: 55, name: 'Ar-Rahman', arabicName: 'الرحمن', meaning: 'Yang Maha Pengasih', ayahCount: 78, revelationType: 'Madinah' as const },
  { id: 56, name: 'Al-Waqi\'ah', arabicName: 'الواقعة', meaning: 'Hari Kiamat', ayahCount: 96, revelationType: 'Makkah' as const },
  { id: 67, name: 'Al-Mulk', arabicName: 'الملك', meaning: 'Kerajaan', ayahCount: 30, revelationType: 'Makkah' as const },
  { id: 93, name: 'Ad-Duha', arabicName: 'الضحى', meaning: 'Waktu Dhuha', ayahCount: 11, revelationType: 'Makkah' as const },
  { id: 94, name: 'Asy-Syarh', arabicName: 'الشرح', meaning: 'Kelapangan', ayahCount: 8, revelationType: 'Makkah' as const },
  { id: 97, name: 'Al-Qadr', arabicName: 'القدر', meaning: 'Kemuliaan', ayahCount: 5, revelationType: 'Makkah' as const },
  { id: 103, name: 'Al-\'Asr', arabicName: 'العصر', meaning: 'Masa / Waktu', ayahCount: 3, revelationType: 'Makkah' as const },
  { id: 108, name: 'Al-Kausar', arabicName: 'الكوثر', meaning: 'Nikmat yang Banyak', ayahCount: 3, revelationType: 'Makkah' as const },
  { id: 112, name: 'Al-Ikhlas', arabicName: 'الإخلاص', meaning: 'Memurnikan Keesaan Allah', ayahCount: 4, revelationType: 'Makkah' as const },
  { id: 113, name: 'Al-Falaq', arabicName: 'الفلق', meaning: 'Waktu Subuh', ayahCount: 5, revelationType: 'Makkah' as const },
  { id: 114, name: 'An-Nas', arabicName: 'الناس', meaning: 'Manusia', ayahCount: 6, revelationType: 'Makkah' as const },
];

export const FEATURED_SURAHS: Surah[] = [
  {
    id: 1,
    surahNumber: 1,
    name: 'Al-Fatihah',
    arabicName: 'الفاتحة',
    meaning: 'Pembukaan',
    ayahCount: 7,
    revelationType: 'Makkah',
    description: 'Surah pertama dalam Al-Qur\'an, rukun sholat yang dibaca setiap rakaat.',
    ayahs: [
      {
        number: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Bismillāhir-raḥmānir-raḥīm',
        translation: 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.'
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        transliteration: 'Al-ḥamdu lillāhi rabbil-\'ālamīn',
        translation: 'Segala puji bagi Allah, Tuhan semesta alam.'
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Ar-raḥmānir-raḥīm',
        translation: 'Yang Maha Pengasih lagi Maha Penyayang.'
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        transliteration: 'Māliki yaumid-dīn',
        translation: 'Pemilik hari pembalasan.'
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        transliteration: 'Iyyāka na\'budu wa iyyāka nasta\'īn',
        translation: 'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.'
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        transliteration: 'Ihdinaṣ-ṣirāṭal-mustaqīm',
        translation: 'Tunjukilah kami jalan yang lurus,'
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        transliteration: 'Ṣirāṭallażīna an\'amta \'alaihim gairil-magḍūbi \'alaihim wa laḍ-ḍāllīn',
        translation: '(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat.'
      }
    ]
  },
  {
    id: 67,
    surahNumber: 67,
    name: 'Al-Mulk',
    arabicName: 'الملك',
    meaning: 'Kerajaan',
    ayahCount: 30,
    revelationType: 'Makkah',
    description: 'Surah pelindung dari siksa kubur, sunnah dibaca sebelum tidur.',
    ayahs: [
      {
        number: 1,
        arabic: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration: 'Tabārakallażī biyadihil-mulku wa huwa \'alā kulli syai\'in qadīr',
        translation: 'Mahasuci Allah Yang di tangan-Nya-lah segala kerajaan, dan Dia Mahakuasa atas segala sesuatu.'
      },
      {
        number: 2,
        arabic: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ',
        transliteration: 'Allażī khalaqal-mauta wal-ḥayāta liyabluwakum ayyukum aḥsanu \'amalā, wa huwal-\'azīzul-gafūr',
        translation: 'Yang menciptakan mati dan hidup untuk menguji kamu, siapa di antara kamu yang lebih baik amalnya. Dan Dia Mahaperkasa lagi Maha Pengampun.'
      },
      {
        number: 3,
        arabic: 'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ',
        transliteration: 'Allażī khalaqa sab\'a samāwātin ṭibāqā, mā tarā fī khalqir-raḥmāni min tafāwut',
        translation: 'Yang menciptakan tujuh langit berlapis-lapis. Kamu sekali-kali tidak melihat pada ciptaan Tuhan Yang Maha Pemurah sesuatu yang tidak seimbang.'
      },
      {
        number: 4,
        arabic: 'فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ',
        transliteration: 'Farji\'il-baṣara hal tarā min fuṭūr',
        translation: 'Maka lihatlah berulang-ulang, adakah kamu lihat sesuatu yang cacat?'
      }
    ]
  },
  {
    id: 93,
    surahNumber: 93,
    name: 'Ad-Duha',
    arabicName: 'الضحى',
    meaning: 'Waktu Dhuha',
    ayahCount: 11,
    revelationType: 'Makkah',
    description: 'Kabar gembira dan penenang jiwa bagi Rasulullah dan orang beriman saat menghadapi kesulitan.',
    ayahs: [
      {
        number: 1,
        arabic: 'وَالضُّحَىٰ',
        transliteration: 'Waḍ-ḍuḥā',
        translation: 'Demi waktu dhuha (ketika matahari naik sepenggalah),'
      },
      {
        number: 2,
        arabic: 'وَاللَّيْلِ إِذَا سَجَىٰ',
        transliteration: 'Wal-laili iżā sajā',
        translation: 'dan demi malam apabila telah sunyi,'
      },
      {
        number: 3,
        arabic: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ',
        transliteration: 'Mā wadda\'aka rabbuka wa mā qalā',
        translation: 'Tuhanmu tidak meninggalkanmu (Muhammad) dan tidak (pula) membencimu,'
      },
      {
        number: 4,
        arabic: 'وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ',
        transliteration: 'Wa lal-\'ākhiratu khairul laka minal-ūlā',
        translation: 'dan sungguh, yang kemudian itu lebih baik bagimu daripada yang permulaan.'
      },
      {
        number: 5,
        arabic: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ',
        transliteration: 'Wa lasaufa yu\'ṭīka rabbuka fatarḍā',
        translation: 'Dan sungguh, kelak Tuhanmu pasti memberikan karunia-Nya kepadamu, sehingga engkau menjadi puas.'
      }
    ]
  },
  {
    id: 112,
    surahNumber: 112,
    name: 'Al-Ikhlas',
    arabicName: 'الإخلاص',
    meaning: 'Memurnikan Keesaan Allah',
    ayahCount: 4,
    revelationType: 'Makkah',
    description: 'Setara sepertiga Al-Qur\'an, menegaskan keesaan Allah Subhanahu wa Ta\'ala.',
    ayahs: [
      {
        number: 1,
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        transliteration: 'Qul huwallāhu aḥad',
        translation: 'Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa.'
      },
      {
        number: 2,
        arabic: 'اللَّهُ الصَّمَدُ',
        transliteration: 'Allāhuṣ-ṣamad',
        translation: 'Allah tempat meminta segala sesuatu.'
      },
      {
        number: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        transliteration: 'Lam yalid wa lam yūlad',
        translation: '(Allah) tidak beranak dan tidak pula diperanakkan,'
      },
      {
        number: 4,
        arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        transliteration: 'Wa lam yakul lahū kufuwan aḥad',
        translation: 'dan tidak ada sesuatu pun yang setara dengan Dia."'
      }
    ]
  },
  {
    id: 113,
    surahNumber: 113,
    name: 'Al-Falaq',
    arabicName: 'الفلق',
    meaning: 'Waktu Subuh',
    ayahCount: 5,
    revelationType: 'Makkah',
    description: 'Surah perlindungan dari segala marabahaya dan kejahatan makhluk.',
    ayahs: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        transliteration: 'Qul a\'ūżu birabbil-falaq',
        translation: 'Katakanlah, "Aku berlindung kepada Tuhan yang menguasai subuh (fajar),'
      },
      {
        number: 2,
        arabic: 'مِن شَرِّ مَا خَلَقَ',
        transliteration: 'Min syarri mā khalaq',
        translation: 'dari kejahatan (makhluk yang) Dia ciptakan,'
      },
      {
        number: 3,
        arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        transliteration: 'Wa min syarri gāsiqin iżā waqab',
        translation: 'dan dari kejahatan malam apabila telah gelap gulita,'
      },
      {
        number: 4,
        arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        transliteration: 'Wa min syarrin-naffāṡāti fil-\'uqad',
        translation: 'dan dari kejahatan perempuan-perempuan (penyihir) yang meniup pada buhul-buhul (talinya),'
      },
      {
        number: 5,
        arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        transliteration: 'Wa min syarri ḥāsidin iżā ḥasad',
        translation: 'dan dari kejahatan orang yang dengki apabila dia dengki."'
      }
    ]
  },
  {
    id: 114,
    surahNumber: 114,
    name: 'An-Nas',
    arabicName: 'الناس',
    meaning: 'Manusia',
    ayahCount: 6,
    revelationType: 'Makkah',
    description: 'Surah penutup Al-Qur\'an, perlindungan dari bisikan setan jin dan manusia.',
    ayahs: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        transliteration: 'Qul a\'ūżu birabbin-nās',
        translation: 'Katakanlah, "Aku berlindung kepada Tuhannya manusia,'
      },
      {
        number: 2,
        arabic: 'مَلِكِ النَّاسِ',
        transliteration: 'Malikin-nās',
        translation: 'Raja manusia,'
      },
      {
        number: 3,
        arabic: 'إِلَٰهِ النَّاسِ',
        transliteration: 'Ilāhin-nās',
        translation: 'sembahan manusia,'
      },
      {
        number: 4,
        arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        transliteration: 'Min syarril-waswāsil-khannās',
        translation: 'dari kejahatan (bisikan) setan yang bersembunyi,'
      },
      {
        number: 5,
        arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        transliteration: 'Allażī yuwaswisu fī ṣudūrin-nās',
        translation: 'yang membisikkan (kejahatan) ke dalam dada manusia,'
      },
      {
        number: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        transliteration: 'Minal-jinnati wan-nās',
        translation: 'dari (golongan) jin dan manusia."'
      }
    ]
  }
];
