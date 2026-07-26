import { rateLimit } from 'express-rate-limit';
import { failure } from '../utils/response.js';
const createLimiter = (max) => rateLimit({ windowMs: 60_000, max, standardHeaders: true, legacyHeaders: false, handler: (req, res) => failure(req, res, 429, 'Too many scan requests. Please wait and try again.', 'RATE_LIMIT_EXCEEDED') });
export const urlLimiter = createLimiter(10);
export const fileLimiter = createLimiter(5);
