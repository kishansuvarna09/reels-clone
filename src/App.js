import React, { useState } from "react";
import "./App.css";

import Post from "./Components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      userName: "indianItchyFoot",
      caption: "One life. One world. Explore it.",
      imageUrl:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      userName: "indianItchyGeek",
      caption: "KEEP CALM and GEEK ON",
      imageUrl:
        "https://images.unsplash.com/photo-1526958938731-27f1ccdb1817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      userName: "indianItchyCook",
      caption: "Nothing beats a home cooked meal",
      imageUrl:
        "https://images.unsplash.com/photo-1597959471329-fd2d974f958d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    },
    {
      userName: "indianItchyPet",
      caption: "I will always woof you.",
      imageUrl:
        "https://images.unsplash.com/photo-1510020553968-30f966e1ec9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    },
  ]);
  return (
    <div className="app">
      {/* Header     */}
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram"
          className="app__headerImage"
        />
      </div>
      {posts.map((post) => (
        <Post
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
