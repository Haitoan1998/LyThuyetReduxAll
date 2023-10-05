import { addTodo } from "../constants/toDoActions";

export const addTodoAsync = (text) => {
  return async (dispatch, getState) => {
    await setTimeout(() => {
      dispatch(addTodo(text));
    }, 2000);
  };
};
