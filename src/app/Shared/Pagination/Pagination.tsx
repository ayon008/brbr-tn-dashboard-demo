"use client";
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
import { useRouter } from "next/navigation";

const PaginationButtons = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const btnClass = `border rounded-none hover:text-[#FF6C2F] cursor-pointer`;
  const router = useRouter();

  // Pagination function
  const handlePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("currentPage", newPage.toString());
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <Pagination className="border w-fit rounded-xl overflow-hidden">
      <PaginationContent className="gap-0">
        {/* Previous Page */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePage(currentPage - 1)} className="cursor-pointer" />
          </PaginationItem>
        )}
        {/* Ellipse */}
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationEllipsis className={btnClass} />
          </PaginationItem>
        )}
        {/* Previous Button */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => handlePage(currentPage - 1)}
              className={btnClass}
            >
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {/* Current Page */}
        <PaginationItem>
          <PaginationLink
            onClick={() => handlePage(currentPage)}
            className={`${btnClass} bg-[#FF6C2F] hover:bg-[#FF6C2F] text-white hover:text-white`}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {/* Next Page */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink
              onClick={() => handlePage(currentPage + 1)}
              className={btnClass}
            >
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {/* Ellipse */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {/* Next Button */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePage(currentPage + 1)}
              className={btnClass}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationButtons;
