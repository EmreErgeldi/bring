import Image from "next/image";
import { categories } from "@prisma/client";
import { Box, Dialog } from "@mui/material";
import { useEffect, useState } from "react";

interface categoryProps {
  data: categories[];
  isAdmin: string;
  handleProduct: (product: object) => void;
}

export default function Category({ data, isAdmin, handleProduct }: categoryProps) {
  const flags = {
    US: "+1",
    GB: "+5",
    FR: "+70",
    DE: "+30",
    IT: "+11",
    TR: "+90",
  };

  const [admin, setAdmin] = useState("none");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [checked, setChecked] = useState<any[]>([]);

  useEffect(() => {
    setAdmin(isAdmin);
  }, [isAdmin]);

  const handleClose = () => {
    setOpen(false);
    setChecked([]);
  };
  const handleSubmit = () => {
    console.log(checked, value);
    handleProduct({ name: value, description, price, image_url: imageUrl, checked });
  };

  const handleValue = (value: string) => {
    setValue(value);
  };
  const handleDesc = (value: string) => {
    setDescription(value);
  };
  const handlePrice = (value: number) => {
    setPrice(value);
  };
  const handleImage = (value: string) => {
    setImageUrl(value);
  };

  const handleCheck = (id: number) => {
    if (checked.includes(id)) {
      checked.splice(checked.indexOf(id), 1);
    } else {
      checked.push(id);
    }
  };

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="font-semibold text-[15px] mb-2 pl-4 xl:w-[1232px] mx-auto">Categories</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-y-2 xl:w-[1232px] mx-auto text-slate-600">
          {data &&
            data.map((category, i) => (
              <a
                href={"/categories/" + (i + 1)}
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
          <Box sx={{ display: admin }}>
            <a
              className="flex group justify-center items-center rounded transition-colors hover:bg-purple-50 flex-col p-4 "
              onClick={() => {
                setOpen(true);
              }}
            >
              <Image
                src="/images/add-icon.svg"
                className="w-12 h-12 rounded-lg border border-gray-200 object-cover"
                alt="category image"
                width={48}
                height={48}
              />
              <span className="font-semibold transition-colors group-hover:text-purple-700 whitespace-nowrap block mt-2 text-[15px]">
                Add new Item
              </span>
            </a>
          </Box>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <div className="w-full bg-gray-50 sm:rounded-lg px-5 py-3 pb-5 sm:py-6">
          <h3 className="text-center mb-4 font-semibold text-brand-secondary">Login or Register</h3>
          <div className="flex flex-col gap-y-3">
            <div className="gap-x-3">
              <div className="grid grid-cols-4 ">
                {data.map((item, i) => {
                  return (
                    <div className="flex" key={i}>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        onChange={() => {
                          handleCheck(item.category_id);
                        }}
                      />
                      <span className="ml-2">{item.name}</span>
                    </div>
                  );
                })}
              </div>
              <input
                required
                className="h-full rounded px-4 py-2 hover:border-brand-primary focus:border-brand-primary transition-colors outline-none text-sm w-full border-2 border-gray-200 "
                placeholder="Product Name"
                onChange={(e) => {
                  handleValue(e.target.value);
                }}
              />

              <input
                required
                className="h-full rounded px-4 py-2 hover:border-brand-primary focus:border-brand-primary transition-colors outline-none text-sm w-full border-2 border-gray-200 "
                placeholder="Description"
                onChange={(e) => {
                  handleDesc(e.target.value);
                }}
              />
              <input
                required
                className="h-full rounded px-4 py-2 hover:border-brand-primary focus:border-brand-primary transition-colors outline-none text-sm w-full border-2 border-gray-200 "
                placeholder="Price"
                type="number"
                onChange={(e) => {
                  handlePrice(Number(e.target.value));
                }}
              />
              <input
                required
                className="h-full rounded px-4 py-2 hover:border-brand-primary focus:border-brand-primary transition-colors outline-none text-sm w-full border-2 border-gray-200 "
                placeholder="Image Url"
                onChange={(e) => {
                  handleImage(e.target.value);
                }}
              />
            </div>
            <button
              className="h-12 rounded-lg transition-colors bg-brand-yellow text-brand-primary text-sm font-semibold hover:bg-brand-primary hover:text-brand-yellow"
              onClick={handleSubmit}
            >
              Add new Product
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
