import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const storeReduxSwitchCase = createStore(reducers, applyMiddleware(thunk));

export default storeReduxSwitchCase;
