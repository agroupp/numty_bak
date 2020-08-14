import { subArrayLength } from './subArrayLength';
import { Shape } from '@numty/core/types';

/**
 * Return the shape of an array
 *
 * @category Array Manipulation
 *
 * @param arr
 */
export function shape(arr: unknown[]): Shape {
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
