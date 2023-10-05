// postAction.js
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from "../constants/POST";

export const loadPosts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCH_POST_REQUEST });
      console.log(1);
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url);
      const responseBody = await response.json();
      dispatch({ type: FETCH_POST_SUCCESS, data: responseBody });
    } catch (error) {
      console.error(error);

      dispatch({
        type: FETCH_POST_ERROR,
        message: error,
      });
    }
  };
};
