import { z } from 'zod';
import { AppError } from '../utils/app-error.js';

const urlSchema = z.object({ url: z.string().trim().url().max(2048) });
export function validateUrl(req, _res, next) {
  const parsed = urlSchema.safeParse(req.body);
  if (!parsed.success) return next(new AppError(400, 'INVALID_URL', 'Enter a valid HTTP or HTTPS URL.', parsed.error.issues));
  const protocol = new URL(parsed.data.url).protocol;
  if (!['http:', 'https:'].includes(protocol)) return next(new AppError(422, 'UNSUPPORTED_URL_PROTOCOL', 'Only HTTP and HTTPS URLs can be scanned.'));
  req.validatedBody = parsed.data;
  next();
}
