import { full } from './full';

/**
 * Return a new array of given shape filled
 * with `zeroes`
 * @param shape
 */
export function zeros(shape: number[]): unknown[] {
  return full(shape, 0);
}
