import { loginUser } from "../authSlice";

const middlewareAuth = (store) => (next) => (action) => {
  if (action.type === loginUser.fulfilled.type) {
    // Xác thực thành công, có thể lưu thông tin người dùng vào localStorage
    localStorage.setItem("tokenAuth", JSON.stringify(action.payload));
  }
  return next(action);
};

export default middlewareAuth;
