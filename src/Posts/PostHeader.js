import React from "react";
import "./PostHeader.css";
import { Avatar } from '@material-ui/core'


export default function PostHeader(props) {
  return (
    <div className="post-header">
      <div className="image-header">
        <Avatar></Avatar>
      </div>
      <div className="information-header">
        <div className="name-header">{props.name}</div>
        <small className="time-consumed-header"> {props.posted}</small>
      </div>
    </div>
  );
}
