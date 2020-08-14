import { DirectionOneD } from '@numty/core/types'

/**
 * Return a 2-D array with ones on the diagonal and zeros elsewhere.
 *
 * @category Array Creation
 *
 * @param rows
 * @param columns
 * @param diagonal
 */
export function eye(rows: number, columns: number = rows, diagonal = 0, direction: DirectionOneD = 'ltr'): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < rows; i++) {
      result[i] = [];
      for(let j = 0; j < columns; j++) {
        if (direction === 'ltr') {
          result[i][j] = j === i + diagonal ? 1 : 0;
        } else {
          result[i][j] = j === columns - 1 - (i + diagonal) ? 1 : 0;
        }
      }
  }
  return result;
}
