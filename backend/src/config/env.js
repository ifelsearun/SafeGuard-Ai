import 'dotenv/config';

const required = ['VIRUSTOTAL_API_KEY'];
for (const key of required) {
  if (!process.env[key] && process.env.NODE_ENV === 'production') throw new Error(`Missing required environment variable: ${key}`);
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3001),
  virusTotalApiKey: process.env.VIRUSTOTAL_API_KEY || '',
  virusTotalBaseUrl: process.env.VIRUSTOTAL_API_BASE_URL || 'https://www.virustotal.com/api/v3',
  corsOrigins: (process.env.CORS_ALLOWED_ORIGINS || 'http://localhost:5173').split(',').map((origin) => origin.trim()),
  maxFileSize: Number(process.env.MAX_FILE_SIZE_BYTES || 33554432)
};
