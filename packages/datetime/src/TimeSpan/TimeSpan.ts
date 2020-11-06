import { IHasHashCode, IEquatable, IComparable, compareNumbers } from '@numty/core';
import { timeToString } from '../operators';

/**
 * Represents a time interval.
 *
 * @category Time interval
 */
export class TimeSpan implements IHasHashCode, IEquatable<TimeSpan>, IComparable<TimeSpan> {
  private readonly _milliseconds: number;
  private readonly _maxDays = Number.MAX_SAFE_INTEGER / 1000 / 60 / 60 / 24;
  private readonly _maxHours = Number.MAX_SAFE_INTEGER / 1000 / 60 / 60;
  private readonly _maxMinutes = Number.MAX_SAFE_INTEGER / 1000 / 60;
  private readonly _maxSeconds = Number.MAX_SAFE_INTEGER / 1000;

  /**
   * Gets the days component of the time interval represented by the current TimeSpan.
   */
  get days(): number {
    return Math.floor(this.totalDays);
  }

  /**
   * Gets the hours component of the time interval represented by the current TimeSpan.
   */
  get hours(): number {
    return Math.floor(this.totalHours) - this.days * 24;
  }

  /**
   * Gets the hours component of the time interval represented by the current TimeSpan.
   */
  get minutes(): number {
    return Math.floor(this.totalMinutes) - this.days * 24 * 60 - this.hours * 60;
  }

  /**
   * Gets the hours component of the time interval represented by the current TimeSpan.
   */
  get seconds(): number {
    return Math.floor(this.totalSeconds)
      - this.days * 24 * 60 * 60
      - this.hours * 60 * 60
      - this.minutes * 60;
  }

  /**
   * Gets the hours component of the time interval represented by the current TimeSpan.
   */
  get milliseconds(): number {
    return Math.floor(this.totalMilliseconds)
      - this.days * 24 * 60 * 60 * 1000
      - this.hours * 60 * 60 *1000
      - this.minutes * 60 *1000
      - this.seconds * 1000;
  }

  /**
   * Gets the value of the current TimeSpan expressed in whole and fractional milliseconds.
   */
  get totalMilliseconds(): number { return this._milliseconds; }

  /**
   * Gets the value of the current TimeSpan expressed in whole and fractional seconds.
   */
  get totalSeconds(): number { return this._milliseconds / 1000; }

  /**
   * Gets the value of the current TimeSpan expressed in whole and fractional minutes.
   */
  get totalMinutes(): number { return this._milliseconds / 1000 / 60; }

  /**
   * Gets the value of the current TimeSpan expressed in whole and fractional hours.
   */
  get totalHours(): number { return this._milliseconds / 1000 / 60 / 60; }

  /**
   * Gets the value of the current TimeSpan expressed in whole and fractional days.
   */
  get totalDays(): number { return this._milliseconds / 1000 / 60 / 60 / 24; }

  constructor(milliseconds: number) {
    this._milliseconds = milliseconds;
  }

  /**
   * Returns a new TimeSpan object whose value is the absolute value of the current TimeSpan object.
   */
  duration(): TimeSpan {
    return new TimeSpan(Math.abs(this._milliseconds));
  }

  /**
   * Returns a new TimeSpan object whose value is the negated value of the current TimeSpan object.
   */
  negate(): TimeSpan {
    return new TimeSpan(-this._milliseconds);
  }

  /**
   * Returns a value indicating whether this instance is equal to a specified TimeSpan object.
   * @param ts TimeSpan object to test
   */
  equals(ts: TimeSpan): boolean {
    if (!ts) {
      return false;
    }
    return this._milliseconds === ts.totalMilliseconds;
  }

  /**
   * Returns a hash code for this instance.
   */
  getHashCode(): number {
    return this._milliseconds;
  }

  /**
   * Returns a number that indicates whether this instance of TimeSpan
   * precedes, follows or equal to a specified TimeSpan object.
   *
   * @param ts TimeSpan object to compare
   */
  compareTo(ts: TimeSpan): number {
    if (!ts) {
      return 1;
    }
    return compareNumbers(this._milliseconds, ts.totalMilliseconds);
  }

