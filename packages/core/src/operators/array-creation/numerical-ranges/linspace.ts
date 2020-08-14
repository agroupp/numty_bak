import { arange } from './arange';

/**
 * Return `num` spaced samples, calculated over the interval [`start`, `stop`].
 *
 * @category Array Creation
 *
 * @param start The starting value of the sequence
 * @param stop The end value of the sequence, unless `endPoint` is set to `false`.
 * In that case, the sequence consists of all but the last of num + 1 spaced samples,
 * so that stop is excluded. Note that the step size changes when endpoint is `false`
 * @param num Number of samples to generate. Default is 50. Must be non-negative
 * @param endPoint If `true`, stop is the last sample. Otherwise, it is not included. Default is `true`
 * @param retStep If `true`, return step as the last element of resulting array,
 * where step is the spacing between samples. Default is `false`
 */
export function linspace(start: number, stop: number, num = 50, endPoint = true, retStep = false): number[] {
  if (num < 0) {
    throw('Number of samples must be non-negative');
  }
  const step = endPoint ? (stop - start) / (num - 1) : (stop - start) / num;
  let result = arange(start, endPoint ? stop + step : stop, step);
  if (result.length > num) {
    result = result.slice(0, num);
  }
  return retStep ? [ ...result, step] : result;
}
