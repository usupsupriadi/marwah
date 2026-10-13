import React from 'react';
import { storageService } from '../../services/storageService';

export const WeeklyConsistencyTracker: React.FC = () => {
  const history = storageService.getHabitHistoryWeek();

  const getDayInitial = (dateKey: string) => {
    const d = new Date(dateKey);
    const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    return days[d.getDay()];
  };

  return (
    <div className="card" style={{ padding: '14px 16px', marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-900)' }}>
          Jejak Kebaikan 7 Hari Terakhir
        </h4>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
          Hadir tanpa menghakimi
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {history.map(item => {
          const hasDone = item.count > 0;
          return (
            <div key={item.dateKey} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: hasDone ? 'var(--primary-700)' : '#f1f4f1',
                  color: hasDone ? '#ffffff' : 'var(--text-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                  boxShadow: hasDone ? '0 2px 8px rgba(18, 121, 76, 0.25)' : 'none'
                }}
              >
                {hasDone ? item.count : '0'}
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {getDayInitial(item.dateKey)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
