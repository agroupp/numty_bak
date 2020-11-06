import { timeToString } from '../src';

describe('timeToString', () => {
  describe('with days and integer amount of seconds', () => {
    const ms = 38 * 60 * 60 * 1000 + 30 * 60 * 1000 + 15 * 1000;
    it('format "c"', () => {
      expect(timeToString(ms)).toEqual('1.14:30:15');
      expect(timeToString(ms, 'c')).toEqual('1.14:30:15');
    });
    it('format "g"', () => {
      expect(timeToString(ms, 'g')).toEqual('1:14:30:15');
    });
    it('format "G"', () => {
      expect(timeToString(ms, 'G')).toEqual('1:14:30:15.000');
    });
  });

  describe('with days and float amount of seconds', () => {
    const ms = 38 * 60 * 60 * 1000 + 30 * 60 * 1000 + 15.278664512 * 1000;
    it('format "c"', () => {
      expect(timeToString(ms)).toEqual('1.14:30:15');
      expect(timeToString(ms, 'c')).toEqual('1.14:30:15');
      expect(timeToString(3600 * 1000)).toEqual('1:00:00');
      expect(timeToString(90 * 1000)).toEqual('01:30');
      expect(timeToString(40 * 1000)).toEqual('00:40');
    });
    it('format "g"', () => {
      expect(timeToString(ms, 'g')).toEqual('1:14:30:15');
    });
    it('format "G"', () => {
      expect(timeToString(ms, 'G')).toEqual('1:14:30:15.279');
    });
  });

  describe('with 0 days', () => {
    const ms = 16 * 60 * 60 * 1000 + 30 * 60 * 1000 + 15.278664512 * 1000;
    it('format "c"', () => {
      expect(timeToString(ms)).toEqual('16:30:15');
      expect(timeToString(ms, 'c')).toEqual('16:30:15');
    });
    it('format "g"', () => {
      expect(timeToString(ms, 'g')).toEqual('16:30:15');
    });
    it('format "G"', () => {
      expect(timeToString(ms, 'G')).toEqual('16:30:15.279');
    });
  });

  describe('with custom formats', () => {
    const ms1 = 38 * 60 * 60 * 1000 + 30 * 60 * 1000 + 15.278664512 * 1000;
    const ms3 = 6 * 60 * 60 * 1000 + 30 * 60 * 1000 + 15.278664512 * 1000;
    const ms4 = 5 * 60 * 1000 + 15.278664512 * 1000;
    it('should show the time span in format "hh:mm:ss"', () => {
      expect(timeToString(ms1, 'hh:mm:ss')).toEqual('14:30:15');
      expect(timeToString(ms3, 'hh:mm:ss')).toEqual('06:30:15');
      expect(timeToString(ms4, 'hh:mm:ss')).toEqual('00:05:15');
    });
    it('should show the time span in format "h:mm:ss"', () => {
      expect(timeToString(ms1, 'h:mm:ss')).toEqual('14:30:15');
      expect(timeToString(ms3, 'h:mm:ss')).toEqual('6:30:15');
    });
    it('should show the time span in format "mm:ss"', () => {
      expect(timeToString(ms1, 'mm:ss')).toEqual('30:15');
      expect(timeToString(ms4, 'mm:ss')).toEqual('05:15');
    });
    it('should show the time span in format "m:ss"', () => {
      expect(timeToString(ms1, 'm:ss')).toEqual('30:15');
      expect(timeToString(ms4, 'm:ss')).toEqual('5:15');
    });
    it('should show the time span in format "mm:ss.MM"', () => {
      expect(timeToString(ms1, 'mm:ss.MM')).toEqual('30:15.28');
      expect(timeToString(ms4, 'mm:ss.nn')).toEqual('05:15');
    });
    it('should show the time span in format "mm:ss.MMMM"', () => {
      expect(timeToString(ms4, 'mm:ss.MMMM')).toEqual('05:15.2787');
    });
    it('should show the time span in format "s.MMMM"', () => {
      expect(timeToString(Math.PI * 1000, 's.MM')).toEqual('3.14');
    });
  });
});
