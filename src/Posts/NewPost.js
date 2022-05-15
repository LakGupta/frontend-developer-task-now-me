import { Divider } from "@material-ui/core";
import { Textsms } from "@material-ui/icons";
import React from "react";
import "./NewPost.css";

export default function NewPost(props) {
  return (
    <div className="mb-3">
      <div className="posts-header">
        <h3> Hello Jane</h3>
        <p>
          How are you doing today? Would you like to share something with the
          community?
        </p>
      </div>
      <div className="posts-container">
        <div className="create-post-text">Create post</div>
        <div className="content-area">
          <span>
            <Textsms></Textsms>
            &nbsp;
            &nbsp;
            How are you feeling today?
          </span>
        </div>
        <button className="btn btn-primary" onClick={ () => props.onShowRegister()}> Post</button>
      </div>
    </div>
  );
}
