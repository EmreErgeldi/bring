import { products } from "@prisma/client";
import { useAtom } from "jotai";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { basketAtom } from "../../lib/atoms";

interface productsProps {
  data: products[];
}

export default function CategoryTable({ data }: productsProps) {
  const [basket, setBasket] = useAtom(basketAtom);
  const addBasket = (product: products) => {
    !basket.find((item) => item.product_id === product.product_id) && setBasket([...basket, product]);
  };
  return (
    <div className="flex flex-wrap max-w-[663px] items-center justify-between bg-gray-100">
      {data.map((product, i) => (
        <div className="w-[165px] relative h-[230px] bg-white" key={i}>
          <Image src={product.image_url} alt="product image" width={120} height={120} className="  mx-auto relative" />
          <div
            className="absolute top-2 right-2  rounded-lg border-[1px] cursor-pointer"
            onClick={(e) => {
              addBasket(product);
            }}
          >
            <Image src="/images/add-icon.svg" width={32} height={32} alt="add icon" className="shadow-lg" />
          </div>

          <h1 className="font-medium text-[15px] mx-auto w-fit text-brand-primary">₺{product.price}</h1>
          <h1 className="font-medium text-[15px] text-center mx-auto w-fit max-w-[149px]">{product.name}</h1>
          <h1 className=" text-[15px] text-center text-slate-400">{product.description}</h1>
        </div>
      ))}
    </div>
  );
}
