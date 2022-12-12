import Image from "next/image";
import { categories } from "@prisma/client";

interface categoryProps {
  data: categories[];
}

export default function Category({ data }: categoryProps) {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="font-semibold text-[15px] mb-2 pl-4 xl:w-[1232px] mx-auto">Categories</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-y-2 xl:w-[1232px] mx-auto text-slate-600">
          {data &&
            data.map((category, i) => (
              <a
                href="#"
                key={i}
                className="flex group justify-center items-center rounded transition-colors hover:bg-purple-50 flex-col p-4"
              >
                <Image
                  src={category.image_url}
                  className="w-12 h-12 rounded-lg border border-gray-200 object-cover"
                  alt="category image"
                  width={48}
                  height={48}
                />
                <span className="font-semibold transition-colors group-hover:text-purple-700 whitespace-nowrap block mt-2 text-[15px]">
                  {category.name}
                </span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
