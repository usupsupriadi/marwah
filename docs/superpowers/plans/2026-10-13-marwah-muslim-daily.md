# Marwah - Muslim Daily (MVP v2.0) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun aplikasi web pendamping harian Muslim (Marwah Muslim Daily) berbasis React + TypeScript + Vite responsif PWA yang menyatukan Al-Qur'an/Doa/Hadits, Habit Tracker & Refleksi privat lokal, Tantangan Kebaikan 7/30 Hari, dan Campaign Donasi/Wakaf Marwah dengan instruksi transfer bank & QRIS manual.

**Architecture:** Frontend Single Page Application mobile-first dengan mobile-shell wrapper responsif, modern CSS design tokens (Emerald & Gold Islami), offline-first data layer (LocalStorage/IndexedDB) untuk zero cloud cost dan perlindungan privasi pengguna, serta modular service layer yang kompatibel dengan Firebase Firestore.

**Tech Stack:** React 19, TypeScript, Vite, Vanilla Modern CSS, Lucide Icons (`lucide-react`), LocalStorage.

## Global Constraints
- Sesuai BRD Muslim Daily MVP v2.0 Marwah Wakaf Indonesia: Tidak ada login/akun wajib bagi pengguna biasa.
- Semua data habit, progres tantangan, dan refleksi harian disimpan 100% di perangkat lokal (`localStorage`).
- Tidak ada skor kesalehan (*zero-guilt*), tidak ada hukuman saat habit terlewat.
- Metode donasi manual: Transfer Bank (BSI/Mandiri) dengan tombol salin nomor rekening dan QRIS statis Marwah. Wajib menyertakan disclaimer bahwa pembayaran dilakukan manual di luar aplikasi.
- Desain visual mobile-first berkelas tinggi, modern, responsif, dan menggunakan aset resmi Marwah (`Logo.png`).

---

### Task 1: Scaffolding Proyek & Konfigurasi Aset
**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `index.html`
- Assets: Copy/reference `Logo.png`, `Logo.ico` ke `public/`
- Test: Build verification via `npm run build`

**Interfaces:**
- Produces: Proyek Vite + React + TypeScript siap jalan dengan dependensi `lucide-react`.

- [ ] **Step 1: Inisialisasi package.json dan instalasi dependensi**
Konfigurasi `package.json` dengan `react`, `react-dom`, `lucide-react`, dan devDependencies Vite + TypeScript.
- [ ] **Step 2: Konfigurasi tsconfig dan vite.config.ts**
Buat konfigurasi TypeScript dan Vite untuk kompilasi modul modern.
- [ ] **Step 3: Siapkan index.html dengan branding Marwah**
Setup font Google (Amiri untuk teks Arab, Plus Jakarta Sans / Outfit untuk teks Latin), viewport mobile, dan favicon `Logo.ico`.
- [ ] **Step 4: Jalankan verifikasi instalasi dan build awal**
Run: `npm install` dan pastikan tidak ada error.
- [ ] **Step 5: Commit scaffolding**
`git add .` dan `git commit -m "chore: scaffold project structure with vite and react"`

---

### Task 2: Core Design System & Mobile Shell Layout
**Files:**
- Create: `src/index.css`, `src/styles/variables.css`, `src/styles/components.css`
- Create: `src/components/layout/MobileShell.tsx`, `src/components/layout/BottomNav.tsx`, `src/components/layout/Header.tsx`
- Test: Render Header dan BottomNav di `src/App.tsx`

**Interfaces:**
- Produces:
  - `MobileShell({ children, activeTab, onTabChange }: MobileShellProps)`
  - `Header({ title, subtitle, date }: HeaderProps)`
  - `BottomNav({ activeTab, onTabChange }: BottomNavProps)`
  - CSS tokens: `--color-primary` (`#0d5c3a`), `--color-primary-light` (`#15803d`), `--color-gold` (`#c59b27`), `--bg-main` (`#f8faf8`), `--card-bg` (`#ffffff`).

- [ ] **Step 1: Buat variabel CSS tokens & utility styles**
Definisikan palet warna, tipografi, glassmorphism, shadow lembut, dan layout container mobile-first (max-width 480px, responsive 100%).
- [ ] **Step 2: Buat komponen Header**
Menampilkan logo Marwah Wakaf Indonesia, kalender Hijriah & Masehi, serta salam personal Islami.
- [ ] **Step 3: Buat komponen BottomNav**
Menyediakan 5 navigasi utama: Beranda, Ibadah, Habit, Tantangan, Campaign dengan indikator aktif & haptic micro-animation.
- [ ] **Step 4: Buat komponen MobileShell**
Membungkus area konten dengan scrolling halus dan bottom padding agar konten tidak tertutup nav bar.
- [ ] **Step 5: Verifikasi tampilan awal layout**
Jalankan tes visual untuk memastikan Header, Nav, dan Shell terpasang sempurna.
- [ ] **Step 6: Commit Core Design System**
`git commit -m "feat: implement modern mobile shell layout and design system"`

