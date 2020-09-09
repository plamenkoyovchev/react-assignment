import FakeObjectDataListStore from "../../shared/helpers/grid/FakeObjectDataListStore";

export const ITEMS_FETCHING_START = "ITEMS_FETCHING_START";
export const ITEMS_FETCHING_FAILURE = "ITEMS_FETCHING_FAILURE";
export const ITEMS_FETCHING_SUCCESS = "ITEMS_FETCHING_SUCCESS";

export interface IItemsFetchingStart {
  type: typeof ITEMS_FETCHING_START;
}

export interface IItemsFetchingFailure {
  type: typeof ITEMS_FETCHING_FAILURE;
  payload: string;
}

export interface IItemsFetchingSuccess {
  type: typeof ITEMS_FETCHING_SUCCESS;
  payload: FakeObjectDataListStore;
}

export type ItemsDispatchTypes =
  | IItemsFetchingStart
  | IItemsFetchingFailure
  | IItemsFetchingSuccess;
