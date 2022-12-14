import { categories } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface categoryProps {
  data: categories[];
}

export default function CategoryNavbar({ data }: categoryProps) {
  return (
    <div className="items-start flex flex-col mt-4">
      <h3 className="font-medium text-[15px]">Categories</h3>
      <div className="bg-white p-2 mt-2">
        {data.map((category, i) => (
          <Link href={"/categories/" + (i + 1)} key={i}>
            <div className="flex items-center p-1 cursor-pointer rounded-t-md hover:bg-slate-100">
              <Image src={category.image_url} alt="category image" width={32} height={32} className=" border-[1px]" />
              <span className="pl-3 font-medium text-[15px]">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
