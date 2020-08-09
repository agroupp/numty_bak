import {
  subArrayLength,
  shape,
  flat,
  reshape,
  arange
} from '../../src/operators';

describe('Array manipulation', () => {
  it('should return length of sub array', () => {
    expect(subArrayLength([[1, 2], [1, 2]])).toEqual(2);
    expect(subArrayLength([[1, 2], [1, 2, 3]])).toEqual(-1);
  });

  it('should return correct array shape', () => {
    expect(shape([])).toEqual([]);
    expect(shape([0])).toEqual([1]);
    expect(shape([1, 2, 3])).toEqual([3]);
    expect(shape([[], []])).toEqual([2, 0]);
    expect(shape([[1, 2], []])).toEqual([2]);
    expect(shape([[1, 2], [1, 2, 3]])).toEqual([2]);
    expect(shape([[1, 2], [1, 2]])).toEqual([2, 2]);
    expect(shape([[[[], []]], [[[], []]]])).toEqual([2, 1, 2, 0]);
    expect(shape([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([3, 3]);
    expect(shape([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])).toEqual([4, 3]);
  });

  it('should flat an array', () => {
    expect(flat([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(flat([[[[1, 2], [3, 4]]], [[[5, 6], [7, 8]]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should reshape array', () => {
    expect(reshape([1, 2, 3, 4], [2, 2])).toEqual([[1, 2], [3, 4]]);
    expect(reshape([1, 2, 3, 4, 5, 6], [2, 3])).toEqual([[1, 2, 3], [4, 5, 6]]);
    expect(reshape([[1, 2, 3], [4, 5, 6]], [3, 2])).toEqual([[1, 2], [3, 4], [5, 6]]);
    expect(reshape(arange(6), [3, 2])).toEqual([[0, 1], [2, 3], [4, 5]]);
    expect(reshape(reshape(arange(6), [3, 2]), [2, 3])).toEqual([[0, 1, 2], [3, 4, 5]]);
    expect(reshape(arange(27), [3, 3, 3])).toEqual([
      [
        [0, 1, 2], [3, 4, 5], [6, 7, 8]
      ],
      [
        [9, 10, 11], [12, 13, 14], [15, 16, 17]
      ],
      [
        [18, 19, 20], [21, 22, 23], [24, 25, 26]
      ]
    ]);
    expect(reshape([[1, 2, 3], [4, 5, 6]], null)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(reshape([[1, 2, 3], [4, 5, 6]], [4])).toEqual([1, 2, 3, 4]);
  });
});
