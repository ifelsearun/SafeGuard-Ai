import test from 'node:test';
import assert from 'node:assert/strict';
import { mapAnalysis } from '../src/utils/virustotal-mapper.js';

// These small unit tests protect the public result contract from provider payload changes.
test('maps a malicious completed analysis to a malicious verdict', () => {
  const result = mapAnalysis({ data: { id: 'analysis-1', attributes: { status: 'completed', stats: { malicious: 2, suspicious: 0 }, results: { EngineA: { category: 'malicious', result: 'malware' } } } } });
  assert.equal(result.analysisId, 'analysis-1');
  assert.equal(result.verdict, 'malicious');
  assert.equal(result.engines[0].engine, 'EngineA');
});

test('maps a clean completed analysis to a safe verdict', () => {
  const result = mapAnalysis({ data: { id: 'analysis-2', attributes: { status: 'completed', stats: { malicious: 0, suspicious: 0, harmless: 4 } } } });
  assert.equal(result.verdict, 'safe');
  assert.equal(result.stats.harmless, 4);
});
