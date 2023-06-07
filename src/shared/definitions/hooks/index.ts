import Cookie from 'js-cookie';
import { useContext } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from 'redux-setup/root-reducer';
// context
import { ModalContext } from 'context/modal';
// redux-setup
import { store } from 'redux-setup/store';
import { logout } from 'redux-setup/auth';
// shared
import { ACCESS_TOKEN } from 'shared/constants/variables';
import { Permissions, Roles } from 'shared/definitions/auth';
import { AUTH } from 'shared/definitions/saga-type';

/**
 * @description
 */
// TH save auth in store
// export const useAuth = () => useSelector(({ auth }: RootState) => ({ ...auth }));

/**
 * @description
 */
export const useAuth = () => {
  const accessToken = Cookie.get(ACCESS_TOKEN);
  return { isLogin: !!accessToken };
};

/**
 * @description
 */
export const useModal = () => useContext(ModalContext);

/**
 *
 * @param user
 */
export const handleLogin = (user?: IUser): void => {
  // Cookie.set(ACCESS_TOKEN, user?.token);
  store.dispatch({
    type: AUTH.FETCH_USER_LOGIN,
    payload: { user },
  });
};

/**
 *
 */
export const handleLogout = (): void => {
  Cookie.remove(ACCESS_TOKEN);
  store.dispatch(logout());
};

/**
 * @param permission
 */
export const can = (permission?: Permissions | Permissions[]): boolean => {
  const { permissions: authPermissions }: any = useAuth();

  return false;
};

/**
 * @param user
 */
export const getUserPermissions = (user: IUser): Array<Permissions> => {
  const permissions: Array<Permissions> = [];
  // push permissions

  return permissions;
};

/**
 * @param user
 */
export const getUserRole = (user: IUser): Roles => {
  const { is_admin } = user;

  let role: Roles = is_admin ? Roles.ADMIN : Roles.GUEST;

  return role;
};
