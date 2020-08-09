import {
  subArrayLength,
  shape
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
/*
  it('should flat an array', () => {
    expect(nt.flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(nt.flatten([[[[1, 2], [3, 4]]], [[[5, 6], [7, 8]]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });*/
});
