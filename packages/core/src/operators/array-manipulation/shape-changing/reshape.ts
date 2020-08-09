import { flat } from './flat';
import { fromFlat } from '../../array-creation';

/**
 * Gives a new shape to an array without changing its data.
 * @param arr
 * @param newShape
 */
export function reshape(arr: unknown[], newShape: number[]): unknown[] {
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
