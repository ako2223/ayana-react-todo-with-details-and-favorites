import React from "react";
import { useParams } from "react-router";

function DetailPost({ postsProps }) {
  console.log(postsProps);
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div>
        {postsProps.map((post) =>
          post.id === id ? (
            <div>
              <h2>Post number: {postsProps.indexOf(post) + 1} </h2>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ) : (
            <div></div>
          )
        )}
      </div>

      {/* <h2>Post number: </h2>
      <h2>title</h2>
      <p>body</p> */}
    </div>
  );
}
export default DetailPost;
