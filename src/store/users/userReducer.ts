import {
  UserDispatchTypes,
  User,
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "./userActionTypes";

interface IUserState {
  currentUser?: User;
  loggedIn: boolean;
  loading: boolean;
  error: string;
}

const initialState: IUserState = {
  loading: false,
  error: "",
  loggedIn: false,
};

const userReducer = (
  state: IUserState = initialState,
  action: UserDispatchTypes
): IUserState => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        loggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
