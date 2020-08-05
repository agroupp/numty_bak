import * as stringLib from '../../../internals/string';

/**
 * A new 1-D array of chars initialized from text data in a string.
 * @param str
 * */
export function fromStringToChar(str: string): string[] {
  if (stringLib.isNullOrEmpty(str)) {
    return [];
  }
  let result: string[] = str.split('');
  result = result.filter(c => c !== null && c !== undefined && c.length > 0);
  return result;
}