---

### Task 3: Data Models & Curated Islamic Dataset
**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/quranData.ts`, `src/data/duaHadithData.ts`, `src/data/habitData.ts`, `src/data/challengeData.ts`, `src/data/campaignData.ts`
- Test: Unit test validasi struktur dataset di `src/data/__tests__/dataValidation.test.ts`

**Interfaces:**
- Produces:
  - Types: `Surah`, `Ayah`, `Dua`, `Hadith`, `HabitTemplate`, `Challenge`, `ChallengeDay`, `Campaign`, `DonationMethod`
  - Constants: `QURAN_SURAHS`, `DAILY_DUAS`, `SELECTED_HADITHS`, `DEFAULT_HABITS`, `CHALLENGES`, `MARWAH_CAMPAIGNS`, `DONATION_METHODS`

- [ ] **Step 1: Definisikan type definitions di `src/types/index.ts`**
Buat interface TypeScript lengkap untuk surah, ayah, doa, hadits, habit, tantangan, dan campaign.
- [ ] **Step 2: Susun dataset Al-Qur'an terkurasi di `src/data/quranData.ts`**
Menyertakan surah-surah utama (Al-Fatihah, Al-Kahf, Yasin, Al-Mulk, Ar-Rahman, Al-Waqi'ah, An-Nas, dll) dengan teks Arab berharakat, transliterasi, terjemahan resmi Kemenag RI, dan audio tilawah.
- [ ] **Step 3: Susun dataset Doa & Hadits shahih di `src/data/duaHadithData.ts`**
Koleksi doa harian mustajab (doa bangun tidur, dzikir pagi-petang, doa setelah sholat) dan hadits kebaikan dengan sumber kitab shahih.
- [ ] **Step 4: Susun dataset Habit & Tantangan di `src/data/habitData.ts` dan `challengeData.ts`**
Template habit harian (Sholat Wajib, Dhuha, Tahajud, Sedekah Subuh, Tilawah) serta paket Tantangan 7 Hari Pemula Kebaikan dan Tantangan 30 Hari Istiqomah.
- [ ] **Step 5: Susun dataset Campaign Marwah di `src/data/campaignData.ts`**
Program Marwah Wakaf Indonesia (Wakaf Sumur Bor, Beras Santri Yatim, Al-Qur'an Pelosok) beserta rekening resmi BSI & Mandiri serta aset QRIS statis.
- [ ] **Step 6: Commit dataset & models**
`git commit -m "feat: define typescript interfaces and curated islamic datasets"`

---

### Task 4: Storage Service & Local Privacy Persistence Layer
**Files:**
- Create: `src/services/storageService.ts`
- Create: `src/services/reminderService.ts`
- Test: Unit test persistensi di `src/services/__tests__/storageService.test.ts`

**Interfaces:**
- Produces:
  - `storageService.getHabitCompletions(dateKey: string): Record<string, boolean>`
  - `storageService.toggleHabitCompletion(dateKey: string, habitId: string): void`
  - `storageService.getReflection(dateKey: string): string`
  - `storageService.saveReflection(dateKey: string, note: string): void`
  - `storageService.getActiveChallenge(): { challengeId: string, startedAt: string, completedDays: number[] } | null`
  - `storageService.completeChallengeDay(challengeId: string, dayNumber: number): void`
  - `storageService.clearAllUserData(): void`
  - `reminderService.getPreferences(): ReminderPreferences`
  - `reminderService.savePreferences(prefs: ReminderPreferences): void`

- [ ] **Step 1: Tulis service penyimpanan lokal di `src/services/storageService.ts`**
Implementasikan penanganan `localStorage` yang aman dengan fallback in-memory jika browser memblokir storage.
- [ ] **Step 2: Tambahkan logika penghapusan data privasi (GDPR/BRD Privacy compliance)**
Fungsi `clearAllUserData()` untuk mereset seluruh progres dan catatan tanpa jejak.
- [ ] **Step 3: Tulis service pengingat sedekah di `src/services/reminderService.ts`**
Pengelolaan jadwal pengingat (Pagi/Siang/Malam) dan notifikasi Web Notification API jika izin diberikan.
- [ ] **Step 4: Commit persistence service**
`git commit -m "feat: implement local storage privacy service and reminder manager"`

---

### Task 5: Modul Beranda (Home / Dashboard)
**Files:**
- Create: `src/components/home/HomeView.tsx`
- Create: `src/components/home/DailyInspirationCard.tsx`
- Create: `src/components/home/QuickHabitSummary.tsx`
- Create: `src/components/home/ChallengeBanner.tsx`
- Create: `src/components/home/CampaignSpotlight.tsx`

**Interfaces:**
- Produces: `HomeView({ onNavigateTab, onSelectCampaign, onSelectSurah }: HomeViewProps)`

- [ ] **Step 1: Buat DailyInspirationCard**
Menampilkan ayat dan doa hari ini dengan kutipan inspiratif dan tombol baca selengkapnya.
- [ ] **Step 2: Buat QuickHabitSummary**
Widget ringkasan progres kebaikan hari ini (misal: "3 dari 5 kebiasaan hari ini telah ditunaikan") dengan visual elegan tanpa skor/penalti.
- [ ] **Step 3: Buat ChallengeBanner**
Menampilkan status tantangan aktif (misal: "Tantangan 7 Hari: Hari ke-3") dan tombol cepat aksi hari ini.
- [ ] **Step 4: Buat CampaignSpotlight**
Highlight program wakaf/sedekah Marwah terkini dengan tombol "Donasi Sekarang" yang langsung membuka rincian program.
- [ ] **Step 5: Integrasikan ke dalam HomeView**
Gabungkan seluruh komponen ke dalam satu tampilan beranda yang dinamis dan hangat.
- [ ] **Step 6: Commit HomeView**
`git commit -m "feat: implement home dashboard view with daily inspiration and habit summary"`

---

### Task 6: Modul Al-Qur'an, Doa & Hadits Reader
**Files:**
- Create: `src/components/quran/QuranView.tsx`
- Create: `src/components/quran/SurahList.tsx`
- Create: `src/components/quran/SurahDetail.tsx`
- Create: `src/components/quran/DuaHadithView.tsx`

**Interfaces:**
- Produces: `QuranView({ initialSurahId?: number }: QuranViewProps)`

- [ ] **Step 1: Buat SurahList dengan filter & pencarian**
Pencarian instan berdasarkan nama surah latin, arti surah, atau nomor surah.
- [ ] **Step 2: Buat SurahDetail (Pembaca Ayat)**
Rendering teks Arab yang jelas, nomor ayat khas kaligrafi, transliterasi, terjemahan Indonesia, dan pemutar audio tilawah jika tersedia.
- [ ] **Step 3: Buat DuaHadithView**
Tab navigasi Doa & Hadits dengan filter kategori (Pagi-Petang, Doa Harian, Hadits Kebaikan) dan referensi nomor kitab terverifikasi.
- [ ] **Step 4: Gabungkan ke dalam tampilan Ibadah utama**
Tampilan tab atas yang mulus untuk berpindah antara "Al-Qur'an", "Doa Harian", dan "Hadits Pilihan".
- [ ] **Step 5: Commit modul Al-Qur'an & Doa**
`git commit -m "feat: implement quran reader, dua, and hadith explorer"`

---

### Task 7: Modul Habit Tracker & Refleksi Lembut
**Files:**
- Create: `src/components/habit/HabitView.tsx`
- Create: `src/components/habit/HabitItem.tsx`
- Create: `src/components/habit/WeeklyConsistencyTracker.tsx`
- Create: `src/components/habit/DailyReflectionModal.tsx`

**Interfaces:**
- Produces: `HabitView()`

- [ ] **Step 1: Buat HabitItem interaktif**
Tombol centang animasi dengan feedback visual halus, deskripsi singkat keutamaan amalan, dan status selesai.
- [ ] **Step 2: Buat WeeklyConsistencyTracker**
Visualisasi bulatan hari (Senin-Ahad) yang menandai konsistensi tanpa persentase/skor menghakimi.
- [ ] **Step 3: Buat DailyReflectionModal**
Formulir jurnal refleksi pribadi dengan pertanyaan harian (*prompt*) dan textarea penyimpanan lokal.
- [ ] **Step 4: Fitur tambah kebiasaan kustom**
Modal sederhana untuk pengguna yang ingin menambahkan rutinitas kebaikan pribadi mereka sendiri.
- [ ] **Step 5: Commit modul Habit & Refleksi**
`git commit -m "feat: implement habit tracker and private reflection journal"`

---

### Task 8: Modul Tantangan Kebaikan 7 & 30 Hari
**Files:**
- Create: `src/components/challenge/ChallengeView.tsx`
- Create: `src/components/challenge/ChallengeCard.tsx`
- Create: `src/components/challenge/ChallengeProgressDetail.tsx`

**Interfaces:**
- Produces: `ChallengeView()`

- [ ] **Step 1: Buat ChallengeCard pemilihan program**
Kartu program "Tantangan 7 Hari: Pemula Kebaikan" dan "Tantangan 30 Hari: Istiqomah Muslim" lengkap dengan deskripsi tujuan program.
- [ ] **Step 2: Buat ChallengeProgressDetail**
Daftar timeline misi per hari, instruksi amalan realistis hari ini, dan tombol "Tandai Selesai Hari Ini".
- [ ] **Step 3: Apresiasi penyelesaian hari**
Modal pesan hangat apresiatif ketika satu misi harian diselesaikan (mendorong semangat tanpa rasa bersalah jika terlewat).
- [ ] **Step 4: Commit modul Tantangan**
`git commit -m "feat: implement 7 and 30 days kindness challenges module"`

---

### Task 9: Modul Campaign Donasi & Dialog Pembayaran Manual
**Files:**
- Create: `src/components/campaign/CampaignView.tsx`
- Create: `src/components/campaign/CampaignCard.tsx`
- Create: `src/components/campaign/CampaignDetailModal.tsx`
- Create: `src/components/campaign/DonationInstructionModal.tsx`

**Interfaces:**
- Produces:
  - `CampaignView({ onSelectCampaign }: CampaignViewProps)`
  - `DonationInstructionModal({ campaign, isOpen, onClose }: DonationModalProps)`

- [ ] **Step 1: Buat CampaignCard & filter kategori**
Listing kartu program Marwah dengan filter (Semua, Wakaf, Infak, Sedekah).
- [ ] **Step 2: Buat CampaignDetailModal**
Rincian foto dokumentasi, latar belakang program, target kebaikan, dan penerima manfaat.
- [ ] **Step 3: Buat DonationInstructionModal**
  - Tab 1: Transfer Bank (Bank Syariah Indonesia & Mandiri) lengkap dengan tombol salin nomor rekening instan ber-feedback "Tersalin!".
  - Tab 2: QRIS Marwah Wakaf Indonesia (tampilan kode QRIS statis yang dapat disimpan).
  - Teks disclaimer resmi: Pembayaran dilakukan langsung di m-banking/e-wallet pengguna di luar aplikasi.
- [ ] **Step 4: Tombol bagikan program (Web Share API & Salin Tautan)**
Kemudahan donatur untuk mengajak keluarga dan rekan berpartisipasi dalam kebaikan.
- [ ] **Step 5: Commit modul Campaign & Donasi**
`git commit -m "feat: implement campaign catalog and manual donation modal with bank & qris"`

---

### Task 10: Modul Pengaturan, Privasi & Mode Admin
**Files:**
- Create: `src/components/settings/SettingsView.tsx`
- Create: `src/components/settings/PrivacyDataModal.tsx`
- Create: `src/components/admin/AdminPreviewModal.tsx`

**Interfaces:**
- Produces: `SettingsView()`

- [ ] **Step 1: Buat panel Pengaturan Pengingat Sedekah**
Pengaturan waktu pengingat harian (Subuh/Dhuha/Jumat) dan tombol izin notifikasi lokal browser.
- [ ] **Step 2: Buat PrivacyDataModal**
Dialog konfirmasi "Hapus Semua Data Lokal" untuk menghapus riwayat habit dan jurnal refleksi demi privasi penuh.
- [ ] **Step 3: Buat AdminPreviewModal**
Simulasi panel admin sederhana untuk melihat metadata campaign, status publish, dan informasi rekening Marwah.
- [ ] **Step 4: Commit modul Pengaturan & Admin**
`git commit -m "feat: implement settings, privacy reset, and admin preview modal"`

---

### Task 11: Integrasi Akhir, Testing & Validasi Produksi
**Files:**
- Modify: `src/App.tsx`, `src/index.css`
- Test: Build verification `npm run build`, linting, dan browser validation.

- [ ] **Step 1: Integrasikan seluruh state dan navigasi di `src/App.tsx`**
Pastikan transisi antar tab (Home, Ibadah, Habit, Tantangan, Campaign, Settings) berjalan mulus tanpa reload.
- [ ] **Step 2: Verifikasi responsivitas mobile & desktop**
Uji pada breakpoint smartphone (375px, 414px) dan desktop browser.
- [ ] **Step 3: Jalankan production build**
Run: `npm run build` dan pastikan nol error TypeScript/Vite bundle.
- [ ] **Step 4: Jalankan browser test dan verifikasi interaksi pengguna**
Periksa checklist habit, penyimpanan refleksi, salin nomor rekening, dan navigasi Al-Qur'an.
- [ ] **Step 5: Final commit**
`git commit -m "feat: complete marwah muslim daily mvp application"`
