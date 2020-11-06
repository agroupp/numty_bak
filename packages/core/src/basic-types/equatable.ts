/**
 * Defines a generalized method that a value type or class
 * implements to create a type-specific method for determining equality of instances.
 *
 * @category Basic Types
 */
export interface IEquatable<T> {
  /**
   * Indicates whether the current object is equal
   * to another object of the same type.
   * @param other an object to compare with this object.
   */
  equals(other: T): boolean;

  /**
   * Indicates whether the object is equal
   * to another object of the same type.
   *
   * @param obj1 an object to compare
   * @param obj2 an object to compare
   */
  equals(obj1: T, obj2: T): boolean;
}
