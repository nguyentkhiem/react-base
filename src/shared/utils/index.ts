import { RcFile } from 'antd/es/upload';
import moment from 'moment';
import { compile } from 'path-to-regexp';
import { v4 as uuidv4 } from 'uuid';

/**
 * @param link
 * @param params
 */
export const compileUrl = (link: string, params?: { [x: string]: string | number } | undefined): string => {
  const url = compile(link)(params);
  return url.toString();
};

/**
 * @input @Number digit
 * @description getLocalTimeZone
 */
export const digitToStr = (digit: number) => `${digit < 10 ? '0' : ''}${digit}`;

/**
 * @description getLocalTimeZone
 */
export const getLocalTimeZone = () => {
  const currentTime = new Date();
  const currentTimezone = currentTime.getTimezoneOffset();
  const hourTimeZone = Math.abs(currentTimezone) / 60;
  const minTimeZone = Math.abs(currentTimezone) % 60;
  const timeZone = `${digitToStr(hourTimeZone)}:${digitToStr(minTimeZone)}`;
  return `${currentTimezone < 0 ? '+' : '-'}${timeZone}`;
};

/**
 * @description generateUuidv4
 */
export const generateUuidv4 = (): any => uuidv4();

/**
 *
 * @param data
 */
export const formatFormData = (data: { [x: string]: any } = {}): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => formData.append(key, data[key]));
  return formData;
};

/**
 *
 * @param f
 * @param size
 */
export const checkFileSize = (f: RcFile, size: number): boolean => {
  if (f.size / 1024 / 1024 > size) {
    return false;
  }
  return true;
};

/**
 *
 * @param f
 * @param typesAllow
 */
export const checkFileType = (f: RcFile, typesAllow: string[]): boolean => {
  if (!typesAllow.includes(f.type)) {
    return false;
  }
  return true;
};

/**
 *
 * @param f
 * @param typesAllow
 */
export const checkFileExtension = (f: RcFile, typesAllow: string[]): boolean => {
  const fileNameSplit = f.name.split('.');
  const fileExtension = fileNameSplit[fileNameSplit.length - 1];
  if (!typesAllow.includes(fileExtension)) {
    return false;
  }
  return true;
};

/**
 *
 * @param func
 * @param timeout
 */
export const debounce = (func: any, timeout = 300) => {
  let timer: any;
  // @ts-ignore
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

/**
 *
 * @param start
 * @param end
 */
export const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

/**
 *
 * @param array
 * @param isComponent
 */
export const convertArrayToObject = (array = [], isComponent = false) => {
  return array.reduce((accumulator, value: any) => {
    return {
      ...accumulator,
      [value.to]: isComponent ? value.component : value.title,
    };
  }, {});
};

/**
 *
 * @param objectArray
 * @param property
 */
export const groupObjectByProperty = (objectArray: any, property: string) => {
  return objectArray.reduce((acc: any, obj: any) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
};

/**
 *
 * @param current
 * @param endDate
 */
export const disabledStartDate = (current: null | moment.Moment, endDate: string) => {
  return endDate ? !current?.isBefore(moment(endDate).add(1, 'day').format('YYYY-MM-DD')) : false;
};

/**
 *
 * @param current
 * @param startDate
 */
export const disabledEndDate = (current: null | moment.Moment, startDate: string) => {
  return startDate ? current?.isBefore(moment(startDate).format('YYYY-MM-DD')) : false;
};

/**
 *
 * @param current
 * @param endDate
 */
export const disabledTimeStartdate = (current: null | moment.Moment, endDate: string) => {
  if (!current) {
    return {
      disabledHours: () => {
        return range(0, 24);
      },
      disabledMinutes: () => {
        return range(0, 60);
      },
    };
  }

  if (!endDate) {
    return {};
  }

  if (current && endDate && moment(current).format('YYYY-MM-DD') !== moment(endDate).format('YYYY-MM-DD')) {
    return {};
  }

  const hourEnd = moment(endDate)?.hour();
  const minuteEnd = moment(endDate)?.minute();

  return {
    disabledHours: () => {
      if (hourEnd && hourEnd < 23) {
        let start = hourEnd;
        if (minuteEnd !== 0) {
          start += 1;
        }
        return range(start, 24);
      }
      return [];
    },
    disabledMinutes: () => {
      if (current?.hour() === hourEnd) {
        return range(minuteEnd, 60);
      }
      return [];
    },
  };
};

/**
 *
 * @param current
 * @param startDate
 */
export const disabledTimeEnddate = (current: null | moment.Moment, startDate: string) => {
  if (!current) {
    return {
      disabledHours: () => {
        return range(0, 24);
      },
      disabledMinutes: () => {
        return range(0, 60);
      },
    };
  }

  if (!startDate) {
    return {};
  }

  if (current && startDate && moment(current).format('YYYY-MM-DD') !== moment(startDate).format('YYYY-MM-DD')) {
    return {};
  }

  const hourStart = moment(startDate)?.hour();
  const minuteStart = moment(startDate)?.minute();

  return {
    disabledHours: () => {
      if (hourStart && hourStart < 23) {
        let start = hourStart;

        return range(0, start);
      }
      return [];
    },
    disabledMinutes: () => {
      if (current?.hour() === hourStart) {
        return range(0, minuteStart + 1);
      }
      return [];
    },
  };
};

/**
 *
 * @param top
 */
export const scrollToTop = (top: number = 0) => {
  return window.scrollTo({
    top: top,
    left: 0,
    behavior: 'smooth',
  });
};

/**
 *
 */
export const GlobalDebug = (() => {
  const savedConsole = console;
  /**
   * @param {boolean} debugOn
   * @param {boolean} suppressAll
   */
  return (debugOn: boolean, suppressAll: boolean) => {
    if (!debugOn) {
      /* eslint-disable */
      // @ts-ignore
      console = {};
      console.log = () => {};

      if (suppressAll) {
        console.info = () => {};
        console.warn = () => {};
        console.error = () => {};
        console.debug = () => {};
      } else {
        console.info = savedConsole.info;
        console.warn = savedConsole.warn;
        console.error = savedConsole.error;
        console.debug = savedConsole.debug;
      }
    } else {
      console = savedConsole;
    }
  };
})();
