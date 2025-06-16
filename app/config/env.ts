export const env = {
    // API Configuration
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5174',
    apiPrefix: import.meta.env.VITE_API_PREFIX || '/api',

    // Feature Flags
    enableMockData: import.meta.env.VITE_ENABLE_MOCK_DATA === 'true',

    // App Configuration
    appName: import.meta.env.VITE_APP_NAME ?? 'Product Manager',
    appVersion: import.meta.env.VITE_APP_VERSION ?? '1.0.0',

    // Build Configuration
    nodeEnv: import.meta.env.MODE,
    isDevelopment: import.meta.env.MODE === 'development',
    isProduction: import.meta.env.MODE === 'production',
} as const;