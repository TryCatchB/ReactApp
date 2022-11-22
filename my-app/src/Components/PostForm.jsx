import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    event.preventDefault();
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        placeholder="Title"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <MyInput
        placeholder="Description"
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />
      <MyButton onClick={addNewPost}>Create</MyButton>
    </form>
  );
};

export default PostForm;
