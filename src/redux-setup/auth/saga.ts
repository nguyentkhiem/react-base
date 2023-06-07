import { takeEvery, put } from 'redux-saga/effects';
import { UsersService } from 'services/api';
import { AUTH } from 'shared/definitions/saga-type';
import { loginLoading, loginSuccess } from 'redux-setup/auth';
import { getUserPermissions, getUserRole } from 'shared/definitions/hooks';

function* fetchUserLogin(action: any) {
  try {
    const user: ResponseGenerator = yield UsersService.getCurrentUserInfo({ params: {} });

    if (user?.body?.id) {
      yield put(
        loginSuccess({
          userId: user?.body?.id,
          user: user?.body,
          isLogin: true,
          permissions: getUserPermissions({
            ...user?.body,
          }),
          role: getUserRole(user?.body),
        }),
      );
    }

    yield put(loginLoading(false));
  } catch (error) {
    yield put(loginLoading(false));
  }
}

export default function* rootSaga() {
  yield takeEvery(AUTH.FETCH_USER_LOGIN, fetchUserLogin);
}
