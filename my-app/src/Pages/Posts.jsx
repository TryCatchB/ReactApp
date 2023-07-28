import React, { useContext, useEffect, useRef, useState } from "react";
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
import { Query } from "../Hooks/useContext";
import { useObserver } from "../Hooks/useObserver";
import MySelect from "../Components/UI/Select/MySelect";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { filter, setFilter } = useContext(Query);
  const [totalPages, setTotalPages] = useState(0);
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(0);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
    setPosts((prev) => [...prev, ...response.data]);
  });

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts((prev) => [...prev, newPost]);
    setModal(false);
  };

  useObserver(lastElement, isPostsLoading, page < totalPages, () => {
    setPage(page + 1);
  });

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
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Amount items"
        options={[
          { value: "5", title: "5" },
          { value: "10", title: "10" },
          { value: "15", title: "15" },
          { value: "-1", title: "All posts" },
        ]}
      />

      <PostList
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts list"
      />

      <div ref={lastElement}></div>
      {postError && <h1 style={{ textAlign: "center" }}>Error {postError}</h1>}

      {isPostsLoading && (
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Posts;
