import React from 'react';
import { Trophy, ArrowRight, Flame } from 'lucide-react';
import { storageService } from '../../services/storageService';
import { CHALLENGES } from '../../data/challengeData';

interface ChallengeBannerProps {
  onOpenChallenge: () => void;
}

export const ChallengeBanner: React.FC<ChallengeBannerProps> = ({ onOpenChallenge }) => {
  const activeProgress = storageService.getUserChallenge();
  const challenge = activeProgress
    ? CHALLENGES.find(c => c.id === activeProgress.challengeId) || CHALLENGES[0]
    : CHALLENGES[0];

  const completedCount = activeProgress ? activeProgress.completedDays.length : 0;
  const isStarted = Boolean(activeProgress);

  return (
    <div
      className="card"
      style={{
        background: 'linear-gradient(135deg, #1b382b 0%, #0d5c3a 100%)',
        color: '#ffffff',
        border: 'none',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <span className="badge badge-gold">
            <Trophy size={12} /> {challenge.durationDays} Hari Kebaikan
          </span>
          {isStarted && (
            <span style={{ fontSize: '0.75rem', color: '#a7f3d0', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Flame size={14} color="#f59e0b" /> {completedCount} dari {challenge.durationDays} Hari
            </span>
          )}
        </div>

        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '6px 0', color: '#ffffff' }}>
          {challenge.title}
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.82)', margin: '0 0 14px 0', lineHeight: '1.4' }}>
          {isStarted
            ? 'Lanjutkan misi kebaikan hari ini. Kebaikan yang terus dijaga akan membentuk hati yang kokoh.'
            : challenge.tagline}
        </p>

        <button
          className="btn-gold"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={onOpenChallenge}
        >
          <span>{isStarted ? 'Buka Misi Kebaikan Hari Ini' : 'Mulai Tantangan Kebaikan'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
