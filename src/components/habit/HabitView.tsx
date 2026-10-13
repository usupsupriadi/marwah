import React, { useState } from 'react';
import { Sparkles, MessageSquareHeart, Plus, Lock } from 'lucide-react';
import { HabitItem } from './HabitItem';
import { WeeklyConsistencyTracker } from './WeeklyConsistencyTracker';
import { DailyReflectionModal } from './DailyReflectionModal';
import { DEFAULT_HABITS } from '../../data/habitData';
import { storageService, getTodayKey } from '../../services/storageService';

export const HabitView: React.FC = () => {
  const [completedIds, setCompletedIds] = useState<string[]>(() =>
    storageService.getHabitCompletions(getTodayKey())
  );
  const [customHabits, setCustomHabits] = useState(() =>
    storageService.getCustomHabits()
  );
  const [isReflectionOpen, setIsReflectionOpen] = useState(false);
  const [newHabitTitle, setNewHabitTitle] = useState('');
  const [isAddingHabit, setIsAddingHabit] = useState(false);

  const allHabits = [...DEFAULT_HABITS, ...customHabits];

  const handleToggle = (id: string) => {
    const updated = storageService.toggleHabitCompletion(id, getTodayKey());
    setCompletedIds(updated);
  };

  const handleAddCustomHabit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabitTitle.trim()) return;
    const updated = storageService.addCustomHabit(newHabitTitle.trim(), 'sunnah');
    setCustomHabits(updated);
    setNewHabitTitle('');
    setIsAddingHabit(false);
  };

  const existingReflection = storageService.getReflection(getTodayKey());

  return (
    <div>
      {/* 7-Day Consistency Tracker */}
      <WeeklyConsistencyTracker />

      {/* Reflection Journal Trigger Banner */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, #fefcf3 0%, #fdf6dc 100%)',
          border: '1px solid var(--gold-400)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '14px 16px',
          marginBottom: '16px'
        }}
        onClick={() => setIsReflectionOpen(true)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--gold-100)',
              color: 'var(--gold-800)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <MessageSquareHeart size={20} />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '0.92rem', color: 'var(--gold-800)', fontWeight: 700 }}>
              {existingReflection ? 'Catatan Refleksimu Hari Ini' : 'Tuliskan Refleksi Hatimu Hari Ini'}
            </h4>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {existingReflection
                ? `"${existingReflection.note.slice(0, 45)}..."`
                : 'Satu menit jeda bersyukur & introspeksi diri'}
            </p>
          </div>
        </div>

        <button
          className="btn-gold"
          style={{ padding: '6px 12px', fontSize: '0.78rem' }}
          onClick={(e) => {
            e.stopPropagation();
            setIsReflectionOpen(true);
          }}
        >
          {existingReflection ? 'Ubah' : 'Tulis'}
        </button>
      </div>

      {/* Habits Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div>
          <h3 className="card-title" style={{ fontSize: '1.05rem' }}>
            Checklist Rutinitas Harian
          </h3>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Lock size={12} /> Data tersimpan privat di perangkat ini
          </span>
        </div>

        <button
          className="btn-secondary"
          style={{ padding: '6px 12px', fontSize: '0.75rem' }}
          onClick={() => setIsAddingHabit(!isAddingHabit)}
        >
          <Plus size={14} /> Tambah
        </button>
      </div>

      {/* Add Custom Habit Form */}
      {isAddingHabit && (
        <form onSubmit={handleAddCustomHabit} className="card" style={{ padding: '12px 14px', marginBottom: '14px' }}>
          <input
            type="text"
            placeholder="Tulis nama kebiasaan baru (misal: Dzikir Petang)..."
            value={newHabitTitle}
            onChange={(e) => setNewHabitTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '10px',
              fontSize: '0.88rem'
            }}
            autoFocus
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.78rem' }}
              onClick={() => setIsAddingHabit(false)}
            >
              Batal
            </button>
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '6px 12px', fontSize: '0.78rem' }}
            >
              Simpan Kebiasaan
            </button>
          </div>
        </form>
      )}

      {/* Habit Items List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {allHabits.map(habit => (
          <HabitItem
            key={habit.id}
            habit={habit}
            isCompleted={completedIds.includes(habit.id)}
            onToggle={() => handleToggle(habit.id)}
          />
        ))}
      </div>

      {/* Daily Reflection Modal */}
      <DailyReflectionModal
        isOpen={isReflectionOpen}
        onClose={() => setIsReflectionOpen(false)}
      />
    </div>
  );
};
