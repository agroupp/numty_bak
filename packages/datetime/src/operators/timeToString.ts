import { round } from '@numty/core';
type FormatSpecifiers = 'c'| 'g'| 'G' | 'h' | 'hh' | 'm' | 'mm' | 's' | 'ss';

const FORMAT_SPECIFIERS: FormatSpecifiers[] = ['c', 'g', 'G'];

function parseFormatString(formatString: string) {
  formatString = !formatString || !formatString.trim() ? 'c' : formatString.trim();
  const formatStringSplitted: string[] = formatString.split('.');
  let secondsFractionalLength = formatStringSplitted.length === 2 && formatStringSplitted[1].match(/M+/g)
    ? formatStringSplitted[1].length
    : 0;
  formatString = formatStringSplitted[0];
  const format: FormatSpecifiers[] = FORMAT_SPECIFIERS.includes(formatString as FormatSpecifiers)
    ? [formatString] as FormatSpecifiers[]
    : formatString.split(':') as FormatSpecifiers[];
  secondsFractionalLength = secondsFractionalLength === 0 && format[0] === 'G' ? 3 : secondsFractionalLength;
  return {format, secondsFractionalLength};
}

function addLeadingZero(value: number, digits = 0): string {
  return value < 10 ? `0${value.toFixed(digits)}` : `${value.toFixed(digits)}`;
}

/**
 * Return string representation of time span according
 * to specified format.
 *
 * Format can be one of the predefined specifiers: `c`, `g`, `G`
 * or custom in the way `hh:mm:ss.MMM`.
 *
 * Interval   |    Format    | Result
 * ---------- | ------------ | ----------
 * 1.14:30:15 |       c      | 1.14:30:15
 * 1.14:30:15 |       g      | 1:14:30:15
 * 1.14:30:15 |       G      | 1.14:30:15.000
 * 1.14:30:15 |   hh:mm:ss   | 14:30:15
 * 1.14:30:15 | hh:mm:ss.MMM | 14:30:15.000
 *
 *
 * @param milliseconds time span in milliseconds
 * @param formatString
 */
export function timeToString(milliseconds: number, formatString?: string): string {
  const { format, secondsFractionalLength } = parseFormatString(formatString);
  let result = '';

  const days = Math.floor(milliseconds / 1000 / 60 / 60 / 24);
  result += days > 0 && FORMAT_SPECIFIERS.includes(format[0]) ? days : '';
  if (result.length > 0 && format[0] === 'c') {
    result += '.';
  } else if (result.length > 0 && (format[0] === 'g' || format[0] === 'G')) {
    result += ':';
  }

  const hours = Math.floor(milliseconds / 1000 / 60 / 60) - days * 24;
  if (FORMAT_SPECIFIERS.includes(format[0]) || format.includes('h') || format.includes('hh')) {
    if (FORMAT_SPECIFIERS.includes(format[0]) && hours > 0) {
      result += result.length === 0 ? `${hours}:` : `${addLeadingZero(hours)}:`;
    } else if (result.length === 0 && format.includes('h')) {
      result += `${hours}:`;
    } else if (format.includes('hh')) {
      result += `${addLeadingZero(hours)}:`;
    }
  }

  const minutes = Math.floor(milliseconds / 1000 / 60) - days * 24 * 60 - hours * 60;
  if (FORMAT_SPECIFIERS.includes(format[0]) || format.includes('m') || format.includes('mm')) {
    if (FORMAT_SPECIFIERS.includes(format[0]) || format.includes('mm')) {
      result += `${addLeadingZero(minutes)}:`;
    } else if (result.length === 0 && format.includes('m')) {
      result += `${minutes}:`;
    }
  }

  let seconds = secondsFractionalLength > 0 ? milliseconds / 1000 : Math.floor(milliseconds / 1000);
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  seconds = round(seconds, secondsFractionalLength);
  result += result.length === 0 && format.includes('s')
    ? `${seconds}`
    : `${addLeadingZero(seconds, secondsFractionalLength)}`;

  return result;
}
