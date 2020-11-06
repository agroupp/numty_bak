import {
  TimeSpan
} from '../src';

describe('Create TimeSpan', () => {
  const expectedOverflowError = new Error('Overflow!');

  describe('From days', () => {
    it('should create TimeSpan with total 30 days', () => {
      const ts = TimeSpan.fromDays(30);
      expect(ts.totalDays).toEqual(30);
    });
    it('should fail with overflow error', () => {
      try {
        expect(TimeSpan.fromDays(Number.MAX_SAFE_INTEGER / 1000 / 60 / 60 / 24 + 1)).toThrowError(expectedOverflowError);
      // eslint-disable-next-line no-empty
      } catch {}
    });
  });

  describe('From hours', () => {
    it('should create TimeSpan with total 30 hours', () => {
      const ts = TimeSpan.fromHours(30);
      expect(ts.totalHours).toEqual(30);
    });
    it('should fail with overflow error', () => {
      try {
        expect(TimeSpan.fromHours(Number.MAX_SAFE_INTEGER / 1000 / 60 / 60 + 1)).toThrowError(expectedOverflowError);
      // eslint-disable-next-line no-empty
      } catch {}
    });
  });

  describe('From minutes', () => {
    it('should create TimeSpan with total 30 minutes', () => {
      const ts = TimeSpan.fromMinutes(30);
      expect(ts.totalMinutes).toEqual(30);
    });
    it('should fail with overflow error', () => {
      try {
        expect(TimeSpan.fromMinutes(Number.MAX_SAFE_INTEGER / 1000 / 60 + 1)).toThrowError(expectedOverflowError);
      // eslint-disable-next-line no-empty
      } catch {}
    });
  });

  describe('From seconds', () => {
    it('should create TimeSpan with total 30 seconds', () => {
      const ts = TimeSpan.fromSeconds(30);
      expect(ts.totalSeconds).toEqual(30);
    });
    it('should fail with overflow error', () => {
      try {
        expect(TimeSpan.fromSeconds(Number.MAX_SAFE_INTEGER / 1000 + 1)).toThrowError(expectedOverflowError);
      // eslint-disable-next-line no-empty
      } catch {}
    });
  });
});
