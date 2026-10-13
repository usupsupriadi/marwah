import React, { useState } from 'react';
import { HeartHandshake, ShieldCheck } from 'lucide-react';
import { CampaignCard } from './CampaignCard';
import { DonationInstructionModal } from './DonationInstructionModal';
import { MARWAH_CAMPAIGNS } from '../../data/campaignData';
import { Campaign } from '../../types';

interface CampaignViewProps {
  selectedCampaignDirect?: Campaign | null;
}

export const CampaignView: React.FC<CampaignViewProps> = ({ selectedCampaignDirect = null }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'wakaf' | 'infak' | 'sedekah'>('all');
  const [activeModalCampaign, setActiveModalCampaign] = useState<Campaign | null>(selectedCampaignDirect);

  const categories = [
    { id: 'all', label: 'Semua Program' },
    { id: 'wakaf', label: 'Wakaf' },
    { id: 'sedekah', label: 'Sedekah' },
    { id: 'infak', label: 'Infak' },
  ];

  const filteredCampaigns = MARWAH_CAMPAIGNS.filter(c => {
    if (activeCategory === 'all') return true;
    return c.category === activeCategory;
  });

  return (
    <div>
      {/* Title & Trust Header */}
      <div style={{ marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 className="card-title" style={{ fontSize: '1.1rem' }}>
            <HeartHandshake size={20} color="var(--primary-700)" />
            Katalog Kebaikan Marwah
          </h3>
          <span className="badge badge-green">
            <ShieldCheck size={12} /> Terverifikasi
          </span>
        </div>
        <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Salurkan sedekah dan wakaf produktif melalui rekening resmi Marwah Wakaf Indonesia.
        </p>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '14px' }}>
        {categories.map(cat => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                border: isActive ? 'none' : '1px solid var(--border-subtle)',
                backgroundColor: isActive ? 'var(--primary-800)' : 'var(--bg-surface)',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Campaigns Listing */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {filteredCampaigns.map(camp => (
          <CampaignCard
            key={camp.id}
            campaign={camp}
            onDonate={(c) => setActiveModalCampaign(c)}
          />
        ))}
      </div>

      {/* Donation Manual Modal */}
      <DonationInstructionModal
        campaign={activeModalCampaign}
        isOpen={Boolean(activeModalCampaign)}
        onClose={() => setActiveModalCampaign(null)}
      />
    </div>
  );
};
