import axios from "axios";
import { useState,useEffect } from "react";


export default function App() {


const [posts, setPosts] = useState([]);



function fetchPost() {
  axios
    .get("http://localhost:3000/api/posts").then((res) => setPosts(res.data).catch(err => console.error(err)))
}



useEffect( () => fetchPost, [])  


return (
  <>
    
    <div className="container"> 
    <h1 >fetch posts</h1>  
      {/* /* <ul>
        {posts.map((element) => (
        <li key={element.id}>{element.title}</li>
))}
      </ul> */ }

      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Immage</th>
            </tr>
          </thead>
          <tbody>
            
            {
              posts.map((elem) =>{
                return(
                  <tr key={elem.id}>
                    <td>{elem.id}</td>
                    <td>{elem.title}</td>
                    <td>{elem.image}</td>
                  </tr>
                 )              
             
              })
                 
            }
          </tbody>
        </table>
      </div>
     </div>
  </>
);  
}