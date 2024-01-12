import {useState, useEffect} from 'react';
import "./Posts.css"

export const Post = () => {
  
  const [posts, setPosts] = useState([]);
    
  useEffect(() => {
      async function fetchPosts() {
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
          const json = await res.json();
          setPosts(json);
          console.log(json);
      }

      fetchPosts();
  }, []);

  return(
    <section className="postBox">
      {posts.map((posts) => (
        <div className="postDiv" key={posts.id}>
            <h4>{posts.userId}</h4>
            <h3>{posts.title}</h3>
            <p>{posts.body}</p>
        </div>
      ))}
    </section>
  )
}