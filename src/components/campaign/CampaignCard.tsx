import React from 'react';
import { MapPin, Users, HeartHandshake } from 'lucide-react';
import { Campaign } from '../../types';

interface CampaignCardProps {
  campaign: Campaign;
  onDonate: (campaign: Campaign) => void;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, onDonate }) => {
  const percent = campaign.targetAmount && campaign.collectedAmount
    ? Math.min(100, Math.round((campaign.collectedAmount / campaign.targetAmount) * 100))
    : null;

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      {/* Cover Image */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
        <img
          src={campaign.imageUrl}
          alt={campaign.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = './wakaf-sumur-bor.jpg';
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span
          className="badge badge-gold"
          style={{ position: 'absolute', top: '12px', left: '12px' }}
        >
          {campaign.category.toUpperCase()}
        </span>
      </div>

      {/* Info Container */}
      <div style={{ padding: '16px' }}>
        <h4 style={{ fontSize: '1.02rem', fontWeight: 700, margin: '0 0 6px 0', color: 'var(--primary-900)', lineHeight: '1.4' }}>
          {campaign.title}
        </h4>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.4' }}>
          {campaign.summary}
        </p>

        {campaign.location && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '12px' }}>
            <MapPin size={13} /> {campaign.location}
            {campaign.donorCount && (
              <>
                <span style={{ margin: '0 4px' }}>•</span>
                <Users size={13} /> {campaign.donorCount} Donatur
              </>
            )}
          </div>
        )}

        {percent !== null && (
          <div style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px', color: 'var(--text-muted)' }}>
              <span>Terkumpul: <strong>Rp {campaign.collectedAmount?.toLocaleString('id-ID')}</strong></span>
              <span>{percent}%</span>
            </div>
            <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--primary-100)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
              <div style={{ width: `${percent}%`, height: '100%', backgroundColor: 'var(--primary-600)', borderRadius: 'var(--radius-full)' }} />
            </div>
          </div>
        )}

        <button
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => onDonate(campaign)}
        >
          <HeartHandshake size={16} />
          <span>Donasi Sekarang & Salin Rekening</span>
        </button>
      </div>
    </div>
  );
};
