import * as z from "zod/v4";

const clientEnvSchema = z.object({
    VITE_API_BASE_URL: z.url(),
    VITE_API_PREFIX: z.string().default('/api'),

    VITE_ENABLE_MOCK_DATA: z
        .enum(['true', 'false'])
        .transform(v => v === 'true'),

    VITE_APP_NAME:    z.string(),
    VITE_APP_VERSION: z.string(),

    MODE: z.enum([
        'development', 
        'production', 
        'test', 
        'staging'
    ]).default('development'),
    DEV: z.coerce.boolean(),
    PROD: z.coerce.boolean(),
})

export const env = clientEnvSchema.parse(import.meta.env);
console.log(import.meta.env)

export const isDev  = env.DEV;
export const isProd = env.PROD;