import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import PostComment from "../Components/PostCommnet";
import PostInfo from "../Components/PostInfo";
import { useFetching } from "../Hooks/useFetching";

const InformationAboutPost = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [commnet, setComment] = useState([]);

  const [fetchInfo, loadingInfo, errorInfo] = useFetching(async () => {
    const postInfo = await PostService.getInfoAboutPost(params.id);
    setPost(postInfo);
  });

  const [fetchCooments, loadingCommnets, errorCommnets] = useFetching(
    async () => {
      const comments = await PostService.getCommentPost(params.id);
      setComment(comments);
    }
  );

  useEffect(() => {
    fetchInfo();
    fetchCooments();
  });

  return (
    <div className="InformationAboutPost">
      <PostInfo
        post={post}
        params={params}
        errorInfo={errorInfo}
        loadingInfo={loadingInfo}
      />

      <PostComment
        commnet={commnet}
        errorCommnets={errorCommnets}
        loadingCommnets={loadingCommnets}
      />
    </div>
  );
};

export default InformationAboutPost;
