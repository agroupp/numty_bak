/**
 * Return the floor of the input, element-wise.
 *
 * @category Mathematical Rounding
 *
 * @param arr Input array
 */
export function floor(arr: unknown[]): unknown[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result[i] = floor(arr[i] as unknown[]);
    } else {
      result[i] = Math.floor(arr[i] as number);
    }
  }
  return result;
}
