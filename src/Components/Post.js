import React from "react";
import "../Post.css";
import Avatar from "@material-ui/core/Avatar";

const Post = ({ userName, caption, imageUrl }) => {
  return (
    <div className="post">
      <div class="post__header">
        <Avatar className="post__avatar" alt={userName} />
        <h3>{userName}</h3>
      </div>
      <img
        className="post__image"
        src={imageUrl}
        alt="Failed to load the post"
      />
      <p className="post__text">
        <strong>{userName}</strong>
        <span className="post__caption">{caption}</span>
      </p>
    </div>
  );
};

export default Post;
