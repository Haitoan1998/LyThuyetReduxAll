import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodosAsync = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();
    return data;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: { addTodo: null, dataApi: [] },
  reducers: {
    addTodo: (state, action) => {
      state.addTodo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
      state.dataApi = action.payload;
    });
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
