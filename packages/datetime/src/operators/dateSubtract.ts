import { TimeSpan } from '../TimeSpan';

/**
 * Subtracts a specified date from another date
 * and returns TimeSpan. If minuend is not specified
 * subtrahend will be suctracted from `now`.
 *
 * @param d1 subtrahend
 * @param d2 minuend
 */
export function dateSubtract(d1: Date, d2?: Date): TimeSpan {
  if (!d1) {
    throw new Error('Subtrahend must be provided');
  }
  const d1Num = d1.getTime();
  const d2Num = d2 ? d2.getTime() : Date.now();
  return new TimeSpan(d2Num - d1Num);
}
