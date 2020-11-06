/**
 * Defines a generalized comparison method that
 * a value type or class implements to create a
 * type-specific comparison method for ordering
 * or sorting its instances.
 */
export interface IComparable<T> {
  /**
   * Compares the current instance with another object of the same
   * type and returns an integer that indicates whether the current
   * instance precedes, follows, or occurs in the same position in
   * the sort order as the other object.
   *
   * @param other An object to compare with this instance.
   *
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
  compareTo(other: T): number;
}
