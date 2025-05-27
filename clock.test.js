import { getTimeInZone } from './clock.js';

test('returns time string for Asia/Kolkata', () => {
  const result = getTimeInZone('Asia/Kolkata');
  expect(typeof result).toBe('string');
});
