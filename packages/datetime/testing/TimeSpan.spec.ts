import {
  TimeSpan
} from '../src';
import { round } from '@numty/core';

describe('TimeSpan', () => {
  describe('Property', () => {
    it('totalMilliseconds should return the amount of milliseconds of the current TimeSpan', () => {
      const ts = new TimeSpan(1000);
      expect(ts.totalMilliseconds).toEqual(1000);
    });
    it('totalSeconds should return the amount of seconds of the current TimeSpan', () => {
      const ts = new TimeSpan(1000);
      expect(ts.totalSeconds).toEqual(1);
    });
    it('totalMinutes should return the amount of minutes of the current TimeSpan', () => {
      const ts = new TimeSpan(1000 * 3600);
      expect(ts.totalMinutes).toEqual(60);
    });
    it('totalHours should return the amount of hours of the current TimeSpan', () => {
      const ts = new TimeSpan(1000 * 3600);
      expect(ts.totalHours).toEqual(1);
    });
    it('totalDays should return the amount of days of the current TimeSpan', () => {
      const ts = new TimeSpan(1000 * 3600 * 24 * 365);
      expect(ts.totalDays).toEqual(365);
    });

    it('days should return the days fraction of the current TimeSpan', () => {
      const ts = new TimeSpan(1000 * 3600 * 28 + 1000 * 1800);
      expect(ts.days).toEqual(1);
    });
    it('hours should return the hours fraction of the current TimeSpan', () => {
      const ts = new TimeSpan(1000 * 3600 * 28 + 1000 * 1800);
      expect(ts.hours).toEqual(4);
    });
    it('minutes should return the minutes fraction of the current TimeSpan', () => {
      const ts = new TimeSpan(1000 * 3600 * 28 + 1000 * 1800);
      expect(ts.minutes).toEqual(30);
    });
    it('seconds should return the seconds fraction of the current TimeSpan', () => {
      const ts = new TimeSpan(1000 * 3600 * 28 + 1000 * 1800 + 1000 * 22);
      expect(ts.seconds).toEqual(22);
    });
    it('milliseconds should return the milliseconds fraction of the current TimeSpan', () => {
      const ts = new TimeSpan(1000 * 3600 * 28 + 1000 * 1800 + 15);
      expect(ts.milliseconds).toEqual(15);
    });
  });

  describe('All together', () => {
    let ts: TimeSpan;
    beforeAll(() => ts = new TimeSpan(1801220200));
    it('should return totalDays = 20.847', () => {
      expect(round(ts.totalDays, 3)).toEqual(20.847);
    });
    it('should return totalHours = 500.339', () => {
      expect(round(ts.totalHours, 3)).toEqual(500.339);
    });
    it('should return totalMinutes = 30,020.337', () => {
      expect(round(ts.totalMinutes, 3)).toEqual(30020.337);
    });
    it('should return totalSeconds = 1,801,220.200', () => {
      expect(round(ts.totalSeconds, 3)).toEqual(1801220.200);
    });

    it('should return days = 20', () => {
      expect(ts.days).toEqual(20);
    });
    it('should return hours = 20', () => {
      expect(ts.hours).toEqual(20);
    });
    it('should return minutes = 20', () => {
      expect(ts.minutes).toEqual(20);
    });
    it('should return seconds = 20', () => {
      expect(ts.seconds).toEqual(20);
    });
    it('should return milliseconds = 200', () => {
      expect(ts.milliseconds).toEqual(200);
    });
  });
});
