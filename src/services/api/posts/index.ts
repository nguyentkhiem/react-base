import { POSTS_API } from 'shared/definitions/api';
import { HttpApi } from 'services/http';
import { compileUrl } from 'shared/utils';
import { IPosts, ListResponse } from '@type';

export const PostsService = {
  getPosts: (options?: ValueOptions): Promise<ListResponse<IPosts>> => {
    return HttpApi.post(compileUrl(POSTS_API.GET_POSTS, options?.params), options?.data, options?.config);
  },
};
