import { createSlice } from '@reduxjs/toolkit';
import { Permissions, Roles } from 'shared/definitions/auth';

interface InitialStateAuth {
  isLogin: boolean;
  isAdmin?: boolean;
  loading: boolean;
  user?: IUser;
  role?: Roles;
  permissions?: Array<Permissions>;
}

const initialState: InitialStateAuth = {
  isLogin: false,
  isAdmin: true,
  loading: false,
  permissions: [],
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => initialState,
    loginSuccess: (state, action) => ({ ...state, ...action.payload }),
    loading: (state, action) => ({ ...state, loading: action.payload }),
    updateCurrentUser: (state, action) => ({
      ...state,
      user: { ...state.user, ...action.payload },
    }),
  },
});

export const { actions, reducer } = slice;
