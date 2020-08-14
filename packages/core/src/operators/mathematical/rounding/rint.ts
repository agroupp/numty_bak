/**
 * Round elements of the array to the nearest integer.
 *
 * @category Mathematical Rounding
 *
 * @param arr Input array
 */
export function rint(arr: unknown[]): unknown[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result[i] = rint(arr[i] as unknown[]);
    } else {
      result[i] = Math.round(arr[i] as number);
    }
  }
  return result;
}
