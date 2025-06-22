export const env = {
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
    apiPrefix: import.meta.env.VITE_API_PREFIX,
    enableMockData: import.meta.env.VITE_ENABLE_MOCK_DATA || 'true',
    appName: import.meta.env.VITE_APP_NAME,
    appVersion: import.meta.env.VITE_APP_VERSION,

    // Build Configuration
    nodeEnv: import.meta.env.MODE,
    isDevelopment: import.meta.env.MODE === 'development',
    isProduction: import.meta.env.MODE === 'production',
} as const;