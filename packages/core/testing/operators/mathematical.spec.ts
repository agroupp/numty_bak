import {
  round,
  around,
  isNumber,
  getNumberOfFloatDecimals
} from '../../src/operators/mathematical';

describe('Rounding', () => {
  it('should round values to specified number of decimals', () => {
    expect(round(Math.PI)).toEqual(3);
    expect(round(Math.PI, 2)).toEqual(3.14);
    expect(round(123.456, -1)).toEqual(120);
  });

  it('should round values in array to specified number of decimals', () => {
    expect(around([Math.PI, Math.PI / 2, Math.PI / 3], 2))
    .toEqual([3.14, 1.57, 1.05]);
    expect(around([[Math.PI, Math.PI / 2, Math.PI / 3], [Math.PI, Math.PI / 2, Math.PI / 3]], 2))
    .toEqual([[3.14, 1.57, 1.05], [3.14, 1.57, 1.05]]);
    expect(around([
      [[Math.PI, Math.PI / 2, Math.PI / 3], [Math.PI, Math.PI / 2, Math.PI / 3]],
      [[Math.PI, Math.PI / 2, Math.PI / 3], [Math.PI, Math.PI / 2, Math.PI / 3]]
    ], 2))
    .toEqual([
      [[3.14, 1.57, 1.05], [3.14, 1.57, 1.05]],
      [[3.14, 1.57, 1.05], [3.14, 1.57, 1.05]]
    ]);
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
