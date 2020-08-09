/**
 * Check that all sub arrays have the same length
 * and return this length. Otherwise return -1
 * @param arr
 */
export function subArrayLength(arr: unknown[]): number {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      return -1;
    }
    if (result > -1 && (arr[i] as unknown[]).length !== result) {
      return -1;
    }
    result = (arr[i] as unknown[]).length;
  }
  return result;
}
