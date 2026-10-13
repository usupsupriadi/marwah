import { Campaign, DonationMethod } from '../types';

export const MARWAH_CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-1',
    title: 'Wakaf Sumur Bor & Air Bersih Pelosok',
    slug: 'wakaf-sumur-bor-pelosok',
    summary: 'Menghadirkan aliran air bersih berkelanjutan untuk wudhu dan kebutuhan ratusan keluarga di pelosok.',
    description: 'Banyak warga desa dan santri di pelosok Nusantara harus berjalan berkilo-kilo meter demi setetes air bersih. Program Wakaf Sumur Bor Marwah Wakaf Indonesia membangun instalasi sumur bor sedalam 60-80 meter, tandon penampung, dan pipanisasi tempat wudhu warga.',
    category: 'wakaf',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    targetAmount: 50000000,
    collectedAmount: 32450000,
    donorCount: 284,
    isFeatured: true,
    status: 'published',
    beneficiaryInfo: '350 Kepala Keluarga & Jamaah Masjid Al-Ikhlas Pelosok',
    location: 'Gunungkidul & NTT'
  },
  {
    id: 'camp-2',
    title: 'Sedekah Beras & Nutrisi Santri Penghafal Qur\'an',
    slug: 'sedekah-beras-santri-penghafal-quran',
    summary: 'Memenuhi kebutuhan pangan pokok ribuan santri yatim dan dhuafa penghafal Al-Qur\'an.',
    description: 'Santri penghafal Qur\'an berjuang siang dan malam menghafalkan ayat-ayat suci. Marwah Wakaf Indonesia secara rutin menyalurkan beras premium dan lauk bergizi agar mereka dapat belajar dengan sehat dan bertenaga.',
    category: 'sedekah',
    imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    targetAmount: 30000000,
    collectedAmount: 21800000,
    donorCount: 412,
    isFeatured: true,
    status: 'published',
    beneficiaryInfo: '500+ Santri Yatim & Penghafal Qur\'an',
    location: 'Jawa Barat & Jawa Tengah'
  },
  {
    id: 'camp-3',
    title: 'Wakaf Al-Qur\'an Mushaf Standar Kemenag',
    slug: 'wakaf-quran-pelosok',
    summary: 'Distribusi mushaf Al-Qur\'an baru dan layak untuk masjid, surau, dan TPA di daerah terpencil.',
    description: 'Masih banyak surau dan majelis taklim di daerah pelosok yang menggunakan mushaf lapuk dan robek. Wakaf Al-Qur\'an Anda menjadi amal jariyah yang pahalanya terus mengalir setiap kali ayat-ayatnya dilantunkan.',
    category: 'wakaf',
    imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
    targetAmount: 20000000,
    collectedAmount: 18500000,
    donorCount: 310,
    isFeatured: false,
    status: 'published',
    beneficiaryInfo: '1.000 Santri & Jamaah Pengajian Pelosok',
    location: 'Sulawesi & Maluku'
  },
  {
    id: 'camp-4',
    title: 'Infak Tanggap Darurat & Kemanusiaan',
    slug: 'infak-tanggap-darurat',
    summary: 'Bantuan darurat logistik, obat-obatan, dan shelter bagi saudara-saudara tertimpa musibah.',
    description: 'Penyaluran bantuan cepat untuk korban bencana alam dan krisis kemanusiaan. Dana infak dikelola secara transparan dan disalurkan langsung oleh relawan lapangan Marwah.',
    category: 'infak',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    targetAmount: 25000000,
    collectedAmount: 14200000,
    donorCount: 195,
    isFeatured: false,
    status: 'published',
    beneficiaryInfo: 'Warga Terdampak Bencana & Dhuafa',
    location: 'Nasional'
  }
];

export const MARWAH_DONATION_METHODS: DonationMethod = {
  bankAccounts: [
    {
      bankName: 'Bank Syariah Indonesia (BSI)',
      accountNumber: '7200777123',
      accountHolder: 'Yayasan Marwah Wakaf Indonesia',
      bankLogo: 'BSI'
    },
    {
      bankName: 'Bank Mandiri',
      accountNumber: '1310088997766',
      accountHolder: 'Marwah Wakaf Indonesia',
      bankLogo: 'MANDIRI'
    }
  ],
  qrisImageUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=00020101021126590014ID.LINKAJA.WWW011893600911002123456702150000000000000005204581453033605802ID5919MARWAH+WAKAF+INDO6007BANDUNG61054011562070703A016304ABCD',
  qrisMerchantName: 'MARWAH WAKAF INDONESIA (NMID: ID102026888)',
  instructions: [
    'Buka aplikasi m-Banking (BSI Mobile, Livin\' Mandiri, dll) atau e-Wallet favorit Anda.',
    'Pilih menu Transfer Bank dan masukkan nomor rekening di atas, ATAU scan kode QRIS Marwah.',
    'Masukkan nominal donasi terbaik yang ingin Anda salurkan.',
    'Periksa nama penerima: "Yayasan Marwah Wakaf Indonesia".',
    'Selesaikan pembayaran dan simpan bukti transfer untuk ketenangan Anda.'
  ],
  disclaimer: 'Pemberitahuan: Marwah Muslim Daily tidak melakukan penarikan dana langsung atau verifikasi otomatis. Seluruh proses pembayaran dilakukan secara mandiri oleh donatur melalui aplikasi perbankan/e-wallet resmi di luar aplikasi ini.'
};
