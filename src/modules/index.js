import { combineReducers } from "redux";
import posts, { postsSaga } from "./posts";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([postsSaga()]);
}

const rootReducer = combineReducers({ posts });
export default rootReducer;
