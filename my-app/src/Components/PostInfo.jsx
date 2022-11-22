import React from "react";
import Loader from "./UI/Loader/Loader";

const PostInfo = ({ post, errorInfo, params, loadingInfo }) => {
  return (
    <div className="postInfo">
      <h1>You open page post with ID = {params.id}.</h1>

      {errorInfo && <h1>Error {errorInfo}</h1>}

      {loadingInfo ? (
        <Loader />
      ) : (
        <div className="postInfoItems">
          {post.id}. {post.title}
        </div>
      )}
    </div>
  );
};

export default PostInfo;
