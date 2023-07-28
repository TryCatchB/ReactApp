import React from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";
import { useForm } from "react-hook-form";

const PostForm = ({ createPost }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addNewPost = (data) => {
    const newPost = {
      ...data,
      id: Date.now(),
    };
    createPost(newPost);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(addNewPost)}>
      <MyInput
        placeholder="Title"
        {...register("title", { required: "Title is required" })}
      />
      {errors.title && <span>{errors.title.message}</span>}
      <MyInput
        placeholder="Description"
        {...register("body", { required: "Description is required" })}
      />
      {errors.body && <span>{errors.body.message}</span>}
      <MyButton>Create</MyButton>
    </form>
  );
};

export default PostForm;
