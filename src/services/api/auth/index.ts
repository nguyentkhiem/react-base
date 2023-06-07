import { AUTH_API } from 'shared/definitions/api';
import { HttpApi } from 'services/http';
import { compileUrl } from 'shared/utils';

export const AuthService = {
  login: (options?: ValueOptions) => {
    return HttpApi.post(compileUrl(AUTH_API.GET_ACCESS_TOKEN, options?.params), options?.data, options?.config);
  },
  getIdentityByEmail: (options?: ValueOptions) => {
    return HttpApi.post(compileUrl(AUTH_API.GET_IDENTITY_BY_EMAIL, options?.params), options?.data, options?.config);
  },
  getIdentityById: (options?: ValueOptions) => {
    return HttpApi.post(compileUrl(AUTH_API.GET_IDENTITY_BY_ID, options?.params), options?.data, options?.config);
  },
};
