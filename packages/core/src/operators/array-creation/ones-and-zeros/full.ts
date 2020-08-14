import { generateFlat } from './generateFlat';
import { Shape } from '@numty/core/types';

/**
 * Return a new array of given shape filled
 * with `value`
 *
 * @category Array Creation
 *
 * @param shape Shape of the new array, e.g., [2, 3]
 */
export function full<T>(sh: Shape, fillValue: T): unknown[] {
  let result = [];
  if (sh.length === 1) {
      result = generateFlat(sh[0], fillValue);
  } else {
      for(let i = 0; i < sh[0]; i++) {
          result.push(full(sh.slice(1), fillValue));
      }
  }
  return result;
}
