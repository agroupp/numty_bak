import { round } from './round';

/**
 * Round array items to the given number of decimals
 * on an element-wise basis.
 *
 * @category Mathematical Rounding
 *
 * @param arr Input data
 * @param decimals Number of decimal places to round to (default: 0).
 * If decimals is negative, it specifies the number of positions to the left of the decimal point.
 */
export function around(arr: unknown[], decimals = 0): unknown[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result[i] = around(arr[i] as unknown[], decimals);
    } else {
      result[i] = round(arr[i] as number, decimals);
    }
  }
  return result;
}
