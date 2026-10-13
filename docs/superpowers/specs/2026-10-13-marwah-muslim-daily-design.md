# Design Specification: Marwah - Muslim Daily (MVP v2.0)

**Dokumen Referensi:** `BRD_Muslim_Daily_MVP_Firebase_v2.docx` (Marwah Wakaf Indonesia)  
**Tanggal:** 13 Oktober 2026  
**Status:** Disetujui (Opsi A: Responsive Web App / PWA Mobile-First)

---

## 1. Tujuan & Visi Produk

Membangun aplikasi web pendamping harian Muslim berbasis web responsif/PWA yang menggabungkan:

1. **Pustaka Konten Islami Harian** (Al-Qur'an, Doa Harian, dan Hadits Pilihan berpenjelasan dan bersumber shahih).
2. **Habit Tracker & Refleksi Lembut** (*Zero-guilt*, tanpa skor kesalehan atau penghakiman, dengan data privat 100% di perangkat lokal).
3. **Tantangan Kebaikan 7 & 30 Hari** (Rutinitas kebaikan terstruktur, mencakup aspek ibadah, sosial, dan keluarga).
4. **Kanal Campaign Marwah Wakaf Indonesia** (Listing program kebaikan, transparansi informasi, panduan transfer bank rekening resmi BSI/Mandiri, scan QRIS statis, dan tombol salin/berbagi).

---

## 2. Arsitektur Teknologi & Prinsip Data

### 2.1 Tech Stack

- **Framework & Bundler:** React 19 + TypeScript + Vite.
- **Desain & UI Styling:** Vanilla Modern CSS Design System (Custom Properties / CSS Tokens, Glassmorphism, nuansa Islami elegan: Deep Emerald Green `#0d5c3a`, Sage `#4e9f75`, Warm Gold `#c59b27`, dan Ivory `#f8f9f6`).
- **Icons:** `lucide-react`.
- **Aset Branding:** Logo resmi Marwah Wakaf Indonesia (`Logo.png`, `Logo.ico`).
- **Penyimpanan Data Lokal:** Browser `localStorage` / `IndexedDB` untuk:
  - `localHabitCompletions`: Record harian status penyelesaian habit.
  - `localReflections`: Catatan refleksi harian pengguna (privat, tidak pernah dikirim ke cloud).
  - `localChallenges`: Progres tantangan 7 hari dan 30 hari yang sedang aktif.
  - `localPreferences`: Konfigurasi pengingat sedekah dan preferensi tampilan.
- **Arsitektur Firebase Ready:**
  - Struktur modul data campaign dan konten dibuat serasi dengan skema Firestore `campaigns`, `quranContent`, `duaContent`, `hadithContent`.
  - Service layer (`src/services/dataService.ts`) menyediakan default data terkurasi dengan switch adapter menuju Firebase Firestore jika kredensial ditambahkan.

---

## 3. Modul & Struktur Halaman

### 3.1 Mobile Container & Navigasi

- **Layout Shell:** Berbasis mobile-first viewport (max-width 480px di desktop dengan styling frame elegan, responsive 100% di smartphone).
- **Header:** Logo Marwah Wakaf Indonesia, Tanggal Hijriah & Masehi, status hari ini.
- **Bottom Navigation Bar:**
  1. `Beranda` (Home)
  2. `Al-Qur'an & Doa` (Ibadah)
  3. `Habit & Refleksi` (Kebiasaan)
  4. `Tantangan` (Program 7/30 Hari)
  5. `Campaign` (Wakaf & Sedekah)

### 3.2 Detail Modul Fitur

1. **Beranda (Home):**
   - Salam personal harian & kalender Hijriah.
   - Kartu "Ayat & Doa Hari Ini" (inspirasi harian).
   - Ringkasan Habit Hari Ini (progres visual lembut tanpa skor angka menghakimi).
   - Banner Program Tantangan Aktif.
   - Pilihan Campaign Kebaikan Marwah (Wakaf / Sedekah).

2. **Al-Qur'an, Doa & Hadits:**
   - **Al-Qur'an Reader:** Daftar surah, pembaca ayat teks Arab indah (font Amiri/LPMQ), transliterasi latin, terjemahan resmi Kemenag, fitur pencarian surah, dan bookmark ayat terakhir dibaca.
   - **Kumpulan Doa Harian:** Doa pagi-petang, doa setelah sholat, doa sehari-hari beserta makna dan konteks pengamalan.
   - **Hadits Pilihan:** Teks hadits, terjemahan, dan takhrij/sumber kitab shahih (HR. Bukhari, Muslim, Abu Dawud, dll).

3. **Habit Tracker & Refleksi Harian:**
   - Checklist harian interaktif: Sholat 5 Waktu, Sholat Dhuha, Tahajud/Qiyamul Lail, Sedekah Subuh, Membaca Al-Qur'an, Dzikir Pagi/Petang.
   - Pengguna dapat menambah kebiasaan kustom baru.
   - Kalender riwayat konsistensi mingguan.
   - **Refleksi Harian:** Prompt pertanyaan harian (contoh: *"Kebaikan apa yang paling membuat hatimu tenang hari ini?"*) dengan textarea catatan privat, tersimpan aman di perangkat lokal.

4. **Tantangan Kebaikan (7 Hari & 30 Hari):**
   - Pilihan program:
     - *Tantangan 7 Hari Pemula Kebaikan* (Membangun ritme harian).
     - *Tantangan 30 Hari Istiqomah Muslim* (Rutinitas mendalam).
   - Setiap hari memuat misi kebaikan realistis (spiritual, sosial, bakti keluarga).
   - Tombol "Tandai Selesai", kartu apresiasi lembut setelah menyelesaikan hari.

5. **Campaign Donasi & Wakaf Marwah:**
   - Listing campaign terverifikasi (Kategori: Wakaf Pembangunan, Infak Beras Santri, Sedekah Qur'an, dll).
   - Halaman detail campaign: Foto dokumentasi, deskripsi program, penerima manfaat, dan status program.
   - **Dialog Donasi Manual:**
     - Pilihan Metode: Transfer Bank (Bank Syariah Indonesia / Bank Mandiri) & QRIS Marwah.
     - Tombol interaktif "Salin Nomor Rekening" dengan notifikasi feedback instan.
     - Tampilan QRIS statis yang dapat diperbesar dan disimpan.
     - **Disclaimer Wajib:** Penegasan resmi bahwa transfer dilakukan manual di m-banking/e-wallet pengguna di luar aplikasi.
     - Tombol "Bagikan Program" (Web Share API / Salin Tautan).

6. **Pengaturan & Manajemen Data:**
   - Pengaturan Pengingat Sedekah Lokal (pilihan waktu pagi/siang/sore, sakelar aktif/nonaktif).
   - Hak Privasi: Tombol "Hapus Semua Data Lokal" (Reset progres & catatan refleksi).
   - Mode Admin / Pratinjau: Simulasi pengelolaan konten campaign bagi pengurus Marwah.

---

## 4. Keamanan, Etika & Kepatuhan BRD

- **Tanpa Penilaian Kesalehan:** Tidak ada sistem ranking, leaderboard, atau poin kompetitif.
- **Privasi Terjaga:** Catatan refleksi dan data habit murni berada di browser pengguna (`localStorage`).
- **Kepatuhan Finansial:** Tidak mengklaim verifikasi otomatis jika pembayaran belum divalidasi oleh sistem perbankan resmi Marwah.
- **Validasi Konten Agama:** Menggunakan teks Al-Qur'an standar Kemenag RI dan hadits dengan nomor perawi teruji.

---

## 5. Rencana Pengujian (Acceptance Criteria)

1. Pembaca Al-Qur'an dapat menampilkan surah, teks Arab, dan terjemahan dengan presisi.
2. Habit checklist dapat dicentang, disimpan di `localStorage`, dan kembali terbaca saat aplikasi di-refresh.
3. Fitur Refleksi dapat menyimpan dan menghapus catatan tanpa error.
4. Tantangan 7 hari dan 30 hari dapat dimulai dan mencatat progres harian.
5. Nomor rekening pada modul donasi dapat disalin ke clipboard dengan sekali klik.
6. Layout tampil proporsional, responsif, dan elegan baik di mobile view maupun desktop.
