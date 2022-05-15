import { Avatar } from "@material-ui/core";
import React from "react";
import "./PostContent.css";
import { ModeCommentOutlined } from "@material-ui/icons";

export default function PostContent(props) {
  return (
    <div className="">
      <div className="post-area">
        <div className="post-emoticon">
          <Avatar></Avatar>
        </div>
        <div className="post-content">
          {props.content}
        </div>
      </div>
      <div className="comments">
        <div className="comments-icon">
          <ModeCommentOutlined></ModeCommentOutlined>
        </div>
        <div className="comments-number">{props.comments}</div>
      </div>
    </div>
  );
}
