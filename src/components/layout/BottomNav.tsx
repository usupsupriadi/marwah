import React from 'react';
import { Home, BookOpen, CheckCircle2, Trophy, HeartHandshake } from 'lucide-react';
import { TabType } from '../../types';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home' as TabType, label: 'Beranda', icon: Home },
    { id: 'quran' as TabType, label: 'Ibadah', icon: BookOpen },
    { id: 'habit' as TabType, label: 'Habit', icon: CheckCircle2 },
    { id: 'challenge' as TabType, label: 'Tantangan', icon: Trophy },
    { id: 'campaign' as TabType, label: 'Wakaf', icon: HeartHandshake },
  ];

  return (
    <nav className="bottom-nav" aria-label="Navigasi Utama">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`nav-tab-item ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
