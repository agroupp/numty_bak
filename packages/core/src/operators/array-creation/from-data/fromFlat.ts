import { empty } from '../ones-and-zeros';
import { shape, flat } from '../../array-manipulation';

/**
 * Return array filled with values from flat array with
 * specified shape.
 * @param values Source data
 * @param shapeValue Shape value of future array
 */
export function fromFlat<T>(values: T[], shapeValue: number[]): unknown[] {
  let currentIndex = 0;
  const result = [];
  const arr = empty(shapeValue);
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          result.push(fromFlat(values.slice(currentIndex), shape(arr[i] as unknown[])));
          currentIndex += flat(arr[i] as unknown[]).length;
      } else {
          result.push(values[currentIndex]);
          currentIndex++;
      }
  }
  return result;
}
