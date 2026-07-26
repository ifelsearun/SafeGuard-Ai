import { asyncHandler } from '../utils/async-handler.js';
import { success } from '../utils/response.js';
import { submitUrl, submitFile, getAnalysis } from '../services/virustotal.service.js';
import { mapAnalysis } from '../utils/virustotal-mapper.js';

export const scanUrl = asyncHandler(async (req, res) => {
  const upstream = await submitUrl(req.validatedBody.url);
  success(req, res, 201, 'URL submitted for analysis.', { scanType: 'url', analysisId: upstream.data.data.id, status: 'queued', submittedTarget: req.validatedBody.url });
});
export const scanFile = asyncHandler(async (req, res) => {
  const upstream = await submitFile(req.file);
  success(req, res, 201, 'File submitted for analysis.', { scanType: 'file', analysisId: upstream.data.data.id, status: 'queued', file: { name: req.file.originalname, size: req.file.size, mimeType: req.file.mimetype } });
});
export const analysis = asyncHandler(async (req, res) => success(req, res, 200, 'Analysis status retrieved.', mapAnalysis((await getAnalysis(req.params.analysisId)).data)));
