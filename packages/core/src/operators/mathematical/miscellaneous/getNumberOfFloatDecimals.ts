import { isNumber } from './isNumber';

/**
 * Return number of decimals of float part
 *
 * @category Mathematical Miscellaneous
 *
 * @param value Input data
 */
export function getNumberOfFloatDecimals(value: number): number {
  if (!isNumber(value) || Number.isInteger(value)) {
    return 0;
  }
  const splitted = value.toString().split('.');
  return splitted[1].length;
}
