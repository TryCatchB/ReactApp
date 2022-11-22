import React, { useContext, useEffect, useState } from "react";
import PostFilter from "../Components/PostFilter";
import PostForm from "../Components/PostForm";
import PostList from "../Components/PostList";
import MyButton from "../Components/UI/Button/MyButton";
import MyModal from "../Components/UI/Modal/MyModal";
import { usePost } from "../Hooks/usePost";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import { useFetching } from "../Hooks/useFetching";
import { getPagesCount } from "../Utils/Pages";
import Pogination from "../Components/Pagination";
import { Query } from "../Hooks/useContext";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { filter, setFilter } = useContext(Query);
  const [totalPages, setTotalPages] = useState(0);
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
    setPosts(response.data);
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const changePages = (p) => {
    setPage(p);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} style={{ marginTop: "15px" }}>
        Create
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1 style={{ textAlign: "center" }}>Error {postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title="Posts list"
        />
      )}
      <Pogination
        page={page}
        totalPages={totalPages}
        changePages={changePages}
      />
    </div>
  );
};

export default Posts;
