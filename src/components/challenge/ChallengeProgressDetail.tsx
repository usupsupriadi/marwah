import React from 'react';
import { ArrowLeft, Check, CheckCircle2, Circle, Sparkles, Award } from 'lucide-react';
import { Challenge, UserChallengeProgress } from '../../types';

interface ChallengeProgressDetailProps {
  challenge: Challenge;
  progress: UserChallengeProgress;
  onToggleDay: (dayNumber: number) => void;
  onBack: () => void;
  onLeave: () => void;
}

export const ChallengeProgressDetail: React.FC<ChallengeProgressDetailProps> = ({
  challenge,
  progress,
  onToggleDay,
  onBack,
  onLeave
}) => {
  const completedCount = progress.completedDays.length;
  const isFinished = completedCount >= challenge.durationDays;

  return (
    <div>
      {/* Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--primary-900)' }}>
              {challenge.title}
            </h3>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {completedCount} dari {challenge.durationDays} Hari Terselesaikan
            </p>
          </div>
        </div>

        <button
          onClick={onLeave}
          style={{
            background: 'none',
            border: 'none',
            color: '#dc2626',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Keluar Program
        </button>
      </div>

      {/* Celebration Banner if finished */}
      {isFinished && (
        <div
          className="card"
          style={{
            background: 'linear-gradient(135deg, #1b382b 0%, #0d5c3a 100%)',
            color: '#ffffff',
            textAlign: 'center',
            padding: '24px 16px',
            border: 'none'
          }}
        >
          <Award size={40} color="#dfb236" style={{ margin: '0 auto 8px auto' }} />
          <h3 style={{ margin: '0 0 6px 0', fontSize: '1.15rem', color: '#ffffff' }}>
            Alhamdulillah, Misi Tuntas!
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
            Semoga setiap tetes kebaikan yang kamu rawat selama {challenge.durationDays} hari ini menjadi amal jariyah dan kebiasaan yang melekat seumur hidup.
          </p>
        </div>
      )}

      {/* Days Roadmap List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {challenge.days.map(dayItem => {
          const isDone = progress.completedDays.includes(dayItem.dayNumber);

          return (
            <div
              key={dayItem.dayNumber}
              className="card"
              style={{
                margin: 0,
                padding: '14px 16px',
                border: isDone ? '1.5px solid var(--primary-500)' : '1px solid var(--border-subtle)',
                backgroundColor: isDone ? 'var(--primary-50)' : 'var(--bg-surface)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: isDone ? 'var(--primary-700)' : '#f1f4f1',
                      color: isDone ? '#ffffff' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}
                  >
                    {dayItem.dayNumber}
                  </span>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-900)' }}>
                    {dayItem.title}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() => onToggleDay(dayItem.dayNumber)}
                  style={{
                    background: isDone ? 'var(--primary-700)' : '#f1f4f1',
                    color: isDone ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {isDone ? (
                    <>
                      <Check size={12} strokeWidth={3} /> Selesai
                    </>
                  ) : (
                    'Tandai Selesai'
                  )}
                </button>
              </div>

              <p style={{ margin: '0 0 8px 0', fontSize: '0.82rem', color: 'var(--text-main)', lineHeight: '1.4' }}>
                {dayItem.description}
              </p>

              <div
                style={{
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isDone ? '#ffffff' : '#f9fbf9',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.78rem',
                  color: 'var(--primary-800)',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Sparkles size={14} color="var(--gold-600)" />
                <strong>Aksi Hari Ini:</strong> {dayItem.actionText}
              </div>

              {dayItem.quranOrHadithRef && (
                <p style={{ margin: '8px 0 0 0', fontSize: '0.7rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
                  📖 {dayItem.quranOrHadithRef}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
