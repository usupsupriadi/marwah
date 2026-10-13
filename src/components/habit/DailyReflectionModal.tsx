import React, { useState, useEffect } from 'react';
import { X, Lock, CheckCircle, Trash2 } from 'lucide-react';
import { storageService, getTodayKey } from '../../services/storageService';
import { DAILY_REFLECTION_PROMPTS } from '../../data/habitData';

interface DailyReflectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DailyReflectionModal: React.FC<DailyReflectionModalProps> = ({ isOpen, onClose }) => {
  const todayKey = getTodayKey();
  // Pick prompt based on day of month
  const promptIndex = new Date().getDate() % DAILY_REFLECTION_PROMPTS.length;
  const currentPrompt = DAILY_REFLECTION_PROMPTS[promptIndex];

  const [note, setNote] = useState('');
  const [savedStatus, setSavedStatus] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const existing = storageService.getReflection(todayKey);
      setNote(existing ? existing.note : '');
      setSavedStatus(false);
    }
  }, [isOpen, todayKey]);

  if (!isOpen) return null;

  const handleSave = () => {
    storageService.saveReflection(todayKey, currentPrompt, note);
    setSavedStatus(true);
    setTimeout(() => {
      setSavedStatus(false);
      onClose();
    }, 1200);
  };

  const handleDelete = () => {
    storageService.deleteReflection(todayKey);
    setNote('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-gold">Refleksi Harian</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Lock size={12} /> 100% Privat Lokal
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-900)', fontWeight: 700, margin: '4px 0 8px 0', lineHeight: '1.4' }}>
          "{currentPrompt}"
        </h3>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
          Catatan ini murni ruang jujur antara dirimu dan Allah. Tidak pernah dikirim ke server ataupun orang lain.
        </p>

        <textarea
          rows={5}
          placeholder="Tuliskan isi hatimu, rasa syukur, atau evaluasi lembut di sini..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 14px',
            borderRadius: 'var(--radius-md)',
            border: '1.5px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface)',
            fontSize: '0.9rem',
            color: 'var(--text-main)',
            outline: 'none',
            resize: 'vertical',
            marginBottom: '16px',
            lineHeight: '1.5'
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {note ? (
            <button
              onClick={handleDelete}
              style={{
                background: 'none',
                border: 'none',
                color: '#dc2626',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Trash2 size={14} /> Hapus Catatan
            </button>
          ) : <div />}

          <button
            className="btn-primary"
            onClick={handleSave}
            disabled={savedStatus}
          >
            {savedStatus ? (
              <>
                <CheckCircle size={16} /> Tersimpan Aman
              </>
            ) : 'Simpan Refleksi'}
          </button>
        </div>
      </div>
    </div>
  );
};
