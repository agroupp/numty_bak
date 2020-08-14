import { flat } from './flat';
import { fromFlat } from '../../array-creation';
import { Shape } from '@numty/core/types';

/**
 * Gives a new shape to an array without changing its data.
 *
 * @category Array Manipulation
 *
 * @param arr Array to be reshaped
 * @param newShape New shape
 */
export function reshape(arr: unknown[], newShape: Shape): unknown[] {
  const flatted = flat(arr);
  if (!newShape || newShape.length === 0) {
    return flatted;
  }
  if (newShape.length === 1) {
    return flatted.slice(0, newShape[0]);
  }
  const result = fromFlat(flatted, newShape);
  return result;
}
