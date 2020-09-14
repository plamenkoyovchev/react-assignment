import {
  ITEMS_FETCHING_START,
  ITEMS_FETCHING_SUCCESS,
  ITEMS_FETCHING_FAILURE,
  ItemsDispatchTypes,
} from "./itemsActionTypes";

export interface IItemsState {
  loading: boolean;
  error: string;
  data?: any;
}

const initialState: IItemsState = {
  loading: false,
  error: "",
  data: null,
};

const itemsReducer = (
  state: IItemsState = initialState,
  action: ItemsDispatchTypes
): IItemsState => {
  switch (action.type) {
    case ITEMS_FETCHING_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ITEMS_FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case ITEMS_FETCHING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
