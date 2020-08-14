import {
  round,
  around,
  rint,
  floor,
  ceil,
  trunc,
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

  it('should round elements of the array to the nearest integer.', () => {
    expect(rint([-1.7, -1.5, -0.2, 0.2, 1.5, 1.7, 2.0]))
    .toEqual([-2, -1, -0,  0,  2,  2,  2]);
  });

  it('should the floor the input, element-wise', () => {
    expect(floor([-1.7, -1.5, -0.2, 0.2, 1.5, 1.7, 2.0]))
    .toEqual([-2, -2, -1,  0,  1,  1,  2]);
  });

  it('should the ceil the input, element-wise', () => {
    expect(ceil([-1.7, -1.5, -0.2, 0.2, 1.5, 1.7, 2.0]))
    .toEqual([-1, -1, -0,  1,  2,  2,  2]);
  });

  it('should the truncate the input, element-wise', () => {
    expect(trunc([-1.7, -1.5, -0.2, 0.2, 1.5, 1.7, 2.0]))
    .toEqual([-1, -1, -0,  0,  1,  1,  2]);
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
