import axios from "axios";
import { useState,useEffect } from "react";


export default function App() {
// const [todos, setTodos] = useState([]);

const [posts, setPosts] = useState([]);


// Fetching dei dati
// function fetchTodos() {
// axios.get("https://jsonplaceholder.typicode.com/todos")
// .then((res) => setTodos(res.data))
// }

function fetchPost() {
  axios
    .get("http://localhost:3000/api/posts")
    .then((res) => setPosts(res.data))
}



useEffect(fetchPost, [])


return (
    <div>
      {/* <ul>
        {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
))}
      </ul> */}


      <ul>
        {posts.map((element) => (
        <li key={element.id}>{element.title}</li>
))}
      </ul>
     </div>
);
}