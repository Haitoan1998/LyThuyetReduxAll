// import constants
import {
  FETCH_POST_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "../constants/post";

//// khởi tạo một init state
const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
};

/// bắt từng action type
function exampleReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.data,
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        requesting: false,
        message: action.message,
      };

    default:
      return state;
  }
}

export default exampleReducers;
