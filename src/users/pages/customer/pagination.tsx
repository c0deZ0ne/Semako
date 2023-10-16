import React, { useState } from 'react';
import { arrorLeft, arrowRight } from '../../../assets/icons';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageRangeDisplayed = 5;
  const [pageRangeStart, setPageRangeStart] = useState(1);

  let pageRangeEnd = pageRangeStart + pageRangeDisplayed - 1;
  if (pageRangeEnd > totalPages) {
    pageRangeEnd = totalPages;
  }

  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > pageRangeDisplayed) {
    const middle = Math.floor(pageRangeDisplayed / 3);
    startPage = currentPage - middle;
    endPage = currentPage + middle;

    if (startPage < 1) {
      startPage = 1;
      endPage = pageRangeDisplayed;
    } else if (endPage > totalPages) {
      startPage = totalPages - pageRangeDisplayed + 1;
      endPage = totalPages;
    }
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const handlePageChange = (page: number) => {
    console.log(page);
    setPageRangeStart(page);
    onPageChange(page);
  };

  return (
    <nav
      aria-label="Pagination"
      className=" flex  align-middle text-[#667085] justify-center items-center w-[100%] h-[100%] "
    >
      <ul className="pagination ml-auto mr-auto flex flex-row align-middle justify-center items-center w-[100%] h-[100%]  md:gap-[20px]">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <span onClick={() => handlePageChange(currentPage - 1)}>
            {arrorLeft(`${currentPage === 1 ? '' : '#4B6EFF'}`)}
          </span>
        </li>

        {pages.splice(0, 2).map((page) => (
          <li
            key={page}
            className={`page-item flex  w-[40px] h-[40px] rounded-md  items-center align-middle justify-center ${
              currentPage === page
                ? 'bg-[#F1F4FF]  rounded-md w-[40px] h-[40px]'
                : ''
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages && (
              <>
                <span className="flex w-[40px] h-[40px] items-center justify-center rounded-md">
                  <EllipsisHorizontalIcon
                    width={'20px'}
                    height={'20px'}
                    color="#667085"
                  />
                </span>
                <li className="page-item  flex w-[40px] h-[40px] items-center justify-center rounded-md">
                  <span
                    className="page-link "
                    onClick={() => handlePageChange(totalPages - 1)}
                  >
                    {totalPages - 1}
                  </span>
                </li>
              </>
            )}
            <li className="page-item test-[#667085]  w-[40px] h-[40px] flex items-center justify-center">
              <button
                className="page-link"
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </li>
          </>
        )}

        <li className={`page-item  w-[40px] h-[40px]`}>
          <button
            className="page-link "
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {arrowRight(
              `${currentPage === totalPages ? 'disabled' : '#4B6EFF'}`
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
