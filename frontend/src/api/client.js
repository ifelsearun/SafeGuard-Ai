import axios from 'axios';
const client = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api', timeout: 20000 });
export async function submitUrl(url) { return (await client.post('/url', { url })).data; }
export async function submitFile(file) { const body = new FormData(); body.append('file', file); return (await client.post('/file', body)).data; }
export async function getAnalysis(analysisId) { return (await client.get(`/analysis/${encodeURIComponent(analysisId)}`)).data; }
export function errorMessage(error) { return error.response?.data?.message || 'Unable to reach SafeGuard. Check your connection and try again.'; }
