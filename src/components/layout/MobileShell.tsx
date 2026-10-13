import React, { ReactNode } from 'react';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import { TabType } from '../../types';

interface MobileShellProps {
  children: ReactNode;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onOpenSettings: () => void;
}

export const MobileShell: React.FC<MobileShellProps> = ({
  children,
  activeTab,
  onTabChange,
  onOpenSettings
}) => {
  return (
    <div className="app-viewport">
      <div className="mobile-shell">
        <Header onOpenSettings={onOpenSettings} />
        <main className="content-scrollable">
          {children}
        </main>
        <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
      </div>
    </div>
  );
};
