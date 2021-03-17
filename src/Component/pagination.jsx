import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemcount, pageSize, handlePageChange, currentPage } = props;
  const pageCount = itemcount / pageSize;

  const pages = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;
  return (
    <nav>
         {console.log("pages")}
      <ul className="pagination">
         
        {pages.map((page) => (
          <li  key={page} className="page-item">
            <a className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
