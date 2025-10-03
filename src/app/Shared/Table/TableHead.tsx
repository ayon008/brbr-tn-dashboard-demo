import { TableHead } from "@/components/ui/table";
import React from "react";
import { play } from "../Fonts/Play";

const TableHeadComponent = ({ heads }: { heads: string[] }) => {
  return (
    <>
      {heads.map((head, i) => {
        return <TableHead className={`${play.className} text-gray-500 font-bold text-xs`} key={i}>{head}</TableHead>;
      })}
    </>
  );
};

export default TableHeadComponent;
