import React, { useState, useEffect, useRef } from 'react';
import { HeartHandshake, ChevronRight, ChevronLeft, MapPin, Users } from 'lucide-react';
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
  const campaigns = MARWAH_CAMPAIGNS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide every 5 seconds unless hovered/interacting
  useEffect(() => {
    if (isPaused || campaigns.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % campaigns.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, campaigns.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % campaigns.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + campaigns.length) % campaigns.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const current = campaigns[currentIndex];
  const progressPercent = current.targetAmount && current.collectedAmount
    ? Math.min(100, Math.round((current.collectedAmount / current.targetAmount) * 100))
    : null;

  return (
    <div
      className="card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ padding: '16px' }}
    >
      {/* Title & All Campaigns Link */}
      <div className="card-title-row" style={{ marginBottom: '12px' }}>
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

      {/* Slider Viewport Container */}
      <div
        style={{
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          position: 'relative',
          backgroundColor: '#ffffff'
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide Image with Overlay Badges and Nav Buttons */}
        <div style={{ position: 'relative', height: '150px', overflow: 'hidden' }}>
          <img
            src={current.imageUrl}
            alt={current.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.3s ease'
            }}
          />

          {/* Category Pill */}
          <span
            className="badge badge-gold"
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              zIndex: 2,
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
            }}
          >
            {current.category.toUpperCase()}
          </span>

          {/* Slide Counter Pill */}
          <span
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 2,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#ffffff',
              fontSize: '0.7rem',
              fontWeight: 600,
              padding: '3px 8px',
              borderRadius: 'var(--radius-full)',
              backdropFilter: 'blur(4px)'
            }}
          >
            {currentIndex + 1} / {campaigns.length}
          </span>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Campaign Sebelumnya"
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              color: 'var(--primary-900)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              zIndex: 3,
              backdropFilter: 'blur(4px)'
            }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Campaign Selanjutnya"
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              color: 'var(--primary-900)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              zIndex: 3,
              backdropFilter: 'blur(4px)'
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Slide Information */}
        <div style={{ padding: '14px' }}>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              margin: '0 0 6px 0',
              color: 'var(--primary-900)',
              lineHeight: '1.35'
            }}
          >
            {current.title}
          </h4>

          <p
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              margin: '0 0 10px 0',
              lineHeight: '1.4'
            }}
          >
            {current.summary}
          </p>

          {current.location && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                color: 'var(--text-light)',
                marginBottom: '10px'
              }}
            >
              <MapPin size={12} /> {current.location}
              {current.donorCount && (
                <>
                  <span style={{ margin: '0 4px' }}>•</span>
                  <Users size={12} /> {current.donorCount} Donatur
                </>
              )}
            </div>
          )}

          {progressPercent !== null && (
            <div style={{ marginBottom: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  marginBottom: '4px',
                  color: 'var(--text-muted)'
                }}
              >
                <span>
                  Terkumpul: <strong>Rp {current.collectedAmount?.toLocaleString('id-ID')}</strong>
                </span>
                <span>{progressPercent}%</span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '6px',
                  backgroundColor: 'var(--primary-100)',
                  borderRadius: 'var(--radius-full)',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${progressPercent}%`,
                    height: '100%',
                    backgroundColor: 'var(--primary-600)',
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 0.4s ease'
                  }}
                />
              </div>
            </div>
          )}

          <button
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => onSelectCampaign(current)}
          >
            Donasi Sekarang & Salin Rekening
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          marginTop: '12px'
        }}
      >
        {campaigns.map((c, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={c.id}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Pilih slide ${index + 1}`}
              style={{
                width: isActive ? '20px' : '6px',
                height: '6px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: isActive ? 'var(--primary-700)' : '#d1d8d3',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
