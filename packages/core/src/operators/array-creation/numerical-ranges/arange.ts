/**
 * Return spaced values within a given interval.
 * Values are generated within the half-open interval [`start`, `stop`)
 * (in other words, the interval including start but excluding stop).
 * @param start Start of interval. The interval includes this value. The default start value is 0.
 * If stop value is omitted, the start becomes 0 and this value becomes stop. For example
 * `arange(3)` will return `[0, 1, 2]`
 * @param stop End of interval. The interval does not include this value
 * @param step Spacing between values. For any return value,
 * this is the distance between two adjacent values, out[i+1] - out[i]. The default step size is 1
 */
export function arange(start: number, stop = 0, step = 1): number[] {
  if (start > 0 && stop === 0) {
    stop = start;
    start = 0;
  }
  if (stop <= start) {
    throw('Stop point must be bigger then start');
  }
  const result: number[] = [];
  for (let i = 0; i < Math.ceil((stop - start) / step); i++) {
    const item = start + i * step;
    if (item >= stop) {
      break;
    }
    result[i] = item;
  }
  return result;
}
