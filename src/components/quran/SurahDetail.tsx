import React, { useState, useEffect } from 'react';
import { ArrowLeft, Bookmark, Copy, Check, Info } from 'lucide-react';
import { FEATURED_SURAHS, SURAH_METADATA_LIST } from '../../data/quranData';
import { Surah } from '../../types';
import { storageService } from '../../services/storageService';

interface SurahDetailProps {
  surahId: number;
  onBack: () => void;
}

export const SurahDetail: React.FC<SurahDetailProps> = ({ surahId, onBack }) => {
  const [copiedAyah, setCopiedAyah] = useState<number | null>(null);
  const [bookmarkedAyah, setBookmarkedAyah] = useState<number | null>(null);

  // Check if we have bundled full content
  const featured = FEATURED_SURAHS.find(s => s.id === surahId);
  const meta = SURAH_METADATA_LIST.find(s => s.id === surahId);

  // Bookmark check
  useEffect(() => {
    const b = storageService.getBookmarkAyah();
    if (b && b.surahNumber === surahId) {
      setBookmarkedAyah(b.ayahNumber);
    }
  }, [surahId]);

  const handleBookmark = (ayahNumber: number, surahName: string) => {
    storageService.saveBookmarkAyah({
      surahNumber: surahId,
      ayahNumber,
      surahName
    });
    setBookmarkedAyah(ayahNumber);
  };

  const handleCopy = (ayah: { number: number; arabic: string; translation: string }, surahName: string) => {
    const text = `${ayah.arabic}\n\n"${ayah.translation}"\n(QS. ${surahName}: ${ayah.number})`;
    navigator.clipboard.writeText(text);
    setCopiedAyah(ayah.number);
    setTimeout(() => setCopiedAyah(null), 2000);
  };

  const surahName = featured ? featured.name : meta?.name || `Surah ${surahId}`;
  const arabicName = featured ? featured.arabicName : meta?.arabicName || '';
  const meaning = featured ? featured.meaning : meta?.meaning || '';
  const ayahCount = featured ? featured.ayahCount : meta?.ayahCount || 0;

  return (
    <div>
      {/* Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--primary-800)'
          }}
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)' }}>
            {surahName}
          </h3>
          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {meaning} • {ayahCount} Ayat
          </p>
        </div>
      </div>

      {/* Surah Banner Card */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, var(--primary-900) 0%, var(--primary-800) 100%)',
          color: '#ffffff',
          textAlign: 'center',
          padding: '24px 16px',
          border: 'none',
          position: 'relative'
        }}
      >
        <span className="badge badge-gold" style={{ marginBottom: '8px' }}>
          SURAH KE-{surahId}
        </span>
        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-arabic)', margin: '4px 0' }}>
          {arabicName}
        </h2>
        <p style={{ fontSize: '0.85rem', color: '#a7f3d0', margin: 0 }}>
          {meaning}
        </p>

        {surahId !== 9 && (
          <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <p className="arabic-text" style={{ color: '#ffffff', fontSize: '1.45rem', padding: 0 }}>
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>
        )}
      </div>

      {/* Ayahs Display */}
      {featured && featured.ayahs.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {featured.ayahs.map(ayah => {
            const isBookmarked = bookmarkedAyah === ayah.number;
            const isCopied = copiedAyah === ayah.number;

            return (
              <div
                key={ayah.number}
                className="card"
                style={{
                  padding: '16px',
                  border: isBookmarked ? '1.5px solid var(--primary-500)' : '1px solid var(--border-subtle)',
                  backgroundColor: isBookmarked ? 'var(--primary-50)' : 'var(--bg-surface)'
                }}
              >
                {/* Ayah Number & Actions Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-100)',
                      color: 'var(--primary-800)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {ayah.number}
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      onClick={() => handleCopy(ayah, surahName)}
                      title="Salin Ayat"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isCopied ? 'var(--success)' : 'var(--text-light)',
                        cursor: 'pointer',
                        padding: '4px'
                      }}
                    >
                      {isCopied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                    <button
                      onClick={() => handleBookmark(ayah.number, surahName)}
                      title="Tandai Terakhir Dibaca"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isBookmarked ? 'var(--primary-700)' : 'var(--text-light)',
                        cursor: 'pointer',
                        padding: '4px'
                      }}
                    >
                      <Bookmark size={16} fill={isBookmarked ? 'var(--primary-700)' : 'none'} />
                    </button>
                  </div>
                </div>

                {/* Arabic Text */}
                <p className="arabic-text" style={{ fontSize: '1.6rem', margin: '4px 0 10px 0' }}>
                  {ayah.arabic}
                </p>

                {/* Transliteration */}
                {ayah.transliteration && (
                  <p className="transliteration-text">
                    {ayah.transliteration}
                  </p>
                )}

                {/* Indonesian Translation */}
                <p className="translation-text">
                  {ayah.translation}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="card" style={{ textAlign: 'center', padding: '30px 16px' }}>
          <Info size={32} color="var(--primary-600)" style={{ marginBottom: '8px' }} />
          <h4 style={{ margin: '0 0 6px 0', color: 'var(--primary-900)' }}>
            Pustaka Surah {surahName}
          </h4>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            Surah {surahName} terdiri dari {ayahCount} ayat. Pada versi MVP v2.0, surah-surah utama pilihan (Al-Fatihah, Al-Mulk, Ad-Duha, Al-Ikhlas, Al-Falaq, An-Nas) telah dibundel penuh teks Arab & terjemahan Kemenag RI offline.
          </p>
        </div>
      )}
    </div>
  );
};
