/**
 * @internal
 *
 * Regex to check if string is a number
 */
const DIGITS_ONLY_REGEX = /^[0-9\s.]+$/g;

/**
 * @internal
 *
 * Return `true` if all characters in the string are digits only
 * @param str
 */
export function isDigitsOnly(str: string): boolean {
  return DIGITS_ONLY_REGEX.test(str);
}
