import {useState, useEffect} from 'react';
import "./Comments.css"

export const Comments = () => {
  
  const [comments, setComments] = useState([]);
    
  useEffect(() => {
      async function fetchComments() {
          const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
          const json = await res.json();
          setComments(json);
          console.log(json);
      }

      fetchComments();
  }, []);

  return(
    <section className="comBox">
      {comments.map((comments) => (
        <div className="comDiv" key={comments.id}>
            <h4>{comments.postId}</h4>
            <h2>{comments.name}</h2>
            <p>{comments.email}</p>
            <p>{comments.body}</p>
        </div>
      ))}
    </section>
  )
}