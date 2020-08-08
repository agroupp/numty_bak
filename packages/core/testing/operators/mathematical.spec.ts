import {
  round,
  isNumber,
  getNumberOfFloatDecimals
} from '../../src/operators/mathematical';

describe('Rounding', () => {
  it('should round values to specified number of decimals', () => {
    expect(round(Math.PI)).toEqual(3);
    expect(round(Math.PI, 2)).toEqual(3.14);
    expect(round(123.456, -1)).toEqual(120);
  });
});

describe('Miscellaneous', () => {
  it('should check for number', () => {
    expect(isNumber(123)).toBeTruthy();
    expect(isNumber(123.1223)).toBeTruthy();
    expect(isNumber(NaN)).toBeFalsy();
  });

  it('should return number of decimals of float part', () => {
    expect(getNumberOfFloatDecimals(123)).toEqual(0);
    expect(getNumberOfFloatDecimals(123.123)).toEqual(3);
  });
});
