/**
 * Return a 1-D iteratable over the array
 * @param arr
 */
function* flatGenerator(arr: unknown[]): Generator {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flatGenerator(item as unknown[]);
    } else {
      yield item;
    }
  }
}

/**
 * Return a contiguous flattened array containing
 * the elements of the input
 * @param arr
 */
export function flat(arr: unknown[]): unknown[] {
  return [...flatGenerator(arr)];
}
