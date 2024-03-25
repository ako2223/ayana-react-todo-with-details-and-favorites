import React from "react";
import style from "./PostItem.module.scss";
import { NavLink } from "react-router-dom";

function PostItem({ post }) {
  return (
    <div className={style.post}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <NavLink to={`/posts/${post.id}`}>Detail</NavLink>
    </div>
  );
}

export default PostItem;
