/**
 * Round to the given number of decimals.
 *
 * @category Mathematical Rounding
 *
 * @param value Input data
 * @param decimals Number of decimal places to round to (default: 0).
 * If decimals is negative, it specifies the number of positions to the left of the decimal point.
 */
export function round(value: number, decimals = 0): number {
  if (decimals === 0) {
    return Math.round(value);
  }
  const k = Math.pow(10, decimals);
  return Math.round(value * k) / k;
}
