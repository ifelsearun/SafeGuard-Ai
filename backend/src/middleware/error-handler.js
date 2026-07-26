import multer from 'multer';
import { AppError } from '../utils/app-error.js';
import { failure } from '../utils/response.js';

export function notFound(req, res) { failure(req, res, 404, 'This API route does not exist.', 'ROUTE_NOT_FOUND'); }
export function errorHandler(error, req, res, _next) {
  let known = error;
  if (error instanceof multer.MulterError && error.code === 'LIMIT_FILE_SIZE') known = new AppError(413, 'FILE_TOO_LARGE', 'The uploaded file exceeds the allowed size.');
  if (!known.isOperational) {
    console.error(JSON.stringify({ level: 'error', requestId: req.requestId, message: error.message, stack: error.stack }));
    known = new AppError(500, 'INTERNAL_ERROR', 'Something went wrong. Please try again.');
  }
  failure(req, res, known.statusCode, known.message, known.code, known.details);
}
