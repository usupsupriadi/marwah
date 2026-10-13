import React from 'react';
import { DailyInspirationCard } from './DailyInspirationCard';
import { QuickHabitSummary } from './QuickHabitSummary';
import { ChallengeBanner } from './ChallengeBanner';
import { CampaignSpotlight } from './CampaignSpotlight';
import { TabType, Campaign } from '../../types';

interface HomeViewProps {
  onNavigateTab: (tab: TabType) => void;
  onSelectCampaign: (campaign: Campaign) => void;
  onSelectSurah: (surahId: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateTab,
  onSelectCampaign,
  onSelectSurah
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <DailyInspirationCard
        onOpenQuran={(surahId) => onSelectSurah(surahId || 1)}
        onOpenDua={() => onNavigateTab('quran')}
      />

      <QuickHabitSummary
        onOpenHabits={() => onNavigateTab('habit')}
      />

      <ChallengeBanner
        onOpenChallenge={() => onNavigateTab('challenge')}
      />

      <CampaignSpotlight
        onOpenCampaigns={() => onNavigateTab('campaign')}
        onSelectCampaign={onSelectCampaign}
      />
    </div>
  );
};
