import multer from 'multer';
import { env } from '../config/env.js';
import { AppError } from '../utils/app-error.js';

export const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: env.maxFileSize, files: 1, fields: 0 } }).single('file');
export function validateFile(req, _res, next) {
  if (!req.file) return next(new AppError(400, 'FILE_REQUIRED', 'Attach one file to scan.'));
  if (!req.file.size) return next(new AppError(422, 'EMPTY_FILE', 'Empty files cannot be scanned.'));
  next();
}
