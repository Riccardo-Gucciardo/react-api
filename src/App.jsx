import axios from "axios";
import { useState,useEffect } from "react";


export default function App() {


const [posts, setPosts] = useState([]);



function fetchPost() {
  axios
    .get("http://localhost:3000/api/posts")
}

const handleDelete = (idSingoloPost) => {
  axios
  .delete( `http://localhost:3000/api/posts/${idSingoloPost}` ).then(setPosts(posts.filter(elem => elem.id !== idSingoloPost)))
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
                  <>
                  <tr key={elem.id}>
                    <td>{elem.id}</td>
                    <td>{elem.title}</td>
                    <td>{elem.image}</td>
                    <td>
                    <button className="btn btn-danger " onClick={() => handleDelete(elem.id)}>
                      x
                    </button>                      
                    </td>

                  </tr>
                  </>
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


