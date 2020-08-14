/**
 * Return the ceiling of the input, element-wise.
 *
 * @category Mathematical Rounding
 *
 * @param arr Input array
 */
export function ceil(arr: unknown[]): unknown[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result[i] = ceil(arr[i] as unknown[]);
    } else {
      result[i] = Math.ceil(arr[i] as number);
    }
  }
  return result;
}
