import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";

import store from "./redux/store.jsx";
import storeReduxSwitchCase from "./reduxSwitchCase/storeReduxSwitchCase.jsx";
import storeReduxThunkWithReduxCore from "./reduxThunkWithReduxCore/storeReduxThunkWithReduxCore.jsx";
import storeReduxThunkToolkit from "./reduxThunkToolkit/storeReduxThunkToolkit.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={storeReduxThunkToolkit}>
      <App />
    </Provider>
  </>
);
