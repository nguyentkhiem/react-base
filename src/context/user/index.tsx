import { createContext, useReducer } from 'react';

interface IStateTypes {
  users: Array<Object>;
}

interface IUser {
  id?: Number;
  name?: String;
}

interface IActionTypes {
  type: 'CREATE_USER' | 'UPDATE_USER' | 'DELETE_USER';
  payload: {
    id?: Number;
    userData?: IUser;
  };
}

const initialState: IStateTypes = {
  users: [],
};

const reducer = (state: IStateTypes, action: IActionTypes) => {
  switch (action.type) {
    case 'CREATE_USER':
      return { ...state, users: [...state.users, action.payload.userData] };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users?.map((user: any) => {
          if (action.payload.id === user?.id) {
            return action.payload.userData;
          }

          return user;
        }),
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users?.filter((user: any) => user.id !== action.payload.id),
      };
    default:
      throw new Error();
  }
};

const useValue = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};

/* eslint-disable-next-line */
export const UserContext = createContext({} as ReturnType<typeof useValue>);

export const UserProvider = (props: any) => {
  return <UserContext.Provider value={useValue()}>{props.children}</UserContext.Provider>;
};
