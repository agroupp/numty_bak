import { full } from './full';
import { Shape } from '@numty/core/types';

/**
 * Return a new array of given shape filled
 * with `ones`
 *
 * @category Array Creation
 *
 * @param shape
 */
export function ones(sh: Shape): unknown[] {
  return full(sh, 1);
}
