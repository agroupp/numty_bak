export class TimeSpan {
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

  /**
   * Gets the value of the current TimeSpan expressed in whole and fractional weeks.
   */
  get totalWeeks(): number { return this._milliseconds / 1000 / 60 / 60 / 24 / 7; }

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
   * @param ts
   */
  equals(ts: TimeSpan): boolean {
    if (!ts) {
      return false;
    }
    return this._milliseconds === ts.totalMilliseconds;
  }

  toString(format?: string): string {
    throw('');
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
}
