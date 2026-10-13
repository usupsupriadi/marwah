import React from 'react';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { DEFAULT_HABITS } from '../../data/habitData';
import { storageService, getTodayKey } from '../../services/storageService';

interface QuickHabitSummaryProps {
  onOpenHabits: () => void;
  onRefresh?: () => void;
}

export const QuickHabitSummary: React.FC<QuickHabitSummaryProps> = ({ onOpenHabits }) => {
  const completedIds = storageService.getHabitCompletions(getTodayKey());
  const defaultHabits = DEFAULT_HABITS.filter(h => h.isDefault);
  const totalCount = defaultHabits.length;
  const doneCount = defaultHabits.filter(h => completedIds.includes(h.id)).length;
  const percentage = Math.round((doneCount / totalCount) * 100);

  return (
    <div className="card">
      <div className="card-title-row">
        <h3 className="card-title">
          <CheckCircle2 size={18} color="var(--primary-700)" />
          Kebiasaan Hari Ini
        </h3>
        <span className="badge badge-green">
          {doneCount} / {totalCount} Selesai
        </span>
      </div>

      <div style={{ marginBottom: '14px' }}>
        <div style={{
          width: '100%',
          height: '8px',
          backgroundColor: 'var(--primary-100)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: 'var(--primary-600)',
            borderRadius: 'var(--radius-full)',
            transition: 'width 0.3s ease'
          }} />
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px' }}>
          {doneCount === 0
            ? 'Awali hari dengan langkah kebaikan kecil. Setiap amalan bermakna.'
            : doneCount === totalCount
            ? 'Alhamdulillah, seluruh amalan harianmu telah tertunai hari ini!'
            : `Alhamdulillah, ${doneCount} kebaikan telah kamu rawat hari ini. Terus istiqomah.`}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
        {defaultHabits.slice(0, 4).map(habit => {
          const isDone = completedIds.includes(habit.id);
          return (
            <div
              key={habit.id}
              style={{
                fontSize: '0.76rem',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: isDone ? 'var(--primary-100)' : '#f1f4f1',
                color: isDone ? 'var(--primary-900)' : 'var(--text-muted)',
                fontWeight: isDone ? 600 : 500,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                border: isDone ? '1px solid var(--primary-500)' : '1px solid transparent'
              }}
            >
              {isDone ? '✓ ' : '○ '}{habit.title.split(' ')[0]}
            </div>
          );
        })}
      </div>

      <button
        className="btn-secondary"
        style={{ width: '100%', justifyContent: 'space-between' }}
        onClick={onOpenHabits}
      >
        <span>Lihat & Checklist Amalan</span>
        <ChevronRight size={16} />
      </button>
    </div>
  );
};
