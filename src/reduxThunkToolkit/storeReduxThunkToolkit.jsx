import { configureStore } from "@reduxjs/toolkit";
import todosSlice, { fetchTodosAsync } from "./todosSlice/todosSlice";
import userSlice, { setUser } from "./userSlice/userSlice";
import middlewareAuth from "./authSlice/middlewareAuth/middlewareAuth";
import authSlice from "./authSlice/authSlice";
import productSlice from "./getUserSlice/getProductsSlice";

const storeReduxThunkToolkit = configureStore({
  reducer: {
    todos: todosSlice,
    user: userSlice,
    auth: authSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middlewareAuth);
  },
});

export default storeReduxThunkToolkit;
