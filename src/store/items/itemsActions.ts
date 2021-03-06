import {
  ItemsDispatchTypes,
  ITEMS_FETCHING_START,
  ITEMS_FETCHING_SUCCESS,
  ITEMS_FETCHING_FAILURE,
  IItemsFetchingStart,
  IItemsFetchingSuccess,
  IItemsFetchingFailure,
} from "./itemsActionTypes";

import makeData from "../../shared/helpers/grid/makeData";

import { Dispatch } from "redux";

const itemsFetchingStart = (): IItemsFetchingStart => {
  return {
    type: ITEMS_FETCHING_START,
  };
};

const itemsFetchingSuccess = (data: any): IItemsFetchingSuccess => {
  return {
    type: ITEMS_FETCHING_SUCCESS,
    payload: data,
  };
};

const itemsFetchingFailure = (error: string): IItemsFetchingFailure => {
  return {
    type: ITEMS_FETCHING_FAILURE,
    payload: error,
  };
};

export const fetchItems = () => (dispatch: Dispatch<ItemsDispatchTypes>) => {
  try {
    dispatch(itemsFetchingStart());
    const data = makeData(15);
    dispatch(itemsFetchingSuccess(data));
  } catch (error) {
    dispatch(itemsFetchingFailure("Loading data failed."));
  }
};
