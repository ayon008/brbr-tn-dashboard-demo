/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import { play } from "../Fonts/Play";
import Image from "next/image";
import { getProductNameAndVariant } from "@/lib/getProductVariant";
import { Edit2, Eye, Star, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const TableRowComponent = ({ data: product }: { data: any }) => {
  const mainImage =
    product.images && product.images.length > 0
      ? {
          src: product.images[0].src,
          alt: product.images[0].alt || product.name, // fallback to product name if alt is empty
        }
      : null;
  const result = getProductNameAndVariant(product);
  console.log(product.stock_quantity);

  return (
    <>
      <TableRow className={`${play.className}`}>
        <TableCell className="text-xs">{product?.id}</TableCell>
        <TableCell className="">
          <div className="flex items-stretch gap-3">
            {/* Product Image */}
            <Image
              src={mainImage?.src}
              alt={mainImage?.alt}
              width={46}
              height={46}
              className="rounded-md w-[46px] object-cover h-[46px]"
            />
            <div className="flex flex-col justify-between">
              {/* Product name */}
              <p className="text-xs">{result?.name}</p>

              {/* Size & Color */}
              <div className="text-[11px] space-y-1">
                {result.variant.size && (
                  <div>
                    <span className="font-medium">Size: </span>
                    {result.variant.size.join(", ")}
                  </div>
                )}

                {result.variant.color && (
                  <div>
                    <span className="font-medium">Color: </span>
                    {result.variant.color.join(", ")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </TableCell>
        {/* Pricing of Products */}
        <TableCell className="text-xs">
          {product.sale_price ? (
            <>
              <span className="line-through text-gray-400">
                ${product.regular_price}
              </span>
              <span className="ml-2 text-red-500">${product.sale_price}</span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </TableCell>
        {/* Stock */}
        <TableCell className="text-xs space-y-1">
          <p>
            {product.manage_stock
              ? product.stock_quantity > 0
                ? `${product.stock_quantity} in stock`
                : "Out of stock"
              : product.stock_status === "instock"
              ? "Available"
              : "Out of stock"}
          </p>
          <p>{product.total_sales} sold</p>
        </TableCell>
        <TableCell className="text-xs">
          {product.categories.map((cat: any, i: number) => (
            <span key={cat.id}>
              {cat.name}
              {i < product.categories.length - 1 && ", "}
            </span>
          ))}
        </TableCell>
        {/* Rating */}
        <TableCell className="text-xs">
          <div className="flex items-center justify-center gap-1">
            <span className="bg-[#EEF2F7] flex items-center gap-1 w-fit py-1 px-2 rounded-md">
              <Star className="fill-yellow-500 text-yellow-500 w-3 h-3" />
              <p>{product.average_rating}</p>
            </span>
            <span>{product.rating_count} reviews</span>
          </div>
        </TableCell>
        {/* Button */}
        <TableCell className="text-xs space-x-1">
          <Button className="bg-[#EEF2F7] text-black" variant={"default"}>
            <Eye className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button className="bg-[#FFF0EA] text-[#E6612A] hover:bg-[#E6612A] hover:text-white" variant={"default"}>
            <Edit2 className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button className="bg-[#FFF0EA] text-[#E6612A] hover:bg-[#E6612A] hover:text-white" variant={"default"}>
            <Trash2 className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableRowComponent;
