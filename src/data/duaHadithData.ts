import { Dua, Hadith } from '../types';

export const DAILY_DUAS: Dua[] = [
  {
    id: 'dua-1',
    title: 'Doa Memohon Petunjuk & Ketetapan Hati',
    arabic: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',
    transliteration: 'Yā muqallibal-qulūbi ṡabbit qalbī \'alā dīnik',
    translation: 'Wahai Dzat yang membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu.',
    source: 'HR. At-Tirmidzi no. 2140 (Shahih)',
    category: 'harian',
    context: 'Dibaca rutin setiap saat, terutama dalam sujud dan setelah tasyahud akhir sholat.'
  },
  {
    id: 'dua-2',
    title: 'Dzikir Pagi: Sayyidul Istighfar',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration: 'Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā \'abduka...',
    translation: 'Ya Allah, Engkau adalah Tuhanku, tiada tuhan selain Engkau. Engkaulah yang menciptakanku dan aku adalah hamba-Mu. Aku senantiasa setia pada perjanjian dan janji-Mu semampuku. Aku berlindung kepada-Mu dari keburukan apa yang kuperbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku, maka ampunilah aku. Sungguh tiada yang dapat mengampuni dosa selain Engkau.',
    source: 'HR. Bukhari no. 6306',
    category: 'pagi-petang',
    context: 'Penghulu istighfar yang dianjurkan dibaca pagi dan petang hari.'
  },
  {
    id: 'dua-3',
    title: 'Doa Perlindungan dari Kesulitan & Gelisah',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
    transliteration: 'Allāhumma innī a\'ūżu bika minal-hammi wal-ḥazan, wa a\'ūżu bika minal-\'ajzi wal-kasal...',
    translation: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari rasa gundah dan duka cita, dari kelemahan dan kemalasan, dari sifat pengecut dan kikir, serta dari lilitan utang dan penindasan orang lain.',
    source: 'HR. Abu Dawud no. 1555 (Shahih)',
    category: 'penenang-hati',
    context: 'Diajarkan Rasulullah kepada Abu Umamah saat dirundung kesedihan dan utang.'
  },
  {
    id: 'dua-4',
    title: 'Doa Kebaikan Dunia dan Akhirat',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: 'Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā \'ażāban-nār',
    translation: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa neraka.',
    source: 'QS. Al-Baqarah: 201',
    category: 'sholat',
    context: 'Doa sapu jagat yang paling sering dibaca oleh Nabi Muhammad SAW.'
  }
];

export const SELECTED_HADITHS: Hadith[] = [
  {
    id: 'hadith-1',
    title: 'Kebaikan yang Paling Dicintai Allah',
    arabic: 'أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ تَعَالَى أَدْوَمُهَا وَإِنْ قَلَّ',
    translation: 'Amalan yang paling dicintai oleh Allah Ta\'ala adalah amalan yang kontinu (istiqomah) walaupun sedikit.',
    narrator: 'HR. Bukhari no. 6465 & Muslim no. 783',
    theme: 'Istiqomah & Konsistensi',
    significance: 'Landasan utama dalam membangun habit Islami harian: lebih baik sedikit namun rutin setiap hari.'
  },
  {
    id: 'hadith-2',
    title: 'Sedekah Subuh dan Doa Malaikat',
    arabic: 'مَا مِنْ يَوْمٍ يُصْبِحُ الْعِبَادُ فِيهِ إِلاَّ مَلَكَانِ يَنْزِلاَنِ فَيَقُولُ أَحَدُهُمَا اللَّهُمَّ أَعْطِ مُنْفِقًا خَلَفًا',
    translation: 'Tidak ada suatu hari pun di mana para hamba bangun di waktu pagi melainkan dua malaikat turun. Salah satunya berdoa: "Ya Allah, berikanlah ganti bagi orang yang berinfak."',
    narrator: 'HR. Bukhari no. 1442 & Muslim no. 1010',
    theme: 'Keutamaan Sedekah Subuh',
    significance: 'Motivasi lembut untuk mengawali setiap pagi dengan sedekah dan kepedulian.'
  },
  {
    id: 'hadith-3',
    title: 'Senyum dan Perkataan Baik adalah Sedekah',
    arabic: 'كُلُّ مَعْرُوفٍ صَدَقَةٌ',
    translation: 'Setiap perbuatan baik (ma\'ruf) adalah sedekah.',
    narrator: 'HR. Bukhari no. 6021 & Muslim no. 1005',
    theme: 'Kebaikan Universal',
    significance: 'Menegaskan bahwa sedekah tidak terbatas pada materi, melainkan mencakup setiap kebaikan non-finansial.'
  },
  {
    id: 'hadith-4',
    title: 'Menyambung Silaturahmi Membuka Pintu Rezeki',
    arabic: 'مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ، وَيُنْسَأَ لَهُ فِي أَثَرِهِ، فَلْيَصِلْ رَحِمَهُ',
    translation: 'Barangsiapa yang ingin dilapangkan rezekinya dan dipanjangkan umurnya, hendaklah ia menyambung tali silaturahmi.',
    narrator: 'HR. Bukhari no. 5986 & Muslim no. 2557',
    theme: 'Bakti & Silaturahmi',
    significance: 'Amalan sosial yang membawa berkah umur dan rezeki dunia akhirat.'
  }
];
