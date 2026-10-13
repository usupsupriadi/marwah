import React, { useState } from 'react';
import { Trophy, Info } from 'lucide-react';
import { ChallengeCard } from './ChallengeCard';
import { ChallengeProgressDetail } from './ChallengeProgressDetail';
import { CHALLENGES } from '../../data/challengeData';
import { storageService } from '../../services/storageService';
import { UserChallengeProgress } from '../../types';

export const ChallengeView: React.FC = () => {
  const [activeProgress, setActiveProgress] = useState<UserChallengeProgress | null>(() =>
    storageService.getUserChallenge()
  );
  const [inspectingChallengeId, setInspectingChallengeId] = useState<string | null>(() =>
    activeProgress ? activeProgress.challengeId : null
  );

  const handleStart = (challengeId: string) => {
    const started = storageService.startChallenge(challengeId);
    setActiveProgress(started);
    setInspectingChallengeId(challengeId);
  };

  const handleToggleDay = (dayNumber: number) => {
    const updated = storageService.toggleChallengeDay(dayNumber);
    if (updated) {
      setActiveProgress(updated);
    }
  };

  const handleLeave = () => {
    if (window.confirm('Apakah Anda ingin membatalkan keikutsertaan program ini? Progres tersimpan akan dihapus.')) {
      storageService.leaveChallenge();
      setActiveProgress(null);
      setInspectingChallengeId(null);
    }
  };

  const inspectingChallenge = inspectingChallengeId
    ? CHALLENGES.find(c => c.id === inspectingChallengeId)
    : null;

  if (inspectingChallenge && activeProgress && activeProgress.challengeId === inspectingChallenge.id) {
    return (
      <ChallengeProgressDetail
        challenge={inspectingChallenge}
        progress={activeProgress}
        onToggleDay={handleToggleDay}
        onBack={() => setInspectingChallengeId(null)}
        onLeave={handleLeave}
      />
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '14px' }}>
        <h3 className="card-title" style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
          <Trophy size={20} color="var(--gold-600)" />
          Tantangan Kebaikan
        </h3>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Pilih program istiqomah untuk melatih kebiasaan baru secara terstruktur.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {CHALLENGES.map(ch => {
          const isActive = activeProgress?.challengeId === ch.id;
          const completedCount = isActive ? activeProgress.completedDays.length : 0;

          return (
            <ChallengeCard
              key={ch.id}
              challenge={ch}
              isActive={isActive}
              completedDaysCount={completedCount}
              onSelect={() => {
                if (isActive) {
                  setInspectingChallengeId(ch.id);
                } else {
                  handleStart(ch.id);
                }
              }}
            />
          );
        })}
      </div>

      <div
        style={{
          marginTop: '16px',
          padding: '12px 14px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--primary-50)',
          border: '1px solid var(--primary-100)',
          display: 'flex',
          gap: '10px'
        }}
      >
        <Info size={18} color="var(--primary-700)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--primary-900)', lineHeight: '1.4' }}>
          <strong>Prinsip Kebaikan Marwah:</strong> Tantangan ini dirancang untuk menghidupkan semangat kebaikan, bukan beban. Anda bebas berhenti atau berganti program kapan saja tanpa rasa bersalah.
        </p>
      </div>
    </div>
  );
};
