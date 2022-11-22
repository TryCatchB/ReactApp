import React from "react";
import { usePagination } from "../Hooks/usePagination";

const Pagination = ({ page, totalPages, changePages }) => {
  const pagesNumbers = usePagination(totalPages);

  return (
    <div className="pagination">
      {pagesNumbers.map((p) => (
        <span
          onClick={() => changePages(p)}
          className={page === p ? "page page--current" : "page"}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
