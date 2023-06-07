import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookie from 'js-cookie';
import i18n from 'i18n';
import { notification } from 'antd';
// shared
import { ACCESS_TOKEN, API_STATUS } from 'shared/constants/variables';
import { DEFAULT_PAGE_LOGIN } from 'shared/definitions/config';
import { handleLogout } from 'shared/definitions/hooks';

const REQ_TIMEOUT = 25 * 1000;
class Http {
  _http: AxiosInstance;

  /**
   * @param options
   */
  constructor(options: AxiosRequestConfig) {
    this._http = axios.create(options);
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  /**
   * @param url
   * @param config
   */
  get(url: string, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse> {
    return this._http.get(url, config);
  }

  /**
   * @param url
   * @param data
   * @param config
   */
  post(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this._http.post(url, data, config);
  }

  /**
   * @param url
   * @param data
   * @param config
   */
  put(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this._http.put(url, data, config);
  }

  /**
   * @param url
   * @param data
   * @param config
   */
  patch(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this._http.patch(url, data, config);
  }

  /**
   * @param url
   * @param config
   */
  delete(url: string, config?: AxiosRequestConfig | undefined) {
    return this._http.delete(url, config);
  }

  /**
   * @param url
   * @param config
   */
  head(url: string, config?: AxiosRequestConfig | undefined) {
    return this._http.head(url, config);
  }

  /**
   * @param url
   * @param config
   */
  options(url: string, config?: AxiosRequestConfig | undefined) {
    return this._http.options(url, config);
  }

  /**
   * @param configs
   * @param accessToken
   */
  configHeaderAuthorization(configs: AxiosRequestConfig, accessToken: string): AxiosRequestConfig {
    try {
      configs.headers = {
        ...configs.headers,
        Authorization: `Bearer ${accessToken}`,
      };
      return configs;
    } catch (e) {
      return configs;
    }
  }

  /**
   *
   */
  interceptorsRequest() {
    this._http.interceptors.request.use(
      async (config: AxiosRequestConfig): Promise<any> => {
        const accessToken: string = `${Cookie.get(ACCESS_TOKEN)}`;
        return this.configHeaderAuthorization(config, accessToken);
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  /**
   *
   */
  interceptorsResponse() {
    this._http.interceptors.response.use(
      async (response: AxiosResponse): Promise<AxiosResponse> => {
        return response.data;
      },
      (error: AxiosError) => {
        if (error.response?.status === API_STATUS.UNAUTHORIZED) {
          handleLogout();
          window.location.href = DEFAULT_PAGE_LOGIN;
        }

        if ([API_STATUS.BAD_REQUEST, API_STATUS.INTERNAL_SERVER_ERROR].includes(Number(error.response?.status))) {
          notification.error({
            message: i18n.t(`errors.${error.response?.status}`),
          });
        }

        return Promise.reject(error);
      },
    );
  }
}

export const HttpApi = new Http({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  },
  withCredentials: false,
  timeout: REQ_TIMEOUT,
});
