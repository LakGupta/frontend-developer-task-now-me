import React from "react";
import Posts from "./Posts";

export default function PostList(props) {
  return (
    <div>
      {props.items.map((x) => (
        <Posts
          name={x.name}
          content={x.content}
          posted={x.posted}
          comments={x.comments}
        ></Posts>
      ))}
    </div>
  );
}
