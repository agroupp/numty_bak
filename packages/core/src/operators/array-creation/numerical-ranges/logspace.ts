import { linspace } from './linspace';

/**
 * Return numbers spaced evenly on a log scale.
 * In linear space, the sequence starts at `base ^ start` (base to the power of start) and ends with `base ^ stop`
 *
 * @category Array Creation
 *
 * @param start The starting value of the sequence
 * @param stop The final value of the sequence
 * @param num Number of samples to generate. Default is 50. Must be non-negative
 * @param endPoint If `true`, stop is the last sample. Otherwise, it is not included. Default is `true`
 * @param base The base of the log space. The step size between the elements in `ln(samples) / ln(base)`.
 * Default is 10
 */
export function logspace(start: number, stop: number, num = 50, endPoint = true, base = 10): number[] {
  const lin = linspace(start, stop, num, endPoint);
  const result: number[] = [];
  for (let i = 0; i < lin.length; i++) {
    result[i] = Math.pow(base, lin[i]);
  }
  return result;
}
