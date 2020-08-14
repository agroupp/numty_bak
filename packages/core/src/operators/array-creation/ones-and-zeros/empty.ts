import { full } from './full';
import { Shape } from '@numty/core/types';

/**
 * Return a new array of given shape filled
 * with `null`
 *
 * @category Array Creation
 *
 * @param shape
 */
export function empty(sh: Shape): unknown[] {
  return full(sh, null);
}
