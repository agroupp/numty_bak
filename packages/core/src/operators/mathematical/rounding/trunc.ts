/**
 * Return the truncated value of the input, element-wise.
 *
 * @category Mathematical Rounding
 *
 * @param arr Input array
 */
export function trunc(arr: unknown[]): unknown[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result[i] = trunc(arr[i] as unknown[]);
    } else {
      result[i] = Math.trunc(arr[i] as number);
    }
  }
  return result;
}
