/**
 * Defines a generalized method that a value type or class
 * implements to create a method for generating a hash code
 * for the current object.
 */
export interface IHasHashCode {
  /**
   * Return a hash code for the current object.
   */
  getHashCode(): number;
}
