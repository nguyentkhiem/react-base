export const ACCESS_TOKEN: string = 'ACCESS_TOKEN';
export const REFRESH_TOKEN: string = 'REFRESH_TOKEN';
export const USERS: string = 'USERS';

// storage
export const LOCAL_STORAGES = {
  TEST: 'TEST',
};

export const SESSION_STORAGES = {
  TEST: 'TEST',
};

// date
export const FM_DATE: string = 'YYYY/MM/DD';

export const FM_TIMEO: string = 'HH-mm';

export const FM_TIMET: string = 'HH:mm';

export const FM_DATE_TIMEO: string = 'YYYY/MM/DD HH-mm';

export const FM_DATE_TIMET: string = 'YYYY/MM/DD HH-mm-ss';

// maxlength, minlength
export const MINL_INPUT_1: number = 1;

export const MAXL_INPUT_100: number = 100;
export const MAXL_INPUT_255: number = 255;

export const MAXL_TEXTAREA_1000: number = 1000;
export const MAXL_TEXTAREA_2000: number = 2000;

// status code api
export const API_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  GATEWAY_TIMEOU: 504,
};

// notification
export const NOTIFICATION = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
};

// breakpoints
export const BREAKPOINTS = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XXL: 'xxl',
};

export const BREAKPOINTS_NUM = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1400,
};

// uploads
export const EXCEPT_TYPES: string[] = [
  'text/csv',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel',
];

export const EXCEPT_FILE_EXCELL: string = '.csv, .xlsx, .xls';

export const EXCEPT_FILE_DOC: string = '.doc, .docx';

export const EXCEPT_FILE_PDF: string = '.pdf';

export const EXCEPT_FILE_IMG: string = '.jpg, .png, .jepg, .gif';

// others
export const PAGE_LIMIT: number = 10;
