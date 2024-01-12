import { DotsSvg } from "../components/Elements/DotsSvg";
import "./MainPage.css";
import {useState, useEffect} from 'react';

export const MainPage = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const json = await res.json();
        setPost(json);
        console.log(json);
    }

    fetchPosts();
}, []);

  const randomPost = Array.isArray(post) && post.length > 0 ? post[Math.floor(Math.random() * post.length)] : null;


  return (
  <section className="mainPage">
    {randomPost && (
      <div className="randomP">
        <div className="topBox">
          <h2 className="mainh2">{randomPost.title}</h2>
          <DotsSvg/>
        </div>
        <p className="mainp">{randomPost.body}</p>
      </div>
    )}
  </section>
  )
}

