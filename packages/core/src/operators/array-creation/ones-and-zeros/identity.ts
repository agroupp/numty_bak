import { eye } from './eye';
import { DirectionOneD } from '../../../interfaces';

/**
 * Return the identity array.
 * The identity array is a square array with ones on the main diagonal.
 * @param rows
 * @param direction
 */
export function identity(rows: number, direction: DirectionOneD = 'ltr'): number[][] {
  return eye(rows, rows, 0, direction);
}
