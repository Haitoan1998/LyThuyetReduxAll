import {
  fetchDataStart,
  fetchDataFailure,
  fetchDataSuccess,
} from "../constants/actionReduxThunkWithReduxCore";

const initialState = {
  data: [],
  loading: false,
};

const reduxThunkReducerWithReduxCore = (state = initialState, action) => {
  switch (action.type) {
    case fetchDataStart().type:
      return { ...state, loading: true };

    case fetchDataSuccess().type:
      return { ...state, data: action.payload, loading: false };

    case fetchDataFailure().type:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reduxThunkReducerWithReduxCore;
