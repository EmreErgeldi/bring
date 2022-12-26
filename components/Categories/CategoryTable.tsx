import { Dialog } from "@mui/material";
import { categories, products } from "@prisma/client";
import { useAtom } from "jotai";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import { basketAtom, isAdminAtom, isEditAtom } from "../../lib/atoms";

interface productsProps {
  data: products[];
  categories: categories[];
}

export default function CategoryTable({ data, categories }: productsProps) {
  const [basket, setBasket] = useAtom(basketAtom);
  const [isAdmin] = useAtom(isAdminAtom);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({} as products);
  const [isEdit, setIsEdit] = useAtom(isEditAtom);
  const [checked, setChecked] = useState<any[]>([]);
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
  };
  const handleEdit = (product: products) => {
    setIsEdit(true);
    setProduct(product);
    console.log(product);
  };

  const handleCheck = (id: number) => {
    if (checked.includes(id)) {
      checked.splice(checked.indexOf(id), 1);
    } else {
      checked.push(id);
    }
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

  const handleSubmit = () => {
    fetch("/api/products", {
      method: "PUT",
      body: JSON.stringify({
        name: value,
        description,
        price,
        image_url: imageUrl,
        product_id: product.product_id,
      }),
    });
  };

  useEffect(() => {
    if (isEdit) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isEdit]);

  const addBasket = (product: products) => {
    !basket.find((item) => item.product_id === product.product_id) && setBasket([...basket, product]);
  };

  return (
    <div className="flex flex-wrap max-w-[663px] items-center justify-between bg-gray-100">
      {data.map((product, i) => (
        <div className="w-[165px] relative h-[230px] bg-white" key={i}>
          <Image src={product.image_url} alt="product image" width={120} height={120} className="  mx-auto relative" />
          <div
            className="absolute top-2 left-2  rounded-lg border-[1px] cursor-pointer"
            onClick={(e) => {
              handleEdit(product);
            }}
            style={{ display: isAdmin ? "block" : "none" }}
          >
            <Image src="/images/edit-icon.svg" width={32} height={32} alt="add icon" className="shadow-lg" />
          </div>
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
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <div className="w-full bg-gray-50 sm:rounded-lg px-5 py-3 pb-5 sm:py-6">
          <h3 className="text-center mb-4 font-semibold text-brand-secondary">Update Product</h3>
          <div className="flex flex-col gap-y-3">
            <div className="gap-x-3">
              <div className="grid grid-cols-4 ">
                {categories.map((item, i) => {
                  return (
                    <div className="flex" key={i}>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        onChange={() => {
                          handleCheck;
                        }}
                      />
                      <span className="ml-2">{item.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="m-4">
                <span>{product.name}</span>
                <input
                  required
                  className="h-full rounded px-4 py-2 hover:border-brand-primary focus:border-brand-primary transition-colors outline-none text-sm w-full border-2 border-gray-200 "
                  placeholder={product.name}
                  onChange={(e) => {
                    handleValue(e.target.value);
                  }}
                />
              </div>

              <div className="m-4">
                <span>{product.description}</span>
                <input
                  required
                  className="h-full rounded px-4 py-2 hover:border-brand-primary focus:border-brand-primary transition-colors outline-none text-sm w-full border-2 border-gray-200 "
                  placeholder={product.description}
                  onChange={(e) => {
                    handleDesc(e.target.value);
                  }}
                />
              </div>

              <div className="m-4">
                <span>{product.price}</span>
                <input
                  required
                  className="h-full rounded px-4 py-2 hover:border-brand-primary focus:border-brand-primary transition-colors outline-none text-sm w-full border-2 border-gray-200 "
                  placeholder={String(product.price)}
                  type="number"
                  onChange={(e) => {
                    handlePrice(Number(e.target.value));
                  }}
                />
              </div>

              <div className="m-4">
                <span>{product.image_url}</span>
                <input
                  required
                  className="h-full rounded px-4 py-2 hover:border-brand-primary focus:border-brand-primary transition-colors outline-none text-sm w-full border-2 border-gray-200 "
                  placeholder={product.image_url}
                  onChange={(e) => {
                    handleImage(e.target.value);
                  }}
                />
              </div>
            </div>
            <button
              className="h-12 rounded-lg transition-colors bg-brand-yellow text-brand-primary text-sm font-semibold hover:bg-brand-primary hover:text-brand-yellow"
              onClick={handleSubmit}
            >
              Update Product
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
