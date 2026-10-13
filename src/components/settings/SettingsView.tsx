import React, { useState } from 'react';
import { Bell, Lock, Trash2, Shield, Eye, Info, CheckCircle, RefreshCw } from 'lucide-react';
import { reminderService } from '../../services/reminderService';
import { storageService } from '../../services/storageService';
import { ReminderPreferences } from '../../types';

export const SettingsView: React.FC = () => {
  const [prefs, setPrefs] = useState<ReminderPreferences>(() => reminderService.getPreferences());
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const handleToggleReminder = async () => {
    if (!prefs.enabled) {
      const granted = await reminderService.requestNotificationPermission();
      if (!granted) {
        alert('Izin notifikasi tidak diaktifkan pada browser. Pengingat tetap dicatat secara lokal.');
      }
    }
    const updated = { ...prefs, enabled: !prefs.enabled };
    setPrefs(updated);
    reminderService.savePreferences(updated);
    setStatusMessage('Pengaturan pengingat berhasil disimpan.');
    setTimeout(() => setStatusMessage(null), 2500);
  };

  const handleTimeSlotChange = (slot: 'subuh' | 'dhuha' | 'ashar' | 'maghrib') => {
    const updated = { ...prefs, timeSlot: slot };
    setPrefs(updated);
    reminderService.savePreferences(updated);
  };

  const handleTestNotification = () => {
    const sent = reminderService.showTestNotification();
    if (!sent) {
      alert('Notifikasi browser belum diizinkan atau tidak didukung di perangkat ini.');
    }
  };

  const handleClearAllData = () => {
    if (window.confirm('PERINGATAN PRIVASI: Apakah Anda yakin ingin menghapus seluruh riwayat amalan, progres tantangan, dan jurnal refleksi pribadi di perangkat ini? Tindakan ini tidak dapat dibatalkan.')) {
      storageService.clearAllUserData();
      alert('Semua data lokal telah berhasil dihapus.');
      window.location.reload();
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '14px' }}>
        <h3 className="card-title" style={{ fontSize: '1.1rem' }}>
          Pengaturan & Privasi
        </h3>
        <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Kendalikan kenyamanan dan privasi data aplikasi Anda.
        </p>
      </div>

      {statusMessage && (
        <div
          style={{
            padding: '10px 14px',
            backgroundColor: 'var(--primary-100)',
            color: 'var(--primary-900)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.8rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '14px'
          }}
        >
          <CheckCircle size={16} /> {statusMessage}
        </div>
      )}

      {/* Reminder Section */}
      <div className="card">
        <div className="card-title-row">
          <h4 className="card-title" style={{ fontSize: '0.98rem' }}>
            <Bell size={18} color="var(--primary-700)" />
            Pengingat Sedekah & Kebaikan
          </h4>
          <span className="badge badge-gold">Lokal Opt-In</span>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: '1.4' }}>
          Sesuai prinsip BRD, pengingat bersifat opt-in, lembut, tidak memaksa, dan murni dijalankan di browser Anda tanpa push server.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>
            Aktifkan Pengingat
          </span>
          <button
            onClick={handleToggleReminder}
            style={{
              width: '46px',
              height: '24px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: prefs.enabled ? 'var(--primary-700)' : '#d1d5db',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              transition: 'background-color 0.2s ease'
            }}
          >
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                position: 'absolute',
                top: '3px',
                left: prefs.enabled ? '25px' : '3px',
                transition: 'left 0.2s ease',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
              }}
            />
          </button>
        </div>

        {prefs.enabled && (
          <div style={{ paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', display: 'block', marginBottom: '8px' }}>
              Waktu Pengingat Pilihan:
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '12px' }}>
              {[
                { id: 'subuh', label: 'Subuh' },
                { id: 'dhuha', label: 'Dhuha' },
                { id: 'ashar', label: 'Ashar' },
                { id: 'maghrib', label: 'Maghrib' }
              ].map(slot => (
                <button
                  key={slot.id}
                  onClick={() => handleTimeSlotChange(slot.id as any)}
                  style={{
                    padding: '6px 8px',
                    borderRadius: 'var(--radius-sm)',
                    border: prefs.timeSlot === slot.id ? '1.5px solid var(--primary-700)' : '1px solid var(--border-subtle)',
                    backgroundColor: prefs.timeSlot === slot.id ? 'var(--primary-50)' : 'var(--bg-surface)',
                    color: prefs.timeSlot === slot.id ? 'var(--primary-900)' : 'var(--text-muted)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {slot.label}
                </button>
              ))}
            </div>

            <button
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.78rem' }}
              onClick={handleTestNotification}
            >
              Uji Notifikasi Pengingat
            </button>
          </div>
        )}
      </div>

      {/* Privacy & Data Management */}
      <div className="card">
        <div className="card-title-row">
          <h4 className="card-title" style={{ fontSize: '0.98rem' }}>
            <Lock size={18} color="var(--primary-700)" />
            Privasi & Data Lokal Anda
          </h4>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: '1.4' }}>
          Seluruh catatan refleksi, checklist habit, dan progres tantangan Anda <strong>hanya disimpan di penyimpanan lokal perangkat ini</strong>. Marwah Wakaf Indonesia tidak mengumpulkan data pribadi ibadah Anda.
        </p>

        <div
          style={{
            padding: '10px 12px',
            backgroundColor: '#fee2e2',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid #fca5a5',
            marginBottom: '14px',
            display: 'flex',
            gap: '8px'
          }}
        >
          <Info size={16} color="#b91c1c" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ margin: 0, fontSize: '0.72rem', color: '#991b1b', lineHeight: '1.4' }}>
            Jika Anda menghapus data penjelajahan browser, data lokal dapat terhapus. Gunakan tombol di bawah jika Anda ingin mereset data secara manual.
          </p>
        </div>

        <button
          onClick={handleClearAllData}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#ffffff',
            border: '1.5px solid #ef4444',
            color: '#dc2626',
            borderRadius: 'var(--radius-md)',
            fontWeight: 700,
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <Trash2 size={16} /> Hapus & Reset Seluruh Data Lokal
        </button>
      </div>

      {/* Admin / CMS Mode Simulator */}
      <div className="card">
        <div className="card-title-row">
          <h4 className="card-title" style={{ fontSize: '0.98rem' }}>
            <Shield size={18} color="var(--primary-700)" />
            Mode Admin & Verifikasi Konten
          </h4>
          <button
            onClick={() => setIsAdminMode(!isAdminMode)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-700)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {isAdminMode ? 'Tutup Preview' : 'Buka Preview'}
          </button>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 10px 0', lineHeight: '1.4' }}>
          Simulasi verifikasi review konten agama dan sinkronisasi metadata Firebase Cloud Firestore.
        </p>

        {isAdminMode && (
          <div style={{ paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', marginBottom: '8px', fontWeight: 600 }}>
              Status Skema Firestore:
            </div>
            <div
              style={{
                backgroundColor: '#1e293b',
                color: '#38bdf8',
                padding: '10px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.72rem',
                fontFamily: 'monospace',
                overflowX: 'auto',
                lineHeight: '1.5',
                marginBottom: '10px'
              }}
            >
              <div>collections: campaigns, quranContent, duaContent</div>
              <div>security_rules: public_read = true, admin_write = true</div>
              <div>status: ready for Firebase Hosting & Firestore</div>
            </div>
            <span className="badge badge-green">
              <CheckCircle size={12} /> Konten Agama Lolos Review Reviewer
            </span>
          </div>
        )}
      </div>

      {/* About Marwah */}
      <div style={{ textAlign: 'center', padding: '16px 0', color: 'var(--text-light)', fontSize: '0.75rem' }}>
        <p style={{ margin: 0, fontWeight: 700, color: 'var(--primary-900)' }}>
          Marwah - Muslim Daily (MVP v2.0)
        </p>
        <p style={{ margin: '2px 0 0 0' }}>
          Didedikasikan untuk Yayasan Marwah Wakaf Indonesia
        </p>
      </div>
    </div>
  );
};
