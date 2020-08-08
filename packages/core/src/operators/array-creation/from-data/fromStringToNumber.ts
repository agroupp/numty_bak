import * as stringLib from '../../../internals/string';

/**
 * A new 1-D array of numbers initialized from text data in a string.
 * @param str
 * */
export function fromStringToNumber(str: string): number[] {
  if (stringLib.isNullOrEmpty(str)) {
    return [];
  }
  str = str.replace(/[,\s:;]/g, ' ');
  const isFloat = str.includes('.');
  let chars: string[] = str.split(' ');
  chars = chars.filter(c => c !== null && c !== undefined && c.length > 0);
  let result = chars.map(c => isFloat ? parseFloat(c) : parseInt(c));
  result = result.filter(n => !isNaN(n));
  return result;
}
