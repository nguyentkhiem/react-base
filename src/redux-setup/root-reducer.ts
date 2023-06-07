import { combineReducers } from '@reduxjs/toolkit';
import auth from 'redux-setup/auth';
import counter from 'redux-setup/counter';

const rootReducer = combineReducers({ counter, auth });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
