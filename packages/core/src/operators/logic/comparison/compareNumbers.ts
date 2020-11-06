/**
 * Compares two numbers and returns an integer that indicates whether the current
 * instance precedes, follows, or occurs in the same position in
 * the sort order as the other object.
 *
 * @category Logic Comparision
 *
 * @param n1 number to compare
 * @param n2 number to compare
 * @returns
 * A value that indicates the relative order of the objects being compared.
 * The return value has these meanings:
 *
 * Value              |	Meaning
 * ------------------ | --------
 * Less than zero	    | This instance precedes other in the sort order.
 * Zero               |	This instance occurs in the same position in the sort order as other.
 * Greater than zero	| This instance follows other in the sort order.
 */
export function compareNumbers(n1: number, n2: number): number {
  if ((isNaN(n1) && isNaN(n2)) || (n1 === n2)) {
    return 0;
  } else if (isNaN(n1) || (n1 < n2)) {
    return -1;
  } else if (isNaN(n2) || (n1 > n2)) {
    return 1;
  }
}
