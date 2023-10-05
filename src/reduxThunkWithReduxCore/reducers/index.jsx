import { combineReducers } from "redux";
import reduxThunkReducerWithReduxCore from "./reduxThunkReducerWithReduxCore";

const reducers = combineReducers({
  dataFetchThunk: reduxThunkReducerWithReduxCore,
});
export default reducers;
