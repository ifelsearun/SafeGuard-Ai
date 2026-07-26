import axios from 'axios';
import { env } from '../config/env.js';
import { AppError } from '../utils/app-error.js';

const client = axios.create({ baseURL: env.virusTotalBaseUrl, timeout: 15000 });
client.interceptors.request.use((config) => {
  if (!env.virusTotalApiKey) throw new AppError(503, 'SERVICE_NOT_CONFIGURED', 'Scanning is not configured yet.');
  config.headers['x-apikey'] = env.virusTotalApiKey;
  return config;
});

function mapProviderError(error) {
  if (error instanceof AppError) throw error;
  const status = error.response?.status;
  if (status === 429) throw new AppError(429, 'UPSTREAM_RATE_LIMIT', 'Scanning is temporarily busy. Please try again shortly.');
  if (status === 401 || status === 403) throw new AppError(503, 'UPSTREAM_AUTH_ERROR', 'Scanning service is unavailable.');
  if (error.code === 'ECONNABORTED') throw new AppError(504, 'UPSTREAM_TIMEOUT', 'The security service took too long to respond.');
  throw new AppError(503, 'UPSTREAM_UNAVAILABLE', 'The security service is temporarily unavailable.');
}

export async function submitUrl(url) {
  try {
    const body = new URLSearchParams({ url });
    return await client.post('/urls', body, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  } catch (error) { mapProviderError(error); }
}

export async function submitFile(file) {
  try {
    const form = new FormData();
    form.append('file', new Blob([file.buffer], { type: file.mimetype }), file.originalname);
    return await client.post('/files', form);
  } catch (error) { mapProviderError(error); }
}

export async function getAnalysis(analysisId) {
  try { return await client.get(`/analyses/${encodeURIComponent(analysisId)}`); }
  catch (error) { mapProviderError(error); }
}
