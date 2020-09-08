import {
  UserDispatchTypes,
  User,
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "./userActionTypes";

interface IUserState {
  currentUser?: User;
  loading: boolean;
  error: string;
}

const initialState: IUserState = {
  loading: false,
  error: "",
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
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
