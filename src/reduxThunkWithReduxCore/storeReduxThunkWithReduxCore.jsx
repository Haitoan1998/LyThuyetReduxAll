import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeReduxThunkWithReduxCore = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default storeReduxThunkWithReduxCore;
