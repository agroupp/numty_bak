import {
  empty,
  eye,
  identity,
  ones,
  zeros,
  full,
  generateFlat,
  round
} from '../../src/operators';

import {
  fromStringToChar,
  fromStringToNumber
} from '../../src/operators';

import {
  arange,
  linspace,
  logspace
} from '../../src/operators';

describe('Ones and zeros', () => {
  it(`should return flat array with 'twos'`, () => {
    expect(generateFlat(5, 2)).toEqual([2, 2, 2, 2, 2]);
  });

  it('should generate empty array', () => {
    expect(empty([2, 2])).toEqual([[null, null], [null, null]]);
  });

  it('should return a 2-D array with ones on the diagonal and zeros elsewhere.', () => {
    expect(eye(5)).toEqual([
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1]
    ]);

    expect(eye(5, 5, 2)).toEqual([
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);

    expect(eye(5, 5, -2)).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ]);

    expect(eye(5, 7, 2)).toEqual([
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1]
    ]);

    expect(eye(5, 5, 0, 'rtl')).toEqual([
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [1, 0, 0, 0, 0]
    ]);

    expect(eye(5, 7, 2, 'rtl')).toEqual([
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ]);
  });

  it('should return a 2-D array with ones on the diagonal and zeros elsewhere.', () => {
    expect(identity(3)).toEqual([
      [1,  0,  0],
      [0,  1,  0],
      [0,  0,  1]
    ]);
  });

  it('should generate array of ones', () => {
    expect(ones([2, 2])).toEqual([[1, 1], [1, 1]]);
  });

  it('should generate array of zeros', () => {
    expect(zeros([2, 2])).toEqual([[0, 0], [0, 0]]);
  });

  it('should generate array of 42s', () => {
    expect(full<number>([2, 2], 42)).toEqual([[42, 42], [42, 42]]);
  });
});

describe('From data', () => {
  it('should create array of chars from string', () => {
    expect(fromStringToChar('abc')).toEqual(['a', 'b', 'c']);
  });

  it('should create array of integers from string', () => {
    expect(fromStringToNumber('1 2, 3 : 4')).toEqual([1, 2, 3, 4]);
  });

  it('should create array of floats from string', () => {
    expect(fromStringToNumber('1 2.5, 3.14 : 4')).toEqual([1, 2.5, 3.14, 4]);
    expect(fromStringToNumber('1 2.5, abc 3.14 : 4')).toEqual([1, 2.5, 3.14, 4]);
  });
});

describe('Numerical Ranges', () => {
  it('should create array range (arange)', () => {
    expect(arange(3)).toEqual([0, 1, 2]);
    expect(arange(3, 7)).toEqual([3, 4, 5, 6]);
    expect(arange(3, 7, 2)).toEqual([3, 5]);
    expect(arange(3, 8, 2)).toEqual([3, 5, 7]);
    expect(arange(-3, 2, 2)).toEqual([-3, -1, 1]);
    expect(arange(-1, 1, 0.2).map(v => round(v, 1))).toEqual([-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8]);
    expect(arange(2, 3.333333, 0.333333).map(v => round(v, 2))).toEqual([2, 2.33, 2.67, 3, 3.33]);
  });
  it('should create linear array range (linspace)', () => {
    expect(linspace(2, 3, 5)).toEqual([2, 2.25, 2.5, 2.75, 3]);
    expect(linspace(1, 6, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(linspace(1, 3, 4).map(v => round(v, 6))).toEqual([1, 1.666667, 2.333333, 3]);
    expect(linspace(2, 3, 4).map(v => round(v, 6))).toEqual([2, 2.333333, 2.666667, 3]);
    expect(linspace(2, 3, 5, false)).toEqual([2, 2.2, 2.4, 2.6, 2.8]);
    expect(linspace(2, 3, 5, true, true)).toEqual([2, 2.25, 2.5, 2.75, 3, 0.25]);
    expect(linspace(2, 3, 5, false, true)).toEqual([2, 2.2, 2.4, 2.6, 2.8, 0.2]);
  });

  it('should create logarythmic array range (logspace)', () => {
    expect(logspace(2, 3, 4).map(v => round(v, 6))).toEqual([100, 215.443469, 464.158883, 1000]);
    expect(logspace(2, 3, 4, false).map(v => round(v, 6))).toEqual([100, 177.827941, 316.227766, 562.341325]);
    expect(logspace(2, 3, 4, true, 2).map(v => round(v, 6))).toEqual([4, 5.039684, 6.349604, 8]);
  });
});
