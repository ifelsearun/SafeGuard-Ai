/** Converts VirusTotal's provider-specific payload to SafeGuard's stable contract. */
export function mapAnalysis(payload) {
  const attributes = payload?.data?.attributes || {};
  const stats = attributes.stats || attributes.last_analysis_stats || {};
  const status = attributes.status || 'completed';
  const malicious = stats.malicious || 0;
  const suspicious = stats.suspicious || 0;
  const verdict = malicious > 0 ? 'malicious' : suspicious > 0 ? 'suspicious' : status === 'completed' ? 'safe' : 'unknown';
  const results = attributes.results || attributes.last_analysis_results || {};
  const engines = Object.entries(results).map(([engine, result]) => ({
    engine,
    category: result.category || 'undetected',
    result: result.result || null
  }));
  return { analysisId: payload?.data?.id, status, verdict, stats: {
    malicious, suspicious, harmless: stats.harmless || 0, undetected: stats.undetected || 0, timeout: stats.timeout || 0
  }, engines };
}
