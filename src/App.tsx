import React, { useState } from 'react';
import { MobileShell } from './components/layout/MobileShell';
import { HomeView } from './components/home/HomeView';
import { QuranView } from './components/quran/QuranView';
import { HabitView } from './components/habit/HabitView';
import { ChallengeView } from './components/challenge/ChallengeView';
import { CampaignView } from './components/campaign/CampaignView';
import { SettingsView } from './components/settings/SettingsView';
import { TabType, Campaign } from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [selectedSurahId, setSelectedSurahId] = useState<number | null>(null);

  const handleSelectCampaign = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setActiveTab('campaign');
  };

  const handleSelectSurah = (surahId: number) => {
    setSelectedSurahId(surahId);
    setActiveTab('quran');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            onNavigateTab={(tab) => {
              setActiveTab(tab);
            }}
            onSelectCampaign={handleSelectCampaign}
            onSelectSurah={handleSelectSurah}
          />
        );
      case 'quran':
        return <QuranView initialSurahId={selectedSurahId} />;
      case 'habit':
        return <HabitView />;
      case 'challenge':
        return <ChallengeView />;
      case 'campaign':
        return <CampaignView selectedCampaignDirect={selectedCampaign} />;
      case 'settings':
        return <SettingsView />;
      default:
        return null;
    }
  };

  return (
    <MobileShell
      activeTab={activeTab}
      onTabChange={(tab) => {
        setSelectedCampaign(null);
        setSelectedSurahId(null);
        setActiveTab(tab);
      }}
      onOpenSettings={() => setActiveTab('settings')}
    >
      {renderContent()}
    </MobileShell>
  );
};

export default App;
