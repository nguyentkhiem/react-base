/* eslint-disable @typescript-eslint/no-use-before-define */
// library
import React, { createContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import i18n from 'i18n';
// others
import { PAGES_NOT_AUTH, PATH_AUTH_LOGIN } from 'routes/paths';
import { useAuth } from 'shared/definitions/hooks';
import { GlobalDebug } from 'shared/utils';
import { ENV_PRODUCTION } from 'shared/definitions/config';

export const AppContext = createContext<AppContextProps>({
  props: {},
  setProps: (props: { [x: string]: any }) => {},
});

export const AppProvider = ({ children }: any) => {
  const { isLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  document.documentElement.lang = i18n.language;

  if (process.env.REACT_APP_NODE_ENV === ENV_PRODUCTION) {
    GlobalDebug(false, true);
  }

  const setProps = (props: { [x: string]: any }) => {
    setState({
      setProps,
      props,
    });
  };

  const [state, setState] = React.useReducer((o: AppContextProps, n: AppContextProps) => ({ ...o, ...n }), {
    props: {},
    setProps,
  });

  useEffect(() => {
    if (PAGES_NOT_AUTH.includes(location.pathname))
      return navigate({
        pathname: location.pathname,
        search: location.search.toString(),
      });

    if (!isLogin) return navigate(PATH_AUTH_LOGIN);

    return navigate({
      pathname: location.pathname,
      search: location.search.toString(),
    });
  }, [isLogin]);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
