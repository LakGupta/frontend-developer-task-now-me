import React from "react";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import "./Posts.css";

export default function Posts(props) {
  return (
    <div className="posts-container mb-3">
      <PostHeader name={props.name} posted={props.posted}></PostHeader>
      <PostContent
        content={props.content}
        comments={props.comments}
      ></PostContent>
    </div>
  );
}
