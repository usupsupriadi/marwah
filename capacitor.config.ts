import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'id.or.marwah.daily',
  appName: 'Marwah Muslim Daily',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
