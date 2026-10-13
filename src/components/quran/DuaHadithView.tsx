import React, { useState } from 'react';
import { Sparkles, BookOpen, Copy, Check } from 'lucide-react';
import { DAILY_DUAS, SELECTED_HADITHS } from '../../data/duaHadithData';

export const DuaHadithView: React.FC = () => {
  const [subTab, setSubTab] = useState<'dua' | 'hadith'>('dua');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div>
      {/* Sub Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button
          className={`btn-secondary ${subTab === 'dua' ? 'active' : ''}`}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: subTab === 'dua' ? 'var(--primary-800)' : 'var(--bg-surface)',
            color: subTab === 'dua' ? '#ffffff' : 'var(--text-muted)'
          }}
          onClick={() => setSubTab('dua')}
        >
          <Sparkles size={16} /> Kumpulan Doa Mustajab
        </button>
        <button
          className={`btn-secondary ${subTab === 'hadith' ? 'active' : ''}`}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: subTab === 'hadith' ? 'var(--primary-800)' : 'var(--bg-surface)',
            color: subTab === 'hadith' ? '#ffffff' : 'var(--text-muted)'
          }}
          onClick={() => setSubTab('hadith')}
        >
          <BookOpen size={16} /> Hadits Kebaikan
        </button>
      </div>

      {subTab === 'dua' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {DAILY_DUAS.map(dua => {
            const isCopied = copiedId === dua.id;
            return (
              <div key={dua.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <span className="badge badge-gold" style={{ marginBottom: '4px' }}>
                      {dua.category.toUpperCase()}
                    </span>
                    <h4 style={{ margin: '4px 0 0 0', fontSize: '1rem', color: 'var(--primary-900)', fontWeight: 700 }}>
                      {dua.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => handleCopy(dua.id, `${dua.title}\n\n${dua.arabic}\n\n"${dua.translation}"\n(${dua.source})`)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isCopied ? 'var(--success)' : 'var(--text-light)',
                      cursor: 'pointer',
                      padding: '4px'
                    }}
                    title="Salin Doa"
                  >
                    {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                <p className="arabic-text" style={{ fontSize: '1.5rem', margin: '4px 0 10px 0' }}>
                  {dua.arabic}
                </p>

                {dua.transliteration && (
                  <p className="transliteration-text">
                    {dua.transliteration}
                  </p>
                )}

                <p className="translation-text" style={{ marginBottom: '10px' }}>
                  "{dua.translation}"
                </p>

                {dua.context && (
                  <div style={{
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--primary-50)',
                    fontSize: '0.78rem',
                    color: 'var(--primary-800)',
                    marginBottom: '8px'
                  }}>
                    💡 {dua.context}
                  </div>
                )}

                <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontWeight: 600 }}>
                  Sumber: {dua.source}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {SELECTED_HADITHS.map(hadith => {
            const isCopied = copiedId === hadith.id;
            return (
              <div key={hadith.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <span className="badge badge-green" style={{ marginBottom: '4px' }}>
                      {hadith.theme}
                    </span>
                    <h4 style={{ margin: '4px 0 0 0', fontSize: '1rem', color: 'var(--primary-900)', fontWeight: 700 }}>
                      {hadith.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => handleCopy(hadith.id, `${hadith.title}\n\n"${hadith.translation}"\n(${hadith.narrator})`)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isCopied ? 'var(--success)' : 'var(--text-light)',
                      cursor: 'pointer',
                      padding: '4px'
                    }}
                    title="Salin Hadits"
                  >
                    {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                {hadith.arabic && (
                  <p className="arabic-text" style={{ fontSize: '1.45rem', margin: '4px 0 10px 0' }}>
                    {hadith.arabic}
                  </p>
                )}

                <p className="translation-text" style={{ marginBottom: '10px', fontSize: '0.9rem' }}>
                  "{hadith.translation}"
                </p>

                {hadith.significance && (
                  <div style={{
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--gold-50)',
                    fontSize: '0.78rem',
                    color: 'var(--gold-800)',
                    marginBottom: '8px',
                    border: '1px solid var(--gold-400)'
                  }}>
                    ✨ {hadith.significance}
                  </div>
                )}

                <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontWeight: 600 }}>
                  Perawi: {hadith.narrator}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
