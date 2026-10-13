import React, { useState } from 'react';
import { Search, Bookmark, ChevronRight } from 'lucide-react';
import { SURAH_METADATA_LIST, FEATURED_SURAHS } from '../../data/quranData';
import { storageService } from '../../services/storageService';

interface SurahListProps {
  onSelectSurah: (surahId: number) => void;
}

export const SurahList: React.FC<SurahListProps> = ({ onSelectSurah }) => {
  const [search, setSearch] = useState('');
  const bookmark = storageService.getBookmarkAyah();

  const filtered = SURAH_METADATA_LIST.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.meaning.toLowerCase().includes(search.toLowerCase()) ||
    s.id.toString() === search.trim()
  );

  return (
    <div>
      {/* Search Bar */}
      <div style={{ position: 'relative', marginBottom: '14px' }}>
        <input
          type="text"
          placeholder="Cari surah (misal: Al-Kahf, Yasin, 67)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 14px 12px 42px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface)',
            fontSize: '0.9rem',
            color: 'var(--text-main)',
            outline: 'none'
          }}
        />
        <Search
          size={18}
          color="var(--text-light)"
          style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
        />
      </div>

      {/* Last Read / Bookmark Banner */}
      {bookmark && (
        <div
          className="card"
          style={{
            backgroundColor: 'var(--primary-50)',
            border: '1px solid var(--primary-100)',
            padding: '12px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          onClick={() => onSelectSurah(bookmark.surahNumber)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Bookmark size={20} color="var(--primary-700)" />
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontWeight: 600 }}>
                TERAKHIR DIBACA
              </span>
              <h4 style={{ margin: 0, fontSize: '0.92rem', color: 'var(--primary-900)', fontWeight: 700 }}>
                {bookmark.surahName} : Ayat {bookmark.ayahNumber}
              </h4>
            </div>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--primary-700)', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
            Lanjut <ChevronRight size={14} />
          </span>
        </div>
      )}

      {/* Surah List Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filtered.map(surah => {
          const isFeatured = FEATURED_SURAHS.some(f => f.id === surah.id);
          return (
            <div
              key={surah.id}
              onClick={() => onSelectSurah(surah.id)}
              className="card"
              style={{
                margin: 0,
                padding: '12px 14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isFeatured ? 'var(--primary-100)' : '#f1f4f1',
                    color: isFeatured ? 'var(--primary-800)' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}
                >
                  {surah.id}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.92rem', fontWeight: 700, color: 'var(--primary-900)' }}>
                    {surah.name}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {surah.meaning} • {surah.ayahCount} Ayat
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="arabic-text" style={{ fontSize: '1.25rem', padding: 0 }}>
                  {surah.arabicName}
                </span>
                <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-light)' }}>
                  {surah.revelationType}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
