import React from 'react';
import { Check, Sparkles, Clock, BookOpen, HeartHandshake, Sun, Moon, Smile } from 'lucide-react';
import { HabitTemplate } from '../../types';

interface HabitItemProps {
  habit: HabitTemplate;
  isCompleted: boolean;
  onToggle: () => void;
  onDelete?: () => void;
}

export const HabitItem: React.FC<HabitItemProps> = ({
  habit,
  isCompleted,
  onToggle,
  onDelete
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock size={18} />;
      case 'BookOpen': return <BookOpen size={18} />;
      case 'HeartHandshake': return <HeartHandshake size={18} />;
      case 'Sun': return <Sun size={18} />;
      case 'Moon': return <Moon size={18} />;
      case 'Smile': return <Smile size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <div
      className="card"
      style={{
        margin: 0,
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        backgroundColor: isCompleted ? 'var(--primary-50)' : 'var(--bg-surface)',
        border: isCompleted ? '1.5px solid var(--primary-500)' : '1px solid var(--border-subtle)',
        cursor: 'pointer',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onClick={onToggle}
    >
      {/* Custom Checkbox Button */}
      <button
        type="button"
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: isCompleted ? 'none' : '2px solid var(--border-subtle)',
          backgroundColor: isCompleted ? 'var(--primary-700)' : 'transparent',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: 0,
          transition: 'all 0.2s ease',
          boxShadow: isCompleted ? '0 2px 8px rgba(18, 121, 76, 0.3)' : 'none'
        }}
      >
        {isCompleted && <Check size={16} strokeWidth={3} />}
      </button>

      {/* Habit Details */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
          <h4
            style={{
              margin: 0,
              fontSize: '0.92rem',
              fontWeight: 700,
              color: isCompleted ? 'var(--primary-900)' : 'var(--text-main)',
              textDecoration: isCompleted ? 'line-through' : 'none'
            }}
          >
            {habit.title}
          </h4>
        </div>
        <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
          {habit.virtue || habit.description}
        </p>
      </div>

      {/* Category Icon Badge */}
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: isCompleted ? 'var(--primary-100)' : '#f1f4f1',
          color: isCompleted ? 'var(--primary-800)' : 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        {getIcon(habit.iconName)}
      </div>
    </div>
  );
};
