import { KeyCache } from '@types';
import { parsToString } from './pars-to-string';

export function getCacheKay(
  key: keyof typeof KeyCache,
  value: unknown
): string {
  const parOfKey = typeof value === 'string' ? value : parsToString(value);

  return `${key}[${parOfKey}]`;
}
