import { full } from './full';

/**
 * Return a new array of given shape filled
 * with `ones`
 * @param shape
 */
export function ones(shape: number[]): unknown[] {
  return full(shape, 1);
}
