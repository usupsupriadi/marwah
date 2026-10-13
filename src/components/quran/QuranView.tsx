import React, { useState } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { SurahList } from './SurahList';
import { SurahDetail } from './SurahDetail';
import { DuaHadithView } from './DuaHadithView';

interface QuranViewProps {
  initialSurahId?: number | null;
}

export const QuranView: React.FC<QuranViewProps> = ({ initialSurahId = null }) => {
  const [activeSegment, setActiveSegment] = useState<'quran' | 'dua'>('quran');
  const [selectedSurahId, setSelectedSurahId] = useState<number | null>(initialSurahId);

  return (
    <div>
      {/* Top Segment Controller */}
      <div
        style={{
          display: 'flex',
          backgroundColor: '#e8ede9',
          padding: '4px',
          borderRadius: 'var(--radius-md)',
          marginBottom: '16px'
        }}
      >
        <button
          onClick={() => {
            setActiveSegment('quran');
          }}
          style={{
            flex: 1,
            padding: '8px 14px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            backgroundColor: activeSegment === 'quran' ? '#ffffff' : 'transparent',
            color: activeSegment === 'quran' ? 'var(--primary-900)' : 'var(--text-muted)',
            fontWeight: 700,
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: activeSegment === 'quran' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.2s ease'
          }}
        >
          <BookOpen size={16} /> Al-Qur'an
        </button>
        <button
          onClick={() => {
            setActiveSegment('dua');
            setSelectedSurahId(null);
          }}
          style={{
            flex: 1,
            padding: '8px 14px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            backgroundColor: activeSegment === 'dua' ? '#ffffff' : 'transparent',
            color: activeSegment === 'dua' ? 'var(--primary-900)' : 'var(--text-muted)',
            fontWeight: 700,
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: activeSegment === 'dua' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.2s ease'
          }}
        >
          <Sparkles size={16} /> Doa & Hadits
        </button>
      </div>

      {activeSegment === 'quran' ? (
        selectedSurahId ? (
          <SurahDetail surahId={selectedSurahId} onBack={() => setSelectedSurahId(null)} />
        ) : (
          <SurahList onSelectSurah={(id) => setSelectedSurahId(id)} />
        )
      ) : (
        <DuaHadithView />
      )}
    </div>
  );
};
