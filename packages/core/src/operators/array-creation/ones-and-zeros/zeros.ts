import { full } from './full';
import { Shape } from '@numty/core/types';

/**
 * Return a new array of given shape filled
 * with `zeroes`
 *
 * @category Array Creation
 *
 * @param shape
 */
export function zeros(sh: Shape): unknown[] {
  return full(sh, 0);
}
