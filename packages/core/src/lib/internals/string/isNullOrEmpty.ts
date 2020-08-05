/**
 * Return `true` if a specified string is null, empty
 */
export function isNullOrEmpty(str: string): boolean {
  return str === undefined || str === null || str.length === 0;
}
