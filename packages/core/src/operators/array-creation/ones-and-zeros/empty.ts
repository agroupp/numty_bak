import { full } from './full';

/**
 * Return a new array of given shape filled
 * with `null`
 * @param shape
 */
export function empty(shape: number[]): unknown[] {
  return full(shape, null);
}
