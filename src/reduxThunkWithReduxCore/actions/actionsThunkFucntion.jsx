import axios from "axios";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../constants/actionReduxThunkWithReduxCore";

// Thunk action creator
export const fetchDataThunkReduxCore = () => {
  return async (dispatch, getState) => {
    dispatch(fetchDataStart());

    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");

      const users = response.data.data;

      dispatch(fetchDataSuccess(users));
    } catch (error) {
      console.error("Error fetching users:", error);

      dispatch(fetchUsersFailure(error.message)); // Chuyển thông báo lỗi vào action
    }
  };
};
