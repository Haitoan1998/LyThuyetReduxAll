import { addTodo } from "../constants/toDoActions";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodo().type:
      return { ...state, todos: [...state.todos, action.payload] };

    default:
      return state;
  }
};

export default todoReducer;
