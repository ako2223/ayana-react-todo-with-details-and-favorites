import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import PostList from "./components/PostList/PostList";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import PostItem from "./components/PostItem/PostItem";
import DetailPost from "./components/DetailPost/DetailPost";
export const BASE_URL = "http://localhost:8000";

function App() {
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  const getPosts = async () => {
    const responce = await axios.get(`${BASE_URL}/posts`);
    const data = await responce.data;
    setPosts(data);
    console.log(data);
  };

  const getTodos = async () => {
    const responce = await axios.get(`${BASE_URL}/todos`);
    const data = await responce.data;
    setTodos(data);
  };

  useEffect(() => {
    getPosts();
    getTodos();
  }, []);

  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </header>

      <Routes>
        <Route path="/" element={<div>Hello!</div>} />
        <Route path="/posts" element={<PostList postsProps={posts} />} />
        <Route path="/posts/:id" element={<DetailPost postsProps={posts} />} />
        <Route path="/todos" element={<TodoList todoProps={todos} />} />
      </Routes>
    </>
  );
}

export default App;
