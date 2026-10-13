import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings }) => {
  // Simple format for Indonesian & Hijri dates
  const today = new Date();
  const dateStr = today.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand-wrapper">
          <img src="/Logo.png" alt="Marwah Wakaf Logo" className="brand-logo" />
          <div>
            <h1 className="brand-title">
              Marwah <Sparkles size={16} color="#dfb236" />
            </h1>
            <p className="brand-subtitle">Muslim Daily</p>
          </div>
        </div>

        <div className="date-pill" onClick={onOpenSettings} role="button" title="Buka Pengaturan">
          {dateStr}
        </div>
      </div>

      <p className="header-greeting">
        Assalamu'alaikum, Sahabat Kebaikan ✨
      </p>
    </header>
  );
};
