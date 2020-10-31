import {
  TimeSpan
} from '../src';

describe('Create TimeSpan', () => {
  it('from days value', () => {
    const ts = TimeSpan.fromDays(30);
    expect(ts.days).toEqual(30);
  });
});
