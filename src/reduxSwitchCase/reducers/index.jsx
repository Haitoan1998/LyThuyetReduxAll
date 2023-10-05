import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const reducers = combineReducers({ toDo: todoReducer });

export default reducers;
