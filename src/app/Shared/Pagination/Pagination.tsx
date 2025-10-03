import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationButtons = ({ totalPages }: { totalPages: number }) => {
  return <Pagination></Pagination>;
};

export default PaginationButtons;