  /**
   * Returns a new TimeSpan object whose value is the sum of
   * the specified TimeSpan object and this instance.
   * @param ts the time interval to add.
   */
  add(ts: TimeSpan): TimeSpan {
    return new TimeSpan(this._milliseconds + ts.totalMilliseconds);
  }

  /**
   * Returns a new TimeSpan object whose value is the difference between
   * the specified TimeSpan object and this instance.
   * @param ts the time interval to be subtracted.
   */
  subtract(ts: TimeSpan): TimeSpan {
    return new TimeSpan(this._milliseconds - ts.totalMilliseconds);
  }

  /**
   * Returns a new TimeSpan object which value is the result
   * of multiplication of this instance and the specified factor.
   * @param factor the value to be multiplied by.
   */
  multiply(factor: number): TimeSpan {
    return new TimeSpan(this._milliseconds * factor);
  }

  /**
   * Returns a new TimeSpan object which value is the result
   * of division of this instance and the specified divisor.
   * @param divisor the value to be divided by.
   */
  divide(divisor: number): TimeSpan {
    if (divisor === 0) {
      throw new Error('Division by zero');
    }
    return new TimeSpan(this._milliseconds / divisor);
  }

  /**
   * Converts the value of the current TimeSpan object to its equivalent string representation.
   * @param format time format string
   */
  toString(format?: string): string {
    return timeToString(this._milliseconds, format);
  }

  /**
   * Returns a value that indicates whether two specified instances of TimeSpan are equal.
   * @param ts1
   * @param ts2
   */
  public static equals(ts1: TimeSpan, ts2: TimeSpan): boolean {
    if (!ts1 || !ts2) {
      return false;
    }
    return ts1.equals(ts2);
  }

  /**
   * Returns a number that indicates whether one instance of TimeSpan
   * precedes other.
   * @param ts1
   * @param ts2
   */
  public static compare(ts1: TimeSpan, ts2: TimeSpan): number {
    if (!ts1 && !ts2) {
      return 0;
    } else if (!ts1) {
      return -1;
    } else if (!ts2) {
      return 1;
    } else {
      return ts1.compareTo(ts2);
    }
  }

  /**
   * Returns a TimeSpan that represents a specified number of days,
   * where the specification is accurate to the nearest millisecond.
   * @param value
   */
  public static fromDays(value: number): TimeSpan {
    const maxDays = Number.MAX_SAFE_INTEGER / 1000 / 60 / 60 / 24;
    if (value > maxDays) {
      throw new Error('Overflow!');
    }
    const ms = value * 24 * 60 * 60 * 1000;
    return new TimeSpan(ms);
  }

  /**
   * Returns a TimeSpan that represents a specified number of hours,
   * where the specification is accurate to the nearest millisecond.
   * @param value
   */
  public static fromHours(value: number): TimeSpan {
    const maxHours = Number.MAX_SAFE_INTEGER / 1000 / 60 / 60;
    if (value > maxHours) {
      throw new Error('Overflow!');
    }
    const ms = value * 60 * 60 * 1000;
    return new TimeSpan(ms);
  }

  /**
   * Returns a TimeSpan that represents a specified number of minutes,
   * where the specification is accurate to the nearest millisecond.
   * @param value
   */
  public static fromMinutes(value: number): TimeSpan {
    const maxHours = Number.MAX_SAFE_INTEGER / 1000 / 60;
    if (value > maxHours) {
      throw new Error('Overflow!');
    }
    const ms = value * 60 * 1000;
    return new TimeSpan(ms);
  }

  /**
   * Returns a TimeSpan that represents a specified number of seconds,
   * where the specification is accurate to the nearest millisecond.
   * @param value
   */
  public static fromSeconds(value: number): TimeSpan {
    const maxHours = Number.MAX_SAFE_INTEGER / 1000;
    if (value > maxHours) {
      throw new Error('Overflow!');
    }
    const ms = value * 1000;
    return new TimeSpan(ms);
  }

  /**
   * Converts the string representation of a time interval to its TimeSpan equivalent.
   * @param s a string that specifies the time interval to convert
   */
  public static parse(s: string): TimeSpan {
    throw new Error('Not yet implemented');
  }
}
