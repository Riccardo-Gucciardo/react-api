import axios from "axios";
import { useState,useEffect } from "react";


export default function App() {


const [posts, setPosts] = useState([]);

const initialFromData = {
  title: '',
  image: '',
  tags: [],  
}

const [formData,setFormData] = useState(initialFromData)



function fetchPost() {
  axios
    .get("http://localhost:3000/api/posts").then((res) => setPosts(res.data))
}

const handleDelete = (idSingoloPost) => {
  axios
  .delete( `http://localhost:3000/api/posts/${idSingoloPost}` ).then(setPosts(posts.filter(elem => elem.id !== idSingoloPost)))
}

const handleField = (e) => {
  const {name,value} = e.target
  console.log(e.target);
  console.log(e);
  console.log(name);
  console.log(value);

if([name] == 'tags'){
  setFormData(
    {
    ...formData,
    [name]: value.split(',').map(elem => elem.trim()),

})} else{

setFormData({
  ...formData,
  [name]: value,

})};

}

const handleSubmit = (e) => {
e.preventDefault();

axios.post('http://localhost:3000/api/posts/',formData).then(fetchPost)
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
              <th scope="col">Title</th>
              <th scope="col">Immage</th>
              <th scope="col">tags</th>
            </tr>
          </thead>
          <tbody>
            
            {
              posts.map((elem) =>{
                return(
                  <>
                  <tr key={elem.id}>
                    <td>{elem.title}</td>
                    <td>{elem.image}</td>
                    <td>{elem.tags}</td>
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
        <form onSubmit={handleSubmit}>
          <div>

          <label htmlFor="">title</label>
          <input type="text" name="title" onChange={handleField}  /> 

          <label htmlFor="">image</label>
          <input type="text" name="image" onChange={handleField}  />
          
          <label htmlFor="">tags</label>
          <input type="text" name="tags" onChange={handleField}  />

          <button type="submit" className="btn btn-primary">Invio</button>             
          </div>
        </form>
      </div>
     </div>
  </>
);  
}


