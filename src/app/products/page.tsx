/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import React from "react";
import { play } from "../Shared/Fonts/Play";
import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
import TableHeadComponent from "../Shared/Table/TableHead";
import { getAllProducts } from "@/lib/getAllProducts";
import TableRowComponent from "../Shared/Table/TableRow";
import PaginationButtons from "../Shared/Pagination/Pagination";
import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";

const page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { currentPage } = searchParams;
  const page = Number(currentPage) || 1;
  const { products, totalPages } = await getAllProducts(
    12,
    Number(currentPage || 1)
  );
  console.log(totalPages);

  return (
    <div>
      <div className="bg-white dark:bg-[#282F36] rounded-md">
        <div className="flex justify-between items-center p-4">
          <h1 className="font-semibold text-xs">All Products List</h1>
          <div>
            <Link href={"/products/createProduct"}>
              <Button
                variant={"default"}
                className={`${play.className} text-[10px] bg-[#FF6C2F] !px-2 !py-[0px] text-white cursor-pointer`}
              >
                Add Products
              </Button>
            </Link>
          </div>
        </div>
        {/* Product Table */}
        <Table className="">
          <TableHeader>
            <TableRow className="bg-[#FCFCFD] dark:bg-[#293038] px-4">
              <TableHeadComponent
                heads={[
                  "#",
                  "Product Name & Size",
                  "Price",
                  "Stock",
                  "Category",
                  "Rating",
                  "Action",
                ]}
              />
            </TableRow>
          </TableHeader>
          {/* Table Body */}
          <TableBody>
            {/* Product Rows */}
            {products.map((data: any) => {
              return <TableRowComponent key={data?.id} data={data} />;
            })}
          </TableBody>
        </Table>
        <div className="py-6 border-t-1">
          <PaginationButtons
            totalPages={totalPages}
            currentPage={Number(currentPage || 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
