"use client";

import { usePathname, useSearchParams, useParams } from "next/navigation";

export const usePagination = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams<{ page: string }>();
  const numbers = [];

  // Determine the range of page numbers to display
  const startPage = Math.max(2, currentPage - 2);
  const endPage = Math.min(totalPages - 1, currentPage + 2);

  // Always include the first page
  if (startPage > 2) {
    numbers.push(1, "ellipsis1");
  } else if (startPage === 2) {
    numbers.push(1);
  }

  // Include the dynamic range of page numbers
  for (let num = startPage; num <= endPage; num++) {
    numbers.push(num);
  }

  // Always include the last page
  if (endPage < totalPages - 1) {
    numbers.push("ellipsis2", totalPages);
  } else if (endPage === totalPages - 1) {
    numbers.push(totalPages);
  }

  function setPage(num: number) {
    if (num < 1 || num > totalPages) return "#";

    // Remove any trailing number in current pathname and replace with new page number
    // Example: "/en/category/2" → "/en/category/3"
    const basePath = pathname.replace(/\/\d+$/, "");
    return `${basePath}/${num}`;
  }

  function pageLink(page: string | number) {
    return setPage(Number(page));
  }

  const prevLink = setPage(currentPage - 1);
  const nextLink = setPage(currentPage + 1);

  return {
    numbers,
    prevLink,
    nextLink,
    pageLink,
  };
};
