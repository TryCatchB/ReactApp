import React from "react";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MySelect
        defaultValue="Sorting"
        options={[
          { value: "title", title: "By title" },
          { value: "body", title: "By description" },
        ]}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
};

export default PostFilter;
