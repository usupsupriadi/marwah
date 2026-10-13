import React, { useState } from 'react';
import { BookOpen, Sparkles, ChevronRight } from 'lucide-react';
import { FEATURED_SURAHS } from '../../data/quranData';
import { DAILY_DUAS } from '../../data/duaHadithData';

interface DailyInspirationCardProps {
  onOpenQuran: (surahId?: number) => void;
  onOpenDua: () => void;
}

export const DailyInspirationCard: React.FC<DailyInspirationCardProps> = ({
  onOpenQuran,
  onOpenDua
}) => {
  const [tab, setTab] = useState<'ayah' | 'dua'>('ayah');

  // Daily pick
  const ayahToday = FEATURED_SURAHS[0].ayahs[1]; // Al-Fatihah: 2
  const duaToday = DAILY_DUAS[0]; // Doa petunjuk hati

  return (
    <div className="card" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f4faf6 100%)' }}>
      <div className="card-title-row">
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            className={`btn-secondary ${tab === 'ayah' ? 'active' : ''}`}
            style={{
              padding: '4px 10px',
              fontSize: '0.78rem',
              backgroundColor: tab === 'ayah' ? 'var(--primary-800)' : 'transparent',
              color: tab === 'ayah' ? '#ffffff' : 'var(--text-muted)',
              border: tab === 'ayah' ? 'none' : '1px solid var(--border-subtle)'
            }}
            onClick={() => setTab('ayah')}
          >
            <BookOpen size={14} /> Ayat Hari Ini
          </button>
          <button
            className={`btn-secondary ${tab === 'dua' ? 'active' : ''}`}
            style={{
              padding: '4px 10px',
              fontSize: '0.78rem',
              backgroundColor: tab === 'dua' ? 'var(--primary-800)' : 'transparent',
              color: tab === 'dua' ? '#ffffff' : 'var(--text-muted)',
              border: tab === 'dua' ? 'none' : '1px solid var(--border-subtle)'
            }}
            onClick={() => setTab('dua')}
          >
            <Sparkles size={14} /> Doa Harian
          </button>
        </div>
        <span className="badge badge-gold">Inspirasi Harian</span>
      </div>

      {tab === 'ayah' ? (
        <div>
          <p className="arabic-text" style={{ fontSize: '1.5rem', lineHeight: '2.2' }}>
            {ayahToday.arabic}
          </p>
          <p className="transliteration-text">{ayahToday.transliteration}</p>
          <p className="translation-text">"{ayahToday.translation}"</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>
              QS. Al-Fatihah: Ayat {ayahToday.number}
            </span>
            <button
              onClick={() => onOpenQuran(1)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary-700)',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                gap: '2px'
              }}
            >
              Baca Surah Lengkap <ChevronRight size={14} />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '4px' }}>
            {duaToday.title}
          </h4>
          <p className="arabic-text" style={{ fontSize: '1.4rem' }}>
            {duaToday.arabic}
          </p>
          <p className="transliteration-text">{duaToday.transliteration}</p>
          <p className="translation-text">"{duaToday.translation}"</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>
              {duaToday.source}
            </span>
            <button
              onClick={onOpenDua}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary-700)',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                gap: '2px'
              }}
            >
              Kumpulan Doa <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
