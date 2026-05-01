const config = {
  appId: 'com.filevault.app',
  appName: 'FileVault',
  webDir: '.',
  server: {
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false
  }
};

module.exports = config;
