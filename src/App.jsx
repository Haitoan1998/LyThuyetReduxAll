import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./redux/actions/postAction";
import { useEffect } from "react";
import { addTodoAsync } from "./reduxSwitchCase/actions/todoActions";
import { fetchDataThunkReduxCore } from "./reduxThunkWithReduxCore/actions/actionsThunkFucntion";
import {
  addTodo,
  fetchTodosAsync,
} from "./reduxThunkToolkit/todosSlice/todosSlice";
import { setUser } from "./reduxThunkToolkit/userSlice/userSlice";
import { loginUser } from "./reduxThunkToolkit/authSlice/authSlice";
import {
  getProductID,
  getProducts,
} from "./reduxThunkToolkit/getUserSlice/getProductsSlice";
function App() {
  // redux folder
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadPosts());
  // }, [dispatch]);
  // const data = useSelector((state) => state.posts.data);
  // const requesting = useSelector((state) => state.posts.requesting);

  //redux switch case
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(addTodoAsync("xin chào"));
  // }, []);
  // const data = useSelector((state) => state.toDo.todos);

  //redux thunk with redux core
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDataThunkReduxCore());
  // }, []);
  // const data = useSelector((state) => state.dataFetchThunk);

  //redux thunk toolkit
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTodo("data sent"));
    dispatch(fetchTodosAsync());
    dispatch(setUser([{ name: "John" }]));
    dispatch(loginUser());
    dispatch(getProducts());
    dispatch(getProductID(2));
  }, []);
  const data = useSelector((state) => state.user);
  const data1 = useSelector((state) => state.todos);
  const authStatus = useSelector((state) => state);
  const product = useSelector((state) => state.product);

  //log data redux
  // console.log(data);
  // console.log(data1);
  // console.log(authStatus);
  console.log(product);

  return (
    <>
      <div>Hello world</div>
    </>
  );
}

export default App;
