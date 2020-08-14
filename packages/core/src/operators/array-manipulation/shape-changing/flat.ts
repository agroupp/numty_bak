/**
 * Return a 1-D iteratable over the array
 *
 * @category Array Manipulation
 * @internal
 *
 * @param arr Array to be flatted
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
 *
 * @category Array Manipulation
 *
 * @param arr Array to flat
 */
export function flat(arr: unknown[]): unknown[] {
  return [...flatGenerator(arr)];
}
