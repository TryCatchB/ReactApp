import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
  const navigante = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigante(`/Posts/${props.post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => props.removePost(props.post)}>Remove</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
