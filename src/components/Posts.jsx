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
    <section className="postPage">
      {posts.map((posts) => (
        <div className="postDiv" key={posts.id}>
            <h4 className="post posth4">{posts.userId}</h4>
            <h3 className="post posth3">{posts.title}</h3>
            <p className="post postp">{posts.body}</p>
        </div>
      ))}
    </section>
  )
}