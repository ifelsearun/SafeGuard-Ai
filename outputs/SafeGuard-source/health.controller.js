import { success } from '../utils/response.js';
export function health(req, res) { success(req, res, 200, 'SafeGuard API is healthy.', { status: 'ok', service: 'safeguard-api' }); }
