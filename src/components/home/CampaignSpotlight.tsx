import React from 'react';
import { HeartHandshake, ChevronRight, MapPin, Users } from 'lucide-react';
import { MARWAH_CAMPAIGNS } from '../../data/campaignData';
import { Campaign } from '../../types';

interface CampaignSpotlightProps {
  onOpenCampaigns: () => void;
  onSelectCampaign: (campaign: Campaign) => void;
}

export const CampaignSpotlight: React.FC<CampaignSpotlightProps> = ({
  onOpenCampaigns,
  onSelectCampaign
}) => {
  const featured = MARWAH_CAMPAIGNS.find(c => c.isFeatured) || MARWAH_CAMPAIGNS[0];
  const progressPercent = featured.targetAmount && featured.collectedAmount
    ? Math.min(100, Math.round((featured.collectedAmount / featured.targetAmount) * 100))
    : null;

  return (
    <div className="card">
      <div className="card-title-row">
        <h3 className="card-title">
          <HeartHandshake size={18} color="var(--primary-700)" />
          Wakaf & Sedekah Marwah
        </h3>
        <button
          onClick={onOpenCampaigns}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--primary-700)',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}
        >
          Lihat Semua <ChevronRight size={14} />
        </button>
      </div>

      <div
        style={{
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          cursor: 'pointer'
        }}
        onClick={() => onSelectCampaign(featured)}
      >
        <div style={{ position: 'relative', height: '140px' }}>
          <img
            src={featured.imageUrl}
            alt={featured.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <span
            className="badge badge-gold"
            style={{ position: 'absolute', top: '10px', left: '10px' }}
          >
            {featured.category.toUpperCase()}
          </span>
        </div>

        <div style={{ padding: '14px' }}>
          <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 6px 0', color: 'var(--primary-900)' }}>
            {featured.title}
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 10px 0', lineHeight: '1.4' }}>
            {featured.summary}
          </p>

          {featured.location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '8px' }}>
              <MapPin size={12} /> {featured.location}
              {featured.donorCount && (
                <>
                  <span style={{ margin: '0 4px' }}>•</span>
                  <Users size={12} /> {featured.donorCount} Donatur
                </>
              )}
            </div>
          )}

          {progressPercent !== null && (
            <div style={{ marginBottom: '12px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                marginBottom: '4px',
                color: 'var(--text-muted)'
              }}>
                <span>Terkumpul: <strong>Rp {featured.collectedAmount?.toLocaleString('id-ID')}</strong></span>
                <span>{progressPercent}%</span>
              </div>
              <div style={{
                width: '100%',
                height: '6px',
                backgroundColor: 'var(--primary-100)',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  backgroundColor: 'var(--primary-600)',
                  borderRadius: 'var(--radius-full)'
                }} />
              </div>
            </div>
          )}

          <button
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={(e) => {
              e.stopPropagation();
              onSelectCampaign(featured);
            }}
          >
            Donasi Sekarang & Salin Rekening
          </button>
        </div>
      </div>
    </div>
  );
};
