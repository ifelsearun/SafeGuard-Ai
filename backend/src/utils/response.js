/** Keeps every public API response predictable for the frontend. */
export const success = (req, res, statusCode, message, data) => res.status(statusCode).json({
  success: true,
  message,
  data,
  meta: { requestId: req.requestId, timestamp: new Date().toISOString() }
});

export const failure = (req, res, statusCode, message, code, details = []) => res.status(statusCode).json({
  success: false,
  message,
  error: { code, details },
  meta: { requestId: req.requestId, timestamp: new Date().toISOString() }
});
