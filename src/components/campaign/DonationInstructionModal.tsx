import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  QrCode,
  Building,
  AlertCircle,
  Share2,
  ShieldCheck,
  MapPin,
  Users,
  FileText,
  HeartHandshake
} from 'lucide-react';
import { Campaign } from '../../types';
import { MARWAH_DONATION_METHODS } from '../../data/campaignData';

interface DonationInstructionModalProps {
  campaign: Campaign | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DonationInstructionModal: React.FC<DonationInstructionModalProps> = ({
  campaign,
  isOpen,
  onClose
}) => {
  const [method, setMethod] = useState<'bank' | 'qris'>('bank');
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [sharedToast, setSharedToast] = useState(false);

  if (!isOpen || !campaign) return null;

  const percent = campaign.targetAmount && campaign.collectedAmount
    ? Math.min(100, Math.round((campaign.collectedAmount / campaign.targetAmount) * 100))
    : null;

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  const handleShare = async () => {
    const shareData = {
      title: campaign.title,
      text: `Mari bersama mendukung program "${campaign.title}" melalui Marwah Wakaf Indonesia.\n\n${campaign.description}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {}
    } else {
      navigator.clipboard.writeText(`${shareData.text}\nSalurkan donasi: ${shareData.url}`);
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2000);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '2px' }}>
              PANDUAN DONASI & DETAIL PROGRAM
            </span>
            <h3 style={{ margin: '4px 0 0 0', fontSize: '1.05rem', color: 'var(--primary-900)', fontWeight: 700 }}>
              {campaign.title}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Tutup Modal">
            <X size={18} />
          </button>
        </div>

        {/* Campaign Banner & Detailed Description Card */}
        <div
          style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            backgroundColor: '#ffffff',
            marginBottom: '16px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {/* Cover Image Preview */}
          <div style={{ position: 'relative', height: '140px', overflow: 'hidden' }}>
            <img
              src={campaign.imageUrl}
              alt={campaign.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)'
              }}
            />
            <span
              className="badge badge-gold"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
              }}
            >
              {campaign.category.toUpperCase()}
            </span>

            {campaign.location && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  left: '10px',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                }}
              >
                <MapPin size={12} /> {campaign.location}
              </span>
            )}
          </div>

          {/* Description & Impact Details Body */}
          <div style={{ padding: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <FileText size={15} color="var(--primary-700)" />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary-900)' }}>
                Deskripsi Lengkap Program
              </span>
            </div>

            {/* Narrative text */}
            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-body)',
                lineHeight: '1.55',
                margin: '0 0 12px 0',
                backgroundColor: 'var(--primary-50)',
                padding: '10px 12px',
                borderRadius: 'var(--radius-sm)',
                borderLeft: '3px solid var(--primary-600)'
              }}
            >
              {campaign.description}
            </p>

            {/* Progress Bar & Amount if available */}
            {percent !== null && (
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
                    Terkumpul:{' '}
                    <strong style={{ color: 'var(--primary-800)' }}>
                      Rp {campaign.collectedAmount?.toLocaleString('id-ID')}
                    </strong>
                  </span>
                  <span>
                    <strong>{percent}%</strong> dari target
                  </span>
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
                      width: `${percent}%`,
                      height: '100%',
                      backgroundColor: 'var(--primary-600)',
                      borderRadius: 'var(--radius-full)'
                    }}
                  />
                </div>
              </div>
            )}

            {/* Beneficiary and Donor Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', fontSize: '0.72rem' }}>
              {campaign.beneficiaryInfo && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    backgroundColor: '#f1f5f2',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-body)'
                  }}
                >
                  <Users size={12} color="var(--primary-700)" />
                  <span>
                    Penerima: <strong>{campaign.beneficiaryInfo}</strong>
                  </span>
                </div>
              )}
              {campaign.donorCount && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    backgroundColor: '#f1f5f2',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-body)'
                  }}
                >
                  <HeartHandshake size={12} color="var(--primary-700)" />
                  <span>
                    <strong>{campaign.donorCount}</strong> Donatur Berpartisipasi
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Payment Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <Building size={15} color="var(--primary-700)" />
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary-900)' }}>
            Metode Penyaluran Donasi Resmi
          </span>
        </div>

        {/* Method Switcher */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#e8ede9',
            padding: '4px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '16px'
          }}
        >
          <button
            onClick={() => setMethod('bank')}
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              backgroundColor: method === 'bank' ? '#ffffff' : 'transparent',
              color: method === 'bank' ? 'var(--primary-900)' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <Building size={16} /> Transfer Bank
          </button>
          <button
            onClick={() => setMethod('qris')}
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              backgroundColor: method === 'qris' ? '#ffffff' : 'transparent',
              color: method === 'qris' ? 'var(--primary-900)' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <QrCode size={16} /> QRIS Marwah
          </button>
        </div>

        {/* Content based on method */}
        {method === 'bank' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            {MARWAH_DONATION_METHODS.bankAccounts.map(bank => {
              const isCopied = copiedAccount === bank.accountNumber;
              return (
                <div
                  key={bank.accountNumber}
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--primary-100)',
                    backgroundColor: 'var(--primary-50)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-900)' }}>
                      {bank.bankName}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      a.n. {bank.accountHolder}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.04em', color: 'var(--primary-800)' }}>
                      {bank.accountNumber}
                    </span>

                    <button
                      className="btn-primary"
                      style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                      onClick={() => handleCopy(bank.accountNumber)}
                    >
                      {isCopied ? (
                        <>
                          <Check size={14} /> Tersalin!
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Salin Rekening
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '12px',
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '10px'
              }}
            >
              <img
                src={MARWAH_DONATION_METHODS.qrisImageUrl}
                alt="QRIS Marwah Wakaf"
                style={{ width: '220px', height: '220px', objectFit: 'contain' }}
              />
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-900)' }}>
              {MARWAH_DONATION_METHODS.qrisMerchantName}
            </p>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Mendukung BCA, Mandiri, BSI, GoPay, OVO, Dana, ShopeePay & Seluruh m-Banking
            </p>
          </div>
        )}

        {/* Steps Guide */}
        <div
          style={{
            padding: '12px',
            backgroundColor: '#f8faf8',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '14px'
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-800)', display: 'block', marginBottom: '6px' }}>
            Langkah Pembayaran Manual:
          </span>
          <ol style={{ paddingLeft: '18px', margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            {MARWAH_DONATION_METHODS.instructions.map((ins, i) => (
              <li key={i}>{ins}</li>
            ))}
          </ol>
        </div>

        {/* Mandatory Payment Disclaimer */}
        <div
          style={{
            padding: '10px 12px',
            backgroundColor: 'var(--gold-50)',
            border: '1px solid var(--gold-400)',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            gap: '8px',
            marginBottom: '16px'
          }}
        >
          <AlertCircle size={16} color="var(--gold-800)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ margin: 0, fontSize: '0.72rem', color: 'var(--gold-800)', lineHeight: '1.4' }}>
            {MARWAH_DONATION_METHODS.disclaimer}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            className="btn-secondary"
            style={{ flex: 1, justifyContent: 'center' }}
            onClick={handleShare}
          >
            <Share2 size={16} />
            <span>{sharedToast ? 'Tautan Tersalin!' : 'Bagikan Program'}</span>
          </button>
          <button
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center' }}
            onClick={onClose}
          >
            <ShieldCheck size={16} />
            <span>Selesai & Tutup</span>
          </button>
        </div>
      </div>
    </div>
  );
};
