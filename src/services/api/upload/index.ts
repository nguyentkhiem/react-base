import { POSTS_API } from 'shared/definitions/api';
import { HttpApi } from 'services/http';
import { compileUrl, formatFormData } from 'shared/utils';
import { IPosts, ListResponse } from '@type';

export const UploadService = {
  uploadImage: (options?: ValueOptions): Promise<ListResponse<IPosts>> => {
    return HttpApi.post(compileUrl(POSTS_API.GET_POSTS, options?.params), formatFormData(options?.data), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
