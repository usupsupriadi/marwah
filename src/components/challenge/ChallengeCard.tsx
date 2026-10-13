import React from 'react';
import { Trophy, CheckCircle, ArrowRight } from 'lucide-react';
import { Challenge } from '../../types';

interface ChallengeCardProps {
  challenge: Challenge;
  isActive: boolean;
  completedDaysCount: number;
  onSelect: () => void;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challenge,
  isActive,
  completedDaysCount,
  onSelect
}) => {
  const percent = Math.round((completedDaysCount / challenge.durationDays) * 100);

  return (
    <div
      className="card"
      style={{
        border: isActive ? '1.5px solid var(--primary-600)' : '1px solid var(--border-subtle)',
        backgroundColor: isActive ? 'var(--primary-50)' : 'var(--bg-surface)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span className="badge badge-gold">
          <Trophy size={12} /> {challenge.durationDays} Hari Program
        </span>
        {isActive && (
          <span className="badge badge-green">
            <CheckCircle size={12} /> Sedang Berjalan
          </span>
        )}
      </div>

      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)', margin: '4px 0 6px 0' }}>
        {challenge.title}
      </h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4', margin: '0 0 14px 0' }}>
        {challenge.description}
      </p>

      {isActive && (
        <div style={{ marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px', color: 'var(--text-muted)' }}>
            <span>Progres: {completedDaysCount} dari {challenge.durationDays} Hari</span>
            <span>{percent}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', backgroundColor: '#e0ece4', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
            <div style={{ width: `${percent}%`, height: '100%', backgroundColor: 'var(--primary-600)', borderRadius: 'var(--radius-full)' }} />
          </div>
        </div>
      )}

      <button
        className={isActive ? 'btn-primary' : 'btn-secondary'}
        style={{ width: '100%', justifyContent: 'center' }}
        onClick={onSelect}
      >
        <span>{isActive ? 'Buka Roadmap Misi Hari Ini' : 'Mulai Program Ini'}</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
};
