export type PaginationParams = {
  limit: number;
  page: number;
  total: number;
  order: 'ASC' | 'DESC';

  [key: string]: any;
};

export type ListResponse<T> = {
  data: T[];
  pagination?: PaginationParams;
};
