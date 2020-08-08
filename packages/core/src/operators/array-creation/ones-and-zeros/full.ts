import { generateFlat } from './generateFlat';

/**
 * Return a new array of given shape filled
 * with `null`
 * @param shape
 */
export function full<T>(shape: number[], fillValue: T): unknown[] {
  let result = [];
  if (shape.length === 1) {
      result = generateFlat(shape[0], fillValue);
  } else {
      for(let i = 0; i < shape[0]; i++) {
          result.push(full(shape.slice(1), fillValue));
      }
  }
  return result;
}
