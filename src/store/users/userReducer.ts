import {
  UserDispatchTypes,
  User,
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_CURRENT_USER,
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
        error: "",
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
        error: "",
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        currentUser: undefined,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        loggedIn: action.payload !== null,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
