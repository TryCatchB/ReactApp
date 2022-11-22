import { useState } from "react";

export const useFetching = (callBack) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      await callBack();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchPosts, isLoading, error];
};
