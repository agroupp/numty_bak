import { compareNumbers } from '../../src/operators';

describe('Comparision', () => {
  it('should return 0 if numbers are equal or undefined', () => {
    expect(compareNumbers(undefined, undefined)).toEqual(0);
    expect(compareNumbers(42, 42)).toEqual(0);
    expect(compareNumbers(3, 5)).not.toEqual(0);
  });

  it('should return -1 if the first number is less or undefined', () => {
    expect(compareNumbers(undefined, 42)).toEqual(-1);
    expect(compareNumbers(42, 42)).not.toEqual(-1);
    expect(compareNumbers(3, 5)).toEqual(-1);
    expect(compareNumbers(5, 3)).not.toEqual(-1);
  });

  it('should return 1 if the second number is less or undefined', () => {
    expect(compareNumbers(42, undefined)).toEqual(1);
    expect(compareNumbers(42, 42)).not.toEqual(1);
    expect(compareNumbers(3, 5)).not.toEqual(1);
    expect(compareNumbers(5, 3)).toEqual(1);
  });
});
