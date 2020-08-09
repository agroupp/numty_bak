import { subArrayLength } from './subArrayLength';

/**
 * Return the shape of an array
 * @param arr
 */
export function shape(arr: unknown[]): number[] {
  if (arr.length === 0) {
    return [];
  }
  let result: number[] = [arr.length];
  const subLength = subArrayLength(arr);
  if (subLength > -1) {
    result.push(subLength);
    if (subLength > 0) {
      const subShape = shape(arr[0] as unknown[]);
      result = result.concat(subShape.slice(1));
    }
  }
  return result;
}
