const KEY = 'safeguard.scan-history';
export function readHistory() { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; } }
export function saveHistory(item) {
  const next = [item, ...readHistory().filter((entry) => entry.analysisId !== item.analysisId)].slice(0, 30);
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
export function clearHistory() { localStorage.removeItem(KEY); }
