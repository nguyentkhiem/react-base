import { USERS_API } from 'shared/definitions/api';
import { HttpApi } from 'services/http';
import { compileUrl, formatFormData } from 'shared/utils';
import { ListResponse } from '@type';

export const UsersService = {
  getUsers: (options?: ValueOptions): Promise<ListResponse<any>> => {
    return HttpApi.get(compileUrl(USERS_API.GET_USERS, options?.params), options?.config);
  },
  getCurrentUserInfo: (options?: ValueOptions): Promise<ListResponse<any>> => {
    return HttpApi.get(compileUrl(USERS_API.GET_USER_INFO, options?.params), options?.config);
  },
  creatUser: (options?: ValueOptions): Promise<ListResponse<any>> => {
    return HttpApi.post(compileUrl(USERS_API.USER), formatFormData(options?.data), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  updateUser: (options?: ValueOptions): Promise<ListResponse<any>> => {
    return HttpApi.put(compileUrl(USERS_API.UPDATE_USER, options?.params), formatFormData(options?.data), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  deleteUser: (options?: ValueOptions) => {
    return HttpApi.delete(compileUrl(USERS_API.USER, options?.params));
  },
};
