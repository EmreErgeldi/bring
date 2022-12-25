import { useAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";
import { basketAtom } from "../../lib/atoms";

export default function Basket() {
  const [basket, setBasket] = useAtom(basketAtom);
  const [orderMessage, setOrderMessage] = useState<string | null>(null);

  const handleCheckout = async () => {
    setBasket([]);
    try {
      setOrderMessage("siparişiniz alındı.");
      const siparis = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(basket),
      });
      if (siparis.ok) {
        setOrderMessage((await siparis.json()).message);
      }
      setTimeout(() => {
        setOrderMessage(null);
      }, 3000);
    } catch (error) {
      setOrderMessage("tüh.");
    }
  };

  return (
    <div>
      <h1 className="font-medium my-2">Basket</h1>
      <div className=" border-[3px] border-yellow-300 rounded-sm">
        <div className="m-4 w-[250px] flex flex-col text-center text-[15px]">
          {basket.length < 1 && !orderMessage && (
            <div className="py-8">
              {" "}
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                alt="product image"
                width={86}
                height={108}
                className="mx-auto"
              />
              <span className="mt-8 text-brand-primary font-medium text-[16px] block">Your basket is empty</span>
              <span className="text-slate-400 mt-2">Add product(s) to your basket to place an order.</span>
            </div>
          )}

          {orderMessage && <span>{orderMessage}</span>}

          {basket.length > 0 &&
            basket.map((product, i) => (
              <div className="flex justify-between items-center" key={i}>
                <div key={i} className="flex items-center my-2 text-left">
                  <Image alt="" src={product.image_url} height="64" width={64} />
                  <span className="ml-2">{product.name}</span>
                </div>
                <span className="text-brand-primary font-semibold">₺{product.price}</span>
              </div>
            ))}
          {basket.length > 0 && (
            <button
              className="bg-brand-primary rounded-md text-white font-medium text-[16px] py-2 mt-4"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
