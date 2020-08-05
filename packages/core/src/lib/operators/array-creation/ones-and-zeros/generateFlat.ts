/**
 * Return one dimensional array filled with
 * specified value
 * @param length
 * @param fill
 */
export function generateFlat<T>(length: number, fillValue: T): T[] {
  const result = [];
  for(let i = 0; i < length; i++) {
      result[i] = fillValue;
  }
  return result;
}
