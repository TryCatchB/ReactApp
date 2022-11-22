import React from "react";
import Loader from "./UI/Loader/Loader";

const PostComment = ({ errorCommnets, loadingCommnets, commnet }) => {
  return (
    <div className="postCommnet">
      <h1>Commnets: </h1>

      {errorCommnets && <h1>Error {commnet}</h1>}

      {loadingCommnets ? (
        <Loader />
      ) : (
        <div>
          {commnet.map((com) => (
            <div className="postCommnetItems" key={com.email}>
              <h4>{com.email}</h4>
              <div>{com.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostComment;
