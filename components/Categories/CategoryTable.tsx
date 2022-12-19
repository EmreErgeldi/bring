import { products } from "@prisma/client";
import Image from "next/image";

interface productsProps {
  data: products[];
}

export default function CategoryTable({ data }: productsProps) {
  return (
    <div className="flex flex-wrap max-w-[663px] items-center justify-center">
      {data.map((product, i) => (
        <div className="w-[165px]">
          <Image
            src={product.image_url}
            alt="product image"
            width={120}
            height={120}
            className=" border-[1px] mx-auto"
          />
          <h1 className="font-medium text-[15px] mx-auto w-fit text-brand-primary">₺{product.price}</h1>
          <h1 className="font-medium text-[15px] text-center mx-auto w-fit max-w-[149px]">{product.name}</h1>
          <h1 className=" text-[15px] text-center text-slate-400">{product.description}</h1>
        </div>
      ))}
    </div>
  );
}
